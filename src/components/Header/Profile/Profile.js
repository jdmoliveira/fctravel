import React, {Component} from "react";
import history from "../../../history";
import { withRouter } from "react-router-dom";
import './Profile.css'
import {AiOutlineLogout} from "react-icons/ai";

class Profile extends Component {

    constructor(props) {
        super(props);

    }

    changePage(page) {
        this.state.page = page
        history.push(page)
    }
    logout(){
        history.push("/ipm_project/")
        localStorage.setItem("token","off")

    }



    render() { // arrows TODO, logos TODO
        return (
            <>
                <div className = "ScreenProf">

                </div>
                <button className = "Logout" onClick={() => this.logout()}>Logout <AiOutlineLogout/></button>
            </>


        )
    }
}

export default withRouter(Profile);