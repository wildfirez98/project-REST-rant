const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: { type: String, default: 'http://placekitten.com/350/350' },
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: { type: Number,
    min: [1673,'Surely not that old!?'],
    max: [new Date().getFullYear(), 'Hey, this year is in the future!']
  }
})

placeSchema.methods.showEstablished = function() {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}

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