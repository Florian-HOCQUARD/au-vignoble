const RoomModel = require('../models/productModel.js')

const productController = {}

const getTest = (req, res) => {
  res.send({ name: 'Flo' })
}
// module.exports = getTest
productController.getTest = getTest

const postTest = (req, res) => {
  res.send(req.body)
}
// module.exports = postTest
productController.postTest = postTest

const addRoom = async (req, res) => {
  const room = new RoomModel(req.body)
  await room.save()
  res.send(room)
}
// module.exports = addRoom
productController.addRoom = addRoom

// Read All
const getRooms = async (req, res) => {
  const rooms = await RoomModel.find({})
  res.send(rooms)
}
// module.exports = getRooms
productController.getRooms = getRooms

// Read One
const getRoom = async (req, res) => {
  const room = await RoomModel.find({ _id: req.params.id })
  res.send(room)
}
// module.exports = getRoom
productController.getRoom = getRoom

// Update
const updateRoom = async (req, res) => {
  const room = await RoomModel.findByIdAndUpdate(req.params.id, req.body)
  await room.save()
  res.send(room)
}
// module.exports = updateRoom
productController.updateRoom = updateRoom

// Delete
const deleteRoom = async (req, res) => {
  const room = await RoomModel.findByIdAndDelete(req.params.id)
  if (!room) {
    res.status(404).send('Aucune chambre trouvée.')
  }
  res.status(200).send()
}
// module.exports = deleteRoom
productController.deleteRoom = deleteRoom

module.exports = productController
