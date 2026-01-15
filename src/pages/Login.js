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
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle, FaFacebook, FaApple, FaStar } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";
import { useAuth } from "../contexts/AuthContext";
import { toast } from "react-hot-toast";
export var Login = function () {
    var _a = useState(""), email = _a[0], setEmail = _a[1];
    var _b = useState(""), password = _b[0], setPassword = _b[1];
    var _c = useState(false), showPassword = _c[0], setShowPassword = _c[1];
    var _d = useState(false), rememberMe = _d[0], setRememberMe = _d[1];
    var _e = useState({}), errors = _e[0], setErrors = _e[1];
    var _f = useState(false), isLoading = _f[0], setIsLoading = _f[1];
    var _g = useState(false), mounted = _g[0], setMounted = _g[1];
    var _h = useState(null), error = _h[0], setError = _h[1];
    var navigate = useNavigate();
    var location = useLocation();
    var _j = useAuth(), login = _j.login, isAuthenticated = _j.isAuthenticated;
    // Redirect if already logged in
    useEffect(function () {
        var _a, _b;
        if (isAuthenticated) {
            var from = ((_b = (_a = location.state) === null || _a === void 0 ? void 0 : _a.from) === null || _b === void 0 ? void 0 : _b.pathname) || '/';
            navigate(from, { replace: true });
        }
    }, [isAuthenticated, navigate, location]);
    var validateForm = function () {
        var newErrors = {};
        if (!email) {
            newErrors.email = "נא להזין כתובת אימייל";
        }
        else if (!/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = "כתובת אימייל לא תקינה";
        }
        if (!password) {
            newErrors.password = "נא להזין סיסמה";
        }
        else if (password.length < 6) {
            newErrors.password = "הסיסמה חייבת להכיל לפחות 6 תווים";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };
    var handleSubmit = function (e) { return __awaiter(void 0, void 0, void 0, function () {
        var err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    e.preventDefault();
                    if (!validateForm())
                        return [2 /*return*/];
                    setIsLoading(true);
                    setError(null);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 3, 4, 5]);
                    return [4 /*yield*/, login(email, password)];
                case 2:
                    _a.sent();
                    toast.success('התחברת בהצלחה!');
                    return [3 /*break*/, 5];
                case 3:
                    err_1 = _a.sent();
                    setError(err_1.message || 'שגיאה בהתחברות. נסה שוב.');
                    toast.error('שם משתמש או סיסמה לא נכונים');
                    return [3 /*break*/, 5];
                case 4:
                    setIsLoading(false);
                    return [7 /*endfinally*/];
                case 5: return [2 /*return*/];
            }
        });
    }); };
    var handleSocialLogin = function (provider) {
        console.log("Logging in with ".concat(provider));
        // Implement social login logic here
    };
    // Animation variants
    var containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
    };
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
    useEffect(function () {
        setMounted(true);
        // Add a class to the body to prevent scrolling when modal is open
        document.body.style.overflow = 'hidden';
        return function () {
            document.body.style.overflow = 'unset';
        };
    }, []);
    return (_jsxs("div", { className: "min-h-screen bg-[#211C17] text-white flex items-center justify-center p-4 overflow-hidden relative", children: [_jsxs("div", { className: "absolute inset-0 overflow-hidden", children: [_jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-[#211C17] to-[#2A241C] opacity-90" }), _jsx(FloatingParticles, { count: 15 })] }), _jsx(AnimatePresence, { children: mounted && (_jsxs(motion.div, { className: "w-full max-w-md relative z-10", initial: "hidden", animate: "visible", variants: containerVariants, children: [_jsxs(motion.div, { className: "text-center mb-10", variants: itemVariants, children: [_jsx(motion.div, { className: "flex justify-center mb-4", initial: { scale: 0, rotate: -180 }, animate: {
                                        scale: 1,
                                        rotate: 0,
                                        transition: {
                                            type: 'spring',
                                            stiffness: 260,
                                            damping: 20
                                        }
                                    }, children: _jsx("div", { className: "bg-gradient-to-br from-yellow-400 to-yellow-500 w-16 h-16 flex items-center justify-center rounded-xl text-2xl font-bold text-[#211C17] shadow-lg", children: _jsx(motion.div, { animate: {
                                                scale: [1, 1.1, 1],
                                                rotate: [0, 10, -10, 0]
                                            }, transition: {
                                                repeat: Infinity,
                                                repeatType: 'reverse',
                                                duration: 2
                                            }, children: _jsx(FaStar, { className: "text-yellow-200" }) }) }) }), _jsx("h1", { className: "text-3xl font-bold mb-2", children: "\u05D1\u05E8\u05D5\u05DB\u05D9\u05DD \u05D4\u05E9\u05D1\u05D9\u05DD!" }), _jsx("p", { className: "text-gray-400", children: "\u05D4\u05EA\u05D7\u05D1\u05E8\u05D5 \u05DC\u05D7\u05E9\u05D1\u05D5\u05DF \u05E9\u05DC\u05DB\u05DD \u05DB\u05D3\u05D9 \u05DC\u05D4\u05DE\u05E9\u05D9\u05DA" })] }), _jsxs(motion.div, { className: "bg-[#2A241C]/90 backdrop-blur-sm border border-[#3A3329] rounded-2xl shadow-2xl p-8 mb-6", variants: itemVariants, initial: { scale: 0.95, opacity: 0 }, animate: { scale: 1, opacity: 1 }, transition: { delay: 0.2, type: 'spring' }, children: [_jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "email", className: "block text-sm font-medium mb-2", children: "\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC" }), _jsxs("div", { className: "relative", children: [_jsx("input", { id: "email", type: "email", value: email, onChange: function (e) { return setEmail(e.target.value); }, className: "w-full px-4 py-3 bg-[#3A3329] border ".concat(errors.email ? "border-red-500" : "border-[#4A4238]", " rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all duration-200"), placeholder: "\u05D4\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC \u05E9\u05DC\u05DA", dir: "ltr" }), errors.email && (_jsx("p", { className: "mt-1 text-sm text-red-400", children: errors.email }))] })] }), _jsxs("div", { children: [_jsxs("div", { className: "flex justify-between items-center mb-2", children: [_jsx("label", { htmlFor: "password", className: "block text-sm font-medium", children: "\u05E1\u05D9\u05E1\u05DE\u05D4" }), _jsx(Link, { to: "/forgot-password", className: "text-sm text-yellow-400 hover:text-yellow-300 transition-colors", children: "\u05E9\u05DB\u05D7\u05EA \u05D0\u05EA \u05D4\u05E1\u05D9\u05E1\u05DE\u05D4?" })] }), _jsxs("div", { className: "relative", children: [_jsx("input", { id: "password", type: showPassword ? "text" : "password", value: password, onChange: function (e) { return setPassword(e.target.value); }, className: "w-full px-4 py-3 bg-[#3A3329] border ".concat(errors.password ? "border-red-500" : "border-[#4A4238]", " rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none pr-12 transition-all duration-200"), placeholder: "\u05D4\u05E7\u05DC\u05D3 \u05D0\u05EA \u05D4\u05E1\u05D9\u05E1\u05DE\u05D4 \u05E9\u05DC\u05DA", dir: "ltr" }), _jsx("button", { type: "button", onClick: function () { return setShowPassword(!showPassword); }, className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-yellow-400 transition-colors", children: showPassword ? _jsx(FaEyeSlash, {}) : _jsx(FaEye, {}) }), errors.password && (_jsx("p", { className: "mt-1 text-sm text-red-400", children: errors.password }))] })] }), _jsx("div", { className: "flex items-center justify-between", children: _jsxs("div", { className: "flex items-center", children: [_jsx("input", { id: "remember-me", name: "remember-me", type: "checkbox", checked: rememberMe, onChange: function (e) { return setRememberMe(e.target.checked); }, className: "h-4 w-4 text-yellow-500 focus:ring-yellow-400 border-gray-600 rounded" }), _jsx("label", { htmlFor: "remember-me", className: "mr-2 block text-sm text-gray-300", children: "\u05D6\u05DB\u05D5\u05E8 \u05D0\u05D5\u05EA\u05D9" })] }) }), _jsx("button", { type: "submit", disabled: isLoading, className: "w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-[#211C17] ".concat(isLoading
                                                ? "bg-yellow-400"
                                                : "bg-yellow-500 hover:bg-yellow-400", " focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors duration-200"), children: isLoading ? (_jsxs("span", { className: "flex items-center", children: [_jsxs("svg", { className: "animate-spin -ml-1 mr-2 h-4 w-4 text-[#211C17]", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [_jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }), _jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })] }), "\u05DE\u05EA\u05D7\u05D1\u05E8..."] })) : (_jsxs("span", { className: "flex items-center", children: [_jsx(FiLogIn, { className: "ml-2" }), " \u05D4\u05EA\u05D7\u05D1\u05E8"] })) })] }), _jsxs("div", { className: "mt-6", children: [_jsxs("div", { className: "relative", children: [_jsx("div", { className: "absolute inset-0 flex items-center", children: _jsx("div", { className: "w-full border-t border-gray-700" }) }), _jsx("div", { className: "relative flex justify-center text-sm", children: _jsx("span", { className: "px-2 bg-[#2A241C] text-gray-400", children: "\u05D0\u05D5 \u05D4\u05EA\u05D7\u05D1\u05E8 \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA" }) })] }), _jsxs("div", { className: "mt-6 grid grid-cols-3 gap-3", children: [_jsx("button", { onClick: function () { return handleSocialLogin("google"); }, type: "button", className: "w-full inline-flex justify-center py-2 px-4 border border-gray-600 rounded-lg shadow-sm bg-[#3A3329] text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors", children: _jsx(FaGoogle, { className: "h-5 w-5 text-red-500" }) }), _jsx("button", { onClick: function () { return handleSocialLogin("facebook"); }, type: "button", className: "w-full inline-flex justify-center py-2 px-4 border border-gray-600 rounded-lg shadow-sm bg-[#3A3329] text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors", children: _jsx(FaFacebook, { className: "h-5 w-5 text-blue-500" }) }), _jsx("button", { onClick: function () { return handleSocialLogin("apple"); }, type: "button", className: "w-full inline-flex justify-center py-2 px-4 border border-gray-600 rounded-lg shadow-sm bg-[#3A3329] text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors", children: _jsx(FaApple, { className: "h-5 w-5" }) })] })] })] }), _jsxs(motion.p, { className: "text-center text-sm text-gray-400 mt-4", variants: itemVariants, children: ["\u05D0\u05D9\u05DF \u05DC\u05DA \u05D7\u05E9\u05D1\u05D5\u05DF \u05E2\u05D3\u05D9\u05D9\u05DF?", " ", _jsx(Link, { to: "/register", className: "font-medium text-yellow-500 hover:text-yellow-400 transition-colors", children: "\u05D4\u05D9\u05E8\u05E9\u05DD \u05E2\u05DB\u05E9\u05D9\u05D5" })] })] })) })] }));
};
// Floating particles component
var FloatingParticles = function (_a) {
    var _b = _a.count, count = _b === void 0 ? 20 : _b;
    return (_jsx("div", { className: "absolute inset-0 overflow-hidden pointer-events-none", children: Array.from({ length: count }).map(function (_, i) {
            var size = Math.random() * 10 + 5;
            var duration = Math.random() * 10 + 10;
            var delay = Math.random() * 5;
            var position = {
                top: "".concat(Math.random() * 100, "%"),
                left: "".concat(Math.random() * 100, "%"),
            };
            return (_jsx(motion.div, { className: "absolute rounded-full bg-yellow-400/20", style: __assign({ width: "".concat(size, "px"), height: "".concat(size, "px") }, position), animate: {
                    y: [0, -50, 0],
                    x: [0, Math.random() * 100 - 50, 0],
                    opacity: [0.2, 0.8, 0.2],
                }, transition: {
                    duration: duration,
                    delay: delay,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                } }, i));
        }) }));
};
