import React from 'react'
import style from './style.css'

class MemeGenerator extends React.Component {
    constructor() {
        super()
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleClick = this.handleClick.bind(this)
    }
    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
            	const {memes} = response.data
            	//console.log(memes.length)
                this.setState({allMemeImgs: memes})
            })


    }

    handleChange(e){
    	const {name, value} = e.target;
    	this.setState({
    		[name]: value
    	})
    }

    handleClick = (e) =>{
    	e.preventDefault();
    	const nrofImgs = this.state.allMemeImgs.length;
    	let randomImg = Math.floor(Math.random() * (nrofImgs - 0)) + 0;
    	this.setState({randomImg: this.state.allMemeImgs[randomImg].url})
    }

    render() {
        return (
            <div>
            	<form className="meme-form" onSubmit={this.handleClick}>
            		<br/>
            		<input 
            			type="text" 
            			name="topText"
            			placeholder="Top text"
            			value={this.state.topText} 
            			onChange={this.handleChange}/>           	
            		<input 
            			type="text" 
            			name="bottomText"
            			placeholder="Bottom text"
            			value={this.state.bottomText} 
            			onChange={this.handleChange}/>
            		<button>Gen</button>
            	</form>
            	<div className="meme">
            		<img src={this.state.randomImg} alt="Something's wrong"/>
            		<h2 className="top">{this.state.topText}</h2>
            		<h2 className="bottom">{this.state.bottomText}</h2>
            	</div>
        	</div>
        )
    }
}

export default MemeGenerator