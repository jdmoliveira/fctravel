import history from "../../history";
import {AiOutlineHome,AiOutlineQuestionCircle,AiOutlineFieldTime} from "react-icons/ai";
import React, {useCallback,Component} from "react";
import './Header.css'
import {withRouter} from "react-router-dom";
import logo from '../../train_logo.png';
import {BiMapAlt} from "react-icons/bi"
import Login from './Login/Login'




class Header extends Component{
    constructor() {
        super();
        this.state = {loginUp: false, page:"/ipm_project/"}
    }
    changePage(page){
        this.state.page = page
        history.push(page)
    }
    render(){

    return(

    <div className = "Header" >
        <div className="Header App-header">
            <img src={logo} style={{"transform":"scale(0.3)","float":"left", "marginTop":"-12vh","marginLeft":"-4vw"}} className="App-logo" alt="logo" />
            <h3 style={{"color":"white","fontSize":"250%","marginTop":"4vh","float":"left","marginLeft":"-4vw"}}>FCTravel</h3>
            <>
            {this.state.page === "/ipm_project/"?
                <button className = "Header App-header Buttons" disabled style ={{"marginLeft":"20vw","width":"4.5vw","textDecoration":"underline","pointerEvents":"none"}} >Home <AiOutlineHome/></button>
                :
                <button className = "Header App-header Buttons" style ={{"marginLeft":"20vw","width":"4.5vw"}} onClick={()=>this.changePage("/ipm_project/")}>Home <AiOutlineHome/></button>
            }
            </>

            <>
                {this.state.page === "/ipm_project/map/"?
                    <button className = "Header App-header Buttons" disabled style ={{"width":"4.5vw","textDecoration":"underline","pointerEvents":"none"}} >Map <BiMapAlt/></button>
                    :
                    <button className = "Header App-header Buttons" style ={{"width":"4.5vw"}} onClick={()=>this.changePage("/ipm_project/map/")}>Map <BiMapAlt/></button>
                }
            </>
            <>
                {this.state.page === "/ipm_project/timetables/"?
                    <button className = "Header App-header Buttons" disabled style ={{"width":"7vw","textDecoration":"underline","pointerEvents":"none"}} >Timetables <AiOutlineFieldTime/></button>
                    :
                    <button className = "Header App-header Buttons" style ={{"width":"7vw"}} onClick={()=>this.changePage("/ipm_project/timetables/")}>Timetables <AiOutlineFieldTime/></button>
                }
            </>
            <>
                {this.state.page === "/ipm_project/help/"?
                    <button className = "Header App-header Buttons" disabled style ={{"width":"4.5vw","textDecoration":"underline","pointerEvents":"none"}} >Help <AiOutlineQuestionCircle/></button>
                    :
                    <button className = "Header App-header Buttons" style ={{"width":"4.5vw"}} onClick={()=>this.changePage("/ipm_project/help/")}>Help <AiOutlineQuestionCircle/></button>
                }
            </>
            <button className = "Header App-header AccountButtons" onClick={() => history.push("/ipm_project/reports/")}>Signup</button>
            <button className = "Header App-header AccountButtons" onClick={this.props.changeState}>Login</button>
        </div>
        <Login />

    </div>
    )
}
}
export default withRouter(Header);