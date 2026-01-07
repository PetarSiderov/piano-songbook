'use client';

import { useRouter } from 'next/navigation';
import { useAuth } from '../../hooks/useAuth';
import { useNotification } from '../../hooks/useNotification';
import { useFormValidation } from '../../hooks/useFormValidation';
import { validateEmail, validatePassword } from '../../utils/validation';
import { FormField, FormGroup } from '../Molecules';
import AuthLayout from '../Templates/AuthLayout';

export default function Login() {
  const router = useRouter();
  const { login, loading } = useAuth();
  const { addNotification } = useNotification();

  const validateLoginForm = (fieldName, value, formData) => {
    switch (fieldName) {
      case 'email':
        return validateEmail(value);
      case 'password':
        return validatePassword(value);
      default:
        return null;
    }
  };

  const { formData, errors, handleChange, handleBlur, validateForm, resetForm } = useFormValidation(
    { email: '', password: '' },
    validateLoginForm
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) return;

    try {
      await login(formData.email, formData.password);
      addNotification('Login successful!', 'success');
      resetForm();
      router.push('/dashboard');
    } catch (error) {
      addNotification(error.message || 'Login failed', 'error');
    }
  };

  return (
    <AuthLayout
      title="Welcome Back"
      subtitle="Sign in to your Balkanory account"
      footerText="Don't have an account?"
      footerLinkText="Create one"
      footerLinkHref="/signup"
    >
      <FormGroup 
        onSubmit={handleSubmit}
        submitLabel="Sign In"
        isLoading={loading}
      >
        <FormField
          label="Email Address"
          name="email"
          type="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.email}
        />

        <FormField
          label="Password"
          name="password"
          type="password"
          placeholder="••••••••"
          value={formData.password}
          onChange={handleChange}
          onBlur={handleBlur}
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
    </AuthLayout>
  );
}
