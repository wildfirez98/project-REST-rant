const router = require('express').Router(); //Instantiate router contoller thru express 
const places = require('../models/places.js')

// GET - /places endpoint
router.get('/', (req,res) => { // First route - GET route that will eventually show a list of all places
    res.render('places/index', {places})
});

// POST - /places - Create new place endpoint
router.post('/', (req, res) => {
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'http://placekitten.com/400/400'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})

// GET - /places/new endpoint
router.get('/new', (req, res) => {
  res.render('places/new')
})


module.exports = router