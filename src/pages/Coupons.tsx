import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaFilter, FaFire, FaStar, FaClock, FaTags, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import CouponCard from '../components/CouponCard';

// Mock data for coupons
const mockCoupons = [
  {
    id: 1,
    title: 'הנחה 50% על כל המוצרים',
    description: 'הנחה מיוחדת של 50% על כל המוצרים באתר, ללא הגבלת כמות!',
    image: 'https://images.unsplash.com/photo-1607082348824-0a96f2a4b9da?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    discount: '50%',
    store: 'איקאה',
    expiry: '31.12.2024',
    isHot: true,
    isNew: true,
    category: 'fashion',
    rating: 4.8
  },
  {
    id: 2,
    title: 'הנחה 30% על נעליים',
    description: 'הנחה מיוחדת על כל סוגי הנעליים באוסף החורף',
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    discount: '30%',
    store: 'ניו באלאנס',
    expiry: '15.01.2025',
    isNew: true,
    category: 'footwear',
    rating: 4.5
  },
  {
    id: 3,
    title: 'קנה 1 קבל 1 חינם',
    description: 'קנה זוג אוזניות ומקבל זוג נוסף במתנה',
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    discount: '1+1',
    store: 'אייפון ישראל',
    expiry: '20.12.2024',
    isHot: true,
    category: 'electronics',
    rating: 4.9
  },
  {
    id: 4,
    title: 'הנחה 25% על כל האוכל',
    description: 'הנחה על כל התפריט בהזמנה מעל 100 ש"ח',
    image: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', // Replaced with a food image
    discount: '25%',
    store: 'בורגראנץ',
    expiry: '10.01.2025',
    category: 'food',
    rating: 4.7
  },
  {
    id: 5,
    title: 'משלוח חינם',
    description: 'משלוח חינם בהזמנה מעל 199 ש"ח',
    image: 'https://images.unsplash.com/photo-1581235720704-06d3acfcb36f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', // Replaced with a shopping image
    discount: 'חינם',
    store: 'איביי',
    expiry: '31.01.2025',
    category: 'shopping',
    rating: 4.6
  },
  {
    id: 6,
    title: 'הנחה 40% על ביגוד חורף',
    description: 'מבצע חורף חם עם הנחות ענק על כל האוסף',
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80', // Replaced with a fashion image
    discount: '40%',
    store: 'קסטרו',
    expiry: '28.02.2025',
    isHot: true,
    category: 'fashion',
    rating: 4.4
  },
];

const categories = [
  { id: 'all', name: 'הכל', icon: <FaTags className="ml-2" /> },
  { id: 'fashion', name: 'אופנה', icon: <FaTags className="ml-2" /> },
  { id: 'electronics', name: 'אלקטרוניקה', icon: <FaTags className="ml-2" /> },
  { id: 'food', name: 'אוכל', icon: <FaTags className="ml-2" /> },
  { id: 'shopping', name: 'קניות', icon: <FaTags className="ml-2" /> },
  { id: 'footwear', name: 'הנעלה', icon: <FaTags className="ml-2" /> },
];

const sortOptions = [
  { id: 'newest', name: 'הכי חדשים', icon: <FaClock className="ml-2" /> },
  { id: 'popular', name: 'הכי פופולריים', icon: <FaFire className="ml-2" /> },
  { id: 'expiring', name: 'מסתיימים בקרוב', icon: <FaClock className="ml-2" /> },
  { id: 'top-rated', name: 'המובילים', icon: <FaStar className="ml-2" /> },
];

const Coupons = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('newest');
  const [showFilters, setShowFilters] = useState(false);
  const [coupons, setCoupons] = useState(mockCoupons);
  const [filteredCoupons, setFilteredCoupons] = useState(mockCoupons);

  // Filter and sort coupons
  useEffect(() => {
    let result = [...coupons];
    
    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        coupon => 
          coupon.title.toLowerCase().includes(query) ||
          coupon.description.toLowerCase().includes(query) ||
          coupon.store.toLowerCase().includes(query)
      );
    }
    
    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter(coupon => coupon.category === selectedCategory);
    }
    
    // Sort
    switch (sortBy) {
      case 'newest':
        result.sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0) || b.id - a.id);
        break;
      case 'popular':
        result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      case 'expiring':
        // Simple sort by expiry date (in a real app, parse dates properly)
        result.sort((a, b) => a.expiry.localeCompare(b.expiry));
        break;
      case 'top-rated':
        result.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      default:
        break;
    }
    
    setFilteredCoupons(result);
  }, [searchQuery, selectedCategory, sortBy, coupons]);

  const toggleFilters = () => {
    setShowFilters(!showFilters);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1E1B16] to-[#2A241C] text-white">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-yellow-700 to-yellow-600 py-16 px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1 
          className="text-4xl md:text-5xl font-extrabold mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          מגוון קופונים והנחות בלעדיות
        </motion.h1>
        <motion.p 
          className="text-xl text-yellow-100 max-w-3xl mx-auto"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          גלה את ההנעות והמבצעים הכי שווים במקום אחד
        </motion.p>
      </div>

      {/* Search and Filters */}
      <div className="container mx-auto px-4 py-8">
        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto mb-8">
          <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
            <FaSearch className="text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="חפש קופונים, חנויות או קטגוריות..."
            className="block w-full pr-10 pl-4 py-3 border border-gray-700 rounded-lg bg-[#2A241C] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Mobile Filter Toggle */}
        <div className="lg:hidden mb-6">
          <button
            onClick={toggleFilters}
            className="flex items-center justify-between w-full px-4 py-3 bg-[#2A241C] rounded-lg border border-gray-700 text-white"
          >
            <span>פילטרים ומיון</span>
            {showFilters ? <FaChevronUp /> : <FaChevronDown />}
          </button>
        </div>

        <div className="lg:flex gap-8">
          {/* Sidebar Filters - Hidden on mobile */}
          <div className={`lg:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden'} lg:block mb-8 lg:mb-0`}>
            <div className="bg-[#2A241C] rounded-xl p-6 border border-gray-700">
              {/* Categories */}
              <div className="mb-8">
                <h3 className="text-lg font-bold mb-4 flex items-center">
                  <FaTags className="ml-2" /> קטגוריות
                </h3>
                <div className="space-y-2">
                  {categories.map((category) => (
                    <button
                      key={category.id}
                      onClick={() => setSelectedCategory(category.id)}
                      className={`w-full text-right py-2 px-3 rounded-lg transition-colors flex items-center justify-between ${
                        selectedCategory === category.id
                          ? 'bg-yellow-600 text-white'
                          : 'text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      {category.name}
                      {category.icon}
                    </button>
                  ))}
                </div>
              </div>

              {/* Sort By */}
              <div>
                <h3 className="text-lg font-bold mb-4">מיין לפי</h3>
                <div className="space-y-2">
                  {sortOptions.map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setSortBy(option.id)}
                      className={`w-full text-right py-2 px-3 rounded-lg transition-colors flex items-center justify-between ${
                        sortBy === option.id
                          ? 'bg-yellow-600 text-white'
                          : 'text-gray-300 hover:bg-gray-700'
                      }`}
                    >
                      {option.name}
                      {option.icon}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Coupons Grid */}
          <div className="flex-1">
            {/* Results Count and Sort (Desktop) */}
            <div className="hidden lg:flex justify-between items-center mb-6">
              <div className="text-gray-300">
                נמצאו <span className="text-yellow-500 font-bold">{filteredCoupons.length}</span> תוצאות
              </div>
              <div className="flex items-center">
                <span className="text-gray-400 ml-2">מיין לפי:</span>
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                  className="bg-[#2A241C] border border-gray-700 text-white text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 p-2"
                >
                  {sortOptions.map((option) => (
                    <option key={option.id} value={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Coupons Grid */}
            {filteredCoupons.length > 0 ? (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6">
                <AnimatePresence>
                  {filteredCoupons.map((coupon, index) => (
                    <motion.div
                      key={coupon.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      layout
                    >
                      <CouponCard {...coupon} />
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            ) : (
              <div className="text-center py-12">
                <div className="text-5xl mb-4">😕</div>
                <h3 className="text-xl font-bold mb-2">לא נמצאו תוצאות</h3>
                <p className="text-gray-400">נסו לשנות את החיפוש או הפילטרים</p>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('all');
                  }}
                  className="mt-4 bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-2 px-6 rounded-lg transition-colors"
                >
                  נקה חיפוש
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Newsletter CTA */}
      <div className="bg-gradient-to-r from-[#2A241C] to-[#1E1B16] border-t border-gray-800 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">רוצה לקבל את ההנעות הכי שוות ישירות למייל?</h2>
          <p className="text-gray-300 mb-6">הצטרפו לרשימת התפוצה שלנו ותהיו הראשונים לדעת על מבצעים וקופונים בלעדיים</p>
          <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="המייל שלך"
              className="flex-1 px-4 py-3 rounded-lg bg-[#3A3329] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
            <button className="bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-lg transition-colors">
              הירשם עכשיו
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Coupons;
