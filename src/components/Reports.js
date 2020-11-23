import React, { Component } from 'react';
import { withRouter } from "react-router-dom";

function Reports(){

        return(
            <div className="Reports" style={{"overflow":"hidden","z-index":"-20"}}>
                <h1>Reports</h1>
                <div>
                    <p>Final project</p>
                    <a>Phase 1: </a>
                    <a href="https://drive.google.com/file/d/1WxDoWkm_9ozYlGuhPnel2IhgE5M5MnNB/view?usp=sharing" download>Stage1</a>
                    <p/>
                    <a>Phase 2: </a>
                    <a href="https://drive.google.com/file/d/1dgxSKn92U1PJwDNgCMkoOc-rzy3OYLfJ/view?usp=sharing" download>User and Task Analysis</a>
                    <p/>
                    <a>Good and Bad Interfaces: </a>
                    <a href="https://drive.google.com/file/d/1mGomf5SyAXz5Iqh4OQKAS1O8JKiVzeOn/view?usp=sharing" download>José Oliveira nº52720; </a>
                    <a href="https://drive.google.com/file/d/16P6iGzK-2T-KJk2L8LcdrgJ39vQaDdhY/view?usp=sharing" download>Gonçalo Cabaço nº53400; </a>
                    <a href="https://drive.google.com/file/d/15HswiizDQ5OJeRW5yV0ZVDJqIVzWAyu2/view?usp=sharing" download>Henrique Realinho nº50415; </a>
                    <a href="https://drive.google.com/file/d/1j7FpwZyaXigrCggnEofgQVOpXAVxnycd/view?usp=sharing" download>André Auxtero nº52388 </a>

                </div>
            </div>
        );
}

export default withRouter(Reports);