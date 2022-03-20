import React from "react";

class Home extends React.Component {
   render(){
       return(
           <div className="container-fluid home-content">
               <div className="d-flex justify-content-center home-section">
                   <img src="https://cdn.discordapp.com/attachments/890238141687009300/954554014538825838/absurd.design_-_Chapter_1_-_07.png" alt="ilustrator_laptop" />
               </div>
               <div className="d-flex justify-content-center mt-4">
                   <div className="col-7 col-md-3 text-center text-justify">
                       <p className="head-font">Enterprise team collaboration.</p>
                       <p className="text-muted">
                           Bring your files your tools, projects and people including a new mobile and desktop application.
                       </p>
                   </div>
               </div>
               <div className="d-flex justify-content-center mt-4">
                   <a href="/login" className="btn btn-dark mx-1 rounded-button">Login</a>
                   <a href="/register" className="btn btn-dark mx-1 rounded-button">Register</a>
               </div>
           </div>
       )
   }
}

export default Home;