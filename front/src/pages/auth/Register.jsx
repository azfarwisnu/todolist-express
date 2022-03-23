import React from "react";
import { apiUrl } from "../../helper"
import Axios from "axios"

class Register extends React.Component {
    state = {
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    }

    fetchRegisterHandler = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({[name] : value})
    }
    
    fetchBtnRegister = () => {
        let username = this.state.username
        let email = this.state.email
        let password = this.state.password
        let confirmPassword = this.state.confirmPassword
        if((username && email && password && confirmPassword) !== ""){
            if(password.length >= 6){
                if(password === confirmPassword){
                    Axios.post(apiUrl+"/users/regis", {
                        username, email, password
                    })
                    .then(res => console.log(res.data))
                    .catch(err => console.log(err))
                    alert("success")
                    window.location.reload()
                } else {
                    alert("failed password and confirm different")
                }
            } else {
                alert("password length must 6 character or mores")
            }
        } else {
            alert("Fill all data")
        }
    }

    render(){
        return(
            <div className="container-fluid home-section row">
                <div className="col-12 col-md-12 d-flex justify-content-center">
                    <div className="col-8 col-md-5">
                        <a href="/" className="text-muted"><p className="bi bi-arrow-90deg-left back-page h5 mb-4"></p></a>
                    </div>
                </div>
                <div className="col-12 col-md-12 d-flex justify-content-center text-center mb-4">
                    <div className="col-8 col-md-4 text-justify">
                        <span className="head-font">Create Account</span>
                        <p className="h6 text-muted">
                            Let's get you all set up so you can verify your personal account and begin setting up yor profile.
                        </p>
                    </div>
                </div>
                <div className="d-flex justify-content-center mb-3">
                    <div className="col-8 col-md-5 d-flex justify-content-center text-center">
                        <div className="form-group col-md-7">
                            <input type="text" className="form-control rounded-button text-center" placeholder="Username" name="username" onChange={this.fetchRegisterHandler} />
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center mb-3">
                    <div className="col-8 col-md-5 d-flex justify-content-center text-center">
                        <div className="form-group col-md-7">
                            <input type="email" className="form-control rounded-button text-center" placeholder="Email" name="email" onChange={this.fetchRegisterHandler} />
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center mb-3">
                    <div className="col-8 col-md-5 d-flex justify-content-center text-center">
                        <div className="form-group col-md-7">
                            <input type="password" className="form-control rounded-button text-center" placeholder="Password" name="password" onChange={this.fetchRegisterHandler} />
                        </div>
                    </div>
                </div>
                <div className="d-flex justify-content-center mb-3">
                    <div className="col-8 col-md-5 d-flex justify-content-center text-center">
                        <div className="form-group col-md-7">
                            <input type="password" className="form-control rounded-button text-center" placeholder="Confirm Password" name="confirmPassword" onChange={this.fetchRegisterHandler} />
                        </div>
                    </div>
                </div>    
                <div className="d-flex justify-content-center mt-4 text-center">
                        <div className="col-8 col-md-5">
                            <p className="text-muted">I'm already account ? <a href="/login" className="text-muted"><b>Login</b></a></p>
                        </div>
                    </div>
                    <div className="d-flex justify-content-center text-center">
                       <div className="col-8 col-md-5">
                           <button className="btn btn-dark btn-sm rounded-button col-5 col-md-2" onClick={this.fetchBtnRegister}>Register</button>
                       </div>
                    </div>
            </div>
        )
    }
}

export default Register;