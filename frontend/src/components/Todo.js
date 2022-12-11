/* eslint-disable no-underscore-dangle */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/prop-types */
function Todo({ todo }) {
  return (
    <div className="todo" key={todo._id}>
      <div className="todo-prop">{todo.name}</div>
      <div className="todo-prop">{todo.desc}</div>
      <div className="todo-prop">{todo.createdAt}</div>
    </div>
  );
}

export default Todo;
