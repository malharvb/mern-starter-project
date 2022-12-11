/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */

import useTodoContext from '../hooks/todoReducer';

function Todo({ todo }) {
  const { dispatch } = useTodoContext();

  async function handleClick() {
    const request = await fetch(`/todolist/${todo._id}`, {
      method: 'delete',
    });
    const json = await request.json();
    // todo object can also be used as payload
    if (request.ok) {
      dispatch({ type: 'DELETE_TODO', payload: json });
    }
  }

  return (
    <div className="todo" key={todo._id}>
      <div className="todo-prop">{todo.name}</div>
      <div className="todo-prop">{todo.desc}</div>
      <div className="todo-prop">{todo.createdAt}</div>
      <input type="button" value="Delete" onClick={handleClick} />
    </div>
  );
}

export default Todo;
