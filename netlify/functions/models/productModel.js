const mongoose = require('mongoose')

const RoomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
    lowercase: true
  },
  maxPersons: {
    type: Number,
    default: 1,
    validate: value => {
      if (value <= 0) {
        throw new Error('La chambre doit pouvoir accueillir au moins une personne.')
      }
    }
  }
})

const Room = mongoose.model('Room', RoomSchema)

module.exports = Room
