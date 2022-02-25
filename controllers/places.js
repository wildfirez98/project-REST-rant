const router = require('express').Router(); //Instantiate router contoller thru express 

// GET /places
router.get('/', (req,res) => { // First route - GET route that will eventually show a list of all places
    let places = [{
        name: 'H-Thai-ML',
        city: 'Seattle',
        state: 'WA',
        cuisines: 'Thai, Pan-Asian',
        pic: 'http://placekitten.com/250/250'
      }, {
        name: 'Coding Cat Cafe',
        city: 'Phoenix',
        state: 'AZ',
        cuisines: 'Coffee, Bakery',
        pic: 'http://placekitten.com/250/250'
      }]
    res.render('places/index', {places})
});

module.exports = router