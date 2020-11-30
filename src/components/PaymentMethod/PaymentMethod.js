import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import {Button, Form, Modal} from 'react-bootstrap';
import history from "../../history";
import paypal from "../../images/paypal.png"
import mastercard from "../../images/Mastercard.png"
import mb from "../../images/mb.png"
import visa from "../../images/visa.png"
import "./PaymentMethod.css"


class PaymentMethod extends Component{

    constructor(props ) {
        super(props);
        this.state = {price: this.props.price, route : this.props.route}

    }


    paypal(){
        this.changeShow()
        history.push({
            pathname: "/payment/",
            state: { method : "paypal", route : this.props.route,price: this.props.price,departure : this.props.departure}
        })
    }
    mb(){
        this.changeShow()
        history.push({
            pathname: "/payment/",
            state: { method : "mb", route : this.props.route,price: this.props.price, departure : this.props.departure}
            })
    }
    visa(){
        this.changeShow()
        history.push({
            pathname: "/payment/",
            state: { method : "visa", route : this.props.route,price: this.props.price, departure:this.props.departure}
        })
    }
    mastercard(){
        this.changeShow()
        history.push({
            pathname: "/payment/",
            state: { method : "mastercard", route : this.props.route,price: this.props.price,departure : this.props.departure}
        })
    }
    changeShow(){
        this.props.onChange()
        history.push({pathname:"/ipm_project/find/", state:{departure:this.props.departure}})
    }



    render() {

        return (

            <Modal size = "lg" show={this.props.show} onHide={()=>this.changeShow()}>
                <Modal.Header style={{"margin":"auto","fontWeight":"bold","fontSize":"150%"}}>Choose your payment method</Modal.Header>
                <Modal.Body style={{"height":"78vh","position":"relative"}}>

                            <input type="image" src={mb} style={{"position":"absolute","transform":"scale(0.55)","marginLeft":"2vw","display":"block"}} alt ="mb" onClick={()=>this.mb()}/>
                            <input type="image" src={paypal} style={{"position":"absolute","transform":"scale(0.15)","marginTop":"-13vh","marginLeft":"-15vw","display":"block"}} alt = "paypal"onClick={()=>this.paypal()}/>
                            <input type="image" src={mastercard} style={{"position":"absolute","transform":"scale(0.13)","marginTop":"-20vh","marginLeft":"-31vw","display":"block"}} alt = "mastercard" onClick={()=>this.mastercard()}/>
                            <input type="image" src={visa} style={{"position":"absolute","transform":"scale(0.14)","marginTop":"-9vh","marginLeft":"-5vw","display":"block"}} alt = "visa" onClick={()=>this.visa()}/>
                </Modal.Body>
            </Modal>

        )
    }
}
export default withRouter(PaymentMethod)
