const express = require('express')
const multer = require('multer')
const uploadConfig = require('./config/upload')

const upload = multer(uploadConfig)
const routes = express.Router()

const SessionController = require('./controllers/SessionController')
const SpotController = require('./controllers/SpotController')
const DashboardController = require('./controllers/DashboardController')
const BookingController = require('./controllers/BookingController')
<<<<<<< HEAD
const RejectionController = require('./controllers/RejectionController')
const ApprovalController = require('./controllers/ApprovalController')
=======
>>>>>>> 70bea99a1f20a3d1ef20783848319a41cf3bfa07

routes.post('/users', SessionController.store)

routes.get ('/spots', SpotController.index)
routes.post('/spots', upload.single('thumbnail') , SpotController.store)
routes.post('/spots/:spot_id/booking', BookingController.store)

routes.get('/dashboard/spots', DashboardController.show)

<<<<<<< HEAD
routes.post('/bookings/:booking_id/approvals', ApprovalController.store)
routes.post('/bookings/:booking_id/rejections', RejectionController.store)

=======
>>>>>>> 70bea99a1f20a3d1ef20783848319a41cf3bfa07
module.exports = routes
