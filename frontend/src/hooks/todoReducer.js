import { useContext } from 'react';
import { TodoContext } from '../context/todoContext';

function useTodoContext() {
  const context = useContext(TodoContext);

  if (!context) {
    throw Error('useTodoContext within proper context tree');
  }

  return context;
}

export default useTodoContext;
