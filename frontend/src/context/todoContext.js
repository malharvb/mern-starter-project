/* eslint-disable no-underscore-dangle */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
import { createContext, useReducer } from 'react';

export const TodoContext = createContext();

export const todoReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TODO':
      return {
        todos: action.payload,
      };
    case 'CREATE_TODO':
      return {
        todos: [...state.todos, action.payload],
      };
    case 'DELETE_TODO':
      return {
        todos: state.todos.filter((todo) => todo._id !== action.payload._id),
      };
    default:
      return state;
  }
};

export function TodoContextProvider({ children }) {
  const [state, dispatch] = useReducer(todoReducer, { todos: null });
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <TodoContext.Provider value={{ ...state, dispatch }}>
      {children}
    </TodoContext.Provider>
  );
}
