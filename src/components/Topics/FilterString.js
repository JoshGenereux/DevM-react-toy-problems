import React from 'react';

class FilterString extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            unFilteredArray: ['hello', 'goodbye', 'adios', 'bonjour','aloha','farewell'],
            userInput: '',
            filteredArray: []
        }
    }

    handleChange(e){
        this.setState({userInput: e.target.value})
    }

    handleClick(){
        let input = this.state.userInput;
        let string = ''
        let filtered = this.state.unFilteredArray.filter((element) =>{
            if(element.includes(input)){
                string += `${element},\n`
                console.log(element)
            }
        })
        this.setState({filteredArray: string})
    }

    unfiltered(){
        let array = this.state.unFilteredArray;
        let string = '';
        for(let i = 0; i < array.length; i++){
            let obj = JSON.stringify(array[i])
            string += `${obj},\n`
        }
        return string;
    }

    render() {
        return (
            <div className='puzzleBox filterStringPB'>
                <h4>Filter String</h4>
                <span className='puzzleText'>{this.unfiltered()}</span>
                <input
                    className='inputLine'
                    onChange={(e)=>this.handleChange(e)}
                />
                <button
                    className='confirmationButton'
                    onClick={()=>this.handleClick()}
                >Confirm</button>
                <span className='resultsBox filterStringRB'>{this.state.filteredArray}</span>
            </div>
        );
    }

}

export default FilterString;