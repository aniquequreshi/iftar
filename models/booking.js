const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  bringFood: {
    type: String,
    required: true
  },
  bookingDate: {
    type: String,
    required: true
  },
  dateAvailable: {
    type: Boolean,
    required: true
  },
  dateDisplay:  {
    type: Boolean,
    required: true
  },
  sortKey: {
    type: Number,
    required: true
  },
}, { timestamps: true });

const Booking = mongoose.model('Booking', bookingSchema);
module.exports = Booking;