import { Button } from '../Atoms';

export default function FormGroup({ 
  children, 
  onSubmit,
  submitLabel = 'Submit',
  isLoading = false,
  className = '',
}) {
  return (
    <form onSubmit={onSubmit} className={`space-y-5 ${className}`}>
      {children}
      <Button
        variant="primary"
        size="lg"
        className="w-full"
        disabled={isLoading}
        type="submit"
      >
        {isLoading ? 'Loading...' : submitLabel}
      </Button>
    </form>
  );
}
