import React, { useEffect } from 'react';

import TodoDetails from '../components/TodoDetails';
import TodoForm from '../components/TodoForm';
import useTodoContext from '../hooks/useTodoContext';
import useUserContext from '../hooks/useUserContext';

function Home() {
  const { todos, dispatch } = useTodoContext();

  const { user } = useUserContext();

  useEffect(() => {
    const fetchTodo = async () => {
      const response = await fetch('/todolist', {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      });
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
        {todos && todos.length !== 0 ? todos.map((todo) => (
          <TodoDetails todo={todo} key={todo._id} />
        )) : 'You currently have no todos'}
      </div>
      <TodoForm />
    </div>
  );
}

export default Home;
