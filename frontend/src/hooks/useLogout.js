import useUserContext from './useUserContext';
import useTodoContext from './useTodoContext';

const useLogout = () => {
  const { dispatch } = useUserContext();
  const { dispatch: dispatchForTodo } = useTodoContext();

  const logout = () => {
    localStorage.removeItem('user');

    dispatch({ type: 'LOGOUT' });
    dispatchForTodo({ type: 'SET_TODO', payload: null });
  };

  return { logout };
};

export default useLogout;
