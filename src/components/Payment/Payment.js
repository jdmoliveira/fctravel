import React, {useCallback,Component} from "react";
import {Dropdown, DropdownButton, Button, Card, Modal} from 'react-bootstrap';
import './Payment.css';
import {withRouter} from "react-router-dom";
import history from "../../history";
import yes from "../../images/yes.png"
import no from "../../images/no.png"
import t1r1 from "../../images/T1R1.PNG"
import t1r2 from "../../images/T1R2.PNG"
import t2r1 from "../../images/T2R1.PNG"
import t2r2 from "../../images/T2R2.PNG"
import paypal from "../../images/paypal.png"
import mastercard from "../../images/Mastercard.png"
import mb from "../../images/mb.png"
import visa from "../../images/visa.png"


class Payment extends Component {

    constructor(props) {
        super(props);

    }


    buyTicket(){
        history.push("/")
        alert("Your tickets were purchased successfully! Check them in your e-mail.")
    }
    dontBuyTicket(){
        history.push({
            pathname: "/find/",
            state: { departure : this.props.location.state.departure}
        })
    }


    render() {
        return (
            <div className ="PaymentPage">

                <h3 style ={{"fontWeight":"bold", "textAlign":"center","textDecoration":"underline"}}>Ticket Information</h3>
                <div className="Objects">
                <div style={{"position":"relative"}}>
                    <>
                        {this.props.location.state.route === "t1r1"?
                            <img src = {t1r1} style={{"position":"absolute","transform":"scale(0.8)","marginTop":"-23vh"}} alt="t1r1"></img>
                        : this.props.location.state.route === "t1r2"?
                                <img src = {t1r2} style={{"position":"absolute","transform":"scale(0.8)","marginTop":"-23vh"}} alt="t1r2"></img>
                        : this.props.location.state.route === "t2r1" ?
                                    <img src = {t2r1} style={{"position":"absolute","transform":"scale(0.8)","marginTop":"-23vh"}} alt="t2r1"></img>
                                    :this.props.location.state.route === "t2r2"?
                                        <img src = {t2r2} style={{"position":"absolute","transform":"scale(0.8)","marginTop":"-23vh"}} alt="t2r2"></img>
                                    :null
                        }
                    </>
                </div>
                <div style={{"position":"relative","marginLeft":"70vw","marginTop":"20vh"}}>
                    <span style={{"position":"absolute","fontSize":"large","fontWeight":"bold"}}>Price: </span>
                    <span style={{"position":"absolute","marginLeft":"3.5vw"}}>{this.props.location.state.price}</span>
                </div>
                <div style={{"position":"relative","marginLeft":"70vw","marginTop":"26vh"}}>
                    <span style={{"position":"absolute","fontSize":"large","fontWeight":"bold","marginTop":"10vh"}}>Payment method:</span>
                    <>
                        {this.props.location.state.method === "mb" ?
                            <img src = {mb} style={{"position":"absolute","transform" : "scale(0.3)","marginLeft":"8vw","marginTop":"-5vh"}}></img>
                        :this.props.location.state.method === "mastercard"?
                                <img src = {mastercard} style={{"position":"absolute","marginTop":"-57vh","marginLeft":"-24vw","transform" : "scale(0.1)"}}></img>
                        :this.props.location.state.method === "visa"?
                                    <img src = {visa} style={{"position":"absolute","marginTop":"-45vh","marginLeft":"-25vw","transform" : "scale(0.09)"}}></img>
                        :this.props.location.state.method === "paypal"?
                                        <img src = {paypal} style={{"position":"absolute","marginTop":"-20vh","marginLeft":"-33vw","transform" : "scale(0.09)"}}></img>
                        :null}
                    </>
                </div>
                <div style={{"position":"relative","float":"right"}}>
                    <h5 style ={{"fontWeight":"bold", "textAlign":"center","marginLeft":"-30vw","marginTop":"23vh"}}>Are you sure you want to buy this ticket? </h5>
                    <input className ="paymentButtons" type="image" src={no}  style={{"marginTop":"-27vh","marginLeft":"-32vw"}}onClick={()=>this.dontBuyTicket()}alt ="no"/>
                    <input className ="paymentButtons"type="image" src={yes} style={{"marginTop":"-27vh","marginLeft":"-16vw"}} onClick={()=>this.buyTicket()} alt = "yes"/>

                </div>
                </div>


            </div>

        )
    }
}

export default withRouter(Payment);