import React, { createContext, useReducer } from 'react';
import PropTypes from 'prop-types';

export const UserContext = createContext();

export const userReducer = (state, action) => {
  switch (action.type) {
    case 'LOGIN':
      return { user: action.payload };
    case 'LOGOUT':
      return { user: null };
    default:
      return state;
  }
};

export function UserContextProvider({ children }) {
  const [state, dispatch] = useReducer(userReducer, { user: null });
  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <UserContext.Provider value={{ ...state, dispatch }}>
      {children}
    </UserContext.Provider>
  );
}

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
