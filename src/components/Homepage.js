import history from "../history";
import React, {useCallback,Component} from "react";
import { Dropdown, DropdownButton, Button, Card }  from 'react-bootstrap';
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
      if (mode.equals("l")) {
        var n = this.state.departure;
        this.setState({departure:this.state.arrival});
        this.setState({arrival:n});
      }
      else {
        var n = this.state.arrival;
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
      if (this.state.departure === "" || this.state.arrival === "" || this.state.departure === "Departure" || this.state.arrival === "Arrival") {
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
        <div className = "">

          <div className = "Screen" style={{width:"400px", height:"180px", marginLeft:"5px"}}>
            <Button as="input" type="submit" value="Find" onClick={this.find.bind(this)} style={{transform:"scale(0.8)", marginTop:"140px",marginLeft:"330px",height:"33px",float:"right"}}/>

            <img src={location} style={{"transform":"scale(0.3)", marginTop:"-20px",marginLeft:"-55px"}} className="Location" alt="location" />

            <DropdownButton title={this.state.departure} style={{marginTop:"70px",marginLeft:"-465px",width:"150px",height:"63px",float:"left"}} variant="secondary">
              <Dropdown.Item onClick={(e) => this.insertDeparture(e.target.textContent)}> Oriente </Dropdown.Item>
              <Dropdown.Item onClick={(e) => this.insertDeparture(e.target.textContent)}> Setúbal </Dropdown.Item>
            </DropdownButton>

            <DropdownButton title={this.state.arrival} style={{marginTop:"70px",marginLeft:"30px",width:"150px",height:"63px",float:"middle"}} variant="secondary">
              <Dropdown.Item onClick={(e) => this.insertArrival(e.target.textContent)}> FCT </Dropdown.Item>
            </DropdownButton>

            </div>


          <Footer/>

        </div>

      )
    }
}

export default withRouter(Homepage);


/* // just in case
import history from "../history";
import React, {useCallback,Component} from "react";
import { Dropdown, Button, Card }  from 'react-bootstrap';
import './Homepage.css';
import location from '../images/location.jpg';
import {withRouter} from "react-router-dom";
import Footer from './Footer';

var departure = "";
var arrival = "";

class Homepage extends Component {

    constructor() {
        super();
        departure = "";
        arrival = "";

    }

    switch(mode) {
      if (mode.equals("l")) {
        var n = departure;
        departure = arrival;
        arrival = n;
      }
      else {
        var n = arrival;
        arrival = departure;
        departure = n;
      }
    }

    changeValue(text) {
      this.setState({dropDownValue: text})
    }

    insertDeparture(input) {
      departure = input;
    }

    insertArrival(input) {
      arrival = input;
    }

    find() {
      if (departure == "" || arrival == "") {
        alert("Both departure and arrival must be defined.");
      }
      else {
        history.push({
          pathname: "/ipm_project/find",
          state: { departure: departure , arrival: arrival}
        });
      }
    }

    render() {
      return (
        <div className = "">
          <div className = "Screen" style={{width:"400px", height:"180px", marginLeft:"5px"}}>

              <Dropdown onSelect={this.insertDeparture} style={{marginTop:"70px",marginLeft:"65px",width:"150px",height:"63px",float:"left"}}>
                <Dropdown.Toggle variant="secondary" id="departure">
                  Departure
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item > Oriente </Dropdown.Item>
                  <Dropdown.Item > Setúbal </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

              <Dropdown onSelect={this.insertArrival} style={{marginTop:"70px",marginLeft:"60px",width:"150px",height:"63px",float:"middle"}}>
                <Dropdown.Toggle variant="secondary" id="arrival">
                  Arrival
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item > FCT </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>

            <Button as="input" type="submit" value="Find" onClick={this.find} style={{transform:"scale(0.8)", marginTop:"140px",marginLeft:"10px",height:"33px",float:"right"}}/>

            <img src={location} style={{"transform":"scale(0.3)", marginTop:"-20px",marginLeft:"-50px"}} className="Location" alt="location" />
          </div>

          <Footer/>

        </div>

      )
    }
}

export default withRouter(Homepage);
*/
