'use client';

import { useState } from 'react';
import { Input, Text } from '../Atoms';

export default function GlobalSearch({ onSearch }) {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);

  const handleSearch = (value) => {
    setQuery(value);
    if (onSearch) {
      onSearch(value);
    }
  };

  const handleClear = () => {
    setQuery('');
    if (onSearch) {
      onSearch('');
    }
  };

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="relative">
        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400">
          🔍
        </div>
        <Input
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => setIsSearching(true)}
          onBlur={() => setTimeout(() => setIsSearching(false), 200)}
          placeholder="Search songs, songbooks, artists... (Press / to focus)"
          className="!pl-12 !py-3 !text-base bg-slate-50 border border-slate-300 focus:ring-2 focus:ring-blue-500"
        />
        {query && (
          <button
            onClick={handleClear}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
          >
            ✕
          </button>
        )}

        {/* Search Results Dropdown */}
        {isSearching && query && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-white border border-slate-200 rounded-lg shadow-lg z-10">
            <div className="p-4 space-y-2 max-h-96 overflow-y-auto">
              <Text variant="small" className="!font-semibold !mb-2">
                Suggestions for "{query}"
              </Text>
              <div className="space-y-1">
                <div className="px-3 py-2 hover:bg-slate-100 rounded cursor-pointer">
                  <Text variant="body">🎵 Song: {query}</Text>
                </div>
                <div className="px-3 py-2 hover:bg-slate-100 rounded cursor-pointer">
                  <Text variant="body">📚 Songbook: {query}</Text>
                </div>
                <div className="px-3 py-2 hover:bg-slate-100 rounded cursor-pointer">
                  <Text variant="body">👤 Artist: {query}</Text>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
