import { useState } from 'react';

import useUserContext from './useUserContext';

const useRegister = () => {
  const { dispatch } = useUserContext();

  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const register = async (email, password) => {
    setIsLoading(true);
    const response = await fetch('/auth/register', {
      method: 'post',
      body: JSON.stringify({ email, password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    const json = await response.json();

    setIsLoading(false);

    if (response.ok) {
      dispatch({ type: 'LOGIN', payload: json });
      localStorage.setItem('user', JSON.stringify(json));
      setError('');

      return true;
    }
    setError(json.error);
    return false;
  };

  return { error, isLoading, register };
};

export default useRegister;
