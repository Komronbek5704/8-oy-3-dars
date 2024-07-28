import React, { useReducer, useState } from 'react';
import { initialState, reducer } from './reducer';
import { Todo, Action } from './types';
import './App.css';

function App() {
  const [state, dispatch] = useReducer<React.Reducer<Todo[], Action>>(reducer, initialState);
  const [newTodo, setNewTodo] = useState<string>('');

  const addTodo = () => {
    if (newTodo.trim() === '') return;
    dispatch({ type: 'ADD_TODO', payload: newTodo });
    setNewTodo('');
  };

  const toggleTodo = (id: number) => {
    dispatch({ type: 'TOGGLE_TODO', payload: id });
  };

  const deleteTodo = (id: number) => {
    dispatch({ type: 'DELETE_TODO', payload: id });
  };

  return (
    <div className="bg-gray-100  p-20 min-h-screen">
      <div className="max-w-xl mx-auto bg-custom-green  p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl text-white font-bold mb-4">Todo App</h1>
        <div className="mb-4">
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="New todo"
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
          />
          <button onClick={addTodo} className="mt-2 w-full bg-blue-500 text-white p-2 rounded">
            Add Todo
          </button>
        </div>
        <h2 className="text-xl text-white font-semibold mb-2">Todos</h2>
        <ul className="list-none p-0 border-b border-gray-200">
          {state.filter(todo => !todo.completed).map(todo => (
            <li
              key={todo.id}
              className="p-2 border-b border-gray-200 text-white flex justify-between items-center"
            >
              <span onClick={() => toggleTodo(todo.id)} className="cursor-pointer">{todo.text}</span>
              <div>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded mr-2"
                >
                  Delete
                </button>
                <button
                  onClick={() => toggleTodo(todo.id)}
                  className="bg-green-500 text-white px-2 py-1 rounded"
                >
                  Complete
                </button>
              </div>
            </li>
          ))}
        </ul>
        <h2 className="text-xl text-white font-semibold mt-6 mb-2">Completed</h2>
        <ul className="list-none border-b border-gray-200 p-0">
          {state.filter(todo => todo.completed).map(todo => (
            <li
              key={todo.id}
              className="p-2 border-b text-white border-gray-200 flex justify-between items-center"
            >
              <span onClick={() => toggleTodo(todo.id)} className="cursor-pointer">{todo.text}</span>
              <div>
                <button
                  onClick={() => deleteTodo(todo.id)}
                  className="bg-red-500 text-white px-2 py-1 rounded mr-2"
                >
                  Delete
                </button>
                <button
                  onClick={() => toggleTodo(todo.id)}
                  className="bg-yellow-500 text-white px-2 py-1 rounded"
                >
                  Undo
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;