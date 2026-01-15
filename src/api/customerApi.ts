import { Customer } from "../tipes";

const API = "http://localhost:8080/api/customers";

export const getAllCustomers = async (): Promise<Customer[]> => {
  const res = await fetch(API);
  return res.json();
};

export const deleteCustomer = async (id: number) => {
  await fetch(`${API}/${id}`, { method: "DELETE" });
};
