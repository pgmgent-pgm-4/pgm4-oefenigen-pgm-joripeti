import React, { useState } from 'react'
import Todo from './Todo'
import styles from './todos.module.css'
import AddButton from './AddButton';

export default function Todos({ todo }) {
    const [todos, setTodos] = useState([
        'Buy milk',
        'Buy bread',
        'Buy cheese' 
    ]);
    // Function to add a new todo
  const addTodo = newTodo => {
    setTodos(prevTodos => [...prevTodos, newTodo]);
  };

  // Function to remove a todo based on index
  const removeTodo = index => {
    setTodos(prevTodos => prevTodos.filter((_, i) => i !== index));
  };
  return (
    <div>
        <h1>Todos</h1>
        <div className={styles.buttons}>
            <AddButton onAdd={addTodo} />
        </div>
        <ul className={styles.todos}>
            {todos.map((todo, id) => (
                <Todo key={`todo-${id}`} todo={todo} onRemove={()=>removeTodo(id)}/>
            ))}
        </ul>
    </div>
  )
}
