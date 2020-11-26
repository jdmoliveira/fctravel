import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import {Button, Form, Modal} from 'react-bootstrap';


class Login extends Component{

    constructor(props ) {
        super(props);
        this.state = {open : false, email : "", password:""}

    }


    submit(){
        if(this.state.email === "" || this.state.password === ""){
            alert("Obligatory parameters are missing")
        }
        if(this.state.email !== localStorage.getItem("email") && this.state.password !== localStorage.getItem("password")){
            alert("Email or password is wrong")
        }
        localStorage.setItem("token", "on")
        this.props.onChange()



    }
    changeShow(){
        this.props.onChange()
    }
    updateInfo(event){
        event.preventDefault()
        event.stopPropagation()
        const input = event.currentTarget
        const value = input.value
        const id = input.id

        switch (id) {
            case "EMAIL":
                this.setState({email:value})
                break;
            case "PASSWORD":
                this.setState({password:value})
                break;

        }

    }
    render() {

        return (

            <Modal show={this.props.show} onHide={()=>this.changeShow()}>
                <Modal.Header style={{"margin":"auto","fontWeight":"bold","fontSize":"150%"}}>Login</Modal.Header>
                <Modal.Body>
                    <div className='login-modal-inputs-wrapper'>
                        <Form>
                            <Form.Group controlId="EMAIL">
                                <Form.Text>E-mail</Form.Text>
                                <Form.Control type="username" placeholder="Insert your e-mail" onChange={(event)=>this.updateInfo(event)}/>
                            </Form.Group>
                            <Form.Group controlId = "PASSWORD">
                                <Form.Text>Password</Form.Text>
                                <Form.Control type="password" placeholder="Password" onChange={(event)=>this.updateInfo(event)}/>
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
                        <Button type="submit" onClick={()=>this.submit()}>
                            Submit
                        </Button>
                    </div>
                </Modal.Footer>
            </Modal>

        )
    }
}
export default withRouter(Login)
