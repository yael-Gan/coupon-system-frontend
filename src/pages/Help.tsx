import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaQuestionCircle, FaEnvelope, FaPhoneAlt, FaComments, FaClock, FaArrowRight, FaTimes, FaPaperPlane, FaUserAlt } from 'react-icons/fa';
import { FiMail, FiPhone, FiMessageSquare, FiClock } from 'react-icons/fi';

interface ChatInterfaceProps {
  onClose: () => void;
}

const ChatInterface = ({ onClose }: ChatInterfaceProps) => {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([
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
  ]);

  const handleSendMessage = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (message.trim() === '') return;
    
    // Add user message
    const newMessage = {
      id: messages.length + 1,
      text: message,
      sender: 'user',
      time: new Date().toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit' })
    };
    
    setMessages([...messages, newMessage]);
    setMessage('');
    
    // Simulate bot response
    setTimeout(() => {
      const botResponses = [
        'אני מבין שאתה מעוניין במידע נוסף. אשמח לעזור!',
        'השאלה שלך חשובה לנו. נחזור אליך עם תשובה בהקדם האפשרי.',
        'תודה על פנייתך! איך אוכל לעזור לך עוד?',
        'האם תרצה שאחבר אותך לנציג שירות?',
        'יש לנו מבצעים מיוחדים עכשיו! תרצה לשמוע עליהם?'
      ];
      
      const response = {
        id: messages.length + 2,
        text: botResponses[Math.floor(Math.random() * botResponses.length)],
        sender: 'bot',
        time: new Date().toLocaleTimeString('he-IL', { hour: '2-digit', minute: '2-digit' })
      };
      
      setMessages(prev => [...prev, response]);
    }, 1000);
  };

  return (
    <motion.div 
      className="fixed bottom-24 left-8 w-96 bg-[#2A241C] rounded-2xl shadow-2xl overflow-hidden border border-yellow-600/30 flex flex-col"
      style={{ height: 'calc(100vh - 10rem)' }}
      initial={{ opacity: 0, y: 20, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 20, scale: 0.95 }}
    >
      {/* Chat Header */}
      <div className="bg-gradient-to-r from-yellow-700 to-yellow-600 p-4 flex justify-between items-center">
        <div className="flex items-center">
          <div className="w-10 h-10 rounded-full bg-yellow-500 flex items-center justify-center mr-3">
            <FaUserAlt className="text-white" />
          </div>
          <div>
            <h3 className="font-bold text-white">צ'אט עם נציג</h3>
            <p className="text-xs text-yellow-100">מחובר עכשיו</p>
          </div>
        </div>
        <button 
          onClick={onClose}
          className="text-white hover:text-yellow-200 transition-colors"
        >
          <FaTimes />
        </button>
      </div>
      
      {/* Messages */}
      <div className="flex-1 p-4 overflow-y-auto space-y-4">
        {messages.map((msg) => (
          <div 
            key={msg.id} 
            className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}
          >
            <div 
              className={`max-w-xs rounded-2xl px-4 py-2 ${msg.sender === 'user' 
                ? 'bg-yellow-600 text-white rounded-br-none' 
                : 'bg-[#3A3329] text-gray-200 rounded-bl-none'}`}
            >
              <p>{msg.text}</p>
              <p className="text-xs opacity-70 text-right mt-1">{msg.time}</p>
            </div>
          </div>
        ))}
      </div>
      
      {/* Input */}
      <form onSubmit={handleSendMessage} className="p-4 border-t border-[#3A3329]">
        <div className="flex items-center bg-[#3A3329] rounded-full px-4 py-2">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="הקלד הודעה..."
            className="flex-1 bg-transparent border-none focus:outline-none text-white placeholder-gray-400 text-right"
          />
          <button 
            type="submit"
            className="text-yellow-500 hover:text-yellow-400 transition-colors"
          >
            <FaPaperPlane />
          </button>
        </div>
      </form>
    </motion.div>
  );
};

const Help = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const faqItems = [
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

  const contactMethods = [
    {
      icon: <FiMail className="w-8 h-8 text-yellow-500" />,
      title: 'אימייל',
      details: 'support@couponblast.co.il',
      link: 'mailto:support@couponblast.co.il',
      delay: 0.1
    },
    {
      icon: <FiPhone className="w-8 h-8 text-blue-500" />,
      title: 'טלפון',
      details: '03-1234567',
      link: 'tel:031234567',
      delay: 0.2
    },
    {
      icon: <FiMessageSquare className="w-8 h-8 text-green-500" />,
      title: 'צ\'אט חי',
      details: 'זמין 24/7',
      link: '#chat',
      delay: 0.3
    },
    {
      icon: <FiClock className="w-8 h-8 text-purple-500" />,
      title: 'שעות פעילות',
      details: 'א-ה: 08:00-22:00',
      delay: 0.4
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1E1B16] to-[#2A241C] text-white py-12 px-4 sm:px-6 lg:px-8">
      {/* Hero Section */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="inline-flex items-center justify-center w-20 h-20 bg-yellow-600/20 rounded-full mb-6">
          <FaQuestionCircle className="w-10 h-10 text-yellow-500" />
        </div>
        <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
          ? איך נוכל לעזור לך היום
        </h1>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          מצאנו את כל התשובות לשאלות הנפוצות ביותר. אם לא מצאתם את מה שחיפשתם, צרו איתנו קשר.
        </p>
      </motion.div>

      {/* Search Bar */}
      <motion.div 
        className="max-w-3xl mx-auto mb-20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="relative">
          <input
            type="text"
            placeholder="חפשו תשובות..."
            className="w-full px-6 py-4 pr-16 text-lg bg-[#2A241C] border border-[#3A3329] rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent placeholder-gray-500 text-right"
          />
          <button className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-yellow-500">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </button>
        </div>
      </motion.div>

      {/* FAQ Section */}
      <div className="max-w-4xl mx-auto mb-24">
        <h2 className="text-3xl font-bold mb-10 text-center">שאלות נפוצות</h2>
        <motion.div 
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {faqItems.map((item, index) => (
            <motion.div 
              key={index}
              className="bg-[#2A241C] border border-[#3A3329] rounded-xl overflow-hidden shadow-lg hover:shadow-yellow-500/10 transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
            >
              <details className="group">
                <summary className="flex items-center justify-between p-6 cursor-pointer focus:outline-none">
                  <h3 className="text-xl font-medium text-yellow-400">{item.question}</h3>
                  <div className="w-6 h-6 text-yellow-500 transform transition-transform duration-300 group-hover:rotate-90">
                    <FaArrowRight />
                  </div>
                </summary>
                <div className="px-6 pb-6 pt-0 -mt-4 text-gray-300">
                  {item.answer}
                </div>
              </details>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Contact Section */}
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">צרו איתנו קשר</h2>
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {contactMethods.map((method, index) => (
            <motion.a
              key={index}
              href={method.link}
              className="group bg-[#2A241C] border border-[#3A3329] rounded-xl p-6 hover:bg-[#3A3329] transition-all duration-300 flex flex-col items-center text-center"
              variants={itemVariants}
              whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)' }}
            >
              <div className="w-16 h-16 rounded-full bg-[#3A3329] flex items-center justify-center mb-4 group-hover:bg-yellow-600/20 transition-colors duration-300">
                {method.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{method.title}</h3>
              <p className="text-gray-400">{method.details}</p>
              <div className="mt-4 text-yellow-500 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                <FaArrowRight />
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>

      {/* Live Chat Button */}
      <motion.div 
        className="fixed bottom-8 left-8 z-50"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
      >
        <button 
          onClick={() => setIsChatOpen(!isChatOpen)}
          className={`flex items-center justify-center w-16 h-16 rounded-full text-white shadow-lg transition-all duration-300 transform hover:scale-110 ${
            isChatOpen 
              ? 'bg-red-500 hover:bg-red-600' 
              : 'bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-500 hover:to-yellow-600'
          }`}
        >
          {isChatOpen ? <FaTimes className="w-8 h-8" /> : <FaComments className="w-8 h-8" />}
        </button>
      </motion.div>
      
      {/* Chat Interface */}
      <AnimatePresence>
        {isChatOpen && <ChatInterface onClose={() => setIsChatOpen(false)} />}
      </AnimatePresence>
    </div>
  );
};

export default Help;
