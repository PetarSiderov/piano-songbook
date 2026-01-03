export default function Text({ 
  children, 
  variant = 'body',
  className = '',
  ...props 
}) {
  const variants = {
    h1: 'text-4xl font-bold',
    h2: 'text-3xl font-bold',
    h3: 'text-2xl font-bold',
    body: 'text-base',
    small: 'text-sm text-gray-600',
  };
  
  const Tag = variant.startsWith('h') ? variant : 'p';
  
  return (
    <Tag className={`${variants[variant]} ${className}`} {...props}>
      {children}
    </Tag>
  );
}
