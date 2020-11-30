import history from "../history";
import React, {Component} from "react";
import { Dropdown, DropdownButton, Button }  from 'react-bootstrap';
import './Homepage.css';
import location from '../images/location.jpg';
import {withRouter} from "react-router-dom";
import Footer from './Footer';


class Homepage extends Component {

    constructor(props) {
        super(props);
        this.state = {
          departure: "Departure",
          arrival: "Arrival",
        }
    }

    switch(mode) {
      var n = "";
      if (mode.equals("l")) {
        n = this.state.departure;
        this.setState({departure:this.state.arrival});
        this.setState({arrival:n});
      }
      else {
        n = this.state.arrival;
        this.setState({arrival:this.state.departure});
        this.setState({departure:n});
      }
    }

    insertDeparture(text){
      this.setState({departure:text});
    }

    insertArrival(text){
      this.setState({arrival:text});
    }

    find() {
      if (this.state.departure === "" || this.state.arrival === ""
          || this.state.departure === "Departure" || this.state.arrival === "Arrival") {
        alert("Both departure and arrival must be defined.");
      }
      else {
        history.push({
          pathname: "/ipm_project/find",
          state: { departure: this.state.departure , arrival: this.state.arrival}
        });
      }
    }
    changePaySuc=()=>{
        this.setState({paySuc: !this.state.paySuc})
    }

    render() {
      return (
        <div className = "home-background" >
          <div className = "select-trip-panel">
            <div className="title-select-trip">
              Select departure and arrival locations
            </div>

            <div className="select-trip">
              <DropdownButton className="departure" title={this.state.departure} variant="secondary">
                <Dropdown.Item onClick={(e) => this.insertDeparture(e.target.textContent)}> Oriente </Dropdown.Item>
                <Dropdown.Item onClick={(e) => this.insertDeparture(e.target.textContent)}> Setúbal </Dropdown.Item>
              </DropdownButton>

              <DropdownButton className="arrival" title={this.state.arrival} variant="secondary">
                <Dropdown.Item onClick={(e) => this.insertArrival(e.target.textContent)}> FCT </Dropdown.Item>
              </DropdownButton>
            </div>

            <div className="find">
              <Button  as="input" type="submit" value="Find" onClick={this.find.bind(this)}/>
            </div>
          </div>         

        </div>

      )
    }
}

export default withRouter(Homepage);
