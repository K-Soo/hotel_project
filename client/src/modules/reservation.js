import { createAction, handleActions } from 'redux-actions';
import { createRequestActionTypes, createRequestSaga } from 'lib/createRequest';
import { takeLatest } from 'redux-saga/effects';
import * as authAPI from 'lib/api/auth';
import produce from 'immer';

const INCREASE = 'reservation/INCREASE';
const DECREASE = 'reservation/DECREASE';
const CHECK_IN = 'reservation/CHECK_IN';
const CHECK_OUT = 'reservation/CHECK_OUT';
const STAY = 'reservation/STAY';
const ROOM_TYPE = 'reservation/ROOM_TYPE';
const CHANGE_FIELD = 'reservation/CHANGE_FIELD';
const INITIALIZE_FORM = 'reservation/INITIALIZE_FORM';
const INITIALIZE_BOOKING = 'reservation/INITIALIZE_BOOKING';

const [RESERVE, RESERVE_SUCCESS, RESERVE_FAILURE] = createRequestActionTypes('reservation/RESERVE');

export const reserve = createAction(
  RESERVE,
  ({ detail, roomType, booking, user, bookingID, TotalPrice }) => ({
    detail,
    roomType,
    booking,
    user,
    bookingID,
    TotalPrice,
  })
);
export const initializeForm = createAction(INITIALIZE_FORM, form => form);
export const initializeBooking = createAction(INITIALIZE_BOOKING, booking => booking);
export const increase = createAction(INCREASE, name => name);
export const decrease = createAction(DECREASE, name => name);
export const checkIn = createAction(CHECK_IN, checkIn => checkIn);
export const checkout = createAction(CHECK_OUT, checkOut => checkOut);
export const stay = createAction(STAY, stay => stay);
export const roomType = createAction(ROOM_TYPE, room => room);
export const changeField = createAction(CHANGE_FIELD, ({ form, name, value }) => ({
  form,
  name,
  value,
}));
//사가생성
const reserveSaga = createRequestSaga(RESERVE, authAPI.reserve);

export function* reservationSaga() {
  yield takeLatest(RESERVE, reserveSaga);
}

const initialState = {
  detail: {
    roomQuantity: 1,
    adult: 1,
    children: 0,
    checkIn: new Date().toLocaleDateString(),
    checkOut: new Date(new Date().setDate(new Date().getDate() + 1)).toLocaleDateString(),
    stay: 1,
  },
  roomType: null,
  booking: {
    buyer: {
      buyerName: '',
      buyerPhon: '',
      buyerEmail: '',
    },
    guest: {
      guestName: '',
      guestPhon: '',
      guestEmail: '',
    },
    desc: {
      requested: '',
    },
  },
  book: null,
  bookError: null,
};

const reservation = handleActions(
  {
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),
    [INITIALIZE_BOOKING]: (state, { payload: booking }) => ({
      ...state,
      booking: { ...state.booking, [booking]: initialState.booking[booking] },
    }),
    [CHANGE_FIELD]: (state, { payload: { form, name, value } }) =>
      produce(state, draft => {
        draft['booking'][form][name] = value;
      }),
    [INCREASE]: (state, { payload: name }) => ({
      ...state,
      detail: { ...state.detail, [name]: state.detail[name] + 1 },
    }),
    [DECREASE]: (state, { payload: name }) => ({
      ...state,
      detail: { ...state.detail, [name]: state.detail[name] - 1 },
    }),
    [CHECK_IN]: (state, { payload: checkIn }) => ({
      ...state,
      detail: { ...state.detail, checkIn },
    }),
    [CHECK_OUT]: (state, { payload: checkOut }) => ({
      ...state,
      detail: { ...state.detail, checkOut },
    }),
    [STAY]: (state, { payload: stay }) => ({
      ...state,
      detail: { ...state.detail, stay },
    }),
    [ROOM_TYPE]: (state, { payload: roomType }) => ({
      ...state,
      roomType,
    }),
    [RESERVE_SUCCESS]: (state, { payload: book }) => ({
      ...state,
      book,
      bookError: null,
    }),
    //RESERVE 실패 // payload: e.response
    [RESERVE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      bookError: error,
    }),
  },
  initialState
);
export default reservation;
