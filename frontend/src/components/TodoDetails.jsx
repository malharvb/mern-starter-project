import React from 'react';
import PropTypes from 'prop-types';
import formatDistanceToNow from 'date-fns/formatDistanceToNow';

import useTodoContext from '../hooks/useTodoContext';

function TodoDetails({ todo }) {
  const { dispatch } = useTodoContext();

  async function handleClick() {
    const response = await fetch(`/todolist/${todo._id}`, {
      method: 'delete',
    });
    const json = await response.json();
    // todo object can also be used as payload
    if (response.ok) {
      dispatch({ type: 'DELETE_TODO', payload: json });
    }
  }

  return (
    <div className="todo" key={todo._id}>
      <div className="todo-prop">{todo.name}</div>
      <div className="todo-prop">{todo.desc}</div>
      <div className="todo-prop">{formatDistanceToNow(new Date(todo.createdAt), { addSuffix: true })}</div>
      <div className="material-symbols-outlined" role="button" onClick={handleClick} onKeyUp={() => {}} tabIndex="0"> delete </div>
    </div>
  );
}

TodoDetails.propTypes = {
  todo: PropTypes.shape({
    _id: PropTypes.string,
    name: PropTypes.string,
    desc: PropTypes.string,
    createdAt: PropTypes.string,
  }).isRequired,
};

export default TodoDetails;
