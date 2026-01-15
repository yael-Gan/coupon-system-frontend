import axios from 'axios';
var API_BASE_URL = '/api';
export var api = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});
api.interceptors.request.use(function (config) {
    var token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = "Bearer ".concat(token);
    }
    return config;
});
export default {
    // Auth endpoints
    login: function (credentials) {
        return api.post('/auth/login', credentials);
    },
    // Coupon endpoints
    getCoupons: function () { return api.get('/coupons'); },
    getCoupon: function (id) { return api.get("/coupons/".concat(id)); },
    createCoupon: function (coupon) { return api.post('/coupons', coupon); },
    updateCoupon: function (id, coupon) { return api.put("/coupons/".concat(id), coupon); },
    deleteCoupon: function (id) { return api.delete("/coupons/".concat(id)); },
    // Company endpoints
    getCompanies: function () { return api.get('/companies'); },
    getCompany: function (id) { return api.get("/companies/".concat(id)); },
    // Customer endpoints
    getCustomers: function () { return api.get('/customers'); },
    getCustomer: function (id) { return api.get("/customers/".concat(id)); },
    getCustomerCoupons: function (id) { return api.get("/customers/".concat(id, "/coupons")); },
    // Add more API calls as needed
};
