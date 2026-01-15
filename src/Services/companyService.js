// src/services/companyService.js
import axios from "axios";

const API_URL = "http://localhost:8080/api/companies";

export const getAllCompanies = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export const getCompanyById = async (id) => {
  const response = await axios.get(`${API_URL}/${id}`);
  return response.data;
};

export const addCompany = async (company) => {
  const response = await axios.post(API_URL, company);
  return response.data;
};

export const updateCompany = async (id, company) => {
  const response = await axios.put(`${API_URL}/${id}`, company);
  return response.data;
};

export const deleteCompany = async (id) => {
  const response = await axios.delete(`${API_URL}/${id}`);
  return response.data;
};
