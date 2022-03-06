const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: String,
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: Number
})

module.exports = mongoose.model('Place', placeSchema)

//Original module data for restaurants - can delete eventually
//module.exports = [{
//    name: 'J-Gilberts',
//    city: 'Overland Park',
//    state: 'KS',
//    cuisines: 'Steak, Seafood',
//    pic: 'images/steak.jpg'
//  }, {
//    name: 'Italian Delight',
//    city: 'Kansas City',
//   state: 'KS',
//    cuisines: 'Pizza, Pasta',
//    pic: 'images/italian.jpg'
//  }]