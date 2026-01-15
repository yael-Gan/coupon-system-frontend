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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
// Create properly typed icon components
var FaPlus = FaIcons.FaPlus;
var FaDollarSign = FaIcons.FaDollarSign;
var FaImage = FaIcons.FaImage;
var FaBuilding = FaIcons.FaBuilding;
var FaCalendarAlt = FaIcons.FaCalendarAlt;
import { motion } from 'framer-motion';
import { addCoupon } from '../Services/couponService';
var AddCoupon = function () {
    var navigate = useNavigate();
    var _a = useState(false), isSubmitting = _a[0], setIsSubmitting = _a[1];
    var _b = useState(''), error = _b[0], setError = _b[1];
    var _c = useState(false), success = _c[0], setSuccess = _c[1];
    var _d = useState({
        title: '',
        description: '',
        category: 'FOOD',
        startDate: new Date().toISOString().split('T')[0],
        endDate: '',
        amount: 100,
        price: 0,
        image: '',
    }), formData = _d[0], setFormData = _d[1];
    var categories = [
        { value: 'FOOD', label: 'אוכל' },
        { value: 'ELECTRICITY', label: 'חשמל' },
        { value: 'RESTAURANT', label: 'מסעדות' },
        { value: 'VACATION', label: 'חופשות' },
        { value: 'FASHION', label: 'אופנה' },
        { value: 'COSMETICS', label: 'קוסמטיקה' },
    ];
    var handleChange = function (e) {
        var _a = e.target, name = _a.name, value = _a.value, type = _a.type;
        setFormData(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[name] = type === 'number' ? (value === '' ? '' : Number(value)) : value, _a)));
        });
    };
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var token, userData, parsedUser, companyId, couponData, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    setError('');
                    setIsSubmitting(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    token = localStorage.getItem('token');
                    if (!token) {
                        throw new Error('לא מאושר, יש להתחבר מחדש');
                    }
                    userData = localStorage.getItem('user');
                    if (!userData) {
                        throw new Error('לא נמצאו פרטי משתמש, יש להתחבר מחדש');
                    }
                    parsedUser = JSON.parse(userData);
                    companyId = parsedUser.companyId;
                    if (!companyId) {
                        throw new Error('שגיאה: לא נמצא מזהה חברה');
                    }
                    couponData = __assign(__assign({}, formData), { companyId: Number(companyId), amount: Number(formData.amount), price: Number(formData.price) });
                    return [4 /*yield*/, addCoupon(couponData, token)];
                case 2:
                    _a.sent();
                    setSuccess(true);
                    setTimeout(function () {
                        navigate('/company/coupons');
                    }, 2000);
                    return [3 /*break*/, 5];
                case 3:
                    err_1 = _a.sent();
                    console.error('Error adding coupon:', err_1);
                    setError(err_1 instanceof Error ? err_1.message : 'אירעה שגיאה בהוספת הקופון');
                    return [3 /*break*/, 5];
                case 4:
                    setIsSubmitting(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    return (_jsx("div", { className: "min-h-screen bg-gradient-to-b from-[#1E1B16] to-[#2A241C] py-12 px-4 sm:px-6 lg:px-8", children: _jsx("div", { className: "max-w-4xl mx-auto", children: _jsxs(motion.div, { initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, className: "bg-[#2A241C] rounded-2xl shadow-xl overflow-hidden border border-yellow-900/30", children: [_jsxs("div", { className: "bg-gradient-to-r from-yellow-700 to-yellow-600 px-6 py-8 text-center", children: [_jsx("div", { className: "inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500/20 mb-4", children: _jsx(FaPlus, { className: "text-2xl text-yellow-300" }) }), _jsx("h1", { className: "text-3xl font-bold text-white", children: "\u05D4\u05D5\u05E1\u05E3 \u05E7\u05D5\u05E4\u05D5\u05DF \u05D7\u05D3\u05E9" }), _jsx("p", { className: "text-yellow-100 mt-2", children: "\u05DE\u05DC\u05D0 \u05D0\u05EA \u05D4\u05E4\u05E8\u05D8\u05D9\u05DD \u05DB\u05D3\u05D9 \u05DC\u05D4\u05D5\u05E1\u05D9\u05E3 \u05E7\u05D5\u05E4\u05D5\u05DF \u05D7\u05D3\u05E9 \u05DC\u05DE\u05E2\u05E8\u05DB\u05EA" })] }), success && (_jsx("div", { className: "bg-green-500/10 border-l-4 border-green-500 p-4 m-6 rounded", children: _jsx("p", { className: "text-green-200 font-medium", children: "\u05D4\u05E7\u05D5\u05E4\u05D5\u05DF \u05E0\u05D5\u05E1\u05E3 \u05D1\u05D4\u05E6\u05DC\u05D7\u05D4! \u05DE\u05E2\u05D1\u05D9\u05E8 \u05D0\u05D5\u05EA\u05DA \u05DC\u05D3\u05E3 \u05D4\u05E7\u05D5\u05E4\u05D5\u05E0\u05D9\u05DD..." }) })), error && (_jsx("div", { className: "bg-red-500/10 border-l-4 border-red-500 p-4 m-6 rounded", children: _jsx("p", { className: "text-red-200 font-medium", children: error }) })), _jsxs("form", { onSubmit: handleSubmit, className: "p-6 md:p-8", children: [_jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-6", children: [_jsxs("div", { className: "space-y-2", children: [_jsxs("label", { className: "text-sm font-medium text-gray-300 flex items-center", children: [_jsx(FaBuilding, { className: "ml-2 text-yellow-500" }), "\u05DB\u05D5\u05EA\u05E8\u05EA \u05D4\u05E7\u05D5\u05E4\u05D5\u05DF"] }), _jsx("input", { type: "text", name: "title", value: formData.title, onChange: handleChange, className: "w-full px-4 py-3 bg-[#1E1B16] border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent", placeholder: "\u05DC\u05D3\u05D5\u05D2\u05DE\u05D4: 30% \u05D4\u05E0\u05D7\u05D4 \u05E2\u05DC \u05DB\u05DC \u05D4\u05DE\u05D5\u05E6\u05E8\u05D9\u05DD", required: true })] }), _jsxs("div", { className: "space-y-2", children: [_jsxs("label", { className: "text-sm font-medium text-gray-300 flex items-center", children: [_jsx(FaBuilding, { className: "ml-2 text-yellow-500" }), "\u05E7\u05D8\u05D2\u05D5\u05E8\u05D9\u05D4"] }), _jsx("select", { name: "category", value: formData.category, onChange: handleChange, className: "w-full px-4 py-3 bg-[#1E1B16] border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent", required: true, children: categories.map(function (cat) { return (_jsx("option", { value: cat.value, children: cat.label }, cat.value)); }) })] }), _jsxs("div", { className: "space-y-2", children: [_jsxs("label", { className: "text-sm font-medium text-gray-300 flex items-center", children: [_jsx(FaCalendarAlt, { className: "ml-2 text-yellow-500" }), "\u05EA\u05D0\u05E8\u05D9\u05DA \u05D4\u05EA\u05D7\u05DC\u05D4"] }), _jsx("input", { type: "date", name: "startDate", value: formData.startDate, onChange: handleChange, className: "w-full px-4 py-3 bg-[#1E1B16] border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent", required: true })] }), _jsxs("div", { className: "space-y-2", children: [_jsxs("label", { className: "text-sm font-medium text-gray-300 flex items-center", children: [_jsx(FaCalendarAlt, { className: "ml-2 text-yellow-500" }), "\u05EA\u05D0\u05E8\u05D9\u05DA \u05EA\u05E4\u05D5\u05D2\u05D4"] }), _jsx("input", { type: "date", name: "endDate", value: formData.endDate, min: formData.startDate, onChange: handleChange, className: "w-full px-4 py-3 bg-[#1E1B16] border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent", required: true })] }), _jsxs("div", { className: "space-y-2", children: [_jsxs("label", { className: "text-sm font-medium text-gray-300 flex items-center", children: [_jsx(FaBuilding, { className: "ml-2 text-yellow-500" }), "\u05DB\u05DE\u05D5\u05EA \u05E7\u05D5\u05E4\u05D5\u05E0\u05D9\u05DD"] }), _jsx("input", { type: "number", name: "amount", min: "1", value: formData.amount, onChange: handleChange, className: "w-full px-4 py-3 bg-[#1E1B16] border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent", required: true })] }), _jsxs("div", { className: "space-y-2", children: [_jsxs("label", { className: "text-sm font-medium text-gray-300 flex items-center", children: [_jsx(FaDollarSign, { className: "ml-2 text-yellow-500" }), "\u05DE\u05D7\u05D9\u05E8 (\u05D1\u05E9\u05E7\u05DC\u05D9\u05DD)"] }), _jsx("input", { type: "number", name: "price", min: "0", step: "0.01", value: formData.price, onChange: handleChange, className: "w-full px-4 py-3 bg-[#1E1B16] border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent", required: true })] }), _jsxs("div", { className: "md:col-span-2 space-y-2", children: [_jsxs("label", { className: "text-sm font-medium text-gray-300 flex items-center", children: [_jsx(FaImage, { className: "ml-2 text-yellow-500 w-4 h-4" }), "\u05E7\u05D9\u05E9\u05D5\u05E8 \u05DC\u05EA\u05DE\u05D5\u05E0\u05D4 (\u05D0\u05D5\u05E4\u05E6\u05D9\u05D5\u05E0\u05DC\u05D9)"] }), _jsx("input", { type: "url", name: "image", value: formData.image, onChange: handleChange, className: "w-full px-4 py-3 bg-[#1E1B16] border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent", placeholder: "https://example.com/image.jpg" })] }), _jsxs("div", { className: "md:col-span-2 space-y-2", children: [_jsx("label", { className: "block text-sm font-medium text-gray-300", children: "\u05EA\u05D9\u05D0\u05D5\u05E8 \u05D4\u05E7\u05D5\u05E4\u05D5\u05DF" }), _jsx("textarea", { name: "description", value: formData.description, onChange: handleChange, rows: 4, className: "w-full px-4 py-3 bg-[#1E1B16] border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent", placeholder: "\u05E4\u05E8\u05D8\u05D9\u05DD \u05E2\u05DC \u05D4\u05D4\u05E0\u05D7\u05D4, \u05EA\u05E0\u05D0\u05D9 \u05D4\u05E9\u05D9\u05DE\u05D5\u05E9 \u05D5\u05DB\u05D5'...", required: true })] })] }), _jsxs("div", { className: "mt-8 flex flex-col sm:flex-row justify-end gap-4", children: [_jsx("button", { type: "button", onClick: function () { return navigate(-1); }, className: "px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700/50 transition-colors", disabled: isSubmitting, children: "\u05D1\u05D9\u05D8\u05D5\u05DC" }), _jsx("button", { type: "submit", disabled: isSubmitting, className: "px-6 py-3 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white font-medium rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed", children: isSubmitting ? (_jsxs(_Fragment, { children: [_jsxs("svg", { className: "animate-spin -ml-1 mr-2 h-4 w-4 text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [_jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }), _jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })] }), "\u05DE\u05D5\u05E1\u05D9\u05E3 \u05E7\u05D5\u05E4\u05D5\u05DF..."] })) : (_jsxs(_Fragment, { children: [_jsx(FaPlus, {}), "\u05D4\u05D5\u05E1\u05E3 \u05E7\u05D5\u05E4\u05D5\u05DF"] })) })] })] })] }) }) }));
};
export default AddCoupon;
