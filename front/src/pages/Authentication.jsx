import React from 'react';
import Axios from "axios";
import {apiUrl} from "../helper"

class Authentication extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            message: "loading...",
        }
    }

    fetchButton = () => {
        Axios.patch(apiUrl + "/users/verified", {}, {
            headers: {
                "Authorization": `Bearer ${this.props.match.params.token}`
            }
        }).then(res => {
            this.setState({message: "users finnaly verify"})
        }) .catch(err => {
            console.log(err)
        })
    }

    componentDidMount(){
    }

    render(){
        return(
            <div className="container p-5">
                {console.log(this.state.message)}
                <p>{this.state.message}</p>
                <button className="btn btn-primary" onClick={this.fetchButton}>verify</button>
            </div>
        )
    }
}

export default Authentication;