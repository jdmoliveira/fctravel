import history from "../history";
import React, {Component} from "react";
import { Dropdown, DropdownButton, Button }  from 'react-bootstrap';
import './Homepage.css';
import location from '../images/location.png';
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
          pathname: "/find",
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

            <div style={{marginTop:"15px",marginLeft:"65px", width:"400px", height:"40px", float: "middle"}}> Select departure and arrival locations </div>

            <Button as="input" type="submit" value="Find" onClick={this.find.bind(this)} style={{"background-color": "#65ACD2", transform:"scale(0.8)", marginTop:"140px",marginLeft:"-135px",height:"33px",float:"right"}}/>

            <img src={location} style={{"transform":"scale(0.1)scaleX(1.2)", marginTop:"-125px",marginLeft:"-160px"}} className="Location" alt="location" />

            <DropdownButton title={this.state.departure} style={{ marginTop:"70px",marginLeft:"-25vw",width:"150px",height:"63px",float:"left"}} variant="secondary">
              <Dropdown.Item onClick={(e) => this.insertDeparture(e.target.textContent)}> Oriente </Dropdown.Item>
              <Dropdown.Item onClick={(e) => this.insertDeparture(e.target.textContent)}> Setúbal </Dropdown.Item>
            </DropdownButton>

            <DropdownButton title={this.state.arrival} style={{marginTop:"70px",marginLeft:"2vw",width:"150px",height:"63px",float:"middle"}} variant="secondary">
              <Dropdown.Item onClick={(e) => this.insertArrival(e.target.textContent)}> FCT </Dropdown.Item>
            </DropdownButton>

            </div>


          <Footer/>

        </div>

      )
    }
}

export default withRouter(Homepage);
