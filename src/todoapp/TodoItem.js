import React from 'react'
import style from './style.css'

function TodoItem(props){
	return (
		<div className="todo-item">
		    <input type="checkbox" checked={props.task.completed}/>
    		<p>{props.task.text}</p>
    		<hr/>
    	</div>
		)
}

export default TodoItem