/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import { useState } from 'react';
import useTodoContext from '../hooks/todoReducer';

function TodoForm() {
  const [name, setName] = useState();
  const [desc, setDesc] = useState();
  const [err, setErr] = useState();

  const { dispatch } = useTodoContext();

  async function handleClick(e) {
    e.preventDefault();
    const request = await fetch('/todolist', {
      method: 'post',
      body: JSON.stringify({
        name, desc,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await request.json();

    if (!request.ok) {
      setErr(json.error);
      return;
    }
    setErr('');
    dispatch({ type: 'CREATE_TODO', payload: json });
  }

  return (
    <form onSubmit={handleClick}>
      <label htmlFor="name">
        Todo Name
        <input type="text" id="name" onChange={(e) => setName(e.target.value)} />
      </label>
      <label htmlFor="desc">
        Todo Description
        <input type="text" id="desc" onChange={(e) => setDesc(e.target.value)} />
      </label>
      <input type="submit" />
      {err && <div>{err}</div>}
    </form>
  );
}

export default TodoForm;
