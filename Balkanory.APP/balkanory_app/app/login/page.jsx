'use client';

import Login from '@/src/components/Organisms/Login';
import RootProvider from '@/src/RootProvider';

export default function LoginPage() {
  return (
    <RootProvider>
      <Login />
    </RootProvider>
  );
}
