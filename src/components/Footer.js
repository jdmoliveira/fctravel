import history from "../history";
import {AiOutlineHome,AiOutlineQuestionCircle,AiOutlineFieldTime} from "react-icons/ai";
import React,{Component} from "react";
import './Footer.css'
import {withRouter} from "react-router-dom";
import bus_logo from '../images/bus_logo.png';
import boat_logo from '../images/boat_logo.png';
import train_logo from '../images/train_logo2.png';
import {BiMapAlt} from "react-icons/bi"

class Footer extends Component {

  constructor() {
      super();
  }

  changePage(page) {
      this.state.page = page
      history.push(page)
  }

  render() {
    return(
    <div className = "Footer" >
      <img src={bus_logo} style={{"transform":"scale(1.2)", "bottom":"0"}} className="Bus-logo" alt="bus_logo" />
      <img src={boat_logo} style={{ "marginTop":"64vh","float":"left"}} className="Boat-logo" alt="boat_logo" />
      <img src={train_logo} style={{"transform":"scale(1.5)scaleX(-1)", "marginTop":"64vh","marginLeft":"58vw"}} className="Train-logo" alt="train_logo" />
    </div>
    )
  }
}

export default Footer;
