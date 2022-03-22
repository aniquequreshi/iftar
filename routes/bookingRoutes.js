const express = require('express');
const bookingController = require('../controllers/bookingController');

const router = express.Router();


router.get('/create', bookingController.booking_create_get);
router.post('/create', bookingController.booking_create_post);
router.get('/:id', bookingController.booking_details);
router.get('/', bookingController.booking_index);
router.post('/', bookingController.booking_update_post);
// router.delete('/:id', bookingController.booking_delete);

module.exports = router;