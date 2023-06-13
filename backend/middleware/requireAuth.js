const jwt = require('jsonwebtoken')
const User = require('../model/usersModel')

const requireAuth = async(req, res, next) =>{
    const {authorization} = req.headers
if(!authorization){
    return res.status(401).json({error: "Unathorized"})
}

const token  = authorization.slit(' ')[1]
 try {
   const {_id}  = jwt.verify(token, process.env.ACCESS_TOKEN )
  req.user = await User.findOne({_id}).select('_id')
  next()
 } catch (error) {
    return res.status(401).json({error: "Unathorized"})
 }

    next()
}

module.exports = requireAuth