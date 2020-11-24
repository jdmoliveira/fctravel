import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import {Button, Form, Modal} from 'react-bootstrap';


class Login extends Component{
    constructor(props ) {
        super(props);
        this.state = {open : false}
        this.changeState = this.changeState.bind(this)
    }
    changeState=()=>{
        console.log("entrei")
        this.state.open = !this.state.open

    }

    render() {
        return (
            <Modal show={this.state.open}>
                <Modal.Header>Login</Modal.Header>
                <Modal.Body>
                    <div className='login-modal-inputs-wrapper'>
                        <Form>
                            <Form.Group>

                                <Form.Text>E-mail</Form.Text>
                                <Form.Control type="username" placeholder="Insert your e-mail"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Text>Password</Form.Text>
                                <Form.Control type="password" placeholder="Password"/>
                                <span style={
                                    {
                                        color: 'dodgerblue',
                                        textDecoration: 'underline',
                                        cursor: 'pointer',
                                        fontSize: 'small'
                                    }
                                }>Forgot my password</span>
                            </Form.Group>
                        </Form>
                    </div>
                </Modal.Body>
            </Modal>
        )
    }
}
export default withRouter(Login)