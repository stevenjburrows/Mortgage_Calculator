import React, { Component } from 'react';

class MortgaugeCalculator extends Component {
// constructor(props){
//     super(props);
//     this.state = {
//         yourWages: 0,
//         partnersWages:0
//     }
// }


    render() {
        
        if (this.props.wages.yourWage == null) return null
        return (
            <div>
                
        <p>your wages are £{this.props.wages.yourWage} added to your partners wage £{this.props.wages.partnersWage} then miltiplied by 3</p>
        <p>Then add your deposit of £{this.props.wages.deposit}</p>
        <p>Means you can afford a house of £{this.props.canAfford}</p>
            </div>
        );
    }
}

export default MortgaugeCalculator;