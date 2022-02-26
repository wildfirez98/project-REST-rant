// Modules and Globals
require('dotenv').config(); // Initiate .env file for environment variables
const express = require('express'); // Instantiate express
const app = express(); // Assign express constructor to a variable

// Express Settings
app.set('view engine', 'jsx') // Defines the JSX view engine
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use('/places', require('./controllers/places')); // Set all routes in the places controller relative to /places. Means that /places will be added in front of all endpoints we define in the controller! 

// Controllers & Routes

// GET Endpoint for '/' or homepage
app.get('/', (req, res) => {
    res.render('home')
});

// GET Endpoint for '/places'
app.get('/places', (req, res) => {
    res.render('index')
});

// GET Wildcard route - MUST be at end of the list of endpoints so it doesn't override other endpoints
app.get('*', (req, res) => {
    res.status(404).render('error404') // Insert <h1> tag with 404 text if endpoint is not valid and display on page
});

// Keep server socket open with listening to a PORT from the .env file and log to console "I'm awake" so we know the server is open
app.listen(process.env.PORT, console.log("I'm awake!"));

