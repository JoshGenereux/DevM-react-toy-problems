import React from 'react';

class EvenAndOdd extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            evenArray: [],
            oddArray: [],
            userInput: ''
        }
    }

    handleChange(e){
        this.setState({userInput: e.target.value})
    }

    handleClick(){
        let input = this.state.userInput;
        let array = [...input]
        const evens = array.filter((num)=>{
            if(!isNaN(Number(num))) {
                if (num % 2 === 0) {
                    return num
                }
            }
        })
        this.setState({evenArray: [...evens]})

        const odds = array.filter((num)=>{
            if(!isNaN(Number(num))) {
                if (num % 2 !== 0) {
                    return num
                }
            }
        })
        this.setState({oddArray: [...odds]})
        console.log(this.state.oddArray)
    }

    render() {
        return (
            <div className='puzzleBox evenAndOddPB'>
                <h4>Evens and Odds</h4>
                <input onChange={(e)=>this.handleChange(e)} className='inputLine'/>
                <button
                    onClick={()=>(
                        this.handleClick()
                    )}
                    className='confirmationButton'>Confirm</button>
                <span className='resultsBox'>{this.state.evenArray}</span>
                <span className='resultsBox'>{this.state.oddArray}</span>
            </div>
        )
    }
}

export default EvenAndOdd;