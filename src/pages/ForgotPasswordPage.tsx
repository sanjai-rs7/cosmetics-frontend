import { useState, FormEvent, useEffect } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import Input from "../components/ui/Input";
import Button from "../components/ui/Button";

const ForgotPasswordPage = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { forgotPassword } = useAuth();

  useEffect(() => {
    document.title = "Forgot Password | GlowPrime";
  }, []);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      await forgotPassword(email);
      setIsSubmitted(true);
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Failed to send reset email. Please try again.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="container mx-auto px-4 py-12 animate-fade-in">
        <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md text-center">
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-sage flex items-center justify-center">
            <span className="text-2xl text-white">✓</span>
          </div>

          <h1 className="font-serif text-2xl mb-4">Reset Email Sent</h1>

          <p className="text-burgundy-light mb-6">
            We've sent recovery instructions to <strong>{email}</strong>
          </p>

          <p className="text-burgundy-light text-sm mb-6">
            For this demo, we've created a reset token that you can find in the
            browser's console. In a real application, this would be emailed to
            you.
          </p>

          <Link to="/login" className="btn-outline inline-block">
            Return to Login
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in">
      <div className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="text-center mb-8">
          <h1 className="font-serif text-2xl mb-2">Forgot Your Password?</h1>
          <div className="w-16 h-1 bg-rose-gold mx-auto mb-4"></div>
          <p className="text-burgundy-light text-sm">
            Enter your email and we'll send you instructions to reset your
            password
          </p>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-burgundy/10 border-l-4 border-burgundy text-burgundy rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <Input
            label="Email Address"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="your@email.com"
            required
          />

          <Button
            type="submit"
            variant="primary"
            fullWidth
            isLoading={isLoading}
            className="mt-4"
          >
            Send Reset Instructions
          </Button>
        </form>

        <div className="divider divider-fancy my-8"></div>

        <p className="text-center text-burgundy-light">
          Remembered your password?{" "}
          <Link
            to="/login"
            className="text-rose-gold hover:text-burgundy transition-colors"
          >
            Back to sign in
          </Link>
        </p>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;
