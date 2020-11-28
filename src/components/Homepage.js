import history from "../history";
import React, {useCallback,Component} from "react";
import { Dropdown, Button }  from 'react-bootstrap';
import './Homepage.css';
import {withRouter} from "react-router-dom";
import Footer from './Footer';

var departure = "";
var arrival = "";

class Homepage extends Component {

    constructor() {
        super();
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
      history.push({
        pathname: "/ipm_project/find",
        state: { departure: departure , arrival: arrival}
      });
    }

    render() {
      return (
        <div className = "">
          <div className = "Screen">
            <Dropdown onSelect={this.insertDeparture}>
              <Dropdown.Toggle variant="success" id="departure">
                Departure
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item > Oriente </Dropdown.Item>
                <Dropdown.Item > Setúbal </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown onSelect={this.insertArrival}>
              <Dropdown.Toggle variant="success" id="arrival">
                Arrival
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item > FCT </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Button as="input" type="submit" value="Find" onClick={this.find}/>

          </div>

          <Footer/>

        </div>

      )
    }
}

export default withRouter(Homepage);
