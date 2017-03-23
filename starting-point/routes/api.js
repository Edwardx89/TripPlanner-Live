const express = require('express');
const router = express.Router();

const Hotel = require('../models/hotel');
const Restaurant = require('../models/restaurant');
const Activity = require('../models/activity');
const Place = require('../models/place');
const Day = require('../models/days');


router.get('/hotels', function (req, res, next) {
  Hotel.findAll({
    include: [Place]
  })
    .then(function (hotels) {
      res.json(hotels)
    })
    .catch(next);
});

router.get('/restaurants', function (req, res, next) {
  Restaurant.findAll({
    include: [Place]
  })
    .then(function (restaurants) {
      res.json(restaurants)
    })
    .catch(next);
});

router.get('/activities', function (req, res, next) {
  Activity.findAll({
    include: [Place]
  })
    .then(function (activities) {
      res.json(activities)
    })
    .catch(next);
});

router.get('/days', function (req, res, next) {
 Day.findAll().then(function(day){
   res.json(day)
 })
 .catch(next);
});

router.post('/days', function (req, res, next) {
  console.log(req.body);
  Day.create(req.body)
    .then((day) => {
      console.log(day)
    })
    .catch(next);
  res.sendStatus(200)
});

router.get('/days/:num', function (req, res, next) {


});


router.put('/days/:num', function (req, res, next) {


});

module.exports = router;
