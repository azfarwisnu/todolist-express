import React from "react";
import HomeComponent from "../components/HomeComponent"
import ListPageComponent from "../components/ListPageComponent"
import { verifyToken } from "../helper/auth"

class Home extends React.Component {
    state = {
        statusLogin: true,
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
                    <ListPageComponent />
                :
                    <HomeComponent />
            }
           </>
       )
   }
}

export default Home;