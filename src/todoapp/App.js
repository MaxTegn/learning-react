import React from 'react';
import TodoItem from './TodoItem'
import todosData from './todosData'

function App() {
    const todosComponents = todosData.map(todoItem => <TodoItem key={todoItem.id} task={todoItem}/>)

    return (
      <div className="todo-list">
        {todosComponents}
      </div>
      )
}

export default App;
