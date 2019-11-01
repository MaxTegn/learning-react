import React from 'react';

class App extends React.Component {
    constructor() {
        super()
        this.state = {
        	isLoggedIn: false
        }
    }
    render() {
    	let inOrOut
    	if (this.state.isLoggedIn) {
    		inOrOut = "in";
    	}
    	else{
    		inOrOut = "out";
    	}
        return (
            <div>
           		<h1>You are currently logged {inOrOut}</h1>
        	</div>
        )
    }
}

export default App;