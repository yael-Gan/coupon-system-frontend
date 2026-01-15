import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGift, FaSearch, FaChartLine, FaShieldAlt, FaRocket, FaTags, FaPercent, FaChevronRight, FaChevronLeft, FaFire, FaStar, FaClock, FaStore, FaTag, FaShare, FaHeart, FaRegHeart, FaCut, FaUserAlt } from 'react-icons/fa';
import { FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const features = [
    {
      icon: <FaGift className="text-2xl text-yellow-500" />,
      title: 'מאות קופונים בלעדיים',
      description: 'גלה את ההנחות והמבצעים הכי טובים בשוק',
      bgColor: 'bg-yellow-500/10',
      textColor: 'text-yellow-400',
      borderColor: 'border-yellow-500/20',
      hoverBg: 'hover:bg-yellow-500/20',
      iconBg: 'bg-yellow-500/20'
    },
    {
      icon: <FaSearch className="text-2xl text-yellow-400" />,
      title: 'חיפוש מתקדם',
      description: 'מצא את הקופונים המתאימים לך בקלות ובמהירות',
      bgColor: 'bg-yellow-400/10',
      textColor: 'text-yellow-400',
      borderColor: 'border-yellow-400/20',
      hoverBg: 'hover:bg-yellow-400/20',
      iconBg: 'bg-yellow-400/20'
    },
    {
      icon: <FaChartLine className="text-2xl text-yellow-300" />,
      title: 'מעקב אחרי חיסכון',
      description: 'ראה כמה כסף חסכת באמצעות הקופונים שלך',
      bgColor: 'bg-yellow-300/10',
      textColor: 'text-yellow-300',
      borderColor: 'border-yellow-300/20',
      hoverBg: 'hover:bg-yellow-300/20',
      iconBg: 'bg-yellow-300/20'
    },
    {
      icon: <FaShieldAlt className="text-2xl text-yellow-500" />,
      title: 'בטוח ואמין',
      description: 'כל הקופים נבדקים ומאומתים על ידי הצוות שלנו',
      bgColor: 'bg-yellow-500/10',
      textColor: 'text-yellow-500',
      borderColor: 'border-yellow-500/20',
      hoverBg: 'hover:bg-yellow-500/20',
      iconBg: 'bg-yellow-500/20'
    }
  ];

  const stats = [
    { value: '10,000+', label: 'משתמשים מרוצים', icon: '👥', color: 'text-yellow-400' },
    { value: '5,000+', label: 'קופונים פעילים', icon: '🏷️', color: 'text-yellow-400' },
    { value: '₪2M+', label: 'נחסך בסך הכל', icon: '💰', color: 'text-yellow-400' },
    { value: '99%', label: 'שיעור הצלחה', icon: '✨', color: 'text-yellow-400' }
  ];
  
  const heroSlides = [
    {
      title: 'הנחות בלעדיות למשתמשים שלנו',
      subtitle: 'הצטרף לאלפי משתמשים שכבר חוסכים',
      bgGradient: 'from-yellow-600 to-yellow-700',
      buttonText: 'הצטרף עכשיו',
      buttonVariant: 'bg-yellow-500 hover:bg-yellow-600 text-gray-900',
      image: 'הורדה (6).jpg'
    },
    {
      title: 'הנחות בלעדיות למשתמשים שלנו',
      subtitle: 'הצטרף לאלפי משתמשים שכבר חוסכים',
      bgGradient: 'from-yellow-600 to-yellow-700',
      buttonText: 'הצטרף עכשיו',
      buttonVariant: 'bg-yellow-500 hover:bg-yellow-600 text-gray-900',
      image: 'הורדה (7).jpg'
    },
    {
      title: 'חיסכון משמעותי בקניות שלך',
      subtitle: 'מגוון קופונים מהמותגים המובילים',
      bgGradient: 'from-yellow-800 to-yellow-900',
      buttonText: 'גלה עכשיו',
      buttonVariant: 'bg-yellow-500 hover:bg-yellow-600 text-gray-900',
      image: 'הורדה (8).jpg'
    }
  ];
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
  };
  
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1E1B16] to-[#2A241C] text-white">

      {/* Hero Section with Image */}
      <div className="relative overflow-hidden h-[80vh] min-h-[600px] w-full">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="/beautiful-gift-voucher-with-hand.jpg" 
            alt="הנחות וקופונים" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </div>
        
        {/* Content */}
        <div className="relative z-10 h-full flex items-center justify-center text-center px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center bg-white/20 text-white text-sm font-medium px-4 py-2 rounded-full mb-6 backdrop-blur-sm">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-yellow-500 text-white mr-2">
                  <FaFire className="w-3 h-3" />
                </span>
                הפלטפורמה המובילה לחיסכון בכסף
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                חסכו כסף בצורה <span className="text-yellow-300">חכמה</span> יותר
              </h1>
              
              <p className="text-xl text-yellow-100 max-w-2xl mx-auto mb-10">
                גלה את ההנחות והמבצעים הכי טובים באינטרנט במקום אחד, וחסוך מאות שקלים בכל חודש
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/coupons"
                  className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FaRocket className="animate-pulse" />
                  התחל לחסוך עכשיו
                </Link>
                <Link
                  to="/register"
                  className="bg-transparent border-2 border-white/30 hover:bg-white/10 text-white px-8 py-4 rounded-lg text-lg font-semibold shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <span>הצטרף בחינם</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16 bg-[#2A241C]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
              למה לבחור בנו?
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              אנחנו מציעים את הפלטפורמה המתקדמת ביותר לחיסכון בכסף
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className={`p-6 rounded-xl border ${feature.borderColor} ${feature.bgColor} transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/10 ${feature.hoverBg}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className={`w-12 h-12 ${feature.iconBg} rounded-lg flex items-center justify-center mb-4`}>
                  {feature.icon}
                </div>
                <h3 className={`text-lg font-semibold ${feature.textColor} mb-2`}>{feature.title}</h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 bg-gradient-to-r from-yellow-500/10 to-yellow-600/10 rounded-2xl p-8 md:p-12 border border-yellow-500/20">
            <div className="max-w-3xl mx-auto text-center">
              <h3 className="text-2xl font-bold text-yellow-400 mb-4">הצטרף לקהילת החוסכים שלנו</h3>
              <p className="text-yellow-100 mb-6">
                הצטרף לאלפי משתמשים שכבר חוסכים מאות שקלים בכל חודש באמצעות הפלטפורמה שלנו
              </p>
              <Link
                to="/register"
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-gray-900 bg-yellow-500 hover:bg-yellow-400 md:py-4 md:text-lg md:px-10 transition-colors duration-300"
              >
                התחל עכשיו בחינם
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works - Enhanced */}
      <section className="py-24 bg-gradient-to-b from-[#1E1B16] to-[#2A241C] relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-yellow-500/5 rounded-full filter blur-3xl"></div>
          <div className="absolute -bottom-48 -left-48 w-[40rem] h-[40rem] bg-yellow-600/5 rounded-full filter blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-1/2 bg-yellow-500/5 rounded-full filter blur-3xl"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-20">
            <motion.span 
              className="inline-flex items-center px-6 py-2.5 text-sm font-medium text-yellow-100 bg-yellow-500/20 rounded-full mb-6 border border-yellow-500/30 shadow-lg backdrop-blur-sm"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <FaRocket className="ml-2 text-yellow-300" />
              איך זה עובד?
            </motion.span>
            
            <motion.h2 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
            >
              <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent">התחל לחסוך </span> 
              <span className="text-white">ב-3 שלבים פשוטים</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
            >
              גלה איך תוכל להתחיל לחסוך מאות שקלים בכל חודש בצורה פשוטה, מהירה ובטוחה עם הפלטפורמה המובילה בישראל
            </motion.p>
          </div>
          
          <div className="relative mt-16">
            {/* Animated timeline line */}
            <motion.div 
              className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-500/0 via-yellow-400/50 to-yellow-600/0 transform -translate-x-1/2"
              initial={{ height: 0, opacity: 0 }}
              whileInView={{ height: '100%', opacity: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/30 via-yellow-400/30 to-yellow-600/30 rounded-full">
                <div className="absolute inset-0 bg-gradient-to-b from-yellow-500/0 via-yellow-400/10 to-yellow-600/0"></div>
              </div>
            </motion.div>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-yellow-500/30 via-yellow-400/30 to-yellow-600/30 transform -translate-x-1/2 z-0"></div>
              
              {/* Steps container */}
              <div className="space-y-16 md:space-y-32 relative z-10">
                {[
                  {
                    step: '1',
                    title: 'הרשם בחינם',
                    description: 'צור חשבון או התחבר באמצעות הרשתות החברתיות תוך שניות',
                    icon: <FaUserAlt className="text-yellow-100" />,
                    gradient: 'from-yellow-500 to-yellow-600',
                    delay: 0.1
                  },
                  {
                    step: '2',
                    title: 'חפש קופונים',
                    description: 'מצא את ההנחות הכי טובות בקטגוריות האהובות עליך',
                    icon: <FaSearch className="text-yellow-100" />,
                    gradient: 'from-yellow-500 to-yellow-600',
                    delay: 0.3
                  },
                  {
                    step: '3',
                    title: 'שמור כסף',
                    description: 'העתק את הקוד וקבל את ההנחה שלך בקופה',
                    icon: <FaTags className="text-yellow-100" />,
                    gradient: 'from-yellow-500 to-yellow-600',
                    delay: 0.5
                  }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ 
                    delay: item.delay, 
                    duration: 0.7, 
                    ease: [0.16, 1, 0.3, 1]
                  }}
                  className="relative w-full"
                >
                  {/* Step container */}
                  <div className="relative flex flex-col md:flex-row items-center w-full">
                    {/* Icon dot - Desktop */}
                    <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 z-10">
                      <motion.div 
                        className="w-20 h-20 rounded-full bg-gradient-to-br from-yellow-500 to-yellow-600 border-4 border-[#1E1B16] flex items-center justify-center shadow-xl hover:shadow-2xl transition-all duration-300"
                        whileHover={{ 
                          scale: 1.1,
                          boxShadow: "0 0 30px rgba(234, 179, 8, 0.3)",
                          rotate: [0, 5, -5, 0]
                        }}
                        transition={{ type: "spring", stiffness: 300, damping: 15 }}
                      >
                        <div className="w-14 h-14 bg-yellow-500/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                          <motion.div 
                            className="text-2xl"
                            whileHover={{ scale: 1.2 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                          >
                            {item.icon}
                          </motion.div>
                        </div>
                      </motion.div>
                    </div>

                    {/* Step card */}
                    <div 
                      className={`w-full md:w-5/12 p-8 rounded-2xl bg-gradient-to-br from-[#2A241C]/80 to-[#1E1B16]/90 border border-yellow-500/20 shadow-xl hover:shadow-2xl hover:border-yellow-500/40 transition-all duration-300 backdrop-blur-sm hover:backdrop-blur ${
                        index % 2 === 0 ? 'md:mr-auto' : 'md:ml-auto'
                      }`}
                    >
                      {/* Mobile icon */}
                      <div className="flex items-center mb-4 md:hidden">
                        <div className="w-14 h-14 rounded-full bg-yellow-500/10 flex items-center justify-center text-yellow-500 text-xl mr-4">
                          {item.icon}
                        </div>
                        <div>
                          <div className="text-sm font-medium text-yellow-400 mb-1">שלב {item.step}</div>
                          <h3 className="text-2xl font-bold text-white">
                            <span className="bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                              {item.title}
                            </span>
                          </h3>
                        </div>
                      </div>

                      {/* Desktop title - only shown on md screens and up */}
                      <div className="hidden md:block">
                        <div className="text-sm font-medium text-yellow-400 mb-1">שלב {item.step}</div>
                        <h3 className="text-2xl font-bold text-white mb-4">
                          <span className="bg-gradient-to-r from-yellow-300 via-yellow-200 to-yellow-400 bg-clip-text text-transparent">
                            {item.title}
                          </span>
                        </h3>
                      </div>

                      <p className="text-gray-300 text-lg leading-relaxed">{item.description}</p>
                      
                      <motion.div 
                        className="mt-6 flex items-center text-yellow-400 text-sm font-medium group-hover:text-yellow-300 transition-colors duration-300"
                        initial={{ x: -10, opacity: 0 }}
                        whileInView={{ x: 0, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: item.delay + 0.2, duration: 0.5 }}
                      >
                        <span className="flex-1 h-px bg-gradient-to-r from-yellow-500/40 to-transparent mr-3"></span>
                        <span className="flex items-center">
                          <span className="ml-1">פשוט וקל</span>
                          <FaChevronLeft className="w-3 h-3 mt-0.5 text-yellow-300/70" />
                        </span>
                      </motion.div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <motion.div 
            className="mt-24 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ delay: 0.6, duration: 0.6, ease: "easeOut" }}
          >
            <Link
              to="/register"
              className="group inline-flex items-center justify-center px-10 py-4 border-2 border-transparent text-lg font-semibold rounded-xl text-gray-900 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-400 hover:to-yellow-500 transition-all duration-300 hover:shadow-lg hover:shadow-yellow-500/30 transform hover:-translate-y-0.5"
            >
              <span className="relative z-10">הצטרף עכשיו בחינם</span>
              <FiArrowRight className="mr-2 text-xl transform group-hover:translate-x-1 transition-transform duration-300" />
              <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-yellow-500/0 via-yellow-400/30 to-yellow-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
            </Link>
            <p className="mt-4 text-yellow-500/80 text-sm">ללא התחייבות • ביטול בכל עת</p>
          </motion.div>
        </div>
      </div>
      </section>

      {/* Coupons Gallery */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl  text-gray-900 sm:text-4xl">
              <span className="block">הקופונים הכי חמים</span>
              <span className="block text-yellow-600">רק אצלנו בהנחות ענק!</span>
            </h2>
            <p className="mt-4 text-xl text-gray-600 max-w-2xl mx-auto">
              בחרו את הקופון המועדף עליכם והתחילו לחסוך עכשיו
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Coupon 1 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-yellow-200 hover:border-yellow-400 transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="/Luxury voucher and vip coupon backgrounds _ Premium Vector.jpg" 
                  alt="הנחה על ביגוד חורף" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
                  -50%
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">הנחה 50% על כל הקנייה</h3>
                <p className="text-gray-600 mb-4">הנחה מיוחדת ללקוחות חדשים</p>
                <div className="flex justify-between items-center">
                  <span className="text-yellow-600 font-bold">קוד: SALE50</span>
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    העתק קוד
                  </button>
                </div>
              </div>
            </div>

            {/* Coupon 2 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-yellow-200 hover:border-yellow-400 transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="/Banners realistas de vouchers de presente _ Vetor Grátis.jpg" 
                  alt="הנחה על כל האוכל" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
                  -30%
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">30% הנחה על כל מוצר</h3>
                <p className="text-gray-600 mb-4">לכל המוצרים בחנות</p>
                <div className="flex justify-between items-center">
                  <span className="text-yellow-600 font-bold">קוד: SAVE30</span>
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    העתק קוד
                  </button>
                </div>
              </div>
            </div>

            {/* Coupon 3 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden border-2 border-yellow-200 hover:border-yellow-400 transition-all duration-300 transform hover:-translate-y-1">
              <div className="relative h-48 overflow-hidden">
                <img 
                  src="/beautiful-gift-voucher-with-decoration.jpg" 
                  alt="משלוח חינם" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute top-2 right-2 bg-yellow-500 text-white text-xs font-bold px-2 py-1 rounded">
                  -25%
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">25% הנחה בהזמנה ראשונה</h3>
                <p className="text-gray-600 mb-4">להזמנה מעל 200 ש"ח</p>
                <div className="flex justify-between items-center">
                  <span className="text-yellow-600 font-bold">קוד: FIRST25</span>
                  <button className="bg-yellow-500 hover:bg-yellow-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors">
                    העתק קוד
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link 
              to="/coupons" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-yellow-700 bg-yellow-100 hover:bg-yellow-200 transition-colors duration-200"
            >
              צפה בכל הקופונים
              <FaChevronRight className="mr-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-gradient-to-r from-yellow-700 to-yellow-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors duration-300"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-indigo-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-[#1E1B16]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gradient-to-r from-yellow-700/20 to-yellow-600/20 rounded-2xl p-8 md:p-12 shadow-inner border border-yellow-500/20 relative overflow-hidden"
          >
            {/* Decorative elements */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-yellow-500/10 rounded-full" />
            <div className="absolute -left-20 -bottom-20 w-64 h-64 bg-yellow-400/10 rounded-full" />
            
            <div className="relative max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500/20 shadow-lg mb-6">
                <FaTags className="text-2xl text-yellow-400" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                הגיע הזמן לחסוך בצורה חכמה
              </h2>
              
              <p className="text-lg text-yellow-100 mb-8 max-w-2xl mx-auto">
                הצטרף לאלפי משתמשים שכבר חוסכים מאות שקלים בכל חודש באמצעות הפלטפורמה שלנו
              </p>
              
              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Link
                  to="/register"
                  className="bg-yellow-500 hover:bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg text-lg font-semibold shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2"
                >
                  התחל עכשיו בחינם
                </Link>
                
                <Link
                  to="/coupons"
                  className="bg-transparent text-white hover:bg-white/10 border-2 border-yellow-500/30 px-8 py-4 rounded-lg text-lg font-medium shadow-sm hover:shadow-md transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <FaPercent className="text-yellow-400" />
                  גלה את כל ההנחות
                </Link>
              </div>
              
              <div className="mt-6 text-sm text-yellow-500/80">
                ללא התחייבות • ביטול בכל עת • ללא עלות נסתרת
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
