'use client';

import { useState } from 'react';
import Sidebar from './Sidebar';
import GlobalSearch from './GlobalSearch';
import RepertoarView from './RepertoarView';
import SongsView from './SongsView';
import SongbooksView from './SongbooksView';
import MidiSettingsView from './MidiSettingsView';

export default function Dashboard() {
  const [activeMenu, setActiveMenu] = useState('repertoar');
  const [searchQuery, setSearchQuery] = useState('');

  const renderView = () => {
    switch (activeMenu) {
      case 'repertoar':
        return <RepertoarView searchQuery={searchQuery} />;
      case 'songs':
        return <SongsView searchQuery={searchQuery} />;
      case 'songbooks':
        return <SongbooksView searchQuery={searchQuery} />;
      case 'midi-settings':
        return <MidiSettingsView />;
      default:
        return <RepertoarView searchQuery={searchQuery} />;
    }
  };

  return (
    <div className="flex h-screen bg-slate-100">
      {/* Sidebar */}
      <Sidebar activeMenu={activeMenu} onMenuChange={setActiveMenu} />

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header with Search */}
        <div className="bg-white border-b border-slate-200 sticky top-0 z-10">
          <div className="p-6">
            <GlobalSearch onSearch={setSearchQuery} />
          </div>
        </div>

        {/* Page Content */}
        <div className="p-8">
          {renderView()}
        </div>
      </main>
    </div>
  );
}