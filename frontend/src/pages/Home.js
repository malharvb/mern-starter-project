/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from 'react';
import TodoDetails from '../components/TodoDetails';
import TodoForm from '../components/TodoForm';
import useTodoContext from '../hooks/todoReducer';

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
        // eslint-disable-next-line no-underscore-dangle
          <TodoDetails todo={todo} key={todo._id} />
        ))}
      </div>
      <TodoForm />
    </div>
  );
}

export default Home;
