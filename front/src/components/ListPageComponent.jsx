import React from "react"
import {DropdownButton} from "react-bootstrap";
import "../assets/css/styles.css"

class ListPageComponent extends React.Component {
    render(){
        return(
            <div className="container-fluid">
                <div className="row">
                    <div className="col-2 col-md-2 bg-white shadow-none rounded todo-left-section">
                        <div className="mt-4 pt-2 mx-2">
                            <h5 className="text-muted"><b>easyList</b></h5>
                            <div className="mt-4 pt-4 row">
                                <div className="col-12 mb-4">
                                    <i className="bi bi-app-indicator"></i>
                                    <b className="mx-2 sm-font text-muted">Dashboard</b>
                                </div>
                                <div className="col-12 mb-4">
                                    <i className="bi bi-calendar"></i>
                                    <b className="mx-2 sm-font text-muted">Calendar</b>
                                </div>
                                <div className="col-12 mb-4">
                                    <i className="bi bi-gear"></i>
                                    <b className="mx-2 sm-font text-muted">Settings</b>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-8 todo-mid-section">
                        <div className="row mt-4 pt-2 mx-2">
                            <div className="col-6 col-md-8">
                                <span className="semi-font"><b>Hello Wisnu</b></span>
                                <p className="sm-font">Welcome back!</p>
                            </div>
                            <div className="col-6 col-md-4 mt-2">
                               <div className="d-flex justify-content-center">
                                   <div className="col-8 col-md-8">
                                    <input type="text" className="form-control set-rounded text-truncate border-0 sm-font mx-2" placeholder="Search activity" />
                                   </div>
                                   <DropdownButton size="sm" variant="muted" className="mx-3 bg-white rounded forDropDown" title={<i className="bi bi-bell-fill"></i>} id="collasible-nav-dropdown">
                                       <div className="mt-3 mb-3 text-center mx-3">
                                           <i className="bi bi-journal-minus text-muted h3"></i>
                                           <p className="sm-font text-muted">No notification here!</p>
                                       </div>
                                   </DropdownButton>   
                               </div>
                            </div>
                        </div>
                        <div className="col-12 col-md-12 mt-4">
                            <div className="row mx-2">
                                <div className="col-11 col-md-3 mx-3 mb-2 bg-white shadow-sm set-rounded box-fiture">
                                    <div className="row">
                                        <div className="col-4 col-md-4">
                                            <img src="https://cdn.discordapp.com/attachments/890238141687009300/956080973903179786/artist.png" alt="assets_todolist" />
                                        </div>
                                        <div className="col-6 col-md-6 mx-3">
                                            <div className="mt-3 mb-3">
                                                <b>Your List</b>
                                                <br />
                                                <span className="sm-font">24 task</span>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                                <div className="col-11 col-md-3 mx-3 mb-2 bg-white shadow-sm set-rounded">
                                    <div className="row">
                                        <div className="col-4 col-md-4">
                                            <img src="https://cdn.discordapp.com/attachments/890238141687009300/956080973903179786/artist.png" alt="assets_todolist" />
                                        </div>
                                        <div className="col-6 col-md-6 mx-3">
                                            <div className="mt-3 mb-3">
                                                <b>Your List</b>
                                                <br />
                                                <span className="sm-font">24 task</span>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                                <div className="col-11 col-md-3 mx-3 mb-2 bg-white shadow-sm set-rounded">
                                    <div className="row">
                                        <div className="col-4 col-md-4">
                                            <img src="https://cdn.discordapp.com/attachments/890238141687009300/956080973903179786/artist.png" alt="assets_todolist" />
                                        </div>
                                        <div className="col-6 col-md-6 mx-3">
                                            <div className="mt-3 mb-3">
                                                <b>Your List</b>
                                                <br />
                                                <span className="sm-font">24 task</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>   
                            </div>
                        </div>
                        
                    </div>
                    <div className="col-2 col-md-2 bg-white todo-right-section">
                        <div className="mt-4 pt-2 mx-2">
                            <p>alfkalfkal</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ListPageComponent