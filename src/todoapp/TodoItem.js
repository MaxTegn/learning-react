import React from 'react'
import style from './style.css'

function TodoItem(props){
	const completedStyle = {
		color: "green",
		textDecoration: "line-through"
	}

	return (
		<div className="todo-item">
		    <input type="checkbox" checked={props.task.completed} 
		    onChange={() => props.handleChange(props.task.id)}/>
    		<p style={props.task.completed ? completedStyle : null}>{props.task.text}</p>
    		<hr/>
    	</div>
		)
}

export default TodoItem