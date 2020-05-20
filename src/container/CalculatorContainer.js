import React, { Component } from 'react';
import WagesComponent from '../component/WagesComponent'
import MortgaugeCalculator from '../component/MortgaugeCalculator'

class CalculatorContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
            wages: [], 
            totalWages:0,
            canAfford:0
            
        }
        this.handleWageSubmit = this.handleWageSubmit.bind(this);
    }

    handleWageSubmit(newWages){
        const updatedWages = [newWages]
        
        this.setState({
            wages: updatedWages[0],
        
            
            totalWages: parseFloat(updatedWages[0].yourWage) + parseFloat(updatedWages[0].partnersWage),
            canAfford: this.state.totalWages * 3 + parseFloat(updatedWages[0].deposit)
        });


    }

    render() {


        

        return (
            <div>
                <h1>container</h1>
                <WagesComponent handleWageSubmit = {this.handleWageSubmit}/>
                <MortgaugeCalculator canAfford = {this.state.canAfford} wages = {this.state.wages}/>
            </div>
        );
    }
}

export default CalculatorContainer;