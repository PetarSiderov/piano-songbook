import { useState } from 'react';
import { useAuth } from '../../hooks/useAuth';
import { useNotification } from '../../hooks/useNotification';
import { Text } from '../Atoms';
import { 
  FormField, 
  FormGroup, 
  Card, 
  Divider, 
  SocialAuth, 
  FormFooter 
} from '../Molecules';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  
  const { login, loading } = useAuth();
  const { addNotification } = useNotification();

  const validateForm = () => {
    const newErrors = {};
    
    if (!email) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(email)) newErrors.email = 'Email is invalid';
    
    if (!password) newErrors.password = 'Password is required';
    else if (password.length < 6) newErrors.password = 'Password must be at least 6 characters';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    try {
      await login(email, password);
      addNotification('Login successful!', 'success');
    } catch (error) {
      addNotification(error.message || 'Login failed', 'error');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-4">
      <div className="w-full max-w-md">
        {/* Card Molecule containing Form Molecules */}
        <Card 
          title="Welcome Back"
          subtitle="Sign in to your Balkanory account"
        >
          {/* FormGroup Molecule with FormField Molecules */}
          <FormGroup 
            onSubmit={handleSubmit}
            submitLabel="Sign In"
            isLoading={loading}
          >
            <FormField
              label="Email Address"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              error={errors.email}
            />

            <FormField
              label="Password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              error={errors.password}
            />

            {/* Remember Me & Forgot Password */}
            <div className="flex justify-between items-center text-sm">
              <label className="flex items-center">
                <input type="checkbox" className="mr-2" />
                <span>Remember me</span>
              </label>
              <a href="#forgot-password" className="text-blue-500 hover:text-blue-700">
                Forgot password?
              </a>
            </div>
          </FormGroup>

          {/* Divider Molecule */}
          <Divider text="or" />

          {/* SocialAuth Molecule */}
          <div className="mb-6">
            <SocialAuth providers={['Google', 'GitHub']} />
          </div>

          {/* FormFooter Molecule */}
          <FormFooter 
            text="Don't have an account?"
            linkText="Create one"
            linkHref="/signup"
          />
        </Card>

        {/* Footer Text */}
        <div className="text-center mt-6 text-gray-600 text-sm">
          <p>Protected by reCAPTCHA and subject to the</p>
          <div className="space-x-2">
            <a href="#privacy" className="hover:underline">Privacy Policy</a>
            <span>and</span>
            <a href="#terms" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </div>
  );
}
