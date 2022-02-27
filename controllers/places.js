const router = require('express').Router(); //Instantiate router contoller thru express 

// GET /places ROUTE
router.get('/', (req,res) => { // First route - GET route that will eventually show a list of all places
    let places = [{
        name: 'J-Gilberts',
        city: 'Overland Park',
        state: 'KS',
        cuisines: 'Steak, Seafood',
        pic: 'images/steak.jpg'
      }, {
        name: 'Italian Delight',
        city: 'Kansas City',
        state: 'KS',
        cuisines: 'Pizza, Pasta',
        pic: 'images/italian.jpg'
      }]
    res.render('places/index', {places})
});

// GET /places/new ROUTE
router.get('/new', (req, res) => {
  res.render('places/new')
})

module.exports = router