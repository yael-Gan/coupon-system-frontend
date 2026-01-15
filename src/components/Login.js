import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// Login.jsx
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash, FaGoogle, FaFacebook, FaApple } from "react-icons/fa";
import { FiArrowRight } from "react-icons/fi";
var Login = function () {
    var _a = useState(""), email = _a[0], setEmail = _a[1];
    var _b = useState(""), password = _b[0], setPassword = _b[1];
    var _c = useState(false), showPassword = _c[0], setShowPassword = _c[1];
    var _d = useState(false), rememberMe = _d[0], setRememberMe = _d[1];
    var _e = useState({}), errors = _e[0], setErrors = _e[1];
    var _f = useState(false), isLoading = _f[0], setIsLoading = _f[1];
    var navigate = useNavigate();
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
    var handleSubmit = function (e) {
        e.preventDefault();
        if (validateForm()) {
            setIsLoading(true);
            // Simulate API call
            setTimeout(function () {
                console.log("Login attempt with:", { email: email, rememberMe: rememberMe });
                setIsLoading(false);
                // Redirect to home page after successful login
                navigate("/");
            }, 1500);
        }
    };
    var handleSocialLogin = function (provider) {
        console.log("Logging in with ".concat(provider));
        // Implement social login logic here
    };
    return (_jsx("div", { className: "min-h-screen bg-[#211C17] text-white flex items-center justify-center p-4", children: _jsxs("div", { className: "w-full max-w-md", children: [_jsxs("div", { className: "text-center mb-10", children: [_jsx("div", { className: "flex justify-center mb-4", children: _jsx("div", { className: "bg-yellow-500 w-16 h-16 flex items-center justify-center rounded-xl text-2xl font-bold text-[#211C17]", children: "C" }) }), _jsx("h1", { className: "text-3xl font-bold mb-2", children: "\u05D1\u05E8\u05D5\u05DB\u05D9\u05DD \u05D4\u05E9\u05D1\u05D9\u05DD!" }), _jsx("p", { className: "text-gray-400", children: "\u05D4\u05EA\u05D7\u05D1\u05E8\u05D5 \u05DC\u05D7\u05E9\u05D1\u05D5\u05DF \u05E9\u05DC\u05DB\u05DD \u05DB\u05D3\u05D9 \u05DC\u05D4\u05DE\u05E9\u05D9\u05DA" })] }), _jsxs("div", { className: "bg-[#2A241C] rounded-2xl shadow-xl p-8 mb-6", children: [_jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", children: [_jsxs("div", { children: [_jsx("label", { htmlFor: "email", className: "block text-sm font-medium mb-2", children: "\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC" }), _jsxs("div", { className: "relative", children: [_jsx("input", { id: "email", type: "email", value: email, onChange: function (e) { return setEmail(e.target.value); }, className: "w-full px-4 py-3 bg-[#3A3329] border ".concat(errors.email ? "border-red-500" : "border-[#4A4238]", " rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none transition-all duration-200"), placeholder: "\u05D4\u05D0\u05D9\u05DE\u05D9\u05D9\u05DC \u05E9\u05DC\u05DA", dir: "ltr" }), errors.email && (_jsx("p", { className: "mt-1 text-sm text-red-400", children: errors.email }))] })] }), _jsxs("div", { children: [_jsxs("div", { className: "flex justify-between items-center mb-2", children: [_jsx("label", { htmlFor: "password", className: "block text-sm font-medium", children: "\u05E1\u05D9\u05E1\u05DE\u05D4" }), _jsx(Link, { to: "/forgot-password", className: "text-sm text-yellow-400 hover:text-yellow-300 transition-colors", children: "\u05E9\u05DB\u05D7\u05EA \u05D0\u05EA \u05D4\u05E1\u05D9\u05E1\u05DE\u05D4?" })] }), _jsxs("div", { className: "relative", children: [_jsx("input", { id: "password", type: showPassword ? "text" : "password", value: password, onChange: function (e) { return setPassword(e.target.value); }, className: "w-full px-4 py-3 bg-[#3A3329] border ".concat(errors.password ? "border-red-500" : "border-[#4A4238]", " rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent outline-none pr-12 transition-all duration-200"), placeholder: "\u05D4\u05E7\u05DC\u05D3 \u05D0\u05EA \u05D4\u05E1\u05D9\u05E1\u05DE\u05D4 \u05E9\u05DC\u05DA", dir: "ltr" }), _jsx("button", { type: "button", onClick: function () { return setShowPassword(!showPassword); }, className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-yellow-400 transition-colors", children: showPassword ? _jsx(FaEyeSlash, {}) : _jsx(FaEye, {}) }), errors.password && (_jsx("p", { className: "mt-1 text-sm text-red-400", children: errors.password }))] })] }), _jsx("div", { className: "flex items-center justify-between", children: _jsxs("div", { className: "flex items-center", children: [_jsx("input", { id: "remember-me", name: "remember-me", type: "checkbox", checked: rememberMe, onChange: function (e) { return setRememberMe(e.target.checked); }, className: "h-4 w-4 text-yellow-500 focus:ring-yellow-400 border-gray-600 rounded" }), _jsx("label", { htmlFor: "remember-me", className: "mr-2 block text-sm text-gray-300", children: "\u05D6\u05DB\u05D5\u05E8 \u05D0\u05D5\u05EA\u05D9" })] }) }), _jsx("button", { type: "submit", disabled: isLoading, className: "w-full flex items-center justify-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-sm font-medium text-[#211C17] ".concat(isLoading
                                        ? "bg-yellow-400"
                                        : "bg-yellow-500 hover:bg-yellow-400", " focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors duration-200"), children: isLoading ? (_jsxs("span", { className: "flex items-center", children: [_jsxs("svg", { className: "animate-spin -ml-1 mr-2 h-4 w-4 text-[#211C17]", xmlns: "http://www.w3.org/2000/svg", fill: "none", viewBox: "0 0 24 24", children: [_jsx("circle", { className: "opacity-25", cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "4" }), _jsx("path", { className: "opacity-75", fill: "currentColor", d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" })] }), "\u05DE\u05EA\u05D7\u05D1\u05E8..."] })) : (_jsxs("span", { className: "flex items-center", children: ["\u05D4\u05EA\u05D7\u05D1\u05E8 ", _jsx(FiArrowRight, { className: "mr-2" })] })) })] }), _jsxs("div", { className: "mt-6", children: [_jsxs("div", { className: "relative", children: [_jsx("div", { className: "absolute inset-0 flex items-center", children: _jsx("div", { className: "w-full border-t border-gray-700" }) }), _jsx("div", { className: "relative flex justify-center text-sm", children: _jsx("span", { className: "px-2 bg-[#2A241C] text-gray-400", children: "\u05D0\u05D5 \u05D4\u05EA\u05D7\u05D1\u05E8 \u05D1\u05D0\u05DE\u05E6\u05E2\u05D5\u05EA" }) })] }), _jsxs("div", { className: "mt-6 grid grid-cols-3 gap-3", children: [_jsx("button", { onClick: function () { return handleSocialLogin("google"); }, type: "button", className: "w-full inline-flex justify-center py-2 px-4 border border-gray-600 rounded-lg shadow-sm bg-[#3A3329] text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors", children: _jsx(FaGoogle, { className: "h-5 w-5 text-red-500" }) }), _jsx("button", { onClick: function () { return handleSocialLogin("facebook"); }, type: "button", className: "w-full inline-flex justify-center py-2 px-4 border border-gray-600 rounded-lg shadow-sm bg-[#3A3329] text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors", children: _jsx(FaFacebook, { className: "h-5 w-5 text-blue-500" }) }), _jsx("button", { onClick: function () { return handleSocialLogin("apple"); }, type: "button", className: "w-full inline-flex justify-center py-2 px-4 border border-gray-600 rounded-lg shadow-sm bg-[#3A3329] text-sm font-medium text-gray-300 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500 transition-colors", children: _jsx(FaApple, { className: "h-5 w-5" }) })] })] })] }), _jsxs("p", { className: "text-center text-sm text-gray-400", children: ["\u05D0\u05D9\u05DF \u05DC\u05DA \u05D7\u05E9\u05D1\u05D5\u05DF \u05E2\u05D3\u05D9\u05D9\u05DF?", " ", _jsx(Link, { to: "/register", className: "font-medium text-yellow-500 hover:text-yellow-400 transition-colors", children: "\u05D4\u05D9\u05E8\u05E9\u05DD \u05E2\u05DB\u05E9\u05D9\u05D5" })] })] }) }));
};
export default Login;
