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

/*
<Card style={{ float: 'middle',  border: 'solid', 'border-radius': '10px',position: 'absolute',
  'top': '10%',
  'left': '44%',
  '-ms-transform': 'translate(-50%, -50%)',
  'transform': 'translate(-50%, -50%)',
  'transform': 'scale(1.5)',
  'display':'flex',
  'flex-direction':'row' }}>

  <Card.Body>


  </Card.Body>

</Card>
*/
