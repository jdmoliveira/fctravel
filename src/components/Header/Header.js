import history from "../../history";
import {AiOutlineHome,AiOutlineQuestionCircle,AiOutlineFieldTime} from "react-icons/ai";
import React, {Component} from "react";
import './Header.css'
import {withRouter} from "react-router-dom";
import logo from '../../train_logo.png';
import {BiMapAlt} from "react-icons/bi"
import Login from './Login/Login'
import Signup from './Signup/Signup'
import Profile from './Profile/Profile'
import {CgProfile} from 'react-icons/cg'




export class Header extends Component{
    constructor(props) {
        super(props);
        this.state = {loginUp: false, signUp : false}
    }
    changePage(page){

        history.push(page)
    }

    handleLogin=()=>{
        this.setState({loginUp: !this.state.loginUp})
    }

    handleSignUp = () =>{
        this.setState({signUp: !this.state.signUp})
    }




    render(){

    return(

    <div className = "Header"  >

        <div className="Header App-header">
            <img src={logo} style={{"transform":"scale(0.3)","float":"left", "marginTop":"-12vh","marginLeft":"-4vw"}} className="App-logo" alt="logo" />
            <h3 style={{"color":"white","fontSize":"250%","marginTop":"4vh","float":"left","marginLeft":"-4vw"}}>FCTravel</h3>
            <>
            {window.location.pathname === "/"?
                <button className = "Header App-header Buttons" disabled style ={{"marginLeft":"20vw","width":"4.5vw","textDecoration":"underline","pointerEvents":"none"}} ><AiOutlineHome/> Home </button>
                :
                <button className = "Header App-header Buttons" style ={{"marginLeft":"20vw","width":"4.5vw"}} onClick={()=>this.changePage("/")}><AiOutlineHome/>Home </button>
            }
            </>

            <>
                {window.location.pathname === "/map/"?
                    <button className = "Header App-header Buttons" disabled style ={{"width":"4.5vw","textDecoration":"underline","pointerEvents":"none"}} ><BiMapAlt/>Map </button>
                    :
                    <button className = "Header App-header Buttons" style ={{"width":"4.5vw"}} onClick={()=>this.changePage("/map/")}><BiMapAlt/>Map </button>
                }
            </>
            <>
                {window.location.pathname === "/timetables/"?
                    <button className = "Header App-header Buttons" disabled style ={{"width":"7vw","textDecoration":"underline","pointerEvents":"none"}} ><AiOutlineFieldTime/>Timetables </button>
                    :
                    <button className = "Header App-header Buttons" style ={{"width":"7vw"}} onClick={()=>this.changePage("/timetables/")}><AiOutlineFieldTime/>Timetables </button>
                }
            </>
            <>
                {window.location.pathname === "/help/"?
                    <button className = "Header App-header Buttons" disabled style ={{"width":"4.5vw","textDecoration":"underline","pointerEvents":"none"}} ><AiOutlineQuestionCircle/>Help </button>
                    :
                    <button className = "Header App-header Buttons" style ={{"width":"4.5vw"}} onClick={()=>this.changePage("/help/")}><AiOutlineQuestionCircle/>Help </button>
                }
            </>
            <>
                {localStorage.getItem("token") !== "on" ?
                    <>
                        <button className = "Header App-header AccountButtons" onClick={this.handleSignUp}>Signup</button>
                        <button className = "Header App-header AccountButtons" onClick={this.handleLogin}>Login</button>
                    </>
                    :
                    <>
                        {window.location.pathname === "/profile/"?
                            <button className = "Header App-header Buttons" style ={{"float":"right","width":"auto","fontSize":"160%","textDecoration":"underline","pointerEvents":"none"}} > <CgProfile style={{"transform":"scale(1.5)","marginLeft":"-16vw"}}/>            {localStorage.getItem("name")}</button>
                            :<button className = "Header App-header Buttons" style ={{"float":"right","width":"auto","fontSize":"160%"}} onClick={()=>this.changePage("/profile/")}> <CgProfile style={{"transform":"scale(1.5)","marginLeft":"-16vw"}}/>            {localStorage.getItem("name")}</button>
                            }
                    </>
                }
            </>
        </div>
        <Login show = {this.state.loginUp}  onChange ={this.handleLogin} ></Login>
        <Signup show = {this.state.signUp} onChange ={this.handleSignUp}></Signup>

    </div>
    )
}
}
export default withRouter(Header);
