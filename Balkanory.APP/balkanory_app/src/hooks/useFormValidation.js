import { useState, useCallback } from 'react';

/**
 * Custom hook for managing form state and validation
 * @param {Object} initialState - Initial form field values
 * @param {Function} onValidate - Custom validation function
 * @returns {Object} Form state, handlers, and methods
 */
export function useFormValidation(initialState, onValidate) {
  const [formData, setFormData] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (touched[name]) {
      validateField(name, value);
    }
  }, [touched]);

  const handleBlur = useCallback((e) => {
    const { name, value } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));
    validateField(name, value);
  }, []);

  const validateField = (fieldName, value) => {
    if (onValidate) {
      const error = onValidate(fieldName, value, formData);
      setErrors((prev) => ({
        ...prev,
        [fieldName]: error,
      }));
    }
  };

  const validateForm = useCallback(() => {
    const newErrors = {};
    Object.keys(formData).forEach((fieldName) => {
      if (onValidate) {
        const error = onValidate(fieldName, formData[fieldName], formData);
        if (error) newErrors[fieldName] = error;
      }
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  }, [formData, onValidate]);

  const resetForm = useCallback(() => {
    setFormData(initialState);
    setErrors({});
    setTouched({});
  }, [initialState]);

  return {
    formData,
    errors,
    touched,
    handleChange,
    handleBlur,
    validateForm,
    resetForm,
    setFormData,
    setErrors,
  };
}
