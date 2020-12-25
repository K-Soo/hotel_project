import mongoose from 'mongoose';
import moment from 'moment';
import 'moment-timezone';

const { Schema } = mongoose;
const {
  Types: { ObjectId },
} = Schema;

const BookingSchema = new mongoose.Schema({
  detail: {
    adult: {
      type: String,
    },
    children: {
      type: String,
    },
    stay: {
      type: String,
    },
    checkIn: {
      type: String,
    },
    checkOut: {
      type: String,
    },
    roomQuantity: {
      type: String,
    },
  },
  roomType: {
    name: {
      type: String,
    },
    bedType: {
      type: String,
    },
    roomImage: {
      type: String,
    },
    price: {
      type: String,
    },
    TotalPrice: {
      type: String,
    },
  },
  booking: {
    buyer: {
      buyerName: {
        type: String,
        Index: true,
      },
      buyerPhon: {
        type: String,
        Index: true,
      },
      buyerEmail: {
        type: String,
        Index: true,
      },
    },
    guest: {
      guestName: {
        type: String,
      },
      guestPhon: {
        type: String,
      },
      guestEmail: {
        type: String,
      },
    },
    desc: {
      requested: String,
    },
  },
  bookingID: Number,
  user: {
    _id: {
      type: ObjectId,
      Index: true,
      ref: 'User',
    },
    userId: {
      type: String,
    },
  },
  TotalPrice: {
    type: String,
  },
  register_date: {
    type: String,
    default: moment().tz('Asia/Seoul').format('YYYY-MM-DD'),
  },
});

BookingSchema.statics.findByBookings = function (buyerName, buyerPhon, buyerEmail) {
  return this.find({
    'booking.buyer.buyerName': buyerName,
    'booking.buyer.buyerPhon': buyerPhon,
    'booking.buyer.buyerEmail': buyerEmail,
  });
};

const Booking = mongoose.model('booking', BookingSchema);
export default Booking;
