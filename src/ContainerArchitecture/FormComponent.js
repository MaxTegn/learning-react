import React from 'react'

function FormComponent(props) {
    return (
        <main>
                <form>
                    <input 
                    name="firstName" 
                    type="text" 
                    placeholder="First Name" 
                    value={props.data.firstName}
                    onChange={props.handleChange}/><br/>
                    
                    <input 
                    name="lastName" 
                    type="text" 
                    placeholder="Last Name" 
                    value={props.data.lastName}
                    onChange={props.handleChange}/>
                    <br/>
                    
                    <input 
                    name="age" 
                    type="number" 
                    placeholder="Age"
                    value={props.data.age}
                    onChange={props.handleChange}/><br/>

                    <label>
                        <input 
                        type="radio"
                        name="gender"
                        value="male"
                        checked={props.data.gender === "male"}
                        onChange={props.handleChange}
                        />Male
                    </label>
                    
                    <br/>
                    
                    <label>
                        <input 
                        type="radio"
                        name="gender"
                        value="female"
                        checked={props.data.gender === "female"}
                        onChange={props.handleChange}
                        />Female
                    </label>
                    <br/>
                    <select 
                    name="travelDestination" 
                    value={props.data.travelDestination}
                    onChange={props.handleChange}>
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
                        checked={props.data.isVegan}
                        onChange={props.handleChange}
                        />Vegetarian
                    </label>
                    <br/>

                    <label>
                        <input 
                        type="checkbox"
                        name="isKosher"
                        checked={props.data.isKosher}
                        onChange={props.handleChange}
                        />Kosher
                    </label>
                    <br/>

                    <label>
                        <input 
                        type="checkbox"
                        name="isLactoseFree"
                        checked={props.data.isLactoseFree}
                        onChange={props.handleChange}
                        />Lactose intolerant
                    </label>
                    <br/>

                    <button>Submit</button>
                </form>
                <hr/>
                <h2>Entered information:</h2>
                <p>Your name: {props.data.firstName} {props.data.lastName}</p>
                <p>Your age: {props.data.age}</p>
                <p>Your gender: {props.data.gender}</p>
                <p>Your destination: {props.data.travelDestination}</p>
                <p>
                	Your dietary restrictions:
                	Lactose: {props.data.isLactoseFree.toString()} Vegan: {props.data.isVegan.toString()} Kosher: {props.data.isKosher.toString()}
                </p>
            </main>
    )
}

export default FormComponent