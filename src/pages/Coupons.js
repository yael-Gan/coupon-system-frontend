var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSearch, FaFire, FaStar, FaClock, FaTags, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import CouponCard from '../components/CouponCard';
// Mock data for coupons
var mockCoupons = [
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
var categories = [
    { id: 'all', name: 'הכל', icon: _jsx(FaTags, { className: "ml-2" }) },
    { id: 'fashion', name: 'אופנה', icon: _jsx(FaTags, { className: "ml-2" }) },
    { id: 'electronics', name: 'אלקטרוניקה', icon: _jsx(FaTags, { className: "ml-2" }) },
    { id: 'food', name: 'אוכל', icon: _jsx(FaTags, { className: "ml-2" }) },
    { id: 'shopping', name: 'קניות', icon: _jsx(FaTags, { className: "ml-2" }) },
    { id: 'footwear', name: 'הנעלה', icon: _jsx(FaTags, { className: "ml-2" }) },
];
var sortOptions = [
    { id: 'newest', name: 'הכי חדשים', icon: _jsx(FaClock, { className: "ml-2" }) },
    { id: 'popular', name: 'הכי פופולריים', icon: _jsx(FaFire, { className: "ml-2" }) },
    { id: 'expiring', name: 'מסתיימים בקרוב', icon: _jsx(FaClock, { className: "ml-2" }) },
    { id: 'top-rated', name: 'המובילים', icon: _jsx(FaStar, { className: "ml-2" }) },
];
var Coupons = function () {
    var _a = useState(''), searchQuery = _a[0], setSearchQuery = _a[1];
    var _b = useState('all'), selectedCategory = _b[0], setSelectedCategory = _b[1];
    var _c = useState('newest'), sortBy = _c[0], setSortBy = _c[1];
    var _d = useState(false), showFilters = _d[0], setShowFilters = _d[1];
    var _e = useState(mockCoupons), coupons = _e[0], setCoupons = _e[1];
    var _f = useState(mockCoupons), filteredCoupons = _f[0], setFilteredCoupons = _f[1];
    // Filter and sort coupons
    useEffect(function () {
        var result = __spreadArray([], coupons, true);
        // Filter by search query
        if (searchQuery) {
            var query_1 = searchQuery.toLowerCase();
            result = result.filter(function (coupon) {
                return coupon.title.toLowerCase().includes(query_1) ||
                    coupon.description.toLowerCase().includes(query_1) ||
                    coupon.store.toLowerCase().includes(query_1);
            });
        }
        // Filter by category
        if (selectedCategory !== 'all') {
            result = result.filter(function (coupon) { return coupon.category === selectedCategory; });
        }
        // Sort
        switch (sortBy) {
            case 'newest':
                result.sort(function (a, b) { return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0) || b.id - a.id; });
                break;
            case 'popular':
                result.sort(function (a, b) { return (b.rating || 0) - (a.rating || 0); });
                break;
            case 'expiring':
                // Simple sort by expiry date (in a real app, parse dates properly)
                result.sort(function (a, b) { return a.expiry.localeCompare(b.expiry); });
                break;
            case 'top-rated':
                result.sort(function (a, b) { return (b.rating || 0) - (a.rating || 0); });
                break;
            default:
                break;
        }
        setFilteredCoupons(result);
    }, [searchQuery, selectedCategory, sortBy, coupons]);
    var toggleFilters = function () {
        setShowFilters(!showFilters);
    };
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-b from-[#1E1B16] to-[#2A241C] text-white", children: [_jsxs("div", { className: "relative bg-gradient-to-r from-yellow-700 to-yellow-600 py-16 px-4 sm:px-6 lg:px-8 text-center", children: [_jsx(motion.h1, { className: "text-4xl md:text-5xl font-extrabold mb-4", initial: { y: -20, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { duration: 0.5 }, children: "\u05DE\u05D2\u05D5\u05D5\u05DF \u05E7\u05D5\u05E4\u05D5\u05E0\u05D9\u05DD \u05D5\u05D4\u05E0\u05D7\u05D5\u05EA \u05D1\u05DC\u05E2\u05D3\u05D9\u05D5\u05EA" }), _jsx(motion.p, { className: "text-xl text-yellow-100 max-w-3xl mx-auto", initial: { y: 20, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { duration: 0.5, delay: 0.2 }, children: "\u05D2\u05DC\u05D4 \u05D0\u05EA \u05D4\u05D4\u05E0\u05E2\u05D5\u05EA \u05D5\u05D4\u05DE\u05D1\u05E6\u05E2\u05D9\u05DD \u05D4\u05DB\u05D9 \u05E9\u05D5\u05D5\u05D9\u05DD \u05D1\u05DE\u05E7\u05D5\u05DD \u05D0\u05D7\u05D3" })] }), _jsxs("div", { className: "container mx-auto px-4 py-8", children: [_jsxs("div", { className: "relative max-w-2xl mx-auto mb-8", children: [_jsx("div", { className: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none", children: _jsx(FaSearch, { className: "text-gray-400" }) }), _jsx("input", { type: "text", placeholder: "\u05D7\u05E4\u05E9 \u05E7\u05D5\u05E4\u05D5\u05E0\u05D9\u05DD, \u05D7\u05E0\u05D5\u05D9\u05D5\u05EA \u05D0\u05D5 \u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D5\u05EA...", className: "block w-full pr-10 pl-4 py-3 border border-gray-700 rounded-lg bg-[#2A241C] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent", value: searchQuery, onChange: function (e) { return setSearchQuery(e.target.value); } })] }), _jsx("div", { className: "lg:hidden mb-6", children: _jsxs("button", { onClick: toggleFilters, className: "flex items-center justify-between w-full px-4 py-3 bg-[#2A241C] rounded-lg border border-gray-700 text-white", children: [_jsx("span", { children: "\u05E4\u05D9\u05DC\u05D8\u05E8\u05D9\u05DD \u05D5\u05DE\u05D9\u05D5\u05DF" }), showFilters ? _jsx(FaChevronUp, {}) : _jsx(FaChevronDown, {})] }) }), _jsxs("div", { className: "lg:flex gap-8", children: [_jsx("div", { className: "lg:w-64 flex-shrink-0 ".concat(showFilters ? 'block' : 'hidden', " lg:block mb-8 lg:mb-0"), children: _jsxs("div", { className: "bg-[#2A241C] rounded-xl p-6 border border-gray-700", children: [_jsxs("div", { className: "mb-8", children: [_jsxs("h3", { className: "text-lg font-bold mb-4 flex items-center", children: [_jsx(FaTags, { className: "ml-2" }), " \u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D5\u05EA"] }), _jsx("div", { className: "space-y-2", children: categories.map(function (category) { return (_jsxs("button", { onClick: function () { return setSelectedCategory(category.id); }, className: "w-full text-right py-2 px-3 rounded-lg transition-colors flex items-center justify-between ".concat(selectedCategory === category.id
                                                            ? 'bg-yellow-600 text-white'
                                                            : 'text-gray-300 hover:bg-gray-700'), children: [category.name, category.icon] }, category.id)); }) })] }), _jsxs("div", { children: [_jsx("h3", { className: "text-lg font-bold mb-4", children: "\u05DE\u05D9\u05D9\u05DF \u05DC\u05E4\u05D9" }), _jsx("div", { className: "space-y-2", children: sortOptions.map(function (option) { return (_jsxs("button", { onClick: function () { return setSortBy(option.id); }, className: "w-full text-right py-2 px-3 rounded-lg transition-colors flex items-center justify-between ".concat(sortBy === option.id
                                                            ? 'bg-yellow-600 text-white'
                                                            : 'text-gray-300 hover:bg-gray-700'), children: [option.name, option.icon] }, option.id)); }) })] })] }) }), _jsxs("div", { className: "flex-1", children: [_jsxs("div", { className: "hidden lg:flex justify-between items-center mb-6", children: [_jsxs("div", { className: "text-gray-300", children: ["\u05E0\u05DE\u05E6\u05D0\u05D5 ", _jsx("span", { className: "text-yellow-500 font-bold", children: filteredCoupons.length }), " \u05EA\u05D5\u05E6\u05D0\u05D5\u05EA"] }), _jsxs("div", { className: "flex items-center", children: [_jsx("span", { className: "text-gray-400 ml-2", children: "\u05DE\u05D9\u05D9\u05DF \u05DC\u05E4\u05D9:" }), _jsx("select", { value: sortBy, onChange: function (e) { return setSortBy(e.target.value); }, className: "bg-[#2A241C] border border-gray-700 text-white text-sm rounded-lg focus:ring-yellow-500 focus:border-yellow-500 p-2", children: sortOptions.map(function (option) { return (_jsx("option", { value: option.id, children: option.name }, option.id)); }) })] })] }), filteredCoupons.length > 0 ? (_jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6", children: _jsx(AnimatePresence, { children: filteredCoupons.map(function (coupon, index) { return (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.3, delay: index * 0.05 }, layout: true, children: _jsx(CouponCard, __assign({}, coupon)) }, coupon.id)); }) }) })) : (_jsxs("div", { className: "text-center py-12", children: [_jsx("div", { className: "text-5xl mb-4", children: "\uD83D\uDE15" }), _jsx("h3", { className: "text-xl font-bold mb-2", children: "\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05EA\u05D5\u05E6\u05D0\u05D5\u05EA" }), _jsx("p", { className: "text-gray-400", children: "\u05E0\u05E1\u05D5 \u05DC\u05E9\u05E0\u05D5\u05EA \u05D0\u05EA \u05D4\u05D7\u05D9\u05E4\u05D5\u05E9 \u05D0\u05D5 \u05D4\u05E4\u05D9\u05DC\u05D8\u05E8\u05D9\u05DD" }), _jsx("button", { onClick: function () {
                                                    setSearchQuery('');
                                                    setSelectedCategory('all');
                                                }, className: "mt-4 bg-yellow-600 hover:bg-yellow-700 text-white font-medium py-2 px-6 rounded-lg transition-colors", children: "\u05E0\u05E7\u05D4 \u05D7\u05D9\u05E4\u05D5\u05E9" })] }))] })] })] }), _jsx("div", { className: "bg-gradient-to-r from-[#2A241C] to-[#1E1B16] border-t border-gray-800 py-12 px-4", children: _jsxs("div", { className: "max-w-4xl mx-auto text-center", children: [_jsx("h2", { className: "text-2xl md:text-3xl font-bold mb-4", children: "\u05E8\u05D5\u05E6\u05D4 \u05DC\u05E7\u05D1\u05DC \u05D0\u05EA \u05D4\u05D4\u05E0\u05E2\u05D5\u05EA \u05D4\u05DB\u05D9 \u05E9\u05D5\u05D5\u05EA \u05D9\u05E9\u05D9\u05E8\u05D5\u05EA \u05DC\u05DE\u05D9\u05D9\u05DC?" }), _jsx("p", { className: "text-gray-300 mb-6", children: "\u05D4\u05E6\u05D8\u05E8\u05E4\u05D5 \u05DC\u05E8\u05E9\u05D9\u05DE\u05EA \u05D4\u05EA\u05E4\u05D5\u05E6\u05D4 \u05E9\u05DC\u05E0\u05D5 \u05D5\u05EA\u05D4\u05D9\u05D5 \u05D4\u05E8\u05D0\u05E9\u05D5\u05E0\u05D9\u05DD \u05DC\u05D3\u05E2\u05EA \u05E2\u05DC \u05DE\u05D1\u05E6\u05E2\u05D9\u05DD \u05D5\u05E7\u05D5\u05E4\u05D5\u05E0\u05D9\u05DD \u05D1\u05DC\u05E2\u05D3\u05D9\u05D9\u05DD" }), _jsxs("div", { className: "flex flex-col sm:flex-row gap-3 max-w-md mx-auto", children: [_jsx("input", { type: "email", placeholder: "\u05D4\u05DE\u05D9\u05D9\u05DC \u05E9\u05DC\u05DA", className: "flex-1 px-4 py-3 rounded-lg bg-[#3A3329] border border-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent" }), _jsx("button", { className: "bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-6 rounded-lg transition-colors", children: "\u05D4\u05D9\u05E8\u05E9\u05DD \u05E2\u05DB\u05E9\u05D9\u05D5" })] })] }) })] }));
};
export default Coupons;
