import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import {Button, Form, Modal} from 'react-bootstrap';


class Signup extends Component{
    constructor(props ) {
        super(props);
        this.state = {open : false}

    }


    submit(){

    }
    changeShow(){
        this.props.onChange();
    }
    render() {

        return (

            <Modal show={this.props.show} onHide={()=>this.changeShow()}>
                <Modal.Header style={{"margin":"auto","fontWeight":"bold","fontSize":"150%"}}>Signup</Modal.Header>
                <Modal.Body>
                    <div className='login-modal-inputs-wrapper'>
                        <Form>
                            <Form.Group>
                                <Form.Control type="username" placeholder="Insert your name"/>
                            </Form.Group>
                            <Form.Group>

                                <Form.Control type="email" placeholder="Insert your e-mail"/>
                            </Form.Group>
                            <Form.Group>

                                <Form.Control type="password" placeholder="Password"/>
                            </Form.Group>
                            <Form.Group>
                                <Form.Text>Birthdate</Form.Text>
                                <Form.Control type="date" style={{"width":"50%"}}></Form.Control>
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
export default withRouter(Signup)