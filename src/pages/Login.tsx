import React, { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle, FaFacebook, FaApple, FaStar, FaSpinner } from "react-icons/fa";
import { FiArrowRight, FiLogIn } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../contexts/AuthContext";
import { toast } from "react-hot-toast";

interface LoginErrors {
  email?: string;
  password?: string;
}

export const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [errors, setErrors] = useState<LoginErrors>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [mounted, setMounted] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();
  const location = useLocation();
  const { login, isAuthenticated } = useAuth();

  // Redirect if already logged in
  useEffect(() => {
    if (isAuthenticated) {
      const from = location.state?.from?.pathname || '/';
      navigate(from, { replace: true });
    }
  }, [isAuthenticated, navigate, location]);

  const validateForm = (): boolean => {
    const newErrors: LoginErrors = {};
    if (!email) {
      newErrors.email = "נא להזין כתובת אימייל";
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = "כתובת אימייל לא תקינה";
    }
    if (!password) {
      newErrors.password = "נא להזין סיסמה";
    } else if (password.length < 6) {
      newErrors.password = "הסיסמה חייבת להכיל לפחות 6 תווים";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsLoading(true);
    setError(null);
    
    try {
      await login(email, password);
      toast.success('התחברת בהצלחה!');
      // The AuthContext will handle the redirect
    } catch (err: any) {
      setError(err.message || 'שגיאה בהתחברות. נסה שוב.');
      toast.error('שם משתמש או סיסמה לא נכונים');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSocialLogin = (provider: string) => {
    console.log(`Logging in with ${provider}`);
    // Implement social login logic here
  };

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: 'spring' as const,
        stiffness: 100,
        damping: 10
      }
    }
  };

  useEffect(() => {
    setMounted(true);
    
    // Add a class to the body to prevent scrolling when modal is open
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#211C17] text-white flex items-center justify-center p-4 overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#211C17] to-[#2A241C] opacity-90"></div>
        <FloatingParticles count={15} />
      </div>
      
      <AnimatePresence>
        {mounted && (
          <motion.div 
            className="w-full max-w-md relative z-10"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.div 
              className="text-center mb-10"
              variants={itemVariants}
            >
              <motion.div 
                className="flex justify-center mb-4"
                initial={{ scale: 0, rotate: -180 }}
                animate={{ 
                  scale: 1, 
                  rotate: 0,
                  transition: { 
                    type: 'spring', 
                    stiffness: 260, 
                    damping: 20 
                  } 
                }}
              >
                <div className="bg-gradient-to-br from-yellow-400 to-yellow-500 w-16 h-16 flex items-center justify-center rounded-xl text-2xl font-bold text-[#211C17] shadow-lg">
                  <motion.div
                    animate={{ 
                      scale: [1, 1.1, 1],
                      rotate: [0, 10, -10, 0]
                    }}
                    transition={{ 
                      repeat: Infinity, 
                      repeatType: 'reverse', 
                      duration: 2 
                    }}
                  >
                    <FaStar className="text-yellow-200" />
                  </motion.div>
                </div>
              </motion.div>
              <h1 className="text-3xl font-bold mb-2">ברוכים השבים!</h1>
              <p className="text-gray-400">התחברו לחשבון שלכם כדי להמשיך</p>
            </motion.div>

            <motion.div 
              className="bg-[#2A241C]/90 backdrop-blur-sm border border-[#3A3329] rounded-2xl shadow-2xl p-8 mb-6"
              variants={itemVariants}
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: 'spring' }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    אימייל
                  </label>
                  <div className="relative">
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={`w-full px-4 py-3 bg-[#3A3329] border ${
                        errors.email ? "border-red-500" : "border-[#4A4238]"
                      } rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all duration-200`}
                      placeholder="האימייל שלך"
                      dir="ltr"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                    )}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <label htmlFor="password" className="block text-sm font-medium">
                      סיסמה
                    </label>
                    <Link
                      to="/forgot-password"
                      className="text-sm text-yellow-400 hover:text-yellow-300 transition-colors"
                    >
                      שכחת את הסיסמה?
                    </Link>
                  </div>
                  <div className="relative">
                    <input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className={`w-full px-4 py-3 bg-[#3A3329] border ${
                        errors.password ? "border-red-500" : "border-[#4A4238]"
                      } rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none pr-12 transition-all duration-200`}
                      placeholder="הקלד את הסיסמה שלך"
                      dir="ltr"
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-yellow-400 transition-colors"
                    >
                      {showPassword ? <FaEyeSlash /> : <FaEye />}
                    </button>
                    {errors.password && (
                      <p className="mt-1 text-sm text-red-400">{errors.password}</p>
                    )}
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      name="remember-me"
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="h-4 w-4 text-yellow-500 focus:ring-yellow-400 border-gray-600 rounded"
                    />
                    <label
                      htmlFor="remember-me"
                      className="mr-2 block text-sm text-gray-300"
                    >
                      זכור אותי
                    </label>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-[#211C17] ${
                    isLoading
                      ? "bg-yellow-400"
                      : "bg-yellow-500 hover:bg-yellow-400"
                  } focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors duration-200`}
                >
                  {isLoading ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin -ml-1 mr-2 h-4 w-4 text-[#211C17]"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      מתחבר...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <FiLogIn className="ml-2" /> התחבר
                    </span>
                  )}
                </button>
              </form>

              <div className="mt-6">
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-700"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-2 bg-[#2A241C] text-gray-400">או התחבר באמצעות</span>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-3 gap-3">
                  <button
                    onClick={() => handleSocialLogin("google")}
                    type="button"
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-600 rounded-lg shadow-sm bg-[#3A3329] text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors"
                  >
                    <FaGoogle className="h-5 w-5 text-red-500" />
                  </button>

                  <button
                    onClick={() => handleSocialLogin("facebook")}
                    type="button"
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-600 rounded-lg shadow-sm bg-[#3A3329] text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors"
                  >
                    <FaFacebook className="h-5 w-5 text-blue-500" />
                  </button>

                  <button
                    onClick={() => handleSocialLogin("apple")}
                    type="button"
                    className="w-full inline-flex justify-center py-2 px-4 border border-gray-600 rounded-lg shadow-sm bg-[#3A3329] text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors"
                  >
                    <FaApple className="h-5 w-5" />
                  </button>
                </div>
              </div>
            </motion.div>

            <motion.p 
              className="text-center text-sm text-gray-400 mt-4"
              variants={itemVariants}
            >
              אין לך חשבון עדיין?{" "}
              <Link
                to="/register"
                className="font-medium text-yellow-500 hover:text-yellow-400 transition-colors"
              >
                הירשם עכשיו
              </Link>
            </motion.p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// Floating particles component
const FloatingParticles: React.FC<{ count?: number }> = ({ count = 20 }) => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array.from({ length: count }).map((_, i) => {
        const size = Math.random() * 10 + 5;
        const duration = Math.random() * 10 + 10;
        const delay = Math.random() * 5;
        const position = {
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
        };
        
        return (
          <motion.div
            key={i}
            className="absolute rounded-full bg-yellow-400/20"
            style={{
              width: `${size}px`,
              height: `${size}px`,
              ...position,
            }}
            animate={{
              y: [0, -50, 0],
              x: [0, Math.random() * 100 - 50, 0],
              opacity: [0.2, 0.8, 0.2],
            }}
            transition={{
              duration,
              delay,
              repeat: Infinity,
              repeatType: "reverse" as const,
              ease: "easeInOut",
            }}
          />
        );
      })}
    </div>
  );
};
