'use client';

import { Text, Button } from '../Atoms';
import { Card } from '../Molecules';

export default function RepertoarView({ searchQuery }) {
  return (
    <div>
      <Text variant="h2" className="!mb-6">
        Repertoar
      </Text>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {/* Placeholder Cards */}
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((item) => (
          <Card key={item} className="hover:shadow-lg transition-shadow cursor-pointer">
            <div className="text-4xl mb-3">🎭</div>
            <Text variant="h3" className="!text-lg !font-semibold !mb-2">
              Folk Collection {item}
            </Text>
            <Text variant="small" className="!mb-4">
              12 songs
            </Text>
            <Button variant="primary" size="sm">
              View
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}
