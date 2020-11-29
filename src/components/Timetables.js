import history from "../history";
import Datetime from "react-datetime";
import './Timetables.css'
import {withRouter,Route} from "react-router-dom";
import React from "react";
import Footer from './Footer';
import cp_azambuja_sintra from '../images/cp_azambuja_sintra.png'
import cp_sintra_azambuja from '../images/cp_sintra_azambuja.png'
import metrolisboa_linhaamarela from '../images/metrolisboa_linhaamarela.png'
import fertagus_lisboa_setubal from '../images/fertagus_lisboa_setubal.png'
import fertagus_setubal_lisboa from '../images/fertagus_setubal_lisboa.png'
import rodoviaria_canecas_colegio from '../images/rodoviaria_canecas_colegio.png'
import rodoviaria_colegio_canecas from '../images/rodoviaria_colegio_canecas.png'
import carris_campo_martim from '../images/carris_campo_martim.png'
import carris_martim_campo from '../images/carris_martim_campo.png'
import transtejo_cacilhas_cais from '../images/transtejo_cacilhas_cais.png'
import transtejo_cais_cacilhas from '../images/transtejo_cais_cacilhas.png'

var hasImage = false;

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
      return 0;
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
    var labels;
    switch(i){
      case 1: 
        labels = document.getElementById("cp");
        if (labels.innerHTML === "CP Linha Sintra(Sintra-&gt;Azambuja)")
          labels.innerHTML = "CP Linha Sintra(Azamubja-&gt;Sintra)";
        else
          labels.innerHTML = "CP Linha Sintra(Sintra-&gt;Azambuja)";
      break;
      case 2: 
        labels = document.getElementById("metro");
        if (labels.innerHTML === "Metro de Lisboa Linha Amarela (Odivelas-&gt;Rato)")
          labels.innerHTML = "Metro de Lisboa Linha Amarela (Rato-&gt;Odivelas)";
        else
          labels.innerHTML = "Metro de Lisboa Linha Amarela (Odivelas-&gt;Rato)";
      break;
      case 3: 
        labels = document.getElementById("fertagus");
        if (labels.innerHTML === "Fertagus(Setúbal-&gt;Lisboa)")
          labels.innerHTML = "Fertagus(Lisboa-&gt;Setúbal)";
        else
          labels.innerHTML = "Fertagus(Setúbal-&gt;Lisboa)";
      break;
      case 4: 
        labels = document.getElementById("rodoviaria");
        if (labels.innerHTML === "Rodoviária de Lisboa (Colégio Militar-&gt;Caneças(Jardim))")
          labels.innerHTML = "Rodoviária de Lisboa (Caneças(Jardim)-&gt;Colégio Militar)";
        else
          labels.innerHTML = "Rodoviária de Lisboa (Colégio Militar-&gt;Caneças(Jardim))";
      break;
      case 5: 
        labels = document.getElementById("carris");
          if (labels.innerHTML === "Carris - Carreira 28E (Martim Moniz-&gt;Campo Ourique)")
            labels.innerHTML = "Carris - Carreira 28E (Campo Ourique-&gt;Martim Moniz)";
          else
            labels.innerHTML = "Carris - Carreira 28E (Martim Moniz-&gt;Campo Ourique)";
      break;
      case 6:
        labels = document.getElementById("transtejo");
        if (labels.innerHTML === "Transtejo (Cacilhas-&gt;Cais do Sodré)")
          labels.innerHTML = "Transtejo (Cais do Sodré-&gt;Cacilhas)";
        else
          labels.innerHTML = "Transtejo (Cacilhas-&gt;Cais do Sodré)"; 
      break;
    }
    if (hasImage)
      this.showTimetableImage(i);
  }

  showTimetableImage(i){
    hasImage = true;
    var image;
    var labels;
    for (var j = 1; j <=11; j++){
    document.getElementById("image"+j).style.display = "none";
    }
    var arrival = document.getElementById("Arrival");
    var departure = document.getElementById("Departure");
    arrival.style.display = "none";
    departure.style.display = "none";
    switch(i){
      case 1:
        labels = document.getElementById("cp");
        if(labels.innerHTML === "CP Linha Sintra(Sintra-&gt;Azambuja)")
          image = document.getElementById("image1");
        else 
          image = document.getElementById("image2");
      break;
      case 2:
        image = document.getElementById("image3");
      break;
      case 3: 
        labels = document.getElementById("fertagus");
          if(labels.innerHTML === "Fertagus(Lisboa-&gt;Setúbal)")
            image = document.getElementById("image4");
          else 
            image = document.getElementById("image5");
      break;
      case 4:
        labels = document.getElementById("rodoviaria");
        if(labels.innerHTML === "Rodoviária de Lisboa (Caneças(Jardim)-&gt;Colégio Militar)")
          image = document.getElementById("image6");
        else 
          image = document.getElementById("image7");
      break;
      case 5: 
        labels = document.getElementById("carris");
          if(labels.innerHTML === "Carris - Carreira 28E (Campo Ourique-&gt;Martim Moniz)")
            image = document.getElementById("image8");
          else 
            image = document.getElementById("image9");
      break;
      case 6:
        labels = document.getElementById("transtejo");
        if(labels.innerHTML === "Transtejo (Cacilhas-&gt;Cais do Sodré)")
          image = document.getElementById("image10");
        else 
          image = document.getElementById("image11");
      break;
    }
    image.style.display = "block";
    //window.location.href= urlz
  }

  initSearch(){
      if (this.getSelected()!=0){
        var index = 0;
        for (var i =1; i<=6; i++){
          if(document.getElementById("check"+i).checked == true){
            index = i;
          }
        }
        this.showTimetableImage(index);
      }
    }
      


  render() { // arrows TODO, logos TODO
      return (
        <div>
        <div className = "TransportLines">
          <p className = "Titulo"> Public Transport Lines </p>
          <div class = "ChangeButton">
          <input type='button' id ="SwitchButton" value = "Switch" onClick={() => {this.change(this.getSelected())}} >
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
        </div >
        <div className = "ImagesTimetable" id = "ImagesTimetable">
        <img src={cp_sintra_azambuja} style={{"transform":"scale(0.5)","marginLeft":"25vh", "marginBottom":"20vh", display: "none"}} className="cp_sintra_azambuja" alt="cp_sintra_azambuja" id="image1" />
        <img src={cp_azambuja_sintra} style={{"transform":"scale(0.5)","marginLeft":"25vh", "marginBottom":"20vh", display: "none"}} className="cp_azambuja_sintra" alt="cp_azambuja_sintra" id="image2" />
        <img src={metrolisboa_linhaamarela} style={{"transform":"scale(0.5)","marginLeft":"25vh", "marginBottom":"20vh", display: "none"}} className="cp_azambuja_sintra" alt="cp_azambuja_sintra" id="image3" />
        <img src={fertagus_lisboa_setubal} style={{"transform":"scale(0.5)","marginLeft":"25vh", "marginBottom":"20vh", display: "none"}} className="fertagus_lisboa_setubal" alt="fertagus_lisboa_setubal" id="image4" />
        <img src={fertagus_setubal_lisboa} style={{"transform":"scale(0.5)","marginLeft":"25vh", "marginBottom":"20vh", display: "none"}} className="fertagus_setubal_lisboa" alt="fertagus_setubal_lisboa" id="image5" />
        <img src={rodoviaria_canecas_colegio} style={{"transform":"scale(0.5)","marginLeft":"25vh", "marginBottom":"20vh", display: "none"}} className="rodoviaria_canecas_colegio" alt="rodoviaria_canecas_colegio" id="image6" />
        <img src={rodoviaria_colegio_canecas} style={{"transform":"scale(0.5)","marginLeft":"25vh", "marginBottom":"20vh", display: "none"}} className="rodoviaria_colegio_canecas" alt="rodoviaria_colegio_canecas" id="image7" />
        <img src={carris_campo_martim} style={{"transform":"scale(0.5)","marginLeft":"25vh", "marginBottom":"20vh", display: "none"}} className="carris_campo_martim" alt="carris_campo_martim" id="image8" />
        <img src={carris_martim_campo} style={{"transform":"scale(0.5)","marginLeft":"25vh", "marginBottom":"20vh", display: "none"}} className="carris_martim_campo" alt="carris_martim_campo" id="image9" />
        <img src={transtejo_cacilhas_cais} style={{"transform":"scale(0.5)","marginLeft":"25vh", "marginBottom":"20vh", display: "none"}} className="transtejo_cacilhas_cais" alt="transtejo_cacilhas_cais" id="image10" />
        <img src={transtejo_cais_cacilhas} style={{"transform":"scale(0.5)","marginLeft":"25vh", "marginBottom":"20vh", display: "none"}} className="transtejo_cais_cacilhas" alt="transtejo_cais_cacilhas" id="image11" />
          <div className = "Departure" id= "Departure">
            <p>Enter departure date:</p>
              <Datetime/>
            </div>
            <div className = "Arrival" id = "Arrival">
            <p>Enter arrival date:</p>
              <Datetime />
            </div>
          </div>
        <div className = "ButtonSearch">
            <input type='button' id ="SearchButton" value = "Search" onClick={() => {this.initSearch()}}>
            </input>
        </div>
        </div>   
      )
      
    }
  }
    

export default withRouter(Timetables);
