import React, { useState } from 'react';
import { FaHeart, FaRegHeart, FaShare, FaTag, FaStore, FaClock, FaFire } from 'react-icons/fa';
import { motion } from 'framer-motion';

const CouponCard = ({ 
  title, 
  description, 
  image, 
  discount = '30%',
  store = 'חנות כללית',
  expiry = '30.12.2024',
  isHot = false,
  isNew = false
}) => {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  
  const toggleFavorite = (e) => {
    e.stopPropagation();
    setIsFavorite(!isFavorite);
  };

  return (
    <motion.div 
      className="relative bg-gradient-to-br from-[#2A241C] to-[#1E1B16] rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 border border-yellow-900/30"
      whileHover={{ y: -5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badges */}
      <div className="absolute top-3 left-3 flex gap-2 z-10">
        {isHot && (
          <span className="bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1">
            <FaFire className="text-xs" /> חם!
          </span>
        )}
        {isNew && (
          <span className="bg-blue-500 text-white text-xs font-bold px-2 py-1 rounded-full">חדש!</span>
        )}
      </div>

      {/* Favorite Button */}
      <button 
        onClick={toggleFavorite}
        className="absolute top-3 right-3 z-10 p-2 bg-black/40 backdrop-blur-sm rounded-full hover:bg-red-500/20 transition-colors"
        aria-label={isFavorite ? 'הסר ממועדפים' : 'הוסף למועדפים'}
      >
        {isFavorite ? (
          <FaHeart className="text-red-500 text-xl" />
        ) : (
          <FaRegHeart className="text-white text-xl hover:text-red-400" />
        )}
      </button>

      {/* Coupon Image */}
      <div className="h-48 overflow-hidden relative">
        <img
          src={image || 'https://via.placeholder.com/400x200/2A241C/3A3329?text=Coupon+Image'}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500"
          style={{ transform: isHovered ? 'scale(1.05)' : 'scale(1)' }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
        
        {/* Discount Tag */}
        <div className="absolute bottom-4 right-4 bg-yellow-500 text-yellow-900 font-extrabold text-2xl px-4 py-2 rounded-lg shadow-lg">
          {discount} הנחה
        </div>
      </div>

      {/* Coupon Content */}
      <div className="p-5">
        <div className="flex justify-between items-start mb-3">
          <h3 className="text-xl font-bold text-white line-clamp-1">{title}</h3>
          <button className="text-gray-400 hover:text-yellow-500 transition-colors">
            <FaShare />
          </button>
        </div>
        
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">{description}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-400 mb-4">
          <div className="flex items-center gap-1">
            <FaStore className="text-yellow-500" />
            <span>{store}</span>
          </div>
          <div className="flex items-center gap-1">
            <FaClock className="text-yellow-500" />
            <span>תוקף עד: {expiry}</span>
          </div>
        </div>
        
        <button 
          className="w-full bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-500 hover:to-yellow-600 text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:-translate-y-0.5 hover:shadow-lg flex items-center justify-center gap-2"
        >
          <FaTag className="text-white" />
          <span>הצג קוד קופון</span>
        </button>
      </div>
      
      {/* Hover Effect */}
      <div className={`absolute inset-0 bg-gradient-to-t from-yellow-600/10 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 pointer-events-none`} />
    </motion.div>
  );
};

export default CouponCard;
