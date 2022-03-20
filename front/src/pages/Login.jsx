import React from "react";

class Login extends React.Component {
    state = {
        username: "",
        password: "",
    }

    fetchLoginHandler = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({[name] : value})
    }

    fetchBtnLogin = () => {
        console.log(this.state.username)
        console.log(this.state.password)
    }

    render(){
        return(
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
                                <input type="text" className="form-control rounded-button text-center" placeholder="username" name="username" onChange={this.fetchLoginHandler} />
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
        )
    }
}

export default Login;