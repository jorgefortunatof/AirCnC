const Booking = require('../models/Booking')

module.exports = {
    async store(req, res){
        const user = req.headers.user_id
        const spot = req.params.spot_id
        const { date } = req.body
        
<<<<<<< HEAD
        const booking = await Booking.create({
            user, 
            spot, 
            date
        })
        await booking.populate('spot').populate('user').execPopulate()
    
        const ownerSocket = req.connectedUsers[booking.spot.user]
        if (ownerSocket){
            req.io.to(ownerSocket).emit('booking_request', booking)
        }
=======
        const booking = await Booking.create({user, spot, date})
        await booking.populate('spot').populate('user').execPopulate()
>>>>>>> 70bea99a1f20a3d1ef20783848319a41cf3bfa07

        return res.json(booking)
    }
}