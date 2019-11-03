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
            dietRestriction: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(e) {
        const { name, value, type, checked } = e.target;
        type === "checkbox" ?
        this.setState({
            [name]: checked
        })
        :
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
                        onChange={this.handleChange}
                        />Male
                    </label>
                    
                    <br/>
                    
                    <label>
                        <input 
                        type="radio"
                        name="gender"
                        value="female"
                        onChange={this.handleChange}
                        />Female
                    </label>
                    <br/>
                    <select 
                    name="travelDestination" 
                    value={this.state.travelDestination}
                    onChange={this.handleChange}>
                        <option>Stockholm</option>
                        <option>Bryssel</option>
                        <option>Moskva</option>
                    </select>
                    <br/>
                    <label>
                        <input 
                        type="checkbox"
                        name="dietRestriction"
                        checked={this.state.dietRestriction}
                        onChange={this.handleChange}
                        />Vegetarian
                    </label>
                </form>
                <button onClick={(() => console.log(this.state))}>BUTTON</button>
            </main>
        )
    }
}

export default App;