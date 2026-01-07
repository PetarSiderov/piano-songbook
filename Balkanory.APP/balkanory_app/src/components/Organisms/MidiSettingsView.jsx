'use client';

import { Text, Button, Input } from '../Atoms';
import { Card } from '../Molecules';

export default function MidiSettingsView() {
  return (
    <div>
      <Text variant="h2" className="!mb-6">
        MIDI Settings
      </Text>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl">
        {/* MIDI Device Selection */}
        <Card>
          <Text variant="h3" className="!text-lg !font-semibold !mb-4">
            MIDI Input Device
          </Text>
          <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Select MIDI Input</option>
            <option>USB Keyboard</option>
            <option>Internal Synth</option>
          </select>
        </Card>

        {/* Output Device */}
        <Card>
          <Text variant="h3" className="!text-lg !font-semibold !mb-4">
            MIDI Output Device
          </Text>
          <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
            <option>Select MIDI Output</option>
            <option>External Synthesizer</option>
            <option>Software</option>
          </select>
        </Card>

        {/* Tempo */}
        <Card>
          <Text variant="h3" className="!text-lg !font-semibold !mb-4">
            Tempo (BPM)
          </Text>
          <Input
            type="number"
            defaultValue="120"
            min="40"
            max="300"
          />
        </Card>

        {/* Volume */}
        <Card>
          <Text variant="h3" className="!text-lg !font-semibold !mb-4">
            Master Volume
          </Text>
          <input
            type="range"
            min="0"
            max="100"
            defaultValue="80"
            className="w-full"
          />
        </Card>
      </div>

      {/* Save Button */}
      <Button variant="primary" className="!mt-6">
        Save Settings
      </Button>
    </div>
  );
}
