const Usuario = require('../models/Usuario')
//index, show, store, update, destroy
module.exports = {
    async store(req, res){
        const { email } = req.body
        
        let user = await Usuario.findOne({email})

        if(!user){
            user = await Usuario.create({email})
        }

        return res.json(user)
    }
}
