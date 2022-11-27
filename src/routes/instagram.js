const instagramController = require('../controllers/instagramController')
const express = require('express')
const route = express.Router()

route.get('/', instagramController.get)
route.post('/', instagramController.post)

module.exports = route