import React from 'react';

class Palindrome extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            userInput: '',
            palindrome: ''
        }
    }

    handleChange(e){
        this.setState({userInput: e.target.value})
    }

    handleClick(){
        let input = this.state.userInput;
        console.log(input)
        let string = '';
        for(let i = input.length-1; i >= 0; i--){
            string += input[i]
        }
        if(string === input){
            this.setState({palindrome: `${string} is a Palindrome!`})
        } else {
            this.setState({palindrome: `${string} is not a Palindrome...`})
        }
        // this.setState({palindrome: string})
    }

    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Palindrome</h4>
                <input
                    className='inputLine'
                    onChange={(e)=>this.handleChange(e)}
                />
                <button
                    className='confirmationButton'
                    onClick={()=>this.handleClick()}
                >Confirm</button>
                <span className='resultsBox'>{this.state.palindrome}</span>
            </div>
        )
    }
}

export default Palindrome;