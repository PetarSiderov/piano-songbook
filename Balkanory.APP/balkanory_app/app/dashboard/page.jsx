'use client';

import RootProvider from '@/src/RootProvider';
import Dashboard from '../../src/components/Organisms/Dashboard';

export default function DashboardPage() {
  return (
    <RootProvider>
      <Dashboard />
    </RootProvider>
  );
}
