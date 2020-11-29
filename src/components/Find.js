import React from "react";
import { withRouter } from "react-router-dom";
import history from "../history";
import './Find.css'
import map1 from '../images/1.PNG';
import map2 from '../images/2.PNG';
import t1r1 from '../images/T1R1.PNG';
import t1r2 from '../images/T1R2.PNG';
import t2r1 from '../images/T2R1.PNG';
import t2r2 from '../images/T2R2.PNG';
import PaymentMethod from "./PaymentMethod/PaymentMethod";
const t1r1_prices = [['CP Castanheira do Ribatejo - Alcântara', '1.35€'], ['Fertagus Roma-Areeiro - Coina', '2.00€'], ['MTS Universidade', '0.85€']];
const t1r2_prices = [['CP Castanheira do Ribatejo - Alcântara', '1.35€'], ['Fertagus Roma-Areeiro - Coina', '2.00€'], ['TST 124 - Monte da Caparica', '1.40€']];
const t2r1_prices = [['Fertagus Setúbal - Roma-Areeiro', '3.45€'], ['MTS Universidade', '0.85€']];
const t2r2_prices = [['Fertagus Setúbal - Roma-Areeiro', '3.45€'], ['TST 124 - Monte da Caparica', '1.40€']];

class Find extends React.Component {

    state = {
        currentRoute: null,
        t1r1_1: true, t1r1_2: true, t1r1_3: true, t1r2_1: true, t1r2_2: true, t1r2_3: true, t2r1_1: true, t2r1_2: true, t2r2_1: true, t2r2_2: true,
        t1r1_total: '4.20€', t1r2_total: '4.75€', t2r1_total: '4.30€', t2r2_total: '4.85€',paymentUp :false
    };

    componentDidMount = () => {
        if (this.props.location.state.departure.trim() === 'Oriente')
            this.setState({ currentRoute: 't1r1' });
        else
            this.setState({ currentRoute: 't2r1' });
    }

    onChangeValue = (event) => {
        this.setState({ currentRoute: event.target.value });
    }

    handleCheckboxChange = (event, price) => {
        if (this.state.currentRoute === 't1r1') {
            if (event.target.checked) {
                this.setState({
                    t1r1_total: (parseFloat(this.state.t1r1_total.replace('€', '')) + parseFloat(price.replace('€', ''))).toFixed(2) + '€'
                });
            }
            else
                this.setState({
                    t1r1_total: (parseFloat(this.state.t1r1_total.replace('€', '')) - parseFloat(price.replace('€', ''))).toFixed(2) + '€'
                });
        }
        else if (this.state.currentRoute === 't1r2') {
            if (event.target.checked) {
                this.setState({
                    t1r2_total: (parseFloat(this.state.t1r2_total.replace('€', '')) + parseFloat(price.replace('€', ''))).toFixed(2) + '€'
                });
            }
            else
                this.setState({
                    t1r2_total: (parseFloat(this.state.t1r2_total.replace('€', '')) - parseFloat(price.replace('€', ''))).toFixed(2) + '€'
                });
        }
        else if (this.state.currentRoute === 't2r1') {
            if (event.target.checked) {
                this.setState({
                    t2r1_total: (parseFloat(this.state.t2r1_total.replace('€', '')) + parseFloat(price.replace('€', ''))).toFixed(2) + '€'
                });
            }
            else
                this.setState({
                    t2r1_total: (parseFloat(this.state.t2r1_total.replace('€', '')) - parseFloat(price.replace('€', ''))).toFixed(2) + '€'
                });
        }
        else {
            if (event.target.checked) {
                this.setState({
                    t2r2_total: (parseFloat(this.state.t2r2_total.replace('€', '')) + parseFloat(price.replace('€', ''))).toFixed(2) + '€'
                });
            }
            else
                this.setState({
                    t2r2_total: (parseFloat(this.state.t2r2_total.replace('€', '')) - parseFloat(price.replace('€', ''))).toFixed(2) + '€'
                });
        }
        this.setState({
            [event.target.name]: event.target.checked
        });
    }

    currentPrice = () => {
        if (this.state.currentRoute === 't1r1')
            return this.state.t1r1_total;
        else if (this.state.currentRoute === 't1r2')
            return this.state.t1r2_total;
        else if (this.state.currentRoute === 't2r1')
            return this.state.t2r1_total;
        else
            return this.state.t2r2_total;
    }
    paymentChange=()=>{
        this.setState({paymentUp:!this.state.paymentUp})
    }
    render() {
        return (
            <div id='main'>
                <div id='routes'>
                    <div id='map'>
                        {this.props.location.state.departure.trim() === 'Oriente' ? (
                            <img className='image' src={map1} alt='map1' />
                        ) : (
                                <img className='image' src={map2} alt='map2' />
                            )}
                    </div>
                    <div id='options'>
                        <p>From: {this.props.location.state.departure}</p>
                        <p>To: {this.props.location.state.arrival}</p>
                        <hr id='line' />
                        {this.props.location.state.departure.trim() === 'Oriente' ? (
                            <div onChange={this.onChangeValue}>
                                <input type="radio" value="t1r1" name="option" defaultChecked />
                                <img className='image' src={t1r1} alt='trip1_route1' />
                                <hr id='line' />
                                <input type="radio" value="t1r2" name="option" />
                                <img className='image' src={t1r2} alt='trip1_route2' />
                            </div>
                        ) : (
                                <div onChange={this.onChangeValue}>
                                    <input type="radio" value="t2r1" name="option" defaultChecked />
                                    <img className='image' src={t2r1} alt='trip2_route1' />
                                    <hr id='line' />
                                    <input type="radio" value="t2r2" name="option" />
                                    <img className='image' src={t2r2} alt='trip2_route2' />
                                </div>
                            )}
                    </div>
                </div>
                <div id='buy'>
                    <p>Tickets:</p>
                    {this.state.currentRoute === 't1r1' ? (
                        <div>
                            <div className='ticketInfo'>
                                {t1r1_prices[0][0]}
                                <input
                                    name="t1r1_1" type="checkbox"
                                    checked={this.state.t1r1_1}
                                    onChange={(e) => this.handleCheckboxChange(e, t1r1_prices[0][1])} />
                                {this.state.t1r1_1 === true ? (
                                    <span>{t1r1_prices[0][1]}</span>
                                ) : (
                                        <span></span>
                                    )}
                            </div>
                            <div className='ticketInfo'>
                                {t1r1_prices[1][0]}
                                <input
                                    name="t1r1_2" type="checkbox"
                                    checked={this.state.t1r1_2}
                                    onChange={(e) => this.handleCheckboxChange(e, t1r1_prices[1][1])} />
                                {this.state.t1r1_2 === true ? (
                                    <span>{t1r1_prices[1][1]}</span>
                                ) : (
                                        <span></span>
                                    )}
                            </div>
                            <div className='ticketInfo'>
                                {t1r1_prices[2][0]}
                                <input
                                    name="t1r1_3" type="checkbox"
                                    checked={this.state.t1r1_3}
                                    onChange={(e) => this.handleCheckboxChange(e, t1r1_prices[2][1])} />
                                {this.state.t1r1_3 === true ? (
                                    <span>{t1r1_prices[2][1]}</span>
                                ) : (
                                        <span></span>
                                    )}
                            </div>
                        </div>
                    ) : this.state.currentRoute === 't1r2' ? (
                        <div>
                            <div className='ticketInfo'>
                                {t1r2_prices[0][0]}
                                <input
                                    name="t1r2_1" type="checkbox"
                                    checked={this.state.t1r2_1}
                                    onChange={(e) => this.handleCheckboxChange(e, t1r2_prices[0][1])} />
                                {this.state.t1r2_1 === true ? (
                                    <span>{t1r2_prices[0][1]}</span>
                                ) : (
                                        <span></span>
                                    )}
                            </div>
                            <div className='ticketInfo'>
                                {t1r2_prices[1][0]}
                                <input
                                    name="t1r2_2" type="checkbox"
                                    checked={this.state.t1r2_2}
                                    onChange={(e) => this.handleCheckboxChange(e, t1r2_prices[1][1])} />
                                {this.state.t1r2_2 === true ? (
                                    <span>{t1r2_prices[1][1]}</span>
                                ) : (
                                        <span></span>
                                    )}
                            </div>
                            <div className='ticketInfo'>
                                {t1r2_prices[2][0]}
                                <input
                                    name="t1r2_3" type="checkbox"
                                    checked={this.state.t1r2_3}
                                    onChange={(e) => this.handleCheckboxChange(e, t1r2_prices[2][1])} />
                                {this.state.t1r2_3 === true ? (
                                    <span>{t1r2_prices[2][1]}</span>
                                ) : (
                                        <span></span>
                                    )}
                            </div>
                        </div>
                    ) : this.state.currentRoute === 't2r1' ? (
                        <div>
                            <div className='ticketInfo'>
                                {t2r1_prices[0][0]}
                                <input
                                    name="t2r1_1" type="checkbox"
                                    checked={this.state.t2r1_1}
                                    onChange={(e) => this.handleCheckboxChange(e, t2r1_prices[0][1])} />
                                {this.state.t2r1_1 === true ? (
                                    <span>{t2r1_prices[0][1]}</span>
                                ) : (
                                        <span></span>
                                    )}
                            </div>
                            <div className='ticketInfo'>
                                {t2r1_prices[1][0]}
                                <input
                                    name="t2r1_2" type="checkbox"
                                    checked={this.state.t2r1_2}
                                    onChange={(e) => this.handleCheckboxChange(e, t2r1_prices[1][1])} />
                                {this.state.t2r1_2 === true ? (
                                    <span>{t2r1_prices[1][1]}</span>
                                ) : (
                                        <span></span>
                                    )}
                            </div>
                        </div>
                    ) : (
                                    <div>
                                        <div className='ticketInfo'>
                                            {t2r2_prices[0][0]}
                                            <input
                                                name="t2r2_1" type="checkbox"
                                                checked={this.state.t2r2_1}
                                                onChange={(e) => this.handleCheckboxChange(e, t2r2_prices[0][1])} />
                                            {this.state.t2r2_1 === true ? (
                                                <span>{t2r2_prices[0][1]}</span>
                                            ) : (
                                                    <span></span>
                                                )}
                                        </div>
                                        <div className='ticketInfo'>
                                            {t2r2_prices[1][0]}
                                            <input
                                                name="t2r2_2" type="checkbox"
                                                checked={this.state.t2r2_2}
                                                onChange={(e) => this.handleCheckboxChange(e, t2r2_prices[1][1])} />
                                            {this.state.t2r2_2 === true ? (
                                                <span>{t2r2_prices[1][1]}</span>
                                            ) : (
                                                    <span></span>
                                                )}
                                        </div>
                                    </div>
                                )}
                    <hr id='line2' />
                    Total:&nbsp;
                    {this.state.currentRoute === 't1r1' ? (
                        this.state.t1r1_total
                    ) : this.state.currentRoute === 't1r2' ? (
                        this.state.t1r2_total
                    ) : this.state.currentRoute === 't2r1' ? (
                        this.state.t2r1_total
                    ) : (
                                    this.state.t2r2_total
                                )}
                    <button id="buyBtn" onClick={this.paymentChange}>Buy</button>
                </div>
                <PaymentMethod show = {this.state.paymentUp}  departure={this.props.location.state.departure} onChange ={this.paymentChange} route={this.state.currentRoute} price ={this.currentPrice()}></PaymentMethod>
            </div>
        )
    }
}

export default withRouter(Find);
