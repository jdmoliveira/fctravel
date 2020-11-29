import React, {useCallback,Component} from "react";
import { Dropdown, DropdownButton, Button, Card }  from 'react-bootstrap';
import './Payment.css';
import {withRouter} from "react-router-dom";
import history from "../../history";


class Payment extends Component {

    constructor() {
        super();
        this.state = {
            departure: "Departure",
            arrival: "Arrival"
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


    render() {
        return (
            <div className = "">

                <div className = "Screen" style={{width:"400px", height:"180px", marginLeft:"5px"}}>
                    <Button as="input" type="submit" value="Find" onClick={this.find.bind(this)} style={{transform:"scale(0.8)", marginTop:"140px",marginLeft:"330px",height:"33px",float:"right"}}/>

                    <DropdownButton title={this.state.departure} style={{marginTop:"70px",marginLeft:"-465px",width:"150px",height:"63px",float:"left"}} variant="secondary">
                        <Dropdown.Item onClick={(e) => this.insertDeparture(e.target.textContent)}> Oriente </Dropdown.Item>
                        <Dropdown.Item onClick={(e) => this.insertDeparture(e.target.textContent)}> Setúbal </Dropdown.Item>
                    </DropdownButton>

                    <DropdownButton title={this.state.arrival} style={{marginTop:"70px",marginLeft:"30px",width:"150px",height:"63px",float:"middle"}} variant="secondary">
                        <Dropdown.Item onClick={(e) => this.insertArrival(e.target.textContent)}> FCT </Dropdown.Item>
                    </DropdownButton>

                </div>


            </div>

        )
    }
}

export default withRouter(Payment);