import { Text } from '../Atoms';

export default function FormFooter({ 
  text, 
  linkText, 
  linkHref = '#',
}) {
  return (
    <div className="text-center">
      <Text variant="small">
        {text}{' '}
        <a href={linkHref} className="text-blue-500 hover:text-blue-700 font-semibold">
          {linkText}
        </a>
      </Text>
    </div>
  );
}
