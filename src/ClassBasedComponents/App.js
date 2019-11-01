import React from 'react';

// function App() {
//     return (
//       <div>
//         <h1>Code goes here</h1>
//       </div>
//       )
// }

class App extends React.Component {
	render(){
		return (
			<div>
				<Header username="Jonny"/>
				<Greeting />			
      		</div>
      	)
	}
}

class Header extends React.Component {
	render(){
		return (
			<header>
        		<p>Welcome, {this.props.username}!</p>
      		</header>
      	)
	}
}

class Greeting extends React.Component {
	render(){
		const date = new Date()
		const hours = date.getHours()
		console.log(hours)
		let timeOfDay
		if(hours < 12){
			timeOfDay = "morning"
		}
		else if (hours > 12 && hours < 17) {
			timeOfDay = "afternoon"
		}
		else{
			timeOfDay = "night"
		}
		return (
			<div>
        		<h1>Good {timeOfDay} to you, sir or madam!</h1>
      		</div>
      	)
	}
}

export default App;
