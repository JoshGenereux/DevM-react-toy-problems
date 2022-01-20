import React, {useState} from 'react';

class EvenAndOdd extends React.Component{
    constructor(props) {
        super(props);
        const evenArray = [];
        const oddArray = [];
        const userInput = "";
    }

    handleChange(event){
        this.setState({userInput: event.userInput.value})
    }

    render() {
        return (
            <div className='puzzleBox evenAndOddPB'>
                <h4>Evens and Odds</h4>
                <input onChange={this.handleChange} className='inputLine'/>
                <button
                    onClick={}
                    className='confirmationButton'>Confirm</button>
                <span className='resultsBox'></span>
                <span className='resultsBox'></span>
            </div>
        )
    }
}

export default EvenAndOdd;