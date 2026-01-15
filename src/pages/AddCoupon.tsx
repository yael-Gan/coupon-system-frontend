import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';

// Create properly typed icon components
const FaPlus = FaIcons.FaPlus as React.ComponentType<React.SVGProps<SVGSVGElement>>;
const FaDollarSign = FaIcons.FaDollarSign as React.ComponentType<React.SVGProps<SVGSVGElement>>;
const FaImage = FaIcons.FaImage as React.ComponentType<React.SVGProps<SVGSVGElement>>;
const FaBuilding = FaIcons.FaBuilding as React.ComponentType<React.SVGProps<SVGSVGElement>>;
const FaCalendarAlt = FaIcons.FaCalendarAlt as React.ComponentType<React.SVGProps<SVGSVGElement>>;
import { motion } from 'framer-motion';
import { addCoupon } from '../Services/couponService';

type Category = 'FOOD' | 'ELECTRICITY' | 'RESTAURANT' | 'VACATION' | 'FASHION' | 'COSMETICS';

interface CouponFormData {
  title: string;
  description: string;
  category: Category;
  startDate: string;
  endDate: string;
  amount: number | string;
  price: number | string;
  image: string;
}

const AddCoupon = () => {
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  
  const [formData, setFormData] = useState<CouponFormData>({
    title: '',
    description: '',
    category: 'FOOD',
    startDate: new Date().toISOString().split('T')[0],
    endDate: '',
    amount: 100,
    price: 0,
    image: '',
  });

  const categories: { value: Category; label: string }[] = [
    { value: 'FOOD', label: 'אוכל' },
    { value: 'ELECTRICITY', label: 'חשמל' },
    { value: 'RESTAURANT', label: 'מסעדות' },
    { value: 'VACATION', label: 'חופשות' },
    { value: 'FASHION', label: 'אופנה' },
    { value: 'COSMETICS', label: 'קוסמטיקה' },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    
    setFormData(prev => ({
      ...prev,
      [name]: type === 'number' ? (value === '' ? '' : Number(value)) : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    setIsSubmitting(true);
    
    try {
      // Get token from localStorage
      const token = localStorage.getItem('token');
      if (!token) {
        throw new Error('לא מאושר, יש להתחבר מחדש');
      }
      
      // Add company ID from user data (you might need to adjust this based on your auth system)
      const userData = localStorage.getItem('user');
      if (!userData) {
        throw new Error('לא נמצאו פרטי משתמש, יש להתחבר מחדש');
      }
      
      interface UserData {
        companyId: string;
        [key: string]: any;
      }
      
      const parsedUser: UserData = JSON.parse(userData);
      const companyId = parsedUser.companyId;
      
      if (!companyId) {
        throw new Error('שגיאה: לא נמצא מזהה חברה');
      }

      const couponData = {
        ...formData,
        companyId: Number(companyId), // Convert companyId to number
        amount: Number(formData.amount),
        price: Number(formData.price),
      };
      
      await addCoupon(couponData, token);
      
      setSuccess(true);
      setTimeout(() => {
        navigate('/company/coupons');
      }, 2000);
      
    } catch (err) {
      console.error('Error adding coupon:', err);
      setError(err instanceof Error ? err.message : 'אירעה שגיאה בהוספת הקופון');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#1E1B16] to-[#2A241C] py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-[#2A241C] rounded-2xl shadow-xl overflow-hidden border border-yellow-900/30"
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-yellow-700 to-yellow-600 px-6 py-8 text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-yellow-500/20 mb-4">
              <FaPlus className="text-2xl text-yellow-300" />
            </div>
            <h1 className="text-3xl font-bold text-white">הוסף קופון חדש</h1>
            <p className="text-yellow-100 mt-2">מלא את הפרטים כדי להוסיף קופון חדש למערכת</p>
          </div>
          
          {/* Success Message */}
          {success && (
            <div className="bg-green-500/10 border-l-4 border-green-500 p-4 m-6 rounded">
              <p className="text-green-200 font-medium">הקופון נוסף בהצלחה! מעביר אותך לדף הקופונים...</p>
            </div>
          )}
          
          {/* Error Message */}
          {error && (
            <div className="bg-red-500/10 border-l-4 border-red-500 p-4 m-6 rounded">
              <p className="text-red-200 font-medium">{error}</p>
            </div>
          )}
          
          {/* Form */}
          <form onSubmit={handleSubmit} className="p-6 md:p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Title */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 flex items-center">
                  <FaBuilding className="ml-2 text-yellow-500" />
                  כותרת הקופון
                </label>
                <input
                  type="text"
                  name="title"
                  value={formData.title}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#1E1B16] border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="לדוגמה: 30% הנחה על כל המוצרים"
                  required
                />
              </div>
              
              {/* Category */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 flex items-center">
                  <FaBuilding className="ml-2 text-yellow-500" />
                  קטגוריה
                </label>
                <select
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#1E1B16] border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  required
                >
                  {categories.map(cat => (
                    <option key={cat.value} value={cat.value}>
                      {cat.label}
                    </option>
                  ))}
                </select>
              </div>
              
              {/* Start Date */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 flex items-center">
                  <FaCalendarAlt className="ml-2 text-yellow-500" />
                  תאריך התחלה
                </label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#1E1B16] border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  required
                />
              </div>
              
              {/* End Date */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 flex items-center">
                  <FaCalendarAlt className="ml-2 text-yellow-500" />
                  תאריך תפוגה
                </label>
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  min={formData.startDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#1E1B16] border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  required
                />
              </div>
              
              {/* Amount */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 flex items-center">
                  <FaBuilding className="ml-2 text-yellow-500" />
                  כמות קופונים
                </label>
                <input
                  type="number"
                  name="amount"
                  min="1"
                  value={formData.amount}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#1E1B16] border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  required
                />
              </div>
              
              {/* Price */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-300 flex items-center">
                  <FaDollarSign className="ml-2 text-yellow-500" />
                  מחיר (בשקלים)
                </label>
                <input
                  type="number"
                  name="price"
                  min="0"
                  step="0.01"
                  value={formData.price}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#1E1B16] border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  required
                />
              </div>
              
              {/* Image URL */}
              <div className="md:col-span-2 space-y-2">
                <label className="text-sm font-medium text-gray-300 flex items-center">
                  <FaImage className="ml-2 text-yellow-500 w-4 h-4" />
                  קישור לתמונה (אופציונלי)
                </label>
                <input
                  type="url"
                  name="image"
                  value={formData.image}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-[#1E1B16] border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="https://example.com/image.jpg"
                />
              </div>
              
              {/* Description */}
              <div className="md:col-span-2 space-y-2">
                <label className="block text-sm font-medium text-gray-300">תיאור הקופון</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-[#1E1B16] border border-gray-700 rounded-lg text-white focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                  placeholder="פרטים על ההנחה, תנאי השימוש וכו'..."
                  required
                />
              </div>
            </div>
            
            {/* Form Actions */}
            <div className="mt-8 flex flex-col sm:flex-row justify-end gap-4">
              <button
                type="button"
                onClick={() => navigate(-1)}
                className="px-6 py-3 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700/50 transition-colors"
                disabled={isSubmitting}
              >
                ביטול
              </button>
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-6 py-3 bg-gradient-to-r from-yellow-600 to-yellow-700 text-white font-medium rounded-lg hover:from-yellow-500 hover:to-yellow-600 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    מוסיף קופון...
                  </>
                ) : (
                  <>
                    <FaPlus />
                    הוסף קופון
                  </>
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default AddCoupon;
