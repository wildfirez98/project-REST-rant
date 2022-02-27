const router = require('express').Router(); //Instantiate router contoller thru express 

// GET - /places endpoint
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

// POST - /places - Create new place endpoint
router.post('/', (req, res) => {
  res.send('POST /places')
})

// GET - /places/new endpoint
router.get('/new', (req, res) => {
  console.log(req.body)
  res.render('places/new')
})


module.exports = router