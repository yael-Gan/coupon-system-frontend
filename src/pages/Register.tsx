import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { 
  FaEye, 
  FaEyeSlash, 
  FaGoogle, 
  FaFacebook, 
  FaApple, 
  FaUser, 
  FaEnvelope, 
  FaLock,
  FaCheckCircle, 
  FaRocket, 
  FaGift, 
  FaStar 
} from "react-icons/fa";

interface RegisterData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

interface RegisterErrors {
  username?: string;
  email?: string;
  password?: string;
  confirmPassword?: string;
}

const Register = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<RegisterData>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState<RegisterErrors>({});
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleSocialLogin = async (provider: string) => {
    try {
      // You can implement the actual social login logic here
      console.log(`Logging in with ${provider}`);
      
      // Example implementation (you'll need to replace this with your actual social login logic):
      // const response = await yourAuthService.socialLogin(provider);
      // if (response.success) {
      //   navigate('/dashboard'); // Redirect after successful login
      // }
    } catch (error) {
      console.error(`Error logging in with ${provider}:`, error);
      // Handle error (e.g., show error message to user)
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const validateForm = (): boolean => {
    const newErrors: RegisterErrors = {};
    
    if (!formData.username.trim()) {
      newErrors.username = 'שם משתמש הוא שדה חובה';
    } else if (formData.username.length < 3) {
      newErrors.username = 'שם משתמש חייב להכיל לפחות 3 תווים';
    }

    if (!formData.email) {
      newErrors.email = 'אימייל הוא שדה חובה';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'אימייל לא תקין';
    }

    if (!formData.password) {
      newErrors.password = 'סיסמה היא שדה חובה';
    } else if (formData.password.length < 6) {
      newErrors.password = 'הסיסמה חייבת להכיל לפחות 6 תווים';
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'הסיסמאות לא תואמות';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Show success animation
      setShowSuccess(true);
      
      // After animation completes, you can redirect or do something else
      setTimeout(() => {
        // navigate('/dashboard'); // Uncomment this when you want to redirect after success
      }, 4000);
      
    } catch (error) {
      console.error("Registration error:", error);
    } finally {
      setIsSubmitting(false);
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] flex items-center justify-center p-4">
      <motion.div 
        className="w-full max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <motion.div 
          className="bg-[#2A241C]/90 backdrop-blur-sm border border-[#3A3329] rounded-2xl shadow-2xl p-8"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-yellow-500 mb-2">צור חשבון חדש</h2>
            <p className="text-gray-400">הצטרף אלינו עוד היום והתחל לחסוך!</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <FaUser className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="שם משתמש"
                  className={`w-full pr-10 pl-4 py-3 bg-[#1E1B16] border ${errors.username ? 'border-red-500' : 'border-[#3A3329]'} rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500`}
                />
              </div>
              {errors.username && <p className="mt-1 text-sm text-red-500 text-right">{errors.username}</p>}
            </div>

            <div>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                  <FaEnvelope className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="אימייל"
                  className={`w-full pr-10 pl-4 py-3 bg-[#1E1B16] border ${errors.email ? 'border-red-500' : 'border-[#3A3329]'} rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500`}
                />
              </div>
              {errors.email && <p className="mt-1 text-sm text-red-500 text-right">{errors.email}</p>}
            </div>

            <div>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="text-gray-400 hover:text-yellow-500 focus:outline-none"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="סיסמה"
                  className={`w-full pr-10 pl-4 py-3 bg-[#1E1B16] border ${errors.password ? 'border-red-500' : 'border-[#3A3329]'} rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500`}
                />
                <div className="absolute inset-y-0 right-10 pr-3 flex items-center pointer-events-none">
                  <FaLock className="h-5 w-5 text-gray-400" />
                </div>
              </div>
              {errors.password && <p className="mt-1 text-sm text-red-500 text-right">{errors.password}</p>}
            </div>

            <div>
              <div className="relative">
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="text-gray-400 hover:text-yellow-500 focus:outline-none"
                  >
                    {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>
                </div>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="אשר סיסמה"
                  className={`w-full pr-10 pl-4 py-3 bg-[#1E1B16] border ${errors.confirmPassword ? 'border-red-500' : 'border-[#3A3329]'} rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500`}
                />
                <div className="absolute inset-y-0 right-10 pr-3 flex items-center pointer-events-none">
                  <FaLock className="h-5 w-5 text-gray-400" />
                </div>
              </div>
              {errors.confirmPassword && <p className="mt-1 text-sm text-red-500 text-right">{errors.confirmPassword}</p>}
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
            >
              {isSubmitting ? (
                <>
                  <svg className="animate-spin -ml-1 mr-2 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  מבצע הרשמה...
                </>
              ) : 'הרשמה'}
            </button>
          </form>

          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-700"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-[#2A241C] text-gray-400">או הירשם באמצעות</span>
              </div>
            </div>

            <div className="mt-6 grid grid-cols-3 gap-3">
              <button
                type="button"
                onClick={() => handleSocialLogin("google")}
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-600 rounded-lg shadow-sm bg-[#3A3329] text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors"
              >
                <FaGoogle className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => handleSocialLogin("facebook")}
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-600 rounded-lg shadow-sm bg-[#3A3329] text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors"
              >
                <FaFacebook className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={() => handleSocialLogin("apple")}
                className="w-full inline-flex justify-center py-2 px-4 border border-gray-600 rounded-lg shadow-sm bg-[#3A3329] text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors"
              >
                <FaApple className="h-5 w-5" />
              </button>
            </div>
          </div>

          <motion.p 
            className="text-center text-sm text-gray-400 mt-6"
            variants={itemVariants}
          >
            כבר יש לך חשבון?{" "}
            <Link
              to="/login"
              className="font-medium text-yellow-500 hover:text-yellow-400 transition-colors"
            >
              התחבר עכשיו
            </Link>
          </motion.p>
        </motion.div>
      </motion.div>

      {/* Success Modal */}
      <AnimatePresence>
        {showSuccess && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
            <motion.div 
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
              className="bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-2xl p-8 max-w-md w-full mx-4 text-center shadow-2xl border-2 border-yellow-400 overflow-hidden relative"
            >
              {/* Confetti effect */}
              {[...Array(20)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-2 h-2 bg-yellow-300 rounded-full"
                  initial={{ x: '50%', y: '50%', opacity: 1 }}
                  animate={{
                    x: `${Math.random() * 100}%`,
                    y: `${100 + Math.random() * 100}%`,
                    opacity: 0,
                    rotate: Math.random() * 360
                  }}
                  transition={{
                    duration: 1.5 + Math.random() * 2,
                    repeat: Infinity,
                    repeatType: 'loop',
                    ease: 'easeOut'
                  }}
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${-20 + Math.random() * 40}%`,
                  }}
                />
              ))}
              
              <div className="relative z-10">
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: [0, 1.2, 1] }}
                  className="w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg"
                >
                  <FaCheckCircle className="text-5xl text-white" />
                </motion.div>
                
                <motion.h2 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="text-3xl font-bold text-white mb-4"
                >
                  !הרשמה בוצעה בהצלחה
                </motion.h2>
                
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-4 text-yellow-100 mb-8"
                >
                  <p className="flex items-center justify-center gap-2">
                    <FaRocket className="animate-bounce" />
                    <span>!הכל מוכן, מתחילים להרוויח</span>
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <FaGift className="text-yellow-300" />
                    <span>הטבות בלעדיות מחכות לך</span>
                  </p>
                  <p className="flex items-center justify-center gap-2">
                    <FaStar className="text-yellow-300 animate-pulse" />
                    <span>!התחל לגזור קופונים עכשיו</span>
                  </p>
                </motion.div>
                
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 5px 15px rgba(0,0,0,0.3)' }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    setShowSuccess(false);
                    navigate('/');
                  }}
                  className="bg-white text-yellow-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300"
                >
                  !יאללה, התחל לגזור קופונים
                </motion.button>
              </div>
              
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-400">
                <motion.div
                  initial={{ width: '100%' }}
                  animate={{ width: '0%' }}
                  transition={{ duration: 4, ease: 'linear' }}
                  className="h-full bg-white"
                  onAnimationComplete={() => setShowSuccess(false)}
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Register;
