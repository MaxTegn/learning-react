import React from 'react';
//import Conditional from './Conditional'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoggedIn: false
        }
        this.handleClick = this.handleClick.bind(this)
    }
    handleClick() {
        this.setState(prevState => {
            return {
                isLoggedIn: !prevState.isLoggedIn
            }
        })
    }
    render() {
        let buttonText = this.state.isLoggedIn ? "Log out" : "Log in"
        let displayText = this.state.isLoggedIn ? "You are logged in" : "You are logged out"
        return (
            <div>
            <h1>{displayText}</h1>
            <button onClick={this.handleClick}>{buttonText}</button>
            </div>
        )
    }

}

export default App;