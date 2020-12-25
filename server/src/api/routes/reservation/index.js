import express from 'express';
import * as reservationCtrl from './reservation.ctrl';

const reservation = express.Router();

// api/reservation
reservation.get('/list', reservationCtrl.list);

reservation.post('/getMemberBookings', reservationCtrl.getMemberBookings);
reservation.post('/getNonMemberBookings', reservationCtrl.getNonMemberBookings);
reservation.post('/booking', reservationCtrl.booking);

export default reservation;
