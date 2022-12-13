import React, { useEffect } from 'react';

import TodoDetails from '../components/TodoDetails';
import TodoForm from '../components/TodoForm';
import useTodoContext from '../hooks/useTodoContext';

function Home() {
  const { todos, dispatch } = useTodoContext();

  useEffect(() => {
    const fetchTodo = async () => {
      const response = await fetch('/todolist');
      const json = await response.json();

      if (!response.ok) {
        return;
      }

      dispatch({ type: 'SET_TODO', payload: json });
    };

    fetchTodo();
  }, []);

  return (
    <div id="main-container">
      <div id="todo-container">
        {todos && todos.map((todo) => (
          <TodoDetails todo={todo} key={todo._id} />
        ))}
      </div>
      <TodoForm />
    </div>
  );
}

export default Home;
