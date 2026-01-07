'use client';

import { useRouter } from 'next/navigation';
import { useAuth } from '../../hooks/useAuth';
import { useNotification } from '../../hooks/useNotification';
import { useFormValidation } from '../../hooks/useFormValidation';
import {
  validateEmail,
  validatePassword,
  validateUsername,
  validateConfirmPassword,
  validateCountry,
  validateCity,
  validatePhone,
} from '../../utils/validation';
import { FormField, FormGroup } from '../Molecules';
import AuthLayout from '../Templates/AuthLayout';

export default function SignUp() {
  const router = useRouter();
  const { signUp, isLoading } = useAuth();
  const { addNotification } = useNotification();

  const validateSignUpForm = (fieldName, value, formData) => {
    switch (fieldName) {
      case 'email':
        return validateEmail(value);
      case 'password':
        return validatePassword(value);
      case 'username':
        return validateUsername(value);
      case 'confirmPassword':
        return validateConfirmPassword(formData.password, value);
      case 'country':
        return validateCountry(value);
      case 'city':
        return validateCity(value);
      case 'phone':
        return validatePhone(value);
      default:
        return null;
    }
  };

  const { formData, errors, handleChange, handleBlur, validateForm, resetForm } = useFormValidation(
    {
      email: '',
      password: '',
      username: '',
      confirmPassword: '',
      country: '',
      city: '',
      phone: '',
    },
    validateSignUpForm
  );

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    try {
      await signUp({
        email: formData.email,
        password: formData.password,
        username: formData.username,
        country: formData.country,
        city: formData.city,
        phone: formData.phone,
      });
      addNotification('Sign up successful! Please check your email to verify your account.', 'success');
      resetForm();
      router.push('/login');
    } catch (error) {
      addNotification(error.message || 'Sign up failed', 'error');
    }
  };

  return (
    <AuthLayout
      title="Create Your Account"
      subtitle="Join Balkanory and explore the Balkans"
      footerText="Already have an account?"
      footerLinkText="Sign in"
      footerLinkHref="/login"
    >
      <FormGroup
        onSubmit={handleSubmit}
        submitLabel="Sign Up"
        isLoading={isLoading}
      >
        <FormField
          label="Email"
          name="email"
          type="email"
          placeholder="you@example.com"
          value={formData.email}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.email}
        />
        <FormField
          label="Username"
          name="username"
          type="text"
          placeholder="your_username"
          value={formData.username}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.username}
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
        <FormField
          label="Confirm Password"
          name="confirmPassword"
          type="password"
          placeholder="••••••••"
          value={formData.confirmPassword}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.confirmPassword}
        />
        <FormField
          label="Country"
          name="country"
          type="text"
          placeholder="Your country"
          value={formData.country}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.country}
        />
        <FormField
          label="City"
          name="city"
          type="text"
          placeholder="Your city"
          value={formData.city}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.city}
        />
        <FormField
          label="Phone Number"
          name="phone"
          type="tel"
          placeholder="+1234567890"
          value={formData.phone}
          onChange={handleChange}
          onBlur={handleBlur}
          error={errors.phone}
        />
      </FormGroup>
    </AuthLayout>
  );
}
