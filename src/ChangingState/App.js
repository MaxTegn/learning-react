import React from 'react'

class App extends React.Component {
    constructor(){
        super()
        this.state = {
            count: 0
        }
        this.handleClick = this.handleClick.bind(this)
        this.doubleUp = this.doubleUp.bind(this)
    }
    handleClick(){
        this.setState(prevState => {
            return{
                 count: prevState.count + 3
            }

        })
    }
    doubleUp(){
        this.setState(prevState =>{
            return{
                count: prevState.count * 2
            }
        })
    }

    render(){
        return(
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.handleClick}>Change!</button>
                <button onClick={this.doubleUp}>Double Up!</button>
            </div>
            )
    }
}

export default App