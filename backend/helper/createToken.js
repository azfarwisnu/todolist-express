const jwt = require("jsonwebtoken")

module.exports = {
    createToken: (payload) => {
        return jwt.sign(payload, "secret123", {
            expiresIn: "12h"
        })
    }
}