const router = require('express').Router(); //Instantiate router contoller thru express 

router.get('/', (req,res) => { // First route - GET route that will eventually show a list of all places
    res.send('GET /places')
});

module.exports = router