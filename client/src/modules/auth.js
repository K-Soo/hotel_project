import { createAction, handleActions } from 'redux-actions';
import { createRequestActionTypes, createRequestSaga } from 'lib/createRequest';
import produce from 'immer';
import * as authAPI from 'lib/api/auth';
import { takeLatest } from 'redux-saga/effects';

//액션 타입
const INITIALIZE_FORM = 'auth/INITIALIZE_FORM';
const CHANGE_FIELD = 'auth/CHANGE_FIELD';
const [REGISTER, REGISTER_SUCCESS, REGISTER_FAILURE] = createRequestActionTypes('auth/REGISTER');
const [LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE] = createRequestActionTypes('auth/LOGIN');

// 액션 생성
export const changeField = createAction(CHANGE_FIELD, ({ form, name, value }) => ({
  form,
  name,
  value,
}));
export const login = createAction(LOGIN, ({ userId, password }) => ({
  userId,
  password,
}));
export const register = createAction(REGISTER, ({ userId, password, name, email, phone }) => ({
  userId,
  password,
  name,
  email,
  phone,
}));

export const initializeForm = createAction(INITIALIZE_FORM, form => form);

//사가생성
const loginSaga = createRequestSaga(LOGIN, authAPI.login);
const registerSaga = createRequestSaga(REGISTER, authAPI.register);
export function* authSaga() {
  yield takeLatest(LOGIN, loginSaga);
  yield takeLatest(REGISTER, registerSaga);
}

//초기화
const initialState = {
  register: {
    userId: '',
    password: '',
    passwordConfirm: '',
    email: '',
    name: '',
    phone: '',
  },
  login: {
    userId: '',
    password: '',
  },
  auth: null,
  authError: null,
  type: '',
};

const auth = handleActions(
  {
    [CHANGE_FIELD]: (state, { payload: { form, name, value } }) =>
      produce(state, draft => {
        draft[form][name] = value;
      }),

    //초기화
    [INITIALIZE_FORM]: (state, { payload: form }) => ({
      ...state,
      [form]: initialState[form],
      authError: null,
    }),
    //회원가입 성공
    [REGISTER_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    //회원가입 실패
    [REGISTER_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
    //login 성공
    [LOGIN_SUCCESS]: (state, { payload: auth }) => ({
      ...state,
      authError: null,
      auth,
    }),
    //login 실패 // payload: e.response
    [LOGIN_FAILURE]: (state, { payload: error }) => ({
      ...state,
      authError: error,
    }),
  },
  initialState
);
export default auth;
