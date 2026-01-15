import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFilter, FaSearch, FaGift, FaClock, FaCheckCircle, FaTimesCircle, FaShareAlt, FaTrash, FaPlus } from 'react-icons/fa';
import { FiFilter, FiSearch, FiGift, FiClock, FiCheckCircle, FiXCircle, FiShare2, FiTrash2 } from 'react-icons/fi';

interface Coupon {
  id: number;
  title: string;
  description: string;
  code: string;
  discount: string;
  expiry: string;
  image: string;
  category: string;
  used: boolean;
  saved: number;
  store: string;
  usedOn?: string;
  expired?: boolean;
}

type TabType = 'active' | 'used' | 'expired';

const MyCoupons = () => {
  const [activeTab, setActiveTab] = useState<TabType>('active');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilter, setShowFilter] = useState(false);
  const [filters, setFilters] = useState({
    category: 'all',
    sortBy: 'newest',
    minDiscount: 0
  });

  // Sample data - replace with actual data from your API
  const coupons: Record<TabType, Coupon[]> = {
    active: [
      {
        id: 1,
        title: '30% הנחה על נעליים',
        description: 'הנחה מיוחדת על כל סוגי הנעליים בחנות',
        code: 'SHOE30',
        discount: '30%',
        expiry: '31/12/2024',
        image: '/8d4b78d51f70738760618907a9fc6edc.jpg',
        category: 'footwear',
        used: false,
        saved: 150,
        store: 'נייקי'
      },
      {
        id: 2,
        title: 'קנה 1 קבל 1 חינם',
        description: 'על כל זוג אוזניים שני במתנה',
        code: 'BUY1GET1',
        discount: '50%',
        expiry: '15/01/2025',
        image: '/573fd6515af8925788cf1158858d24dc.jpg',
        category: 'electronics',
        used: false,
        saved: 299,
        store: 'אייפון ישראל'
      },
    ],
    used: [
      {
        id: 3,
        title: 'הנחה 50₪ על קנייה מעל 200₪',
        description: 'בכל רשתות המזון',
        code: 'SAVE50',
        discount: '50₪',
        expiry: '10/11/2024',
        image: '/8607f16812c11b60af14a24be9358fa0.jpg',
        category: 'food',
        used: true,
        usedOn: '05/11/2024',
        saved: 50,
        store: 'שופרסל'
      }
    ],
    expired: [
      {
        id: 4,
        title: 'הנחת פתיחת חשבון',
        description: '20% הנחה בהזמנה ראשונה',
        code: 'WELCOME20',
        discount: '20%',
        expiry: '01/11/2024',
        image: '/Banners realistas de vouchers de presente _ Vetor Grátis.jpg',
        category: 'other',
        used: false,
        saved: 0,  // Added missing required property
        expired: true,
        store: 'איביי'
      }
    ]
  };

  const categories = [
    { id: 'all', name: 'כל הקטגוריות' },
    { id: 'food', name: 'מזון' },
    { id: 'fashion', name: 'אופנה' },
    { id: 'electronics', name: 'אלקטרוניקה' },
    { id: 'home', name: 'בית וגן' },
    { id: 'beauty', name: 'טיפוח ויופי' },
  ];

  const filteredCoupons = coupons[activeTab].filter(coupon => {
    const matchesSearch = coupon.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         coupon.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = filters.category === 'all' || coupon.category === filters.category;
    return matchesSearch && matchesCategory;
  });

  const sortCoupons = (coupons: Coupon[]) => {
    return [...coupons].sort((a, b) => {
      if (filters.sortBy === 'newest') {
        const dateA = new Date(a.expiry).getTime();
        const dateB = new Date(b.expiry).getTime();
        return dateB - dateA;  // Sort newest first
      } else if (filters.sortBy === 'highest') {
        return (b.saved || 0) - (a.saved || 0);
      } else {
        return a.title.localeCompare(b.title);  // More reliable string comparison
      }
    });
  };

  const totalSavings = coupons.active.reduce((sum: number, coupon) => {
    const saved = typeof coupon.saved === 'number' ? coupon.saved : 0;
    return sum + saved;
  }, 0);

  const handleCopyCode = (code: string) => {
    navigator.clipboard.writeText(code);
    // Add toast notification here
  };

  const handleShare = async (coupon: Coupon) => {
    try {
      if (navigator.share) {
        await navigator.share({
          title: coupon.title,
          text: `${coupon.description}. קוד: ${coupon.code}`,
          url: window.location.href,
        });
      } else {
        // Fallback for browsers that don't support Web Share API
        await navigator.clipboard.writeText(`${coupon.title}: ${coupon.description}. קוד: ${coupon.code}`);
        alert('קוד הקופון הועתק ללוח!');
      }
    } catch (err) {
      console.error('שגיאה בשיתוף:', err);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1E1B16] to-[#2A241C] text-white py-8 px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <motion.div 
        className="text-center mb-12"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
          הקופונים שלי
        </h1>
        <p className="text-xl text-gray-300">
          ניצלת עד כה <span className="text-yellow-400 font-bold">{totalSavings}₪</span> בהנחות!
        </p>
      </motion.div>

      {/* Search and Filter */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
              <FiSearch className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="חפשו קופון..."
              className="w-full pr-10 pl-4 py-3 bg-[#2A241C] border border-[#3A3329] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="relative">
            <button
              onClick={() => setShowFilter(!showFilter)}
              className="flex items-center gap-2 px-4 py-3 bg-[#2A241C] border border-[#3A3329] rounded-lg text-white hover:bg-[#3A3329] transition-colors"
            >
              <FiFilter className="h-5 w-5" />
              <span>סינון</span>
            </button>
            
            {showFilter && (
              <div className="absolute right-0 mt-2 w-64 bg-[#2A241C] border border-[#3A3329] rounded-lg shadow-xl z-10 p-4">
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-300 mb-1">קטגוריה</label>
                  <select
                    className="w-full bg-[#3A3329] border border-[#4A443D] rounded-md py-2 px-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    value={filters.category}
                    onChange={(e) => setFilters({...filters, category: e.target.value})}
                  >
                    {categories.map(category => (
                      <option key={category.id} value={category.id}>
                        {category.name}
                      </option>
                    ))}
                  </select>
                </div>
                
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-300 mb-1">מיין לפי</label>
                  <select
                    className="w-full bg-[#3A3329] border border-[#4A443D] rounded-md py-2 px-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500"
                    value={filters.sortBy}
                    onChange={(e) => setFilters({...filters, sortBy: e.target.value})}
                  >
                    <option value="newest">הכי חדש</option>
                    <option value="highest">ההנחה הגבוהה ביותר</option>
                    <option value="name">א-ת</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-1">
                    הנחה מינימלית: {filters.minDiscount}%
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="90"
                    step="5"
                    value={filters.minDiscount}
                    onChange={(e) => setFilters({...filters, minDiscount: parseInt(e.target.value)})}
                    className="w-full h-2 bg-[#3A3329] rounded-lg appearance-none cursor-pointer accent-yellow-500"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Tabs */}
        <div className="border-b border-[#3A3329] mb-8">
          <nav className="flex -mb-px space-x-8 rtl:space-x-reverse">
            {([
              { id: 'active' as const, name: 'פעילים', count: coupons.active.length },
              { id: 'used' as const, name: 'שמושים', count: coupons.used.length },
              { id: 'expired' as const, name: 'פגי תוקף', count: coupons.expired.length },
            ] as const).map((tab: { id: TabType; name: string; count: number }) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ${
                  activeTab === tab.id
                    ? 'border-yellow-500 text-yellow-400'
                    : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-300'
                }`}
              >
                {tab.name}
                <span className={`inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium ${
                  activeTab === tab.id 
                    ? 'bg-yellow-500/20 text-yellow-400' 
                    : 'bg-gray-700 text-gray-300'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Coupons Grid */}
      <div className="max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          {filteredCoupons.length > 0 ? (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {sortCoupons(filteredCoupons).map((coupon) => (
                <motion.div
                  key={coupon.id}
                  className={`relative bg-gradient-to-br from-[#2A241C] to-[#1E1B16] rounded-2xl overflow-hidden shadow-xl border ${
                    coupon.used ? 'border-green-900/50' : coupon.expired ? 'border-red-900/50' : 'border-yellow-900/50'
                  } hover:shadow-2xl transition-all duration-300`}
                  whileHover={{ y: -5 }}
                >
                  {/* Status Badge */}
                  {coupon.used ? (
                    <div className="absolute top-3 right-3 bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <FiCheckCircle className="h-3 w-3" />
                      <span>שומש</span>
                    </div>
                  ) : coupon.expired ? (
                    <div className="absolute top-3 right-3 bg-red-500/20 text-red-400 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <FiXCircle className="h-3 w-3" />
                      <span>פג תוקף</span>
                    </div>
                  ) : (
                    <div className="absolute top-3 right-3 bg-yellow-500/20 text-yellow-400 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1">
                      <FiGift className="h-3 w-3" />
                      <span>פעיל</span>
                    </div>
                  )}

                  {/* Coupon Image */}
                  <div className="h-40 overflow-hidden relative">
                    <img
                      src={coupon.image}
                      alt={coupon.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                    
                    {/* Discount Tag */}
                    <div className="absolute bottom-4 right-4 bg-yellow-500 text-yellow-900 font-extrabold text-2xl px-4 py-2 rounded-lg shadow-lg">
                      {coupon.discount}
                    </div>
                  </div>

                  {/* Coupon Content */}
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-xl font-bold text-white">{coupon.title}</h3>
                      <span className="text-sm text-gray-400">{coupon.store}</span>
                    </div>
                    
                    <p className="text-gray-300 text-sm mb-4">{coupon.description}</p>
                    
                    {/* Code Section */}
                    <div className="bg-[#2A241C] border border-[#3A3329] rounded-lg p-3 mb-4">
                      <div className="flex justify-between items-center">
                        <span className="font-mono text-yellow-400 tracking-wider">{coupon.code}</span>
                        <button
                          onClick={() => handleCopyCode(coupon.code)}
                          className="text-yellow-500 hover:text-yellow-400 transition-colors"
                          title="העתק קוד"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                          </svg>
                        </button>
                      </div>
                    </div>
                    
                    {/* Actions */}
                    <div className="flex items-center justify-between pt-2 border-t border-[#3A3329]">
                      <div className="flex items-center text-sm text-gray-400">
                        <FiClock className="ml-1 h-4 w-4" />
                        <span>תוקף עד: {coupon.expiry}</span>
                      </div>
                      
                      <div className="flex space-x-2 rtl:space-x-reverse">
                        <button
                          onClick={() => handleShare(coupon)}
                          className="p-2 text-gray-400 hover:text-yellow-500 transition-colors"
                          title="שתף"
                        >
                          <FiShare2 className="h-5 w-5" />
                        </button>
                        
                        {!coupon.used && !coupon.expired && (
                          <button
                            className="p-2 text-gray-400 hover:text-red-500 transition-colors"
                            title="הסר"
                          >
                            <FiTrash2 className="h-5 w-5" />
                          </button>
                        )}
                      </div>
                    </div>
                    
                    {/* Saved Amount */}
                    {coupon.saved && (
                      <div className="mt-3 text-center">
                        <span className="inline-block bg-green-500/10 text-green-400 text-xs font-medium px-2.5 py-0.5 rounded-full">
                          חסכת {coupon.saved}₪
                        </span>
                      </div>
                    )}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <motion.div
              className="text-center py-16 bg-[#2A241C] rounded-2xl border border-[#3A3329]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3 }}
            >
              <div className="mx-auto w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mb-4">
                <FiGift className="h-8 w-8 text-yellow-500" />
              </div>
              <h3 className="text-xl font-medium text-white mb-2">לא נמצאו קופונים</h3>
              <p className="text-gray-400 max-w-md mx-auto">
                {activeTab === 'active' 
                  ? 'עדיין אין לך קופונים פעילים. הוסף קופון חדש כדי להתחיל לחסוך!' 
                  : activeTab === 'used'
                    ? 'עדיין לא ניצלת אף קופון. מהיום תוכל לעקוב פה אחרי כל הקופונים שמימשת.'
                    : 'אין קופונים שפג תוקפם. כל הקופונים שלך עדיין בתוקף!'}
              </p>
              {activeTab === 'active' && (
                <button className="mt-6 inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500">
                  <FaPlus className="ml-2 -mr-1 h-4 w-4" />
                  הוסף קופון חדש
                </button>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Empty State for Mobile */}
      {filteredCoupons.length > 0 && window.innerWidth < 768 && (
        <div className="fixed bottom-6 right-6 z-50">
          <button className="flex items-center justify-center w-14 h-14 rounded-full bg-yellow-600 text-white shadow-lg hover:bg-yellow-700 transition-colors">
            <FaFilter className="h-6 w-6" />
          </button>
        </div>
      )}
    </div>
  );
};

export default MyCoupons;
