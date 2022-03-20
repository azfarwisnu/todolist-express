const jwt = require("jsonwebtoken")

module.exports = {
    auth: (req,res,next) => {
        console.log("token", req.token)
        jwt.verify(req.token, "secret123", (err,decode) => {
            if(err){
                return res.status(401).send(err)
            }
            req.user = decode
            next()
        })
    }
}