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
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FaEye, FaEyeSlash, FaGoogle, FaFacebook, FaApple, FaUser, FaEnvelope, FaLock, FaCheckCircle, FaRocket, FaGift, FaStar } from "react-icons/fa";
var Register = function () {
    var navigate = useNavigate();
    var _a = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    }), formData = _a[0], setFormData = _a[1];
    var _b = useState({}), errors = _b[0], setErrors = _b[1];
    var _c = useState(false), showPassword = _c[0], setShowPassword = _c[1];
    var _d = useState(false), showConfirmPassword = _d[0], setShowConfirmPassword = _d[1];
    var _e = useState(false), isSubmitting = _e[0], setIsSubmitting = _e[1];
    var _f = useState(false), showSuccess = _f[0], setShowSuccess = _f[1];
    var handleSocialLogin = function (provider) { return __awaiter(void 0, void 0, void 0, function () {
        return __generator(this, function (_a) {
            try {
                // You can implement the actual social login logic here
                console.log("Logging in with ".concat(provider));
                // Example implementation (you'll need to replace this with your actual social login logic):
                // const response = await yourAuthService.socialLogin(provider);
                // if (response.success) {
                //   navigate('/dashboard'); // Redirect after successful login
                // }
            }
            catch (error) {
                console.error("Error logging in with ".concat(provider, ":"), error);
                // Handle error (e.g., show error message to user)
            }
            return [2 /*return*/];
        });
    }); };
    var handleChange = function (e) {
        var _a = e.target, name = _a.name, value = _a.value;
        setFormData(function (prev) {
            var _a;
            return (__assign(__assign({}, prev), (_a = {}, _a[name] = value, _a)));
        });
    };
    var validateForm = function () {
        var newErrors = {};
        if (!formData.username.trim()) {
            newErrors.username = 'שם משתמש הוא שדה חובה';
        }
        else if (formData.username.length < 3) {
            newErrors.username = 'שם משתמש חייב להכיל לפחות 3 תווים';
        }
        if (!formData.email) {
            newErrors.email = 'אימייל הוא שדה חובה';
        }
        else if (!/\S+@\S+\.\S+/.test(formData.email)) {
            newErrors.email = 'אימייל לא תקין';
        }
        if (!formData.password) {
            newErrors.password = 'סיסמה היא שדה חובה';
        }
        else if (formData.password.length < 6) {
            newErrors.password = 'הסיסמה חייבת להכיל לפחות 6 תווים';
        }
        if (formData.password !== formData.confirmPassword) {
            newErrors.confirmPassword = 'הסיסמאות לא תואמות';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    if (!validateForm())
                        return [2 /*return*/];
                    setIsSubmitting(true);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    // Simulate API call
                    return [4 /*yield*/, new Promise(function (resolve) { return setTimeout(resolve, 1500); })];
                case 2:
                    // Simulate API call
                    _a.sent();
                    // Show success animation
                    setShowSuccess(true);
                    // After animation completes, you can redirect or do something else
                    setTimeout(function () {
                        // navigate('/dashboard'); // Uncomment this when you want to redirect after success
                    }, 4000);
                    return [3 /*break*/, 5];
                case 3:
                    error_1 = _a.sent();
                    console.error("Registration error:", error_1);
                    return [3 /*break*/, 5];
                case 4:
                    setIsSubmitting(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                type: 'spring',
                stiffness: 100,
                damping: 10
            }
        }
    };
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-br from-[#1a1a1a] to-[#0d0d0d] flex items-center justify-center p-4", children: [_jsx(motion.div, { className: "w-full max-w-md", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, children: _jsxs(motion.div, { className: "bg-[#2A241C]/90 backdrop-blur-sm border border-[#3A3329] rounded-2xl shadow-2xl p-8", variants: itemVariants, initial: "hidden", animate: "visible", children: [_jsxs("div", { className: "text-center mb-8", children: [_jsx("h2", { className: "text-3xl font-bold text-yellow-500 mb-2", children: "\u05E6\u05D5\u05E8 \u05D7\u05E9\u05D1\u05D5\u05DF \u05D7\u05D3\u05E9" }), _jsx("p", { className: "text-gray-400", children: "\u05D4\u05E6\u05D8\u05E8\u05E3 \u05D0\u05DC\u05D9\u05E0\u05D5 \u05E2\u05D5\u05D3 \u05D4\u05D9\u05D5\u05DD \u05D5\u05D4\u05EA\u05D7\u05DC \u05DC\u05D7\u05E1\u05D5\u05DA!" })] }), _jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { children: [_jsxs("div", { className: "relative", children: [_jsx("div", { className: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none", children: _jsx(FaUser, { className: "h-5 w-5 text-gray-400" }) }), _jsx("input", { type: "text", name: "username", value: formData.username, onChange: handleChange, placeholder: "\u05E9\u05DD \u05DE\u05E9\u05EA\u05DE\u05E9", className: "w-full pr-10 pl-4 py-3 bg-[#1E1B16] border ".concat(errors.username ? 'border-red-500' : 'border-[#3A3329]', " rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500") })] }), errors.username && _jsx("p", { className: "mt-1 text-sm text-red-500 text-right", children: errors.username })] }), _jsxs("div", { children: [_jsxs("div", { className: "relative", children: [_jsx("div", { className: "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none", children: _jsx(FaEnvelope, { className: "h-5 w-5 text-gray-400" }) }), _jsx("input", { type: "email", name: "email", value: formData.email, onChange: handleChange, placeholder: "\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC", className: "w-full pr-10 pl-4 py-3 bg-[#1E1B16] border ".concat(errors.email ? 'border-red-500' : 'border-[#3A3329]', " rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500") })] }), errors.email && _jsx("p", { className: "mt-1 text-sm text-red-500 text-right", children: errors.email })] }), _jsxs("div", { children: [_jsxs("div", { className: "relative", children: [_jsx("div", { className: "absolute inset-y-0 right-0 pr-3 flex items-center", children: _jsx("button", { type: "button", onClick: function () { return setShowPassword(!showPassword); }, className: "text-gray-400 hover:text-yellow-500 focus:outline-none", children: showPassword ? _jsx(FaEyeSlash, {}) : _jsx(FaEye, {}) }) }), _jsx("input", { type: showPassword ? 'text' : 'password', name: "password", value: formData.password, onChange: handleChange, placeholder: "\u05E1\u05D9\u05E1\u05DE\u05D4", className: "w-full pr-10 pl-4 py-3 bg-[#1E1B16] border ".concat(errors.password ? 'border-red-500' : 'border-[#3A3329]', " rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500") }), _jsx("div", { className: "absolute inset-y-0 right-10 pr-3 flex items-center pointer-events-none", children: _jsx(FaLock, { className: "h-5 w-5 text-gray-400" }) })] }), errors.password && _jsx("p", { className: "mt-1 text-sm text-red-500 text-right", children: errors.password })] }), _jsxs("div", { children: [_jsxs("div", { className: "relative", children: [_jsx("div", { className: "absolute inset-y-0 right-0 pr-3 flex items-center", children: _jsx("button", { type: "button", onClick: function () { return setShowConfirmPassword(!showConfirmPassword); }, className: "text-gray-400 hover:text-yellow-500 focus:outline-none", children: showConfirmPassword ? _jsx(FaEyeSlash, {}) : _jsx(FaEye, {}) }) }), _jsx("input", { type: showConfirmPassword ? 'text' : 'password', name: "confirmPassword", value: formData.confirmPassword, onChange: handleChange, placeholder: "\u05D0\u05E9\u05E8 \u05E1\u05D9\u05E1\u05DE\u05D4", className: "w-full pr-10 pl-4 py-3 bg-[#1E1B16] border ".concat(errors.confirmPassword ? 'border-red-500' : 'border-[#3A3329]', " rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-yellow-500") }), _jsx("div", { className: "absolute inset-y-0 right-10 pr-3 flex items-center pointer-events-none", children: _jsx(FaLock, { className: "h-5 w-5 text-gray-400" }) })] }), errors.confirmPassword && _jsx("p", { className: "mt-1 text-sm text-red-500 text-right", children: errors.confirmPassword })] }), _jsx("button", { type: "submit", disabled: isSubmitting, className: "w-full bg-yellow-600 hover:bg-yellow-700 text-white font-bold py-3 px-4 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 flex items-center justify-center gap-2 ".concat(isSubmitting ? 'opacity-75 cursor-not-allowed' : ''), children: isSubmitting ? (_jsxs(_Fragment, { children: [_jsxs("svg", { className: "animate-spin -ml-1 mr-2 h-5 w-5 text-white", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [_jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }), _jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })] }), "\u05DE\u05D1\u05E6\u05E2 \u05D4\u05E8\u05E9\u05DE\u05D4..."] })) : 'הרשמה' })] }), _jsxs("div", { className: "mt-6", children: [_jsxs("div", { className: "relative", children: [_jsx("div", { className: "absolute inset-0 flex items-center", children: _jsx("div", { className: "w-full border-t border-gray-700" }) }), _jsx("div", { className: "relative flex justify-center text-sm", children: _jsx("span", { className: "px-2 bg-[#2A241C] text-gray-400", children: "\u05D0\u05D5 \u05D4\u05D9\u05E8\u05E9\u05DD \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA" }) })] }), _jsxs("div", { className: "mt-6 grid grid-cols-3 gap-3", children: [_jsx("button", { type: "button", onClick: function () { return handleSocialLogin("google"); }, className: "w-full inline-flex justify-center py-2 px-4 border border-gray-600 rounded-lg shadow-sm bg-[#3A3329] text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors", children: _jsx(FaGoogle, { className: "h-5 w-5" }) }), _jsx("button", { type: "button", onClick: function () { return handleSocialLogin("facebook"); }, className: "w-full inline-flex justify-center py-2 px-4 border border-gray-600 rounded-lg shadow-sm bg-[#3A3329] text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors", children: _jsx(FaFacebook, { className: "h-5 w-5" }) }), _jsx("button", { type: "button", onClick: function () { return handleSocialLogin("apple"); }, className: "w-full inline-flex justify-center py-2 px-4 border border-gray-600 rounded-lg shadow-sm bg-[#3A3329] text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors", children: _jsx(FaApple, { className: "h-5 w-5" }) })] })] }), _jsxs(motion.p, { className: "text-center text-sm text-gray-400 mt-6", variants: itemVariants, children: ["\u05DB\u05D1\u05E8 \u05D9\u05E9 \u05DC\u05DA \u05D7\u05E9\u05D1\u05D5\u05DF?", " ", _jsx(Link, { to: "/login", className: "font-medium text-yellow-500 hover:text-yellow-400 transition-colors", children: "\u05D4\u05EA\u05D7\u05D1\u05E8 \u05E2\u05DB\u05E9\u05D9\u05D5" })] })] }) }), _jsx(AnimatePresence, { children: showSuccess && (_jsx("div", { className: "fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50", children: _jsxs(motion.div, { initial: { scale: 0.8, opacity: 0 }, animate: { scale: 1, opacity: 1 }, exit: { scale: 0.8, opacity: 0 }, transition: { type: 'spring', damping: 20, stiffness: 300 }, className: "bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-2xl p-8 max-w-md w-full mx-4 text-center shadow-2xl border-2 border-yellow-400 overflow-hidden relative", children: [__spreadArray([], Array(20), true).map(function (_, i) { return (_jsx(motion.div, { className: "absolute w-2 h-2 bg-yellow-300 rounded-full", initial: { x: '50%', y: '50%', opacity: 1 }, animate: {
                                    x: "".concat(Math.random() * 100, "%"),
                                    y: "".concat(100 + Math.random() * 100, "%"),
                                    opacity: 0,
                                    rotate: Math.random() * 360
                                }, transition: {
                                    duration: 1.5 + Math.random() * 2,
                                    repeat: Infinity,
                                    repeatType: 'loop',
                                    ease: 'easeOut'
                                }, style: {
                                    left: "".concat(Math.random() * 100, "%"),
                                    top: "".concat(-20 + Math.random() * 40, "%"),
                                } }, i)); }), _jsxs("div", { className: "relative z-10", children: [_jsx(motion.div, { initial: { scale: 0 }, animate: { scale: [0, 1.2, 1] }, className: "w-24 h-24 bg-yellow-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg", children: _jsx(FaCheckCircle, { className: "text-5xl text-white" }) }), _jsx(motion.h2, { initial: { y: 20, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { delay: 0.2 }, className: "text-3xl font-bold text-white mb-4", children: "!\u05D4\u05E8\u05E9\u05DE\u05D4 \u05D1\u05D5\u05E6\u05E2\u05D4 \u05D1\u05D4\u05E6\u05DC\u05D7\u05D4" }), _jsxs(motion.div, { initial: { y: 20, opacity: 0 }, animate: { y: 0, opacity: 1 }, transition: { delay: 0.4 }, className: "space-y-4 text-yellow-100 mb-8", children: [_jsxs("p", { className: "flex items-center justify-center gap-2", children: [_jsx(FaRocket, { className: "animate-bounce" }), _jsx("span", { children: "!\u05D4\u05DB\u05DC \u05DE\u05D5\u05DB\u05DF, \u05DE\u05EA\u05D7\u05D9\u05DC\u05D9\u05DD \u05DC\u05D4\u05E8\u05D5\u05D5\u05D9\u05D7" })] }), _jsxs("p", { className: "flex items-center justify-center gap-2", children: [_jsx(FaGift, { className: "text-yellow-300" }), _jsx("span", { children: "\u05D4\u05D8\u05D1\u05D5\u05EA \u05D1\u05DC\u05E2\u05D3\u05D9\u05D5\u05EA \u05DE\u05D7\u05DB\u05D5\u05EA \u05DC\u05DA" })] }), _jsxs("p", { className: "flex items-center justify-center gap-2", children: [_jsx(FaStar, { className: "text-yellow-300 animate-pulse" }), _jsx("span", { children: "!\u05D4\u05EA\u05D7\u05DC \u05DC\u05D2\u05D6\u05D5\u05E8 \u05E7\u05D5\u05E4\u05D5\u05E0\u05D9\u05DD \u05E2\u05DB\u05E9\u05D9\u05D5" })] })] }), _jsx(motion.button, { whileHover: { scale: 1.05, boxShadow: '0 5px 15px rgba(0,0,0,0.3)' }, whileTap: { scale: 0.95 }, onClick: function () {
                                            setShowSuccess(false);
                                            navigate('/');
                                        }, className: "bg-white text-yellow-700 font-bold py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-all duration-300", children: "!\u05D9\u05D0\u05DC\u05DC\u05D4, \u05D4\u05EA\u05D7\u05DC \u05DC\u05D2\u05D6\u05D5\u05E8 \u05E7\u05D5\u05E4\u05D5\u05E0\u05D9\u05DD" })] }), _jsx("div", { className: "absolute bottom-0 left-0 right-0 h-1 bg-yellow-400", children: _jsx(motion.div, { initial: { width: '100%' }, animate: { width: '0%' }, transition: { duration: 4, ease: 'linear' }, className: "h-full bg-white", onAnimationComplete: function () { return setShowSuccess(false); } }) })] }) })) })] }));
};
export default Register;
