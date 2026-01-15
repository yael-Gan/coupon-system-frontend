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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
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
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaFilter, FaPlus } from 'react-icons/fa';
import { FiFilter, FiSearch, FiGift, FiClock, FiCheckCircle, FiXCircle, FiShare2, FiTrash2 } from 'react-icons/fi';
var MyCoupons = function () {
    var _a = useState('active'), activeTab = _a[0], setActiveTab = _a[1];
    var _b = useState(''), searchQuery = _b[0], setSearchQuery = _b[1];
    var _c = useState(false), showFilter = _c[0], setShowFilter = _c[1];
    var _d = useState({
        category: 'all',
        sortBy: 'newest',
        minDiscount: 0
    }), filters = _d[0], setFilters = _d[1];
    // Sample data - replace with actual data from your API
    var coupons = {
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
                saved: 0, // Added missing required property
                expired: true,
                store: 'איביי'
            }
        ]
    };
    var categories = [
        { id: 'all', name: 'כל הקטגוריות' },
        { id: 'food', name: 'מזון' },
        { id: 'fashion', name: 'אופנה' },
        { id: 'electronics', name: 'אלקטרוניקה' },
        { id: 'home', name: 'בית וגן' },
        { id: 'beauty', name: 'טיפוח ויופי' },
    ];
    var filteredCoupons = coupons[activeTab].filter(function (coupon) {
        var matchesSearch = coupon.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            coupon.description.toLowerCase().includes(searchQuery.toLowerCase());
        var matchesCategory = filters.category === 'all' || coupon.category === filters.category;
        return matchesSearch && matchesCategory;
    });
    var sortCoupons = function (coupons) {
        return __spreadArray([], coupons, true).sort(function (a, b) {
            if (filters.sortBy === 'newest') {
                var dateA = new Date(a.expiry).getTime();
                var dateB = new Date(b.expiry).getTime();
                return dateB - dateA; // Sort newest first
            }
            else if (filters.sortBy === 'highest') {
                return (b.saved || 0) - (a.saved || 0);
            }
            else {
                return a.title.localeCompare(b.title); // More reliable string comparison
            }
        });
    };
    var totalSavings = coupons.active.reduce(function (sum, coupon) {
        var saved = typeof coupon.saved === 'number' ? coupon.saved : 0;
        return sum + saved;
    }, 0);
    var handleCopyCode = function (code) {
        navigator.clipboard.writeText(code);
        // Add toast notification here
    };
    var handleShare = function (coupon) { return __awaiter(void 0, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 5, , 6]);
                    if (!navigator.share) return [3 /*break*/, 2];
                    return [4 /*yield*/, navigator.share({
                            title: coupon.title,
                            text: "".concat(coupon.description, ". \u05E7\u05D5\u05D3: ").concat(coupon.code),
                            url: window.location.href,
                        })];
                case 1:
                    _a.sent();
                    return [3 /*break*/, 4];
                case 2: 
                // Fallback for browsers that don't support Web Share API
                return [4 /*yield*/, navigator.clipboard.writeText("".concat(coupon.title, ": ").concat(coupon.description, ". \u05E7\u05D5\u05D3: ").concat(coupon.code))];
                case 3:
                    // Fallback for browsers that don't support Web Share API
                    _a.sent();
                    alert('קוד הקופון הועתק ללוח!');
                    _a.label = 4;
                case 4: return [3 /*break*/, 6];
                case 5:
                    err_1 = _a.sent();
                    console.error('שגיאה בשיתוף:', err_1);
                    return [3 /*break*/, 6];
                case 6: return [2 /*return*/];
            }
        });
    }); };
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-b from-[#1E1B16] to-[#2A241C] text-white py-8 px-4 sm:px-6 lg:px-8", children: [_jsxs(motion.div, { className: "text-center mb-12", initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, children: [_jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600", children: "\u05D4\u05E7\u05D5\u05E4\u05D5\u05E0\u05D9\u05DD \u05E9\u05DC\u05D9" }), _jsxs("p", { className: "text-xl text-gray-300", children: ["\u05E0\u05D9\u05E6\u05DC\u05EA \u05E2\u05D3 \u05DB\u05D4 ", _jsxs("span", { className: "text-yellow-400 font-bold", children: [totalSavings, "\u20AA"] }), " \u05D1\u05D4\u05E0\u05D7\u05D5\u05EA!"] })] }), _jsxs("div", { className: "max-w-6xl mx-auto mb-8", children: [_jsxs("div", { className: "flex flex-col md:flex-row gap-4 mb-6", children: [_jsxs("div", { className: "relative flex-grow", children: [_jsx("div", { className: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none", children: _jsx(FiSearch, { className: "h-5 w-5 text-gray-400" }) }), _jsx("input", { type: "text", placeholder: "\u05D7\u05E4\u05E9\u05D5 \u05E7\u05D5\u05E4\u05D5\u05DF...", className: "w-full pr-10 pl-4 py-3 bg-[#2A241C] border border-[#3A3329] rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent", value: searchQuery, onChange: function (e) { return setSearchQuery(e.target.value); } })] }), _jsxs("div", { className: "relative", children: [_jsxs("button", { onClick: function () { return setShowFilter(!showFilter); }, className: "flex items-center gap-2 px-4 py-3 bg-[#2A241C] border border-[#3A3329] rounded-lg text-white hover:bg-[#3A3329] transition-colors", children: [_jsx(FiFilter, { className: "h-5 w-5" }), _jsx("span", { children: "\u05E1\u05D9\u05E0\u05D5\u05DF" })] }), showFilter && (_jsxs("div", { className: "absolute right-0 mt-2 w-64 bg-[#2A241C] border border-[#3A3329] rounded-lg shadow-xl z-10 p-4", children: [_jsxs("div", { className: "mb-4", children: [_jsx("label", { className: "block text-sm font-medium text-gray-300 mb-1", children: "\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4" }), _jsx("select", { className: "w-full bg-[#3A3329] border border-[#4A443D] rounded-md py-2 px-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500", value: filters.category, onChange: function (e) { return setFilters(__assign(__assign({}, filters), { category: e.target.value })); }, children: categories.map(function (category) { return (_jsx("option", { value: category.id, children: category.name }, category.id)); }) })] }), _jsxs("div", { className: "mb-4", children: [_jsx("label", { className: "block text-sm font-medium text-gray-300 mb-1", children: "\u05DE\u05D9\u05D9\u05DF \u05DC\u05E4\u05D9" }), _jsxs("select", { className: "w-full bg-[#3A3329] border border-[#4A443D] rounded-md py-2 px-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500", value: filters.sortBy, onChange: function (e) { return setFilters(__assign(__assign({}, filters), { sortBy: e.target.value })); }, children: [_jsx("option", { value: "newest", children: "\u05D4\u05DB\u05D9 \u05D7\u05D3\u05E9" }), _jsx("option", { value: "highest", children: "\u05D4\u05D4\u05E0\u05D7\u05D4 \u05D4\u05D2\u05D1\u05D5\u05D4\u05D4 \u05D1\u05D9\u05D5\u05EA\u05E8" }), _jsx("option", { value: "name", children: "\u05D0-\u05EA" })] })] }), _jsxs("div", { children: [_jsxs("label", { className: "block text-sm font-medium text-gray-300 mb-1", children: ["\u05D4\u05E0\u05D7\u05D4 \u05DE\u05D9\u05E0\u05D9\u05DE\u05DC\u05D9\u05EA: ", filters.minDiscount, "%"] }), _jsx("input", { type: "range", min: "0", max: "90", step: "5", value: filters.minDiscount, onChange: function (e) { return setFilters(__assign(__assign({}, filters), { minDiscount: parseInt(e.target.value) })); }, className: "w-full h-2 bg-[#3A3329] rounded-lg appearance-none cursor-pointer accent-yellow-500" })] })] }))] })] }), _jsx("div", { className: "border-b border-[#3A3329] mb-8", children: _jsx("nav", { className: "flex -mb-px space-x-8 rtl:space-x-reverse", children: [
                                { id: 'active', name: 'פעילים', count: coupons.active.length },
                                { id: 'used', name: 'שמושים', count: coupons.used.length },
                                { id: 'expired', name: 'פגי תוקף', count: coupons.expired.length },
                            ].map(function (tab) { return (_jsxs("button", { onClick: function () { return setActiveTab(tab.id); }, className: "py-4 px-1 border-b-2 font-medium text-sm flex items-center gap-2 ".concat(activeTab === tab.id
                                    ? 'border-yellow-500 text-yellow-400'
                                    : 'border-transparent text-gray-400 hover:text-gray-300 hover:border-gray-300'), children: [tab.name, _jsx("span", { className: "inline-flex items-center justify-center px-2 py-0.5 rounded-full text-xs font-medium ".concat(activeTab === tab.id
                                            ? 'bg-yellow-500/20 text-yellow-400'
                                            : 'bg-gray-700 text-gray-300'), children: tab.count })] }, tab.id)); }) }) })] }), _jsx("div", { className: "max-w-6xl mx-auto", children: _jsx(AnimatePresence, { mode: "wait", children: filteredCoupons.length > 0 ? (_jsx(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, exit: { opacity: 0, y: -20 }, transition: { duration: 0.3 }, className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6", children: sortCoupons(filteredCoupons).map(function (coupon) { return (_jsxs(motion.div, { className: "relative bg-gradient-to-br from-[#2A241C] to-[#1E1B16] rounded-2xl overflow-hidden shadow-xl border ".concat(coupon.used ? 'border-green-900/50' : coupon.expired ? 'border-red-900/50' : 'border-yellow-900/50', " hover:shadow-2xl transition-all duration-300"), whileHover: { y: -5 }, children: [coupon.used ? (_jsxs("div", { className: "absolute top-3 right-3 bg-green-500/20 text-green-400 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1", children: [_jsx(FiCheckCircle, { className: "h-3 w-3" }), _jsx("span", { children: "\u05E9\u05D5\u05DE\u05E9" })] })) : coupon.expired ? (_jsxs("div", { className: "absolute top-3 right-3 bg-red-500/20 text-red-400 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1", children: [_jsx(FiXCircle, { className: "h-3 w-3" }), _jsx("span", { children: "\u05E4\u05D2 \u05EA\u05D5\u05E7\u05E3" })] })) : (_jsxs("div", { className: "absolute top-3 right-3 bg-yellow-500/20 text-yellow-400 text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1", children: [_jsx(FiGift, { className: "h-3 w-3" }), _jsx("span", { children: "\u05E4\u05E2\u05D9\u05DC" })] })), _jsxs("div", { className: "h-40 overflow-hidden relative", children: [_jsx("img", { src: coupon.image, alt: coupon.title, className: "w-full h-full object-cover" }), _jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" }), _jsx("div", { className: "absolute bottom-4 right-4 bg-yellow-500 text-yellow-900 font-extrabold text-2xl px-4 py-2 rounded-lg shadow-lg", children: coupon.discount })] }), _jsxs("div", { className: "p-5", children: [_jsxs("div", { className: "flex justify-between items-start mb-2", children: [_jsx("h3", { className: "text-xl font-bold text-white", children: coupon.title }), _jsx("span", { className: "text-sm text-gray-400", children: coupon.store })] }), _jsx("p", { className: "text-gray-300 text-sm mb-4", children: coupon.description }), _jsx("div", { className: "bg-[#2A241C] border border-[#3A3329] rounded-lg p-3 mb-4", children: _jsxs("div", { className: "flex justify-between items-center", children: [_jsx("span", { className: "font-mono text-yellow-400 tracking-wider", children: coupon.code }), _jsx("button", { onClick: function () { return handleCopyCode(coupon.code); }, className: "text-yellow-500 hover:text-yellow-400 transition-colors", title: "\u05D4\u05E2\u05EA\u05E7 \u05E7\u05D5\u05D3", children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-5 w-5", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" }) }) })] }) }), _jsxs("div", { className: "flex items-center justify-between pt-2 border-t border-[#3A3329]", children: [_jsxs("div", { className: "flex items-center text-sm text-gray-400", children: [_jsx(FiClock, { className: "ml-1 h-4 w-4" }), _jsxs("span", { children: ["\u05EA\u05D5\u05E7\u05E3 \u05E2\u05D3: ", coupon.expiry] })] }), _jsxs("div", { className: "flex space-x-2 rtl:space-x-reverse", children: [_jsx("button", { onClick: function () { return handleShare(coupon); }, className: "p-2 text-gray-400 hover:text-yellow-500 transition-colors", title: "\u05E9\u05EA\u05E3", children: _jsx(FiShare2, { className: "h-5 w-5" }) }), !coupon.used && !coupon.expired && (_jsx("button", { className: "p-2 text-gray-400 hover:text-red-500 transition-colors", title: "\u05D4\u05E1\u05E8", children: _jsx(FiTrash2, { className: "h-5 w-5" }) }))] })] }), coupon.saved && (_jsx("div", { className: "mt-3 text-center", children: _jsxs("span", { className: "inline-block bg-green-500/10 text-green-400 text-xs font-medium px-2.5 py-0.5 rounded-full", children: ["\u05D7\u05E1\u05DB\u05EA ", coupon.saved, "\u20AA"] }) }))] })] }, coupon.id)); }) }, activeTab)) : (_jsxs(motion.div, { className: "text-center py-16 bg-[#2A241C] rounded-2xl border border-[#3A3329]", initial: { opacity: 0, scale: 0.9 }, animate: { opacity: 1, scale: 1 }, transition: { duration: 0.3 }, children: [_jsx("div", { className: "mx-auto w-16 h-16 bg-yellow-500/10 rounded-full flex items-center justify-center mb-4", children: _jsx(FiGift, { className: "h-8 w-8 text-yellow-500" }) }), _jsx("h3", { className: "text-xl font-medium text-white mb-2", children: "\u05DC\u05D0 \u05E0\u05DE\u05E6\u05D0\u05D5 \u05E7\u05D5\u05E4\u05D5\u05E0\u05D9\u05DD" }), _jsx("p", { className: "text-gray-400 max-w-md mx-auto", children: activeTab === 'active'
                                    ? 'עדיין אין לך קופונים פעילים. הוסף קופון חדש כדי להתחיל לחסוך!'
                                    : activeTab === 'used'
                                        ? 'עדיין לא ניצלת אף קופון. מהיום תוכל לעקוב פה אחרי כל הקופונים שמימשת.'
                                        : 'אין קופונים שפג תוקפם. כל הקופונים שלך עדיין בתוקף!' }), activeTab === 'active' && (_jsxs("button", { className: "mt-6 inline-flex items-center px-6 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-yellow-600 hover:bg-yellow-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500", children: [_jsx(FaPlus, { className: "ml-2 -mr-1 h-4 w-4" }), "\u05D4\u05D5\u05E1\u05E3 \u05E7\u05D5\u05E4\u05D5\u05DF \u05D7\u05D3\u05E9"] }))] })) }) }), filteredCoupons.length > 0 && window.innerWidth < 768 && (_jsx("div", { className: "fixed bottom-6 right-6 z-50", children: _jsx("button", { className: "flex items-center justify-center w-14 h-14 rounded-full bg-yellow-600 text-white shadow-lg hover:bg-yellow-700 transition-colors", children: _jsx(FaFilter, { className: "h-6 w-6" }) }) }))] }));
};
export default MyCoupons;
