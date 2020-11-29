import React, {Component} from "react";
import history from "../../../history";
import { withRouter } from "react-router-dom";
import './Profile.css'
import {AiOutlineLogout,AiOutlineFilePdf} from "react-icons/ai";
import {CgProfile} from 'react-icons/cg'
import {Form} from 'react-bootstrap'

class Profile extends Component {

    constructor(props) {
        super(props);
        this.state={name:localStorage.getItem("name"), email:localStorage.getItem("email"), birth:localStorage.getItem("birth"),file:null}

    }


    logout(){
        history.push("/ipm_project/")
        localStorage.setItem("token","off")

    }
    changeInfo(event){
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
            case "DATE":
                this.setState({birth:value})
                break;
            case "FILE":
                this.setState({file:value})
                break;

        }
    }
    saveChanges(){
        const whereAt = this.state.email.split("@")
        const yearArr = this.state.birth.toString().split("-");
        if(whereAt.length !== 2 || whereAt[1].split(".").length !== 2 ){
            alert("Invalid e-mail")
            return 0;
        }

        if(yearArr[0] >= 2013){
            alert("Invalid birthdate")
            return 0;
        }
        history.push("/ipm_project/")
        localStorage.setItem("name",this.state.name)
        localStorage.setItem("email",this.state.email)
        localStorage.setItem("birth",this.state.birth)
        if(this.state.file !== null) {
            localStorage.setItem("userType","Student")
        }

        alert("Account updated successfully!")
    }



    render() { // arrows TODO, logos TODO
        return (
            <>
                <div className = "ScreenProf">
                    <><CgProfile style ={{"transform":"scale(8)", "marginTop":"10vh","marginLeft":"7vw"}}></CgProfile></>
                    <Form style={{"width":"30vw", "marginLeft":"16vw","marginTop":"-10vh"}}>
                        <Form.Group controlId="NAME" >
                            <Form.Text style={{"fontWeight":"bold"}}>Name:</Form.Text>
                            <Form.Control type="username" value ={this.state.name} onChange={(event)=>this.changeInfo(event)}/>
                        </Form.Group>
                        <Form.Group controlId="EMAIL" >
                            <Form.Text style={{"fontWeight":"bold"}}>Email:</Form.Text>
                            <Form.Control type="email" value ={this.state.email} onChange={(event)=>this.changeInfo(event)}/>
                        </Form.Group>
                        <Form.Group controlId="DATE" >
                            <Form.Text style={{"fontWeight":"bold"}}>Birth date:</Form.Text>
                            <Form.Control type="date" style={{"width":"14vw"}} value ={this.state.birth} onChange={(event)=>this.changeInfo(event)}/>
                        </Form.Group>
                        <p style={{"fontSize":"90%","fontWeight":"bold"}}>User Type : {localStorage.getItem("userType")}</p>
                        <p/>
                        <>
                        {localStorage.getItem("userType") === "Default" ?
                        <Form.Group controlId="FILE" >
                            <Form.Text style={{"textDecoration":"underline"}}>Apply for student account *    <AiOutlineFilePdf style={{"color":"red","transform":"scale(2)"}}/></Form.Text>
                            <p/>
                            <Form.Control type="file" style={{"width":"14vw"}}onChange={(event)=>this.changeInfo(event)}></Form.Control>

                        </Form.Group>
                            : null}
                            </>
                    </Form>
                    <button className = "Logout" onClick={() => this.logout()}>Logout <AiOutlineLogout/></button>
                    <>
                        {(localStorage.getItem("name") === this.state.name && localStorage.getItem("email") === this.state.email && localStorage.getItem("birth") === this.state.birth && this.state.file === null)
                            || (this.state.name === "" || this.state.email === "")  ?
                            <button className = "SaveChangesNot" onClick={() => this.saveChanges()} disabled>Save</button>
                            :
                            <button className = "SaveChanges" onClick={() => this.saveChanges()} >Save</button>
                        }
                    </>
                    <button className = "CancelChanges" onClick={() => history.push("/ipm_project/")}>Cancel</button>
                </div>
                <>
                    {localStorage.getItem("userType") === "Default" ?
                        <p style={{"float":"right","marginTop":"75vh","color":"#C1CCC6"}}>*Get discounts on all your travels by sending us a PDF file with proof of enrollment      *</p>
                        :null}
                </>
            </>


        )
    }
}

export default withRouter(Profile);