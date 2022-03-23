const {db} = require("../database")
const { createToken } = require("../helper/createToken")
const transporter = require("../helper/nodeMailer")
const Crypto = require("crypto")


module.exports = {
    getData: (req,res) => {
        req.body.password = Crypto.createHmac("sha1", "hash123").update(req.body.password).digest("hex")
        console.log({
            "email": req.body.email,
            "password": req.body.password,
        })
        let scriptQuery = `Select * from users where email=${db.escape(req.body.email)} and password=${db.escape(req.body.password)}`;
        db.query(scriptQuery, (err, results) => {
            if(err) res.status(500).send(err)
            else {
                if(results.length > 0){
                    if(results[0]){
                        console.log({
                            "result": results,
                        })
                        let {idusers, username, email, password, role, status} = results[0]
                        let token = createToken({idusers, username, email, password, role, status})
                        if (status !== "verified"){
                            res.status(200).send({message: "your account not verified"})
                        } else {
    
                            res.status(200).send({dataLogin: results[0], token, message:"login success"})
                        }
                    }
                } else {
                    res.status(200).send({message:"login failed"})
                }
            }
        })
    },
    addData: (req,res) => {
        let {username, email, password} = req.body
        password = Crypto.createHmac("sha1","hash123").update(password).digest("hex")
        let scriptQuery = `insert into users values(null, ${db.escape(username)}, ${db.escape(email)}, ${db.escape(password)},"user", "unverified")`
        
        db.query(scriptQuery, (err,result) => {
            if(err) res.status(500).send(err)
            if(result.insertId){
                let sqlGet = `select * from users where idusers = ${result.insertId}`
                db.query(sqlGet, (err2, result2) => {
                    if(err2) res.status(500).send(err2)
                    let {idusers, username, email, role, status} = result2[0]
                    let token = createToken({idusers, username, email, role, status})
                    let mail = {
                        from: "Admin azfarwisnu@gmail.com",
                        to: `${email}`,
                        subject: "Verification your email!",
                        html: `
                        <p>Confirm registration email register, for confirm your account</p>
                        <a href="http://localhost:3000/authentication/${token}">Click here for veryfication your account</a>
                        `
                    }
                    transporter.sendMail(mail, (errMail, resMail) => {
                        if(errMail) {
                            res.status(500).send({message: "registration failed", success: false, err: errMail});
                        } else {
                            res.status(200).send({messag: "registration succress check your email", success: true})
                        }
                    })
                })
            }
        })
    },
    verification: (req,res) => {
        let commandQuery = `update users set status='verified' where idusers = ${req.user.idusers}`
        db.query(commandQuery, (err, result) => {
            if(err){
                res.status(500).send(err)
            } else {
                res.status(200).send({message: "verified account", success: true})
            }
        })
    },
    editData: (req,res) => {
        let dataUpdate = []
        for (let props in dataUpdate){
            dataUpdate.push(`${props} = ${db.escape(req.body[prop])}`)
        }

        let updateQuery = `update users set ${dataUpdate} where id = ${req.params.id}`
        db.query(updateQuery, (err,result) => {
            if(err) res.status(500).send(err)
            else res.status(200).send(result)
        })
    }
}