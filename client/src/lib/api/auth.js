import client from './client';

// 로그인
export const login = ({ userId, password }) => client.post('/api/auth/login', { userId, password });
// 회원가입
export const register = ({ userId, password, email, phone, name }) =>
  client.post('/api/auth/register', { userId, password, email, phone, name });

// 로그인 상태 확인
export const check = () => client.post('/api/auth/check');
//로그아웃
export const logout = () => client.post('/api/auth/logout');
// 예약
export const reserve = ({ detail, roomType, booking, user, bookingID, TotalPrice, newPrice }) =>
  client.post('/api/reservation/booking', {
    detail,
    roomType,
    booking,
    user,
    bookingID,
    TotalPrice,
    newPrice,
  });

export const checkUserReserve = ({ _id }) =>
  client.post('/api/reservation/getMemberBookings', { _id });

export const checkNonMemberReserve = ({ buyerName, buyerPhon, buyerEmail }) =>
  client.post('/api/reservation/getNonMemberBookings', { buyerName, buyerPhon, buyerEmail });
