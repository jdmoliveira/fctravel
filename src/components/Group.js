import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

function Group() {
        return(
            <div className="Group" style={{"z-index":"-20"}}>
                    <h3>Group Members:</h3>
                <p>     José Oliveira 52720</p>
                <p>     Gonçalo Cabaço 53400</p>
                <p>     André Auxtero 52388</p>
                <p>     Henrique Realinho 50415</p>

            </div>
        );

}

export default withRouter(Group);