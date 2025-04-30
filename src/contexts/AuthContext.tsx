import {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";

interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
}

interface AuthContextType {
  currentUser: User | null;
  login: (email: string, password: string) => Promise<void>;
  signup: (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) => Promise<void>;
  logout: () => void;
  forgotPassword: (email: string) => Promise<void>;
  resetPassword: (token: string, newPassword: string) => Promise<void>;
  updateProfile: (userData: Partial<User>) => Promise<void>;
  isLoading: boolean;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
}

interface AuthProviderProps {
  children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps) {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check if user is logged in from localStorage
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setCurrentUser(JSON.parse(storedUser));
      } catch (e) {
        localStorage.removeItem("user");
      }
    }
    setIsLoading(false);
  }, []);

  // Simulate API delays
  const delay = (ms: number) =>
    new Promise((resolve) => setTimeout(resolve, ms));

  const login = async (email: string, password: string) => {
    setError(null);
    setIsLoading(true);

    try {
      // For a real app, this would be an API call
      await delay(1000);

      // Simulate user validation
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const user = users.find(
        (u: any) => u.email === email && u.password === password
      );

      if (!user) {
        throw new Error("Invalid email or password");
      }

      // Remove password before storing in state/localStorage
      const { password: _, ...userWithoutPassword } = user;
      setCurrentUser(userWithoutPassword);
      localStorage.setItem("user", JSON.stringify(userWithoutPassword));
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unexpected error occurred");
      }
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (
    email: string,
    password: string,
    firstName: string,
    lastName: string
  ) => {
    setError(null);
    setIsLoading(true);

    try {
      // For a real app, this would be an API call
      await delay(1000);

      // Check if email already exists
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const existingUser = users.find((u: any) => u.email === email);

      if (existingUser) {
        throw new Error("Email already in use");
      }

      // Create new user
      const newUser = {
        id: Date.now().toString(),
        email,
        password, // In a real app, this would be hashed
        firstName,
        lastName,
        createdAt: new Date().toISOString(),
      };

      // Save to localStorage
      users.push(newUser);
      localStorage.setItem("users", JSON.stringify(users));

      // Login the user
      const { password: _, ...userWithoutPassword } = newUser;
      setCurrentUser(userWithoutPassword);
      localStorage.setItem("user", JSON.stringify(userWithoutPassword));
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unexpected error occurred");
      }
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    setCurrentUser(null);
    localStorage.removeItem("user");
  };

  const forgotPassword = async (email: string) => {
    setError(null);
    setIsLoading(true);

    try {
      // For a real app, this would send a reset token/email
      await delay(1000);

      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const user = users.find((u: any) => u.email === email);

      if (!user) {
        throw new Error("No account found with this email");
      }

      // For demo, we'll just create a "reset token" in localStorage
      const resetToken = Math.random().toString(36).substring(2, 15);
      const resetRequests = JSON.parse(
        localStorage.getItem("resetRequests") || "[]"
      );

      resetRequests.push({
        email,
        token: resetToken,
        expiry: Date.now() + 3600000, // 1 hour from now
      });

      localStorage.setItem("resetRequests", JSON.stringify(resetRequests));

      // In a real app, we would send an email with the reset link
      console.log(`Reset token for ₹{email}: ₹{resetToken}`);
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unexpected error occurred");
      }
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const resetPassword = async (token: string, newPassword: string) => {
    setError(null);
    setIsLoading(true);

    try {
      await delay(1000);

      // Validate token
      const resetRequests = JSON.parse(
        localStorage.getItem("resetRequests") || "[]"
      );
      const request = resetRequests.find(
        (r: any) => r.token === token && r.expiry > Date.now()
      );

      if (!request) {
        throw new Error("Invalid or expired reset token");
      }

      // Update the user's password
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const userIndex = users.findIndex((u: any) => u.email === request.email);

      if (userIndex === -1) {
        throw new Error("User not found");
      }

      users[userIndex].password = newPassword;
      localStorage.setItem("users", JSON.stringify(users));

      // Remove the used reset request
      const updatedRequests = resetRequests.filter(
        (r: any) => r.token !== token
      );
      localStorage.setItem("resetRequests", JSON.stringify(updatedRequests));
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unexpected error occurred");
      }
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const updateProfile = async (userData: Partial<User>) => {
    setError(null);
    setIsLoading(true);

    try {
      await delay(500);

      if (!currentUser) {
        throw new Error("No user is logged in");
      }

      // Update user in localStorage
      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const userIndex = users.findIndex((u: any) => u.id === currentUser.id);

      if (userIndex === -1) {
        throw new Error("User not found");
      }

      // Update fields
      const updatedUser = { ...users[userIndex], ...userData };
      users[userIndex] = updatedUser;

      // Save back to localStorage
      localStorage.setItem("users", JSON.stringify(users));

      // Update current user
      const { password: _, ...userWithoutPassword } = updatedUser;
      setCurrentUser({ ...userWithoutPassword });
      localStorage.setItem("user", JSON.stringify(userWithoutPassword));
    } catch (error) {
      if (error instanceof Error) {
        setError(error.message);
      } else {
        setError("An unexpected error occurred");
      }
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const value = {
    currentUser,
    login,
    signup,
    logout,
    forgotPassword,
    resetPassword,
    updateProfile,
    isLoading,
    error,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
