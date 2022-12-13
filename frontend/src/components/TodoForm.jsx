import React, { useState } from 'react';

import useTodoContext from '../hooks/useTodoContext';

function TodoForm() {
  const [name, setName] = useState();
  const [desc, setDesc] = useState();
  const [err, setErr] = useState();

  const { dispatch } = useTodoContext();

  async function handleClick(e) {
    e.preventDefault();
    const response = await fetch('/todolist', {
      method: 'post',
      body: JSON.stringify({
        name, desc,
      }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();

    if (!response.ok) {
      setErr(json.error);
      return;
    }
    setErr('');
    setName('');
    setDesc('');
    dispatch({ type: 'CREATE_TODO', payload: json });
  }

  return (
    <form onSubmit={handleClick} className="add-todo-form">
      <h2 className="add-todo-header">Add Todo</h2>
      <label htmlFor="name">
        Todo Name:
        <input type="text" id="name" onChange={(e) => setName(e.target.value)} value={name} />
      </label>
      <label htmlFor="desc">
        Todo Description:
        <textarea
          name="desc"
          id="desc"
          onChange={(e) => setDesc(e.target.value)}
          value={desc}
        />
        {/* <input type="textarea" id="desc" onChange={(e) => setDesc(e.target.value)}
        value={desc} /> */}
      </label>
      <input type="submit" />
      {err && <div className="error-msg">{err}</div>}
    </form>
  );
}

export default TodoForm;
