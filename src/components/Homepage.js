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
            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Departure
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={()=> insertDeparture("oriente")}> Oriente </Dropdown.Item>
                <Dropdown.Item onClick={()=> insertDeparture("setubal")}> Setúbal </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle variant="success" id="dropdown-basic">
                Arrival
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item onClick={()=> insertArrival("fct")}> FCT </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Button as="input" type="submit" value="Find" onClick={() => history.push("/ipm_project/find"+departure+"/"+arrival)}/>

          </div>

          <Footer/>

        </div>

      )
    }
}

export default withRouter(Homepage);
