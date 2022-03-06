const router = require('express').Router()
const db = require('../models')

// INDEX Route
router.get('/', (req, res) => {
  db.Place.find()
  .then((places) => {
    res.render('places/index', { places })
    //console.log("Welcome to the Index Page")
  })
  .catch(err => {
    console.log(err)
    res.render('error404')
  })
})

// POST Route for the Index page
router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
    res.redirect('/places')
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

// GET - /places/new (Endpoint)
router.get('/new', (req, res) => {
  res.render('/places/new')
})

// GET - /places/:id (Endpoint)
router.get('/:id', (req, res) => {
  db.Place.findById(req.params.id)
  .then(place => {
    res.render('places/show', { place })
  })
  .catch(err => {
    console.log('err', err)
    res.render('error404')
  })
})

// PUT - /places/:id (Update a particular place)
router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})

// DELETE - /places:id (Delete a particular place)
router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})

// GET - /places/:id/edit (Edit form endpoint)
router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router

