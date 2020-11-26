import history from "../history";
import {AiOutlineHome,AiOutlineQuestionCircle,AiOutlineFieldTime} from "react-icons/ai";
import React, {useCallback,Component} from "react";
import './Homepage.css'
import {withRouter} from "react-router-dom";
import {BiMapAlt} from "react-icons/bi"
import Footer from './Footer'
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
                <p className = "BoxText">Departure</p>
                <input type="text" name="departure" />
              </label>
            </form>

            <form className = "ArrivalBox">
              <label>
                <p className = "BoxText">Arrival</p>
                <input type="text" name="arrival" />
              </label>
            </form>

            <button className = "FindButton" onClick={() => history.push("/ipm_project/find/")}>Find</button>
          </div>

        </div>

      )
    }
}

export default withRouter(Homepage);
