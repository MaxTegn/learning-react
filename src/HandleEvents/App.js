import React from 'react';

function App() {
    return (
        <div>
			<img src="https://i.imgur.com/kJc4XRC.jpg" width="300px" onMouseOver={()=> console.log("Dogge got hovered!")}/>	
			<br/>
			<br/>
			<button onClick={()=>{console.log("I was clicked")}}>Click me</button>
      	</div>
    )
}

export default App;