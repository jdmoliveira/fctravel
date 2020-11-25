import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import {Button, Form, Modal} from 'react-bootstrap';


class Login extends Component{
    constructor(props ) {
        super(props);
        this.state = {open : false}

    }


    submit(){


    }
    changeShow(){
        this.props.onChange()
    }

    render() {

        return (

            <Modal show={this.props.show} onHide={()=>this.changeShow()}>
                <Modal.Header style={{"margin":"auto","fontWeight":"bold","fontSize":"150%"}}>Login</Modal.Header>
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
                <Modal.Footer>

                    <div className='login-buttons-wrapper'>
                        <Button type="submit" onClick={this.submit()}>
                            Submit
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>

        )
    }
}
export default withRouter(Login)