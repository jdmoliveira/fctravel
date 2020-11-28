import history from "../history";
import React, {useCallback,Component} from "react";
import { Dropdown, Button, Card }  from 'react-bootstrap';
import './Homepage.css';
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
          <div className = "Screen">
            <Card>
              <Dropdown onSelect={this.insertDeparture}>
                <Dropdown.Toggle variant="secondary" id="departure">
                  Departure
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item > Oriente </Dropdown.Item>
                  <Dropdown.Item > Setúbal </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Card>
            <Card>
              <Dropdown onSelect={this.insertArrival}>
                <Dropdown.Toggle variant="secondary" id="arrival">
                  Arrival
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item > FCT </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Card>
            <Button as="input" type="submit" value="Find" onClick={this.find} style={{transform:"scale(0.8)"}}/>

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
