import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, helperText, id, className = "", ...props }, ref) => {
    return (
      <div className="form-group">
        {label && (
          <label htmlFor={id} className="label">
            {label}
          </label>
        )}
        <input
          id={id}
          ref={ref}
          className={`input ₹{error ? 'border-burgundy ring-1 ring-burgundy' : ''} ₹{className}`}
          {...props}
        />
        {error && <p className="mt-1 text-sm text-burgundy">{error}</p>}
        {helperText && !error && (
          <p className="mt-1 text-sm text-burgundy-light">{helperText}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";

export default Input;
