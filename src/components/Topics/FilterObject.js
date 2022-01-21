import React from 'react';

class FilterObject extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            unFilteredArray: [
                {
                    name: "one",
                    lastName: 1,
                    color: 'blue'
                },
                {
                    name: 'two',
                    value: 2,
                    color: 'pink'
                },
                {
                    name: 'three',
                    value: 'bob',
                    hair: false
                },
                {
                    name: 'four',
                    value: 5,
                    hair: true
                },
                {
                    name: 'five',
                    height: 5,
                    color: 'red'
                }
            ],
            userInput: "",
            filteredArray: []
        }
    }

    showUnfiltered(){
        let array = this.state.unFilteredArray;
        let string = ''
        for(let i = 0; i < array.length; i ++){
            let obj = JSON.stringify(array[i])
            string += `${obj},\n`
        }
        return string;
    }

    handleChange(e) {
        this.setState({userInput: e.target.value})
    }

    handleClick(){
        let input = this.state.userInput;
        let filtered = this.state.unFilteredArray.filter((element) =>{
            if(element[input]){
                return element
            }
        })
        console.log(filtered)
        let string ='';
        for(let i = 0; i < filtered.length; i++){
            let obj = JSON.stringify(filtered[i])
            string += `${obj},\n`
        }
        this.setState({filteredArray: string})
    }

    render() {
        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>{this.showUnfiltered()}</span>
                <input
                    className='inputLine'
                    onChange={(e)=>this.handleChange(e)}
                />
                <button
                    className='confirmationButton'
                    onClick={() =>{
                        this.handleClick()
                    }}
                >Confirm</button>
                <span className='resultsBox filterObjectRB'>{this.state.filteredArray}</span>
            </div>
        )
    }
}

export default FilterObject;