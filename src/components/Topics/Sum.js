import React from 'react';

class Sum extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            number1: 0,
            number2: 0,
            sum: null
        }
    }

    handleFirst(e){
        this.setState({number1: e.target.value})
    }
    handleSecond(e){
        this.setState({number2: e.target.value})
    }

    handleClick(){
        let num1 = Number(this.state.number1);
        let num2 = Number(this.state.number2);

        if(isNaN(num1) || isNaN(num2)){
            this.setState({sum: 'Invalid Input'})
        } else {
            this.setState({sum: num1 + num2})
        }

    }

    render() {
        return (
            <div className='puzzleBox sumPB'>
                <h4>Sum</h4>
                <input
                    className='inputLine'
                    onChange={(event)=>this.handleFirst(event)}
                />
                <input
                    className='inputLine'
                    onChange={(event => this.handleSecond(event))}
                />
                <button
                    className='confirmationButton'
                    onClick={()=>{
                        this.handleClick()
                    }}
                >Confirm</button>
                <span className='resultsBox'>{this.state.sum}</span>
            </div>
        );
    }

}

export default Sum;