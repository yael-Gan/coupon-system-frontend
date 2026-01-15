import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaLinkedin, FaTelegram, FaApple, FaGooglePlay } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1a1612] text-gray-300 pt-16 pb-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          {/* About Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="bg-yellow-500 w-10 h-10 flex items-center justify-center rounded-md font-bold text-lg text-[#1a1612]">
                C
              </div>
              <span className="text-2xl font-bold text-white">CouponBlast</span>
            </div>
            <p className="text-gray-400">
              האפליקציה המובילה לחיסכון בכסף עם מגוון קופונים והטבות אקסקלוסיביות.
              הצטרפו לעשרות אלפי משתמשים שכבר חוסכים איתנו!
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <FaFacebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-500 transition-colors">
                <FaTelegram size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">קישורים מהירים</h3>
            <ul className="space-y-3">
              <li><Link to="/" className="hover:text-yellow-500 transition-colors">דף הבית</Link></li>
              <li><Link to="/coupons" className="hover:text-yellow-500 transition-colors">הקופונים שלנו</Link></li>
              <li><Link to="/how-it-works" className="hover:text-yellow-500 transition-colors">איך זה עובד</Link></li>
              <li><Link to="/about" className="hover:text-yellow-500 transition-colors">אודותינו</Link></li>
              <li><Link to="/contact" className="hover:text-yellow-500 transition-colors">צור קשר</Link></li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white text-lg font-semibold mb-6">קטגוריות</h3>
            <ul className="space-y-3">
              <li><a href="#" className="hover:text-yellow-500 transition-colors">מזון ומסעדות</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">אופנה והנעלה</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">טיפוח ויופי</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">פנאי ובידור</a></li>
              <li><a href="#" className="hover:text-yellow-500 transition-colors">טכנולוגיה</a></li>
            </ul>
          </div>

          {/* Newsletter & App Download */}
          <div className="space-y-6">
            <div>
              <h3 className="text-white text-lg font-semibold mb-4">הורד את האפליקציה</h3>
              <div className="space-y-3">
                <a href="#" className="flex items-center justify-center bg-black text-white px-4 py-3 rounded-lg hover:bg-gray-900 transition-colors">
                  <FaApple className="ml-2" size={20} />
                  <div className="text-right">
                    <div className="text-xs">הורד ב</div>
                    <div className="font-medium">App Store</div>
                  </div>
                </a>
                <a href="#" className="flex items-center justify-center bg-black text-white px-4 py-3 rounded-lg hover:bg-gray-900 transition-colors">
                  <FaGooglePlay className="ml-2" size={18} />
                  <div className="text-right">
                    <div className="text-xs">זמין ב</div>
                    <div className="font-medium">Google Play</div>
                  </div>
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-white text-lg font-semibold mb-4">הירשם לניוזלטר</h3>
              <div className="flex">
                <input 
                  type="email" 
                  placeholder="האימייל שלך" 
                  className="bg-[#2a241f] text-white px-4 py-2 rounded-r-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 w-full"
                  dir="rtl"
                />
                <button className="bg-yellow-500 hover:bg-yellow-400 text-[#1a1612] font-semibold py-2 px-4 rounded-l-lg transition-colors whitespace-nowrap">
                  הרשמה
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 mt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-500 text-sm text-center md:text-right">
            © {currentYear} CouponBlast. כל הזכויות שמורות
          </div>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-yellow-500 text-sm transition-colors">תנאי שימוש</a>
            <a href="#" className="text-gray-500 hover:text-yellow-500 text-sm transition-colors">מדיניות פרטיות</a>
            <a href="#" className="text-gray-500 hover:text-yellow-500 text-sm transition-colors">הצהרת נגישות</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
