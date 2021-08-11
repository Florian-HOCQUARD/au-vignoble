// import { getTest, postTest, addRoom, getRooms, getRoom, updateRoom, deleteRoom } from '../controllers/productControllers.js'
const catchErrors = require('./../helpers.js')
const productController = require('../controllers/productControllers')
const express = require('express')

const router = express.Router()

const { getTest, postTest, addRoom, getRooms, getRoom, updateRoom, deleteRoom } = productController

router.get('/', (req, res) => {
  res.send('Hello')
})

router.get('/test', getTest)

router.post('/test', postTest)

router.post('/room', catchErrors(addRoom))

router.get('/room/:id', catchErrors(getRoom))

router.patch('/room/:id', catchErrors(updateRoom))

router.delete('/room/:id', catchErrors(deleteRoom))

router.get('/rooms', catchErrors(getRooms))

module.exports = router
