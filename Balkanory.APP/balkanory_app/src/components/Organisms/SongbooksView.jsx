'use client';

import { Text, Button } from '../Atoms';
import { Card } from '../Molecules';

export default function SongbooksView({ searchQuery }) {
  return (
    <div>
      <Text variant="h2" className="!mb-6">
        Songbooks
      </Text>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Placeholder Songbook Cards */}
        {[1, 2, 3, 4].map((item) => (
          <Card key={item} className="hover:shadow-lg transition-shadow cursor-pointer">
            <div className="flex items-start justify-between">
              <div className="flex-1">
                <div className="text-4xl mb-3">📚</div>
                <Text variant="h3" className="!text-lg !font-semibold !mb-2">
                  Songbook {item}
                </Text>
                <Text variant="small">
                  24 songs • Created Jan 2026
                </Text>
              </div>
              <Button variant="primary" size="sm">
                Open
              </Button>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
