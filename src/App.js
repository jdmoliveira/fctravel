import React, {Component} from 'react';
import logo from './train_logo.png';
import './App.css';
import { withRouter } from "react-router-dom";

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="App App-layout">
                    <h3>FCTravel</h3>
                    <img src={logo} className="App-logo" alt="logo"/>
                </div>
            </div>
        );
    }
}

export default withRouter(App);
