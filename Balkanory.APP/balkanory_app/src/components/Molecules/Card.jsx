import { Text } from '../Atoms';

export default function Card({ 
  title, 
  subtitle,
  children, 
  className = '' 
}) {
  return (
    <div className={`bg-white rounded-lg shadow-lg p-8 ${className}`}>
      {title && (
        <div className="mb-8 text-center">
          <Text variant="h2" className="mb-2">
            {title}
          </Text>
          {subtitle && (
            <Text variant="small">
              {subtitle}
            </Text>
          )}
        </div>
      )}
      {children}
    </div>
  );
}
