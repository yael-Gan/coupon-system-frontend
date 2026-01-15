// Header.jsx
import React from "react";
import { FiSearch } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  
  // Don't show header on login page
  if (location.pathname === '/login') {
    return null;
  }
  
  // Check if user is a company (you might need to adjust this based on your auth system)
  const user = JSON.parse(localStorage.getItem('user') || '{}');
  const isCompany = user.role === 'COMPANY';

  return (
    <header className="bg-[#211C17] text-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 flex justify-between items-center h-20 rtl">
        {/* לוגו */}
        <Link to="/" className="flex items-center space-x-2 hover:opacity-90 transition-opacity">
          <div className="bg-yellow-500 w-10 h-10 flex items-center justify-center rounded-md font-bold text-lg">
            C
          </div>
          <span className="text-xl font-bold tracking-wide">CouponBlast</span>
        </Link>

        {/* ניווט */}
        <nav className="hidden md:flex items-center space-x-8 rtl:space-x-reverse">
          <Link to="/coupons" className="hover:text-yellow-400 transition-colors duration-200 flex items-center gap-1 group">
            <span>קופונים</span>
            <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </Link>
          <Link to={isCompany ? "/my-coupons" : "/coupons"} className="hover:text-yellow-400 transition-colors duration-200 flex items-center gap-1 group">
            <span>{isCompany ? "הקופונים שלי" : "קופונים"}</span>
            <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </Link>
          <Link to="/favorites" className="hover:text-yellow-400 transition-colors duration-200 flex items-center gap-1 group">
            <span>מועדפים</span>
            <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </Link>
          <Link to="/profile" className="hover:text-yellow-400 transition-colors duration-200 flex items-center gap-1 group">
            <span>חשבון שלי</span>
            <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </Link>
          <Link to="/help" className="hover:text-yellow-400 transition-colors duration-200 flex items-center gap-1 group">
            <span>עזרה</span>
            <span className="w-1.5 h-1.5 bg-yellow-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
          </Link>
        </nav>

        {/* צד ימין: חיפוש + כפתורים */}
        <div className="flex items-center space-x-4">
          {/* כפתור חיפוש */}
          {isCompany && (
            <Link 
              to="/coupons/add"
              className="hidden md:flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-500 hover:to-yellow-600 rounded-lg text-white font-medium transition-colors"
            >
              <FaPlus />
              <span>הוסף קופון</span>
            </Link>
          )}
          
          <button 
            className="p-2 rounded-md hover:bg-white/10 transition"
            aria-label="חיפוש"
          >
            <FiSearch size={20} />
          </button>

          {/* כפתור התחברות */}
          <Link
            to="/login"
            className="bg-transparent border border-yellow-500 hover:bg-yellow-500 hover:text-[#211C17] text-yellow-500 font-semibold py-2 px-4 rounded-md shadow-md transition-all duration-200"
          >
            התחברות
          </Link>

          {/* כפתור קבל קופונים */}
          <Link 
            to="/register"
            className="bg-yellow-500 hover:bg-yellow-400 text-[#211C17] font-semibold py-2 px-4 rounded-md shadow-md transition-all duration-200"
          >
            הרשמה בחינם
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
