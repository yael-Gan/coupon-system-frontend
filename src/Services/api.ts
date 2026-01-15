import axios from 'axios';

const API_BASE_URL = '/api';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default {
  // Auth endpoints
  login: (credentials: { email: string; password: string }) => 
    api.post('/auth/login', credentials),
  
  // Coupon endpoints
  getCoupons: () => api.get('/coupons'),
  getCoupon: (id: number) => api.get(`/coupons/${id}`),
  createCoupon: (coupon: any) => api.post('/coupons', coupon),
  updateCoupon: (id: number, coupon: any) => api.put(`/coupons/${id}`, coupon),
  deleteCoupon: (id: number) => api.delete(`/coupons/${id}`),
  
  // Company endpoints
  getCompanies: () => api.get('/companies'),
  getCompany: (id: number) => api.get(`/companies/${id}`),
  
  // Customer endpoints
  getCustomers: () => api.get('/customers'),
  getCustomer: (id: number) => api.get(`/customers/${id}`),
  getCustomerCoupons: (id: number) => api.get(`/customers/${id}/coupons`),
  
  // Add more API calls as needed
};
