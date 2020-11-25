import history from "../history";
import {AiOutlineHome,AiOutlineQuestionCircle,AiOutlineFieldTime} from "react-icons/ai";
import React from "react";
import './Footer.css'
import {withRouter} from "react-router-dom";
import bus_logo from '../bus_logo.png';
import boat_logo from '../boat_logo.png';
import train_logo from '../train_logo2.png';
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
      <img src={bus_logo} style={{"transform":"scale(0.6)","float":"left", "marginBottom":"-12vh","marginLeft":"-4vw"}} className="Bus-logo" alt="bus_logo" />
      <img src={boat_logo} style={{"transform":"scale(0.6)","float":"middle", "marginBottom":"-12vh","marginLeft":"-4vw"}} className="Boat-logo" alt="boat_logo" />
      <img src={train_logo} style={{"transform":"scale(0.6)","float":"right", "marginBottom":"-12vh","marginLeft":"-4vw"}} className="Train-logo" alt="train_logo" />
    </div>
    )
  }
}

export default Footer;
