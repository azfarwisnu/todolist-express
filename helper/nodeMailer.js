const nodeMailer = require("nodemailer")

const transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
        user: "azfarwisnu@gmail.com",
        pass: "gknlcdvnjgbzhsji"
    },
    tls: {
        rejectUnauthorized: false,
    }
})

module.exports = transporter