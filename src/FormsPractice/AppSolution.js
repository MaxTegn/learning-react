import React from 'react';

class App extends React.Component {
    constructor() {
        super();
        this.state = {
            firstName: "",
            lastName: "",
            age: "",
            gender: "",
            travelDestination: "",
            isVegan: false,
            isKosher: false,
            isLactoseFree: false

        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        const { name, value, type, checked } = e.target;
        type === "checkbox" ?
            this.setState({
                [name]: checked
            }) :
            this.setState({
                [name]: value
            })
    }

    render() {
        return (
            <main>
                <form>
                    <input 
                    name="firstName" 
                    type="text" 
                    placeholder="First Name" 
                    value={this.state.firstName}
                    onChange={this.handleChange}/><br/>
                    
                    <input 
                    name="lastName" 
                    type="text" 
                    placeholder="Last Name" 
                    value={this.state.lastName}
                    onChange={this.handleChange}/>
                    <br/>
                    
                    <input 
                    name="age" 
                    type="number" 
                    placeholder="Age"
                    value={this.state.age}
                    onChange={this.handleChange}/><br/>

                    <label>
                        <input 
                        type="radio"
                        name="gender"
                        value="male"
                        checked={this.state.gender === "male"}
                        onChange={this.handleChange}
                        />Male
                    </label>
                    
                    <br/>
                    
                    <label>
                        <input 
                        type="radio"
                        name="gender"
                        value="female"
                        checked={this.state.gender === "female"}
                        onChange={this.handleChange}
                        />Female
                    </label>
                    <br/>
                    <select 
                    name="travelDestination" 
                    value={this.state.travelDestination}
                    onChange={this.handleChange}>
                        <option value="">-- Please Choose a Destination --</option>
                        <option value="stockholm">Stockholm</option>
                        <option value="bryssel">Bryssel</option>
                        <option value="moskva">Moskva</option>
                    </select>
                    <br/>
                    <label>
                        <input 
                        type="checkbox"
                        name="isVegan"
                        checked={this.state.isVegan}
                        onChange={this.handleChange}
                        />Vegetarian
                    </label>
                    <br/>

                    <label>
                        <input 
                        type="checkbox"
                        name="isKosher"
                        checked={this.state.isKosher}
                        onChange={this.handleChange}
                        />Kosher
                    </label>
                    <br/>

                    <label>
                        <input 
                        type="checkbox"
                        name="isLactoseFree"
                        checked={this.state.isLactoseFree}
                        onChange={this.handleChange}
                        />Lactose intolerant
                    </label>
                    <br/>

                    <button>Submit</button>
                </form>
                <hr/>
                <h2>Entered information:</h2>
                <p>Your name: {this.state.firstName} {this.state.lastName}</p>
                <p>Your age: {this.state.age}</p>
                <p>Your gender: {this.state.gender}</p>
                <p>Your destination: {this.state.travelDestination}</p>
                <p>
                	Your dietary restrictions:
                	Lactose: {this.state.isLactoseFree.toString()} Vegan: {this.state.isVegan.toString()} Kosher: {this.state.isKosher.toString()}
                </p>
            </main>
        )
    }
}

export default App;