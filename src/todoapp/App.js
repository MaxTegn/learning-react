import React from 'react';
import TodoItem from './TodoItem'
import todosData from './todosData'

class App extends React.Component {
    constructor() {
        super()
        this.state = {
            todos: todosData
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(id) {
        this.setState(prevState => {
            const updatedTodos = prevState.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
            return {
                todo: updatedTodos
            }
        })
    }
    render() {
        const todosComponents = this.state.todos.map(todoItem =>
            <TodoItem 
            key={todoItem.id} 
            task={todoItem} 
            handleChange={this.handleChange}
            />)

        return (
            <div className="todo-list">
                {todosComponents}
            </div>
        )
    }

}

export default App;