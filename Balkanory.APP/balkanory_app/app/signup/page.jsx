'use client';

import RootProvider from '@/src/RootProvider';
import SignUp from '../../src/components/Organisms/SignUp';

export default function SignUpPage() {
  return (
    <RootProvider>
      <SignUp />
    </RootProvider>
  );
}
