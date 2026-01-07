'use client';

import { useState } from 'react';
import { Button } from '../Atoms';
import { Text } from '../Atoms';

const menuItems = [
  {
    id: 'repertoar',
    label: 'Repertoar',
    icon: '🎭',
    href: '#repertoar',
  },
  {
    id: 'songs',
    label: 'Songs',
    icon: '🎵',
    href: '#songs',
  },
  {
    id: 'songbooks',
    label: 'Songbooks',
    icon: '📚',
    href: '#songbooks',
  },
  {
    id: 'midi-settings',
    label: 'MIDI Settings',
    icon: '⚙️',
    href: '#midi-settings',
  },
];

export default function Sidebar({ activeMenu, onMenuChange }) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <aside className={`${isExpanded ? 'w-64' : 'w-20'} bg-slate-900 text-white transition-all duration-300 ease-in-out h-screen flex flex-col border-r border-slate-700`}>
      {/* Header */}
      <div className="p-4 border-b border-slate-700 flex items-center justify-between">
        {isExpanded && (
          <Text variant="h3" className="!text-white !text-xl !m-0">
            Balkanory
          </Text>
        )}
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setIsExpanded(!isExpanded)}
          className="!bg-slate-800 !hover:bg-slate-700"
        >
          {isExpanded ? '❮' : '❯'}
        </Button>
      </div>

      {/* Menu Items */}
      <nav className="flex-1 p-4 space-y-2">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => onMenuChange(item.id)}
            className={`w-full px-4 py-3 rounded-lg transition-colors flex items-center gap-3 ${
              activeMenu === item.id
                ? 'bg-blue-600 text-white'
                : 'text-slate-300 hover:bg-slate-800'
            }`}
          >
            <span className="text-xl">{item.icon}</span>
            {isExpanded && <Text variant="body" className="!text-sm !font-medium !m-0">{item.label}</Text>}
          </button>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-slate-700">
        <Button
          variant="secondary"
          size="sm"
          className="!w-full !bg-slate-800 !hover:bg-slate-700 flex items-center gap-2 justify-center"
        >
          <span>👤</span>
          {isExpanded && 'Profile'}
        </Button>
      </div>
    </aside>
  );
}
