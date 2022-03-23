import React from "react";
import Axios from "axios";
import "../../helper";
import { apiUrl } from "../../helper";
import {createToken} from "../../helper/auth"
import { verifyToken } from "../../helper/auth"

class Login extends React.Component {
    state = {
        email: "",
        password: "",
        statusLogin: false,
    }

    fetchLoginHandler = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({[name] : value})
    }

    fetchBtnLogin = () => {
        Axios.post(apiUrl + "/users/login", {
            email: this.state.email,
            password: this.state.password,
        }).then(res => {
            if(res.data.message === "login failed"){
                alert("username atau password salah")
            }else {
                localStorage.setItem("token_shutter", res.data.token)
                localStorage.setItem("status", createToken({login: "success"}))
                window.location.href ="/"
            }
        }).catch(err => {
            console.log(err)
        })
    }

    fetchCheckingLogin = () => {
        if(localStorage.getItem("token_shutter") && localStorage.getItem("status")) {
            let token_shutter = localStorage.getItem("token_shutter")
            let status = localStorage.getItem("status")
            let decryptStatus = JSON.parse(verifyToken(status))

            if((decryptStatus.login === "success" && token_shutter !== "")){
                this.setState({statusLogin: true})
            }
        }
    }

    componentDidMount() {
        this.fetchCheckingLogin()
    }


    render(){
        return(
            <>
                {
                    this.state.statusLogin ?
                        window.location.href = "/"
                    :
                        <div className="container-fluid home-section row">
                            <div className="col-12 col-md-12 d-flex justify-content-center">
                                <div className="col-8 col-md-5">
                                    <a href="/" className="text-muted"><p className="bi bi-arrow-90deg-left back-page h5 mb-4"></p></a>
                                </div>
                            </div>
                            <div className="col-12 col-md-12 d-flex justify-content-center text-center">
                                <div className="col-8 col-md-5">
                                    <span className="head-font">Let's sign you in.</span>
                                    <p className="h6 text-muted">Welcome back you've been missed!</p>
                                </div>
                            </div> 
                            <div className="col-12 col-md-12 mt-4">
                                <div className="d-flex justify-content-center mb-2">
                                    <div className="col-8 col-md-5 d-flex justify-content-center text-center">
                                        <div className="form-group col-md-7 ">
                                            <input type="email" className="form-control rounded-button text-center" placeholder="email" name="email" onChange={this.fetchLoginHandler} />
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center mb-2">
                                    <div className="col-8 col-md-5 d-flex justify-content-center text-center">
                                        <div className="form-group col-md-7">
                                            <input type="password" className="form-control rounded-button text-center" placeholder="password" name="password" onChange={this.fetchLoginHandler} />
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center mt-4 text-center">
                                    <div className="col-8 col-md-5">
                                        <p className="text-muted">Dont have an account ? <a href="/register" className="text-muted"><b>Register</b></a></p>
                                    </div>
                                </div>
                                <div className="d-flex justify-content-center text-center">
                                <div className="col-8 col-md-5">
                                    <button className="btn btn-dark btn-sm rounded-button col-5 col-md-2" onClick={this.fetchBtnLogin}>Sig in</button>
                                </div>
                                </div>
                            </div> 
                        </div>
                }
            </>
        )
    }
}

export default Login;