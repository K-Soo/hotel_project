import { createAction, handleActions } from 'redux-actions';
import { createRequestActionTypes, createRequestSaga } from 'lib/createRequest';
import { takeLatest } from 'redux-saga/effects';
import * as authAPI from 'lib/api/auth';
import produce from 'immer';

const CHANGE_FIELD = 'checkReserve/CHANGE_FIELD';
const INITIALIZE_FORM = 'checkReserve/INITIALIZE_FORM';

// user actions
const [
  CHECK_USER_RESERVE,
  CHECK_USER_RESERVE_SUCCESS,
  CHECK_USER_RESERVE_FAILURE,
] = createRequestActionTypes('checkReserve/CHECK_USER_RESERVE');

export const userReserve = createAction(CHECK_USER_RESERVE, ({ _id }) => ({
  _id,
}));

// non-member-user actions
const [
  CHECK_NONMEMBER_RESERVE,
  CHECK_NONMEMBER_RESERVE_SUCCESS,
  CHECK_NONMEMBER__RESERVE_FAILURE,
] = createRequestActionTypes('checkReserve/CHECK_NONMEMBER__RESERVE');

export const nonMemReserve = createAction(
  CHECK_NONMEMBER_RESERVE,
  ({ buyerName, buyerPhon, buyerEmail }) => ({
    buyerName,
    buyerPhon,
    buyerEmail,
  })
);

// create Saga
const userReserveSaga = createRequestSaga(CHECK_USER_RESERVE, authAPI.checkUserReserve);
const nonMemberReserveSaga = createRequestSaga(
  CHECK_NONMEMBER_RESERVE,
  authAPI.checkNonMemberReserve
);
export function* checkUserReserveSaga() {
  yield takeLatest(CHECK_USER_RESERVE, userReserveSaga);
  yield takeLatest(CHECK_NONMEMBER_RESERVE, nonMemberReserveSaga);
}
// init form
export const initializeCheckForm = createAction(INITIALIZE_FORM, form => form);
// change input filed
export const changeField = createAction(CHANGE_FIELD, ({ form, name, value }) => ({
  form,
  name,
  value,
}));

const initialState = {
  nonMember: {
    buyerName: '',
    buyerPhon: '',
    buyerEmail: '',
  },
  userReserve: null,
  userReserveError: null,
  nonMember_reserve: null,
  nonMember_reserveError: null,
};

const checkReserve = handleActions(
  {
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
    }),

    [CHANGE_FIELD]: (state, { payload: { form, name, value } }) =>
      produce(state, draft => {
        draft[form][name] = value;
      }),
    [CHECK_USER_RESERVE_SUCCESS]: (state, { payload: userReserve }) => ({
      ...state,
      userReserve,
      userReserveError: null,
    }),
    [CHECK_USER_RESERVE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      userReserveError: error,
    }),
    [CHECK_NONMEMBER_RESERVE_SUCCESS]: (state, { payload: nonMember_reserve }) => ({
      ...state,
      nonMember_reserve,
      nonMember_reserveError: null,
    }),
    [CHECK_NONMEMBER__RESERVE_FAILURE]: (state, { payload: error }) => ({
      ...state,
      nonMember_reserveError: error,
    }),
  },
  initialState
);
export default checkReserve;
