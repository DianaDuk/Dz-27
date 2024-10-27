import { useState } from "react";

export function Home () {
    const [todos, setTodos] = useState ([]);
    const [newTodo, setNewTodo] = useState('');

    function AddTodo() {
    if(newTodo.trim() !== '') {
        setTodos([...todos, newTodo]);
        setNewTodo('');
    }
    }

    return(
        <div>
            <h1>TODO list</h1>
            <input
            type="text"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder="Add a new TODO"
            />
            <button onClick={AddTodo}>Add</button>
            <ul>
                {todos.map((todo, index) => (
                    <li key={index}>{todo}</li>
                ))}
            </ul>
        </div>
    );
}