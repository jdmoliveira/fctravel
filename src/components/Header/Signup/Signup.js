import React, { Component } from 'react';
import { withRouter } from "react-router-dom";
import {Button, Form, Modal} from 'react-bootstrap';


class Signup extends Component{
    constructor(props ) {
        super(props);
        this.state = {open : false,name:"", email:"", password:"", confirm:"", birthdate:null}

    }


    submit(){
        const whereAt = this.state.email.split("@")
        const yearArr = this.state.birthdate.toString().split("-");
        if(this.state.password ==="" || this.state.confirm === "" || this.state.name === "" || this.state.email === ""){
            alert("There are obligatory parameters missing")
            return 0;
        }
        if(this.state.password !== this.state.confirm){
            alert("The password and the confirmation must be the same")
            return 0;
        }
        if(whereAt.length !== 2 || whereAt[1].split(".").length !== 2 ){
            alert("Invalid e-mail")
            return 0;
        }

        if(yearArr[0] >= 2013){
            alert("Invalid birthdate")
            return 0;
        }
        localStorage.setItem("name",this.state.name)
        localStorage.setItem("password",this.state.password)
        localStorage.setItem("email",this.state.email)
        localStorage.setItem("birth",this.state.birthdate)
        localStorage.setItem("userType", "Default")
        this.props.onChange()
        alert("Account created!")

    }
    changeShow(){
        this.props.onChange();
    }
    updateInfo(event){
        event.preventDefault()
        event.stopPropagation()
        const input = event.currentTarget
        const value = input.value
        const id = input.id
        switch (id) {
            case "NAME":
                this.setState({name:value})
                break;
            case "EMAIL":
                this.setState({email:value})
                break;
            case "PASSWORD":
                this.setState({password:value})
                break;
            case "CONFIRM":
                this.setState({confirm:value})
                break;
            case "DATE":
                this.setState({birthdate:value})
                break;

        }

    }
    render() {

        return (

            <Modal show={this.props.show} onHide={()=>this.changeShow()}>
                <Modal.Header style={{"margin":"auto","fontWeight":"bold","fontSize":"150%"}}>Signup</Modal.Header>
                <Modal.Body>
                    <div className='login-modal-inputs-wrapper'>
                        <Form>
                            <Form.Group controlId="NAME">
                                <Form.Control type="username" placeholder="Insert your name" onChange={(event)=>this.updateInfo(event)}/>
                            </Form.Group>
                            <Form.Group controlId="EMAIL">

                                <Form.Control type="email" placeholder="Insert your e-mail" onChange={(event)=>this.updateInfo(event)}/>
                            </Form.Group>
                            <Form.Group controlId="PASSWORD">

                                <Form.Control type="password" placeholder="Password" onChange={(event)=>this.updateInfo(event)}/>
                            </Form.Group>
                            <Form.Group controlId="CONFIRM">

                                <Form.Control type="password" placeholder="Confirm Password" onChange={(event)=>this.updateInfo(event)}/>
                            </Form.Group>
                            <Form.Group controlId="DATE">
                                <Form.Text>Birth date</Form.Text>
                                <Form.Control type="date" style={{"width":"50%"}} onChange={(event)=>this.updateInfo(event)}></Form.Control>
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
export default withRouter(Signup)