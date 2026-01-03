import { Input, Text } from '../Atoms';

export default function FormField({ 
  label, 
  type = 'text',
  placeholder = '', 
  value,
  onChange,
  error,
  className = '',
  ...props 
}) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}
      <Input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={error ? 'border-red-500 focus:ring-red-500' : ''}
        {...props}
      />
      {error && (
        <Text variant="small" className="text-red-500">
          {error}
        </Text>
      )}
    </div>
  );
}
