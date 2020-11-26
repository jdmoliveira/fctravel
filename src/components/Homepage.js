import history from "../history";
import React, {useCallback,Component} from "react";
import {BiMapAlt} from "react-icons/bi";
import {AiOutlineHome,AiOutlineQuestionCircle,AiOutlineFieldTime} from "react-icons/ai";
import './Homepage.css'
<<<<<<< HEAD
//import arrow_right from '/imgs/arrow_right.png';
//import arrow_left from '/imgs/arrow_left.png';

=======
import {withRouter} from "react-router-dom";
import {BiMapAlt} from "react-icons/bi"
import Footer from './Footer'
>>>>>>> e8b4f309f7cdeb15c74e8a0c886f2f07290048ff
class Homepage extends Component {

    constructor() {
        super();
    }

    changePage(page) {
        this.state.page = page
        history.push(page)
    }

    render() { // arrows TODO, logos TODO
      return (
        <div className = "">
          <div className = "Screen">

            <form className = "DepartureBox">
              <label>
                <p className = "BoxText"> Departure </p>
                <input type="text" name="departure" />
              </label>
            </form>

            <div className = "ArrowLeft">
              <button className = "SwitchButton" onClick={() => history.push("/ipm_project/find/")}>
                <img src={process.env.PUBLIC_URL + '/imgs/arrow_left.png'} style={{opacity: 1,transform:"scale(0.05)"}} className="ArrowLeft" />
              </button>
            </div>
            <div className = "ArrowRight">
              <button className = "SwitchButton" onClick={() => history.push("/ipm_project/find/")}>
                <img src={process.env.PUBLIC_URL + '/imgs/arrow_right.png'} style={{opacity: 1,transform:"scale(0.05)"}} className="ArrowLeft" />
              </button>
            </div>

            <form className = "ArrivalBox">
              <label>
                <p className = "BoxText"> Arrival </p>
                <input type="text" name="arrival" />
              </label>
            </form>

            <button className = "FindButton" onClick={() => history.push("/ipm_project/find/")}>Find</button>
          </div>

        </div>

      )
    }
}

export default Homepage;
