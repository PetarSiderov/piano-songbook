import { Button, Text } from '../Atoms';

export default function Divider({ text = 'or' }) {
  return (
    <div className="my-6 flex items-center">
      <div className="flex-1 border-t border-gray-300"></div>
      <span className="px-3 text-sm text-gray-500">{text}</span>
      <div className="flex-1 border-t border-gray-300"></div>
    </div>
  );
}
