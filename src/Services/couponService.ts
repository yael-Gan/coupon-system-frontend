import axios from 'axios';

const API_URL = "http://localhost:8080/api/coupons";

export interface CouponData {
  id?: number;
  title: string;
  description: string;
  category: string;
  startDate: string;
  endDate: string;
  amount: number;
  price: number;
  image?: string;
  companyId: number;
}

export const addCoupon = async (couponData: Omit<CouponData, 'id'>, token: string) => {
  try {
    const response = await axios.post(API_URL, couponData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error adding coupon:', error);
    throw error;
  }
};

export const updateCoupon = async (id: number, couponData: Partial<CouponData>, token: string) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, couponData, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error updating coupon:', error);
    throw error;
  }
};

export const deleteCoupon = async (id: number, token: string) => {
  try {
    await axios.delete(`${API_URL}/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
  } catch (error) {
    console.error('Error deleting coupon:', error);
    throw error;
  }
};

export const getCompanyCoupons = async (token: string) => {
  try {
    const response = await axios.get(`${API_URL}/company`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching company coupons:', error);
    throw error;
  }
};
