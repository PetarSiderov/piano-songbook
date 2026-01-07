'use client';

import { Text, Button } from '../Atoms';

export default function SongsView({ searchQuery }) {
  return (
    <div>
      <Text variant="h2" className="!mb-6">
        Songs
      </Text>
      <div className="space-y-2">
        {/* Placeholder Song List */}
        {[1, 2, 3, 4, 5, 6].map((item) => (
          <div key={item} className="bg-white p-4 rounded-lg border border-slate-200 hover:bg-slate-50 transition-colors cursor-pointer flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="text-2xl">🎵</div>
              <div>
                <Text variant="body" className="!font-semibold !m-0">
                  Traditional Song {item}
                </Text>
                <Text variant="small" className="!m-0">
                  Artist Name • 3:45
                </Text>
              </div>
            </div>
            <Button variant="primary" size="sm">
              ▶️ Play
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
}
