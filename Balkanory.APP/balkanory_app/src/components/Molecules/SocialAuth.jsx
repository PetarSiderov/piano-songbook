import { Button } from '../Atoms';

export default function SocialAuth({ providers = ['Google', 'GitHub'] }) {
  return (
    <div className="space-y-3">
      {providers.map((provider) => (
        <Button 
          key={provider}
          variant="secondary" 
          size="md" 
          className="w-full"
          onClick={() => console.log(`Sign in with ${provider}`)}
        >
          Sign in with {provider}
        </Button>
      ))}
    </div>
  );
}
