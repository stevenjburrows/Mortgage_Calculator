import React, { Component } from 'react';

class WagesComponent extends Component {
constructor(props) {
    super(props);
    this.state = {
        yourWage: 0,
        partnersWage: 0,
        deposit:0
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleYourWageChange = this.handleYourWageChange.bind(this);
    this.handleParntersWagechange = this.handleParntersWagechange.bind(this);
    this.handleDepositChange = this.handleDepositChange.bind(this);

}

handleSubmit(evt) {
    evt.preventDefault();
    const yourWage = this.state.yourWage;
    const partnersWage = this.state.partnersWage;
    const deposit = this.state.deposit;

    this.props.handleWageSubmit({
        yourWage: yourWage,
        partnersWage: partnersWage,
        deposit: deposit
    })

    this.setState({
        yourWage:0,
        partnersWage:0,
        deposit:0
    })

}

handleYourWageChange(evt){
    this.setState({yourWage: evt.target.value})
}

handleParntersWagechange(evt){
    this.setState({partnersWage: evt.target.value})

}

handleDepositChange(evt){
    this.setState({ deposit: evt.target.value })
}

    render() {
        return (
            <div>
                <h2>Enter Your wages</h2>
                <form onSubmit={this.handleSubmit}>
                    <label>Your wage</label>
                    <input type="number" placeholder="Your wage" value={this.state.yourWage} onChange={this.handleYourWageChange}></input>
                    <label>Your partner's wage</label>
                    <input type="number" placeholder="Your  partners wage" value={this.state.partnersWage} onChange={this.handleParntersWagechange}></input>
                    <label>Deposit</label>
                    <input type="number" placeholder="deposit" value={this.state.deposit} onChange={this.handleDepositChange}></input>

                    <input type="submit" value = "submit" />


                </form>
            </div>
        );
    }
}

export default WagesComponent;