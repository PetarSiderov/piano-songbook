'use client';

import { AuthProvider, ThemeProvider, NotificationProvider } from './context';

export default function RootProvider({ children }) {
  return (
    <AuthProvider>
      <ThemeProvider>
        <NotificationProvider>
          {children}
        </NotificationProvider>
      </ThemeProvider>
    </AuthProvider>
  );
}
