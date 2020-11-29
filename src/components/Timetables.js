import history from "../history";
import Datetime from "react-datetime";
import './Timetables.css'
import {withRouter,Route} from "react-router-dom";
import React from "react";

class Timetables extends React.Component {

  
  constructor() {
        super();
    }

  getSelected(){
      for (var i = 1; i<=6;i++){
        var checkbox = document.getElementById("check"+i);
        if (checkbox.checked == true){
          return i;
        }
      }
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

  change(i){
    var selected = document.getElementById("check"+i);
    switch(i){
      case 1: 
        var labels = document.getElementById("cp");
        if (labels.innerHTML === "CP Linha Sintra(Sintra-&gt;Azambuja)")
          labels.innerHTML = "CP Linha Sintra(Azamubja-&gt;Sintra)";
        else
          labels.innerHTML = "CP Linha Sintra(Sintra-&gt;Azambuja)";
      break;
      case 2: 
        var labels = document.getElementById("metro");
        if (labels.innerHTML === "Metro de Lisboa Linha Amarela (Odivelas-&gt;Rato)")
          labels.innerHTML = "Metro de Lisboa Linha Amarela (Rato-&gt;Odivelas)";
        else
          labels.innerHTML = "Metro de Lisboa Linha Amarela (Odivelas-&gt;Rato)";
      break;
      case 3: 
        var labels = document.getElementById("fertagus");
        if (labels.innerHTML === "Fertagus(Setúbal-&gt;Lisboa)")
          labels.innerHTML = "Fertagus(Lisboa-&gt;Setúbal)";
        else
          labels.innerHTML = "Fertagus(Setúbal-&gt;Lisboa)";
      break;
      case 4: 
        var labels = document.getElementById("rodoviaria");
        if (labels.innerHTML === "Rodoviária de Lisboa (Colégio Militar-&gt;Caneças(Jardim))")
          labels.innerHTML = "Rodoviária de Lisboa (Caneças(Jardim)-&gt;Colégio Militar)";
        else
          labels.innerHTML = "Rodoviária de Lisboa (Colégio Militar-&gt;Caneças(Jardim))";
      break;
      case 5: 
        var labels = document.getElementById("carris");
          if (labels.innerHTML === "Carris - Carreira 28E (Martim Moniz-&gt;Campo Ourique)")
            labels.innerHTML = "Carris - Carreira 28E (Campo Ourique-&gt;Martim Moniz)";
          else
            labels.innerHTML = "Carris - Carreira 28E (Martim Moniz-&gt;Campo Ourique)";
      break;
      case 6:
        var labels = document.getElementById("transtejo");
        if (labels.innerHTML === "Transtejo (Cacilhas-&gt;Cais do Sodré)")
          labels.innerHTML = "Transtejo (Cais do Sodré-&gt;Cacilhas)";
        else
          labels.innerHTML = "Transtejo (Cacilhas-&gt;Cais do Sodré)"; 
      break;
    }
  }

  showTimetableImage(i){
    var arrival = document.getElementById("Arrival");
    var departure = document.getElementById("Departure");
    arrival.style.display = "none";
    departure.style.display = "none";
    switch(i){
      case 1: 
      //url = "https://www.cp.pt/passageiros/pt/consultar-horarios";      //Go to CP
      break;
      case 2: //url = "https://www.metrolisboa.pt/viajar/horarios-e-frequencias/";          //Go to Metro;
      break;
      case 3: //url = "https://www.fertagus.pt/pt/horarios/fertagus";             //Go to Fertagus
      break;
      case 4: //url = "https://www.rodoviariadelisboa.pt/horarios#tab0";   //Go to Rodoviária
      break;
      case 5: //url = "https://www.carris.pt/viaje/carreiras/" ;              //Go to Carris
      break;
      case 6: //url = "https://ttsl.pt/terminais-e-frota/terminais-e-estacoes/";                     //Go to Transtejo*/
      break;
    }
    //window.location.href= url
  }

  initSearch(){
      var index = 0;
      for (var i =1; i<=6; i++){
        if(document.getElementById("check"+i).checked == true){
          index = i;
        }
      }
      this.showTimetableImage(index);
    }


  render() { // arrows TODO, logos TODO
      return (
        <div>
        <div className = "TransportLines">
          <p className = "Titulo"> Public Transport Lines </p>
          <div class = "ChangeButton">
          <input type='button' id ="SearchButton" value = "Switch" onClick={() => {this.change(this.getSelected())}} >
            </input> 
          </div>
          <div className = "Option1">
                <input type="checkbox" id="check1" name="cp" onClick={()=> this.checkClicked("check1")}/>
                <label id ="cp" for="cp">CP Linha Sintra(Sintra->Azambuja)</label>
          </div>
          <div className = "Option2">
                <input type="checkbox" id="check2" name="Metro" onClick={()=> this.checkClicked("check2")}/>
                <label id ="metro" for="Metro" className="option2">Metro de Lisboa Linha Amarela (Odivelas->Rato)</label>
          </div>
          <div className = "Option3">
                <input type="checkbox" id="check3" name="Fertagus" onClick={()=> this.checkClicked("check3")}/>
                <label id= "fertagus" for="Fertagus">Fertagus(Setúbal->Lisboa)</label>
          </div>
          <div className = "Option4">
                <input type="checkbox" id="check4" name="Rodoviaria" onClick={()=> this.checkClicked("check4")}/>
                <label id= "rodoviaria" for="Rodoviaria">Rodoviária de Lisboa (Colégio Militar->Caneças(Jardim))</label>
          </div>
          <div className = "Option5">
                <input type="checkbox" id="check5" name="Carris" onClick={()=> this.checkClicked("check5")}/>
                <label id ="carris" for="Carris">Carris - Carreira 28E (Martim Moniz->Campo Ourique)</label>
          </div>
          <div className = "Option6">
                <input type="checkbox" id="check6" name="Transtejo" onClick={()=> this.checkClicked("check6")}/>
                <label id="transtejo" for="Transtejo">Transtejo (Cacilhas–>Cais do Sodré)</label>
        </div>
        </div>
          <div className = "Departure" id= "Departure">
          <p>Enter departure date:</p>
            <Datetime/>
          </div>
          <div className = "Arrival" id = "Arrival">
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
