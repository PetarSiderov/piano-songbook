import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from '../reducers/authReducer';

export function useAuth() {
  const context = useContext(AuthContext);
  
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }

  const { state, dispatch } = context;

  const login = async (email, password) => {
    dispatch({ type: LOGIN_REQUEST });
    try {
      // Replace with actual API call
      const user = { id: 1, email, name: 'User' };
      dispatch({ type: LOGIN_SUCCESS, payload: user });
      return user;
    } catch (error) {
      dispatch({ type: LOGIN_FAILURE, payload: error.message });
      throw error;
    }
  };

  const logout = () => {
    dispatch({ type: LOGOUT });
  };

  return {
    ...state,
    login,
    logout,
  };
}
