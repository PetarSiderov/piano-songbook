// Email validation
export const validateEmail = (email) => {
  if (!email) return 'Email is required';
  if (!/\S+@\S+\.\S+/.test(email)) return 'Email is invalid';
  return null;
};

// Password validation
export const validatePassword = (password) => {
  if (!password) return 'Password is required';
  if (password.length < 6) return 'Password must be at least 6 characters';
  return null;
};

// Username validation
export const validateUsername = (username) => {
  if (!username) return 'Username is required';
  if (username.length < 3) return 'Username must be at least 3 characters';
  return null;
};

// Confirm password validation
export const validateConfirmPassword = (password, confirmPassword) => {
  if (!confirmPassword) return 'Please confirm your password';
  if (password !== confirmPassword) return 'Passwords do not match';
  return null;
};

// Country validation
export const validateCountry = (country) => {
  if (!country) return 'Country is required';
  return null;
};

// City validation
export const validateCity = (city) => {
  if (!city) return 'City is required';
  return null;
};

// Phone validation
export const validatePhone = (phone) => {
  if (!phone) return 'Phone number is required';
  if (!/^\d{10,}$/.test(phone.replace(/\D/g, ''))) return 'Phone number must be at least 10 digits';
  return null;
};
