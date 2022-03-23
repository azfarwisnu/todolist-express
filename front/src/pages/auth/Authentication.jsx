import React from 'react';
import Axios from "axios";
import {apiUrl} from "../../helper"

class Authentication extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "loading...",
        }
    }

    fetchButtonVerify = () => {
        Axios.patch(apiUrl + "/users/verified", {}, {
            headers: {
                "Authorization": `Bearer ${this.props.match.params.token}`
            }
        }).then(res => {
            this.setState({message: "users finnaly verify"})
            alert("Success")
            window.location.href = "/login"
        }).catch(err => {
            console.log(err)
        })
    }

    componentDidMount(){
    }

    render(){
        return(
            <div className="container-fluid home-section row">
                <div className="col-12 col-md-12 d-flex justify-content-center">
                    <div className="col-8 col-md-5">
                        <a href="/" className="text-muted"><p className="bi bi-arrow-90deg-left back-page h5 mb-4"></p></a>
                    </div>
                </div>
                <div className="col-12 col-md-12 d-flex justify-content-center authentication-component mb-2">
                    <img src="https://cdn.discordapp.com/attachments/890238141687009300/954730143262314506/absurd.design_-_Chapter_1_-_10.png" alt="illustrator-verification" />
                </div>
                <div className="col-12 col-md-12 d-flex justify-content-center mb-2">
                    <p className="h5 text-muted text-justify text-center">Click for confirm your account</p>
                </div>
                <div className="col-12 col-md-12 d-flex justify-content-center mb2">
                    <button className="btn btn-dark btn-sm col-5 col-md-2 rounded-button" onClick={this.fetchButtonVerify}>Confirm</button>
                </div>
            </div>
        )
    }
}

export default Authentication;