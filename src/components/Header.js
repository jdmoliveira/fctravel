import history from "../history";
import {AiOutlineHome,AiOutlineQuestionCircle,AiOutlineFieldTime} from "react-icons/ai";
import React from "react";
import './Header.css'
import {withRouter} from "react-router-dom";
import logo from '../train_logo.png';
import {BiMapAlt} from "react-icons/bi"



function Header(){
    return(
    <div className = "Header" >
        <div className="Header App-header">
            <img src={logo} style={{"transform":"scale(0.3)","float":"left", "marginTop":"-12vh","marginLeft":"-4vw"}} className="App-logo" alt="logo" />
            <h3 style={{"color":"white","fontSize":"250%","marginTop":"4vh","float":"left","marginLeft":"-4vw"}}>FCTravel</h3>
            <button className = "Header App-header Buttons" style ={{"marginLeft":"20vw","width":"4.5vw"}} onClick={() => history.push("/ipm_project/")}>Home <AiOutlineHome/></button>
            <button className = "Header App-header Buttons"  style ={{"width":"4.5vw"}} onClick={() => history.push("/ipm_project/")}>Map <BiMapAlt/></button>
            <button className = "Header App-header Buttons" style={{"width":"7vw"}}  onClick={() => history.push("/ipm_project/")}>Timetables <AiOutlineFieldTime/></button>
            <button className = "Header App-header Buttons" style={{"width":"4.5vw"}} onClick={() => history.push("/ipm_project/")}>Help <AiOutlineQuestionCircle/></button>
            <button className = "Header App-header AccountButtons" onClick={() => history.push("/ipm_project/reports/")}>Signup</button>
            <button className = "Header App-header AccountButtons" onClick={() => history.push("/ipm_project/group/")}>Login</button>
        </div>
    </div>
    )
}
export default withRouter(Header);