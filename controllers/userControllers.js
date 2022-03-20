const { db } = require("../database")
const { createToken } = require("../helper/createToken")
const transporter = require("../helper/nodeMailer")
const Crypto = require("crypto")

module.exports = {
    getData: (req, res) => {
        let scriptQuery = `select * from users`;
        db.query(scriptQuery, (err,result) => {
            if(err) res.status(500).send(err)
            else res.status(200).send(result)
        })
    },
    addData: (req,res) => {
        let {username, email, password } = req.body
        password = Crypto.createHmac("sha1", "hash123").update(password).digest("hex")
        console.log(password)
        let scriptQuery = `insert into users values(null, ${db.escape(username)}, ${db.escape(email)}, ${db.escape(password)},"user", "unverified")`
        db.query(scriptQuery, (err,result) => {
            if(err) res.status(500).send(err)
            if (result.insertId) {
                let sqlGet = `select * from users where idusers = ${result.insertId}`
                db.query(sqlGet, (err2,result2) => {
                    if(err2) res.status(500).send(err2)
                    let  {idusers, username, email, role, status} = result2[0]
                    let token = createToken({idusers, username, email, role, status})
                    let mail = {
                        from: "Admin <azfarwisnu@gmail.com>",
                        to: `${email}`,
                        subject: "Veryfication your account!",
                        html: `<a href="http://localhost:3000/authentication/${token}">Click here for veryfication your account</a>`
                    }
                    transporter.sendMail(mail, (errMail, resMail) => {
                        if(errMail) {
                            console.log(erers)
                            res.status(500).send({message: "Registration failed", success: false, err: errMail});
                        } else {
                            res.status(200).send({message: "Regist success check your email", success: true})
                        }
                    })
                })
            }
        })
    },

    verification: (req,res) => {
        console.log(req.user)
        let commandQuery = `update users set status='verified' where idusers = ${req.user.idusers}`
        db.query(commandQuery, (err, res) => {
            if(err) {
                res.status(500).send(err)
            }
            res.status(200).send({message: "verified account", success: true})
        })
    },
    editData: (req,res) => {
        let dataUpdate = []
        for (let props in dataUpdate){
            dataUpdate.push(`${prop} = ${db.escape(req.body[prop])}`)
        }

        let updateQuery = `update users set ${dataUpdate} where id = ${req.params.id}`
        db.query(updateQuery, (err,result) => {
            if(err)res.status(500).send(err)
            else res.status(200).send(result)
        })
    }
}