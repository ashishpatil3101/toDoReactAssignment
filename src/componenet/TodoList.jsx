import Button from "./Button";
import { useState } from 'react';
import TodoRow from './ToDoRow';

const TodoList = () => {
    const [todos, setTodos] = useState([]);
    const [inputText, setInputText] = useState('');
  
    const handleAddTodo = () => {
      if (inputText.trim() !== '') {
        setTodos(prevTodos => [
          ...prevTodos,
          { id: Date.now(), text: inputText, completed: false }
        ]);
        setInputText('');
      }
    };
  
    const handleDeleteTodo = (id) => {
      setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    };
  
    const handleCompleteTodo = (id) => {
      setTodos(prevTodos =>
        prevTodos.map(todo =>
          todo.id === id ? { ...todo, completed: !todo.completed } : todo
        )
      );
    };
  
    return (
      <div className="max-w-md mx-auto mt-8">
        <h1 className="text-2xl font-bold mb-4">Todo List</h1>
        <div>

          {todos.map(todo => (
            <TodoRow
              key={todo.id}
              todo={todo}
              onDelete={handleDeleteTodo}
              onComplete={handleCompleteTodo}
            />
          ))}
        </div>



        <div className="flex mb-4">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="flex-1 border border-gray-300 px-4 py-2 rounded-md mr-2"
            placeholder="Enter a new todo"
          />
          <Button onClick={handleAddTodo} variant="big">Add Todo</Button>
        </div>
      </div>
    );
  };
  
  export default TodoList;