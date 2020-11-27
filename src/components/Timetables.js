import history from "../history";
import Datetime from "react-datetime";
import './Timetables.css'
import {withRouter,Route} from "react-router-dom";
import React from "react";

var url = ""; 

class Timetables extends React.Component {

    constructor() {
        super();
    }

    
    checkClicked(id){
    var button = document.getElementById("SearchButton");
      for (var i = 1; i<=6; i++){
        document.getElementById("check"+i).checked = false;
      }
    document.getElementById(id).checked = true;
    if (button.disabled == true)
      button.disabled = false;
  }

  goToWebsite(i){
    switch(i){
      case 1: url = "https://www.cp.pt/passageiros/pt/consultar-horarios";      //Go to CP
      break;
      case 2: url = "https://www.metrolisboa.pt/viajar/horarios-e-frequencias/";          //Go to Metro;
      break;
      case 3: url = "https://www.fertagus.pt/pt/horarios/fertagus";             //Go to Fertagus
      break;
      case 4: url = "https://www.rodoviariadelisboa.pt/horarios#tab0";   //Go to Rodoviária
      break;
      case 5: url = "https://www.carris.pt/viaje/carreiras/" ;              //Go to Carris
      break;
      case 6: url = "https://ttsl.pt/terminais-e-frota/terminais-e-estacoes/";                     //Go to Transtejo*/
      break;
    }
    window.location.href= url
  }

    initSearch(){
      var index = 0;
      for (var i =1; i<=6; i++){
        if(document.getElementById("check"+i).checked == true){
          index = i;
        }
      }
      console.log("Eu sou o i", index);
      this.goToWebsite(index);
    }


    render() { // arrows TODO, logos TODO
      return (
        <div>
        <div className = "TransportLines">
          <p className = "Titulo"> Public Transport Lines </p>
          <div className = "Option1">
                <input type="checkbox" id="check1" name="cp" onClick={()=> this.checkClicked("check1")}/>
                <label for="cp">CP</label>
          </div>
          <div className = "Option2">
                <input type="checkbox" id="check2" name="Metro" onClick={()=> this.checkClicked("check2")}/>
                <label for="Metro" className="option2">Metro</label>
          </div>
          <div className = "Option3">
                <input type="checkbox" id="check3" name="Fertagus" onClick={()=> this.checkClicked("check3")}/>
                <label for="Fertagus">Fertagus</label>
          </div>
          <div className = "Option4">
                <input type="checkbox" id="check4" name="Rodoviaria" onClick={()=> this.checkClicked("check4")}/>
                <label for="Rodoviaria">Rodoviária</label>
          </div>
          <div className = "Option5">
                <input type="checkbox" id="check5" name="Carris" onClick={()=> this.checkClicked("check5")}/>
                <label for="Carris">Carris</label>
          </div>
          <div className = "Option6">
                <input type="checkbox" id="check6" name="Transtejo" onClick={()=> this.checkClicked("check6")}/>
                <label for="Transtejo">Transtejo</label>
        </div>
        </div>
          <div className = "Departure">
          <p>Enter departure date:</p>
            <Datetime />
          </div>
          <div className = "Arrival">
          <p>Enter arrival date:</p>
            <Datetime />
          </div>
        <div className = "ButtonSearch">
        <Route render ='/privacy-policy' component={() => (
            <input type='button' id ="SearchButton" value = "Search" onClick={() => {this.initSearch()}} >
            </input>)} />
        </div>
        </div>   
      )
      
    }
  }
    

export default withRouter(Timetables);
