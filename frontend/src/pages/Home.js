/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { useEffect } from 'react';
import Todo from '../components/Todo';
import TodoForm from '../components/TodoForm';
import useTodoContext from '../hooks/todoReducer';

function Home() {
  const { todos, dispatch } = useTodoContext();

  useEffect(() => {
    const fetchTodo = async () => {
      const request = await fetch('/todolist');
      const json = await request.json();

      if (!request.ok) {
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
          <Todo todo={todo} key={todo._id} />
        ))}
      </div>
      <TodoForm />
    </div>
  );
}

export default Home;
