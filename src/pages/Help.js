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
import { FaQuestionCircle, FaComments, FaArrowRight, FaTimes, FaPaperPlane, FaUserAlt } from 'react-icons/fa';
import { FiMail, FiPhone, FiMessageSquare, FiClock } from 'react-icons/fi';
var ChatInterface = function (_a) {
    var onClose = _a.onClose;
    var _b = useState(''), message = _b[0], setMessage = _b[1];
    var _c = useState([
        {
            id: 1,
            text: '👋 שלום! אני רותם, נציג השירות שלך. איך אוכל לעזור לך היום?',
            sender: 'bot',
            time: new Date().toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit' })
        },
        {
            id: 2,
            text: '💡 טיפ: לחצו על "הקופונים שלי" כדי לראות את כל ההטבות הפעילות שלכם!',
            sender: 'bot',
            time: new Date().toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit' })
        }
    ]), messages = _c[0], setMessages = _c[1];
    var handleSendMessage = function (e) {
        e.preventDefault();
        if (message.trim() === '')
            return;
        // Add user message
        var newMessage = {
            id: messages.length + 1,
            text: message,
            sender: 'user',
            time: new Date().toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit' })
        };
        setMessages(__spreadArray(__spreadArray([], messages, true), [newMessage], false));
        setMessage('');
        // Simulate bot response
        setTimeout(function () {
            var botResponses = [
                'אני מבין שאתה מעוניין במידע נוסף. אשמח לעזור!',
                'השאלה שלך חשובה לנו. נחזור אליך עם תשובה בהקדם האפשרי.',
                'תודה על פנייתך! איך אוכל לעזור לך עוד?',
                'האם תרצה שאחבר אותך לנציג שירות?',
                'יש לנו מבצעים מיוחדים עכשיו! תרצה לשמוע עליהם?'
            ];
            var response = {
                id: messages.length + 2,
                text: botResponses[Math.floor(Math.random() * botResponses.length)],
                sender: 'bot',
                time: new Date().toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit' })
            };
            setMessages(function (prev) { return __spreadArray(__spreadArray([], prev, true), [response], false); });
        }, 1000);
    };
    return (_jsxs(motion.div, { className: "fixed bottom-24 left-8 w-96 bg-[#2A241C] rounded-2xl shadow-2xl overflow-hidden border border-yellow-600/30 flex flex-col", style: { height: 'calc(100vh - 10rem)' }, initial: { opacity: 0, y: 20, scale: 0.95 }, animate: { opacity: 1, y: 0, scale: 1 }, exit: { opacity: 0, y: 20, scale: 0.95 }, children: [_jsxs("div", { className: "bg-gradient-to-r from-yellow-700 to-yellow-600 p-4 flex justify-between items-center", children: [_jsxs("div", { className: "flex items-center", children: [_jsx("div", { className: "w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center mr-3", children: _jsx(FaUserAlt, { className: "text-white" }) }), _jsxs("div", { children: [_jsx("h3", { className: "font-bold text-white", children: "\u05E6'\u05D0\u05D8 \u05E2\u05DD \u05E0\u05E6\u05D9\u05D2" }), _jsx("p", { className: "text-xs text-yellow-100", children: "\u05DE\u05D7\u05D5\u05D1\u05E8 \u05E2\u05DB\u05E9\u05D9\u05D5" })] })] }), _jsx("button", { onClick: onClose, className: "text-white hover:text-yellow-200 transition-colors", children: _jsx(FaTimes, {}) })] }), _jsx("div", { className: "flex-1 p-4 overflow-y-auto space-y-4", children: messages.map(function (msg) { return (_jsx("div", { className: "flex ".concat(msg.sender === 'user' ? 'justify-end' : 'justify-start'), children: _jsxs("div", { className: "max-w-xs rounded-2xl px-4 py-2 ".concat(msg.sender === 'user'
                            ? 'bg-yellow-600 text-white rounded-br-none'
                            : 'bg-[#3A3329] text-gray-200 rounded-bl-none'), children: [_jsx("p", { children: msg.text }), _jsx("p", { className: "text-xs opacity-70 text-right mt-1", children: msg.time })] }) }, msg.id)); }) }), _jsx("form", { onSubmit: handleSendMessage, className: "p-4 border-t border-[#3A3329]", children: _jsxs("div", { className: "flex items-center bg-[#3A3329] rounded-full px-4 py-2", children: [_jsx("input", { type: "text", value: message, onChange: function (e) { return setMessage(e.target.value); }, placeholder: "\u05D4\u05E7\u05DC\u05D3 \u05D4\u05D5\u05D3\u05E2\u05D4...", className: "flex-1 bg-transparent border-none focus:outline-none text-white placeholder-gray-400 text-right" }), _jsx("button", { type: "submit", className: "text-yellow-500 hover:text-yellow-400 transition-colors", children: _jsx(FaPaperPlane, {}) })] }) })] }));
};
var Help = function () {
    var _a = useState(false), isChatOpen = _a[0], setIsChatOpen = _a[1];
    var faqItems = [
        {
            question: '? איך מוסיפים קופון חדש',
            answer: 'כדי להוסיף קופון חדש, לחצו על כפתור "הוסף קופון" בראש הדף והשלימו את פרטי הקופון בטופס שייפתח.'
        },
        {
            question: '? איך משתמשים בקופון',
            answer: 'הציגו את הקוד המופיע בקופון בחנות או הזינו אותו באתר הרשמי של החברה בעת התשלום.'
        },
        {
            question: '? האם ניתן לבטל קופון',
            answer: 'ניתן לבטל קופון עד 24 שעות ממועד הרכישה, בכפוף לתנאי השימוש של כל קופון.'
        },
        {
            question: '? איפה אני יכול לראות את כל הקופונים שלי',
            answer: 'כל הקופונים שלך זמינים בלשונית "הקופונים שלי" בחשבון האישי שלך.'
        }
    ];
    var contactMethods = [
        {
            icon: _jsx(FiMail, { className: "w-8 h-8 text-yellow-500" }),
            title: 'אימייל',
            details: 'support@couponblast.co.il',
            link: 'mailto:support@couponblast.co.il',
            delay: 0.1
        },
        {
            icon: _jsx(FiPhone, { className: "w-8 h-8 text-blue-500" }),
            title: 'טלפון',
            details: '03-1234567',
            link: 'tel:031234567',
            delay: 0.2
        },
        {
            icon: _jsx(FiMessageSquare, { className: "w-8 h-8 text-green-500" }),
            title: 'צ\'אט חי',
            details: 'זמין 24/7',
            link: '#chat',
            delay: 0.3
        },
        {
            icon: _jsx(FiClock, { className: "w-8 h-8 text-purple-500" }),
            title: 'שעות פעילות',
            details: 'א-ה: 08:00-22:00',
            delay: 0.4
        }
    ];
    var containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
                delayChildren: 0.3
            }
        }
    };
    var itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5
            }
        }
    };
    return (_jsxs("div", { className: "min-h-screen bg-gradient-to-b from-[#1E1B16] to-[#2A241C] text-white py-12 px-4 sm:px-6 lg:px-8", children: [_jsxs(motion.div, { className: "text-center mb-16", initial: { opacity: 0, y: -20 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5 }, children: [_jsx("div", { className: "inline-flex items-center justify-center w-20 h-20 bg-yellow-600/20 rounded-full mb-6", children: _jsx(FaQuestionCircle, { className: "w-10 h-10 text-yellow-500" }) }), _jsx("h1", { className: "text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600", children: "? \u05D0\u05D9\u05DA \u05E0\u05D5\u05DB\u05DC \u05DC\u05E2\u05D6\u05D5\u05E8 \u05DC\u05DA \u05D4\u05D9\u05D5\u05DD" }), _jsx("p", { className: "text-xl text-gray-300 max-w-2xl mx-auto", children: "\u05DE\u05E6\u05D0\u05E0\u05D5 \u05D0\u05EA \u05DB\u05DC \u05D4\u05EA\u05E9\u05D5\u05D1\u05D5\u05EA \u05DC\u05E9\u05D0\u05DC\u05D5\u05EA \u05D4\u05E0\u05E4\u05D5\u05E6\u05D5\u05EA \u05D1\u05D9\u05D5\u05EA\u05E8. \u05D0\u05DD \u05DC\u05D0 \u05DE\u05E6\u05D0\u05EA\u05DD \u05D0\u05EA \u05DE\u05D4 \u05E9\u05D7\u05D9\u05E4\u05E9\u05EA\u05DD, \u05E6\u05E8\u05D5 \u05D0\u05D9\u05EA\u05E0\u05D5 \u05E7\u05E9\u05E8." })] }), _jsx(motion.div, { className: "max-w-3xl mx-auto mb-20", initial: { opacity: 0, y: 20 }, animate: { opacity: 1, y: 0 }, transition: { delay: 0.2, duration: 0.5 }, children: _jsxs("div", { className: "relative", children: [_jsx("input", { type: "text", placeholder: "\u05D7\u05E4\u05E9\u05D5 \u05EA\u05E9\u05D5\u05D1\u05D5\u05EA...", className: "w-full px-6 py-4 pr-16 text-lg bg-[#2A241C] border border-[#3A3329] rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent placeholder-gray-500 text-right" }), _jsx("button", { className: "absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-yellow-500", children: _jsx("svg", { xmlns: "http://www.w3.org/2000/svg", className: "h-6 w-6", fill: "none", viewBox: "0 0 24 24", stroke: "currentColor", children: _jsx("path", { strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 2, d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" }) }) })] }) }), _jsxs("div", { className: "max-w-4xl mx-auto mb-24", children: [_jsx("h2", { className: "text-3xl font-bold mb-10 text-center", children: "\u05E9\u05D0\u05DC\u05D5\u05EA \u05E0\u05E4\u05D5\u05E6\u05D5\u05EA" }), _jsx(motion.div, { className: "space-y-6", variants: containerVariants, initial: "hidden", animate: "visible", children: faqItems.map(function (item, index) { return (_jsx(motion.div, { className: "bg-[#2A241C] border border-[#3A3329] rounded-xl overflow-hidden shadow-lg hover:shadow-yellow-500/10 transition-all duration-300", variants: itemVariants, whileHover: { scale: 1.01 }, children: _jsxs("details", { className: "group", children: [_jsxs("summary", { className: "flex items-center justify-between p-6 cursor-pointer focus:outline-none", children: [_jsx("h3", { className: "text-xl font-medium text-yellow-400", children: item.question }), _jsx("div", { className: "w-6 h-6 text-yellow-500 transform transition-transform duration-300 group-hover:rotate-90", children: _jsx(FaArrowRight, {}) })] }), _jsx("div", { className: "px-6 pb-6 pt-0 -mt-4 text-gray-300", children: item.answer })] }) }, index)); }) })] }), _jsxs("div", { className: "max-w-6xl mx-auto", children: [_jsx("h2", { className: "text-3xl font-bold mb-12 text-center", children: "\u05E6\u05E8\u05D5 \u05D0\u05D9\u05EA\u05E0\u05D5 \u05E7\u05E9\u05E8" }), _jsx(motion.div, { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8", variants: containerVariants, initial: "hidden", animate: "visible", children: contactMethods.map(function (method, index) { return (_jsxs(motion.a, { href: method.link, className: "group bg-[#2A241C] border border-[#3A3329] rounded-xl p-6 hover:bg-[#3A3329] transition-all duration-300 flex flex-col items-center text-center", variants: itemVariants, whileHover: { y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }, children: [_jsx("div", { className: "w-16 h-16 rounded-full bg-[#3A3329] flex items-center justify-center mb-4 group-hover:bg-yellow-600/20 transition-colors duration-300", children: method.icon }), _jsx("h3", { className: "text-xl font-semibold mb-2", children: method.title }), _jsx("p", { className: "text-gray-400", children: method.details }), _jsx("div", { className: "mt-4 text-yellow-500 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300", children: _jsx(FaArrowRight, {}) })] }, index)); }) })] }), _jsx(motion.div, { className: "fixed bottom-8 left-8 z-50", initial: { opacity: 0, x: -20 }, animate: { opacity: 1, x: 0 }, transition: { delay: 1, duration: 0.5 }, children: _jsx("button", { onClick: function () { return setIsChatOpen(!isChatOpen); }, className: "flex items-center justify-center w-16 h-16 rounded-full text-white shadow-lg transition-all duration-300 transform hover:scale-110 ".concat(isChatOpen
                        ? 'bg-red-500 hover:bg-red-600'
                        : 'bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-500 hover:to-yellow-600'), children: isChatOpen ? _jsx(FaTimes, { className: "w-8 h-8" }) : _jsx(FaComments, { className: "w-8 h-8" }) }) }), _jsx(AnimatePresence, { children: isChatOpen && _jsx(ChatInterface, { onClose: function () { return setIsChatOpen(false); } }) })] }));
};
export default Help;
