'use client';

import { createContext, useReducer, useCallback } from 'react';
import notificationReducer from '../reducers/notificationReducer';

export const NotificationContext = createContext();

const initialState = {
  notifications: [],
};

export function NotificationProvider({ children }) {
  const [state, dispatch] = useReducer(notificationReducer, initialState);

  const addNotification = useCallback((message, type = 'info', duration = 3000) => {
    const id = Date.now();
    dispatch({ type: 'ADD_NOTIFICATION', payload: { id, message, notificationType: type } });
    
    if (duration) {
      setTimeout(() => {
        dispatch({ type: 'REMOVE_NOTIFICATION', payload: id });
      }, duration);
    }
    
    return id;
  }, []);

  const removeNotification = useCallback((id) => {
    dispatch({ type: 'REMOVE_NOTIFICATION', payload: id });
  }, []);

  const value = {
    notifications: state.notifications,
    addNotification,
    removeNotification,
  };

  return (
    <NotificationContext.Provider value={value}>
      {children}
    </NotificationContext.Provider>
  );
}
