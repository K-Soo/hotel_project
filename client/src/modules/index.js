import { combineReducers } from 'redux';
import { all } from 'redux-saga/effects';
import auth, { authSaga } from 'modules/auth';
import user, { userSaga } from 'modules/user';
import reservation, { reservationSaga } from 'modules/reservation';
import checkReserve, { checkUserReserveSaga } from 'modules/checkReserve';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: 'root',
  storage: storage,
  whitelist: ['reservation', 'checkReserve'],
};

const rootReducer = combineReducers({ auth, reservation, user, checkReserve });

export function* rootSaga() {
  yield all([authSaga(), userSaga(), reservationSaga(), checkUserReserveSaga()]);
}

export default persistReducer(persistConfig, rootReducer);
