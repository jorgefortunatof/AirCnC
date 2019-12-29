const express = require('express')
const multer = require('multer')
const uploadConfig = require('./config/upload')

const upload = multer(uploadConfig)
const routes = express.Router()

const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')
const DashboardController = require('./controllers/DashboardController')
const BookingController = require('./controllers/BookingController')

routes.post('/users', SessionController.store)

routes.get ('/spots', SpotController.index)
routes.post('/spots', upload.single('thumbnail') , SpotController.store)
routes.post('/spots/:spot_id/booking', BookingController.store)

routes.get('/dashboard/spots', DashboardController.show)

module.exports = routes
