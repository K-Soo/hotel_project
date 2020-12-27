const fs = require('fs').promises;
const path = require('path');
import { tata } from './data';
import Booking from '../../../models/booking';
import mongoose from 'mongoose';

// router : GET api/reservation/list
// desc : Import all lists
// access : public
export const list = async (req, res) => {
  try {
    res.json(tata);
  } catch (error) {
    console.error('/list error', error);
  }
};

// router : POST api/reservation/booking
// desc : Make a reservation.
// access : public
export const booking = async (req, res) => {
  try {
    const booking = new Booking(req.body);
    console.log('booking: ', booking);
    await booking.save();
    res.json(booking);
  } catch (error) {
    console.error('/booking error', error);
  }
};

// router : POST api/reservation/getBookings
// desc : Confirm my reservation
// access : User

export const getMemberBookings = async (req, res) => {
  const { _id } = req.body;
  try {
    const exist = await Booking.find({ 'user._id': _id });
    if (!exist.length) return res.send('예약내역이 없습니다.');
    res.json(exist);
  } catch (error) {
    res.send('잘못된 유저정보');
    console.error('/booking error', error);
  }
};

// router : POST api/reservation/getNonMemberBookings
// desc : Confirm my reservation
// access : public
export const getNonMemberBookings = async (req, res) => {
  console.log(req.body);
  const { buyerName, buyerPhon, buyerEmail } = req.body;
  try {
    const exist = await Booking.findByBookings(buyerName, buyerPhon, buyerEmail);
    if (!exist.length) return res.status(401).send('찾으시는 예약내역이 없습니다.');
    return res.send(exist);
  } catch (error) {
    res.send('잘못된 입력값.');
    console.error('/booking error', error);
  }
};
