const Booking = require('../models/booking');

const booking_index = (req, res) => {
  console.log("In Index");
  // Booking.find({ dateAvailable: true }).sort({ sortKey: 1 })
  Booking.find().sort({ sortKey: 1 })
    .then(result => {
      res.render('index', { bookings: result, title: 'All bookings' });
    })
    .catch(err => {
      console.log(err);
    });
}

const booking_details = (req, res) => {
  console.log("In Details");
  const id = req.params.id;
  Booking.findById(id)
    .then(result => {
      res.render('details', { booking: result, title: 'Booking Details' });
    })
    .catch(err => {
      console.log(err);
     // res.render('404', { title: 'Booking not found' });
    });
}



const booking_create_get = (req, res) => {
  res.render('create', { title: 'Create a new booking' });
}

const booking_create_post = (req, res) => {
  Date.prototype.addDays = function(days) {
    var date = new Date(this.valueOf());
    date.setDate(date.getDate() + days);
    return date;
  }
  const month = req.body.month - 1  // months are zero based
  const day = req.body.day
  const year = req.body.year
  const startDate = new Date(year,month,day)
  const password = req.body.password;
  if (password == 99)  {
    for (let i=0; i<=30; i++) {  // create 31 days, not 30
      currentDate = (startDate.addDays(i)).toDateString()
      const booking = new Booking({name:" ", phone:" ", bookingDate: currentDate, bringFood:" ", dateAvailable: true, dateDisplay:true, sortKey:i})
      booking.save()
    }
    res.redirect('/bookings');
  }
  else {
    res.redirect('/bookings');
  }
}
  // .then(result => {
  //     res.redirect('/bookings');
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   });
  

// Anique
const booking_update_post = (req, res) => {
  console.log("In Update");
  // const booking = new Booking(req.body);
  //const id = "6236bbe877d4148980ec5358";
  const id = req.body.id
  const name = req.body.name
  const phone = req.body.phone
  const bringFood = req.body.bringFood
  

  Booking.findByIdAndUpdate(id, { $set:{name: name, phone:phone, bringFood:bringFood, dateAvailable:false, dateDisplay:false }},
    function (err, docs) {
      if (err){
        console.log(err)
      }
      else{
         console.log("Updated User : ", docs);
         res.redirect('/');
    }
  })
}

    // .then(result => {
    //   res.redirect('/');
    // })
    // .catch(err => {
    //   console.log(err);
    // });


// Updating name field of this user_id to name='Gourav'
// var user_id = '5eb985d440bd2155e4d788e2';
// User.findByIdAndUpdate(user_id, { name: 'Gourav' },
//                             function (err, docs) {
//     if (err){
//         console.log(err)
//     }
//     else{
//         console.log("Updated User : ", docs);
//     }
// });


// const booking_delete = (req, res) => {
//   const id = req.params.id;
//   Blog.findByIdAndDelete(id)
//     .then(result => {
//       res.json({ redirect: '/bookings' });
//     })
//     .catch(err => {
//       console.log(err);
//     });
// }


module.exports = {
  booking_index, 
  booking_details, 
  booking_update_post,
  booking_create_get, 
  booking_create_post
  // booking_delete
}