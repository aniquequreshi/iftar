const express = require('express')
const mongoose = require('mongoose');
const bookingRoutes = require('./routes/bookingRoutes');

const app = express()
const PORT = 3001

// connect to mongodb & listen for requests
const dbURI = "mongodb+srv://anique:Test1234@clusteriftar.7le4a.mongodb.net/Iftar?retryWrites=true&w=majority"
//const dbURI = "mongodb+srv://netninja:test1234@net-ninja-tuts-del96.mongodb.net/node-tuts";

mongoose.connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(result => app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}`)
  }
  ))
  .catch(err => console.log(err));

// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// routes
// app.get('/', (req, res) => {
//     res.send('Anique!')
//   })

  app.get('/', (req, res) => {
    res.redirect('/bookings');
  });
  
//   app.get('/about', (req, res) => {
//     res.render('about', { title: 'About' });
//   });
  
  // blog routes
  app.use('/bookings', bookingRoutes);
  
  // 404 page
//   app.use((req, res) => {
//     res.status(404).render('404', { title: '404' });
//   });
  