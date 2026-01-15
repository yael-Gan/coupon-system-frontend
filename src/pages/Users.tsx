import React, { useState, useEffect } from "react";
import { Customer } from "../tipes";
import { deleteCustomer, getAllCustomers } from "../api/customerApi";

export const Users: React.FC = () => {
  const [customers, setCustomers] = useState<Customer[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    const data = await getAllCustomers();
    setCustomers(data);
    setLoading(false);
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("בטוחה שאת רוצה למחוק?")) {
      await deleteCustomer(id);
      setCustomers(customers.filter(c => c.id !== id));
    }
  };

  if (loading) return <div className="text-center mt-10">טוען...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">לקוחות</h1>
      <table className="min-w-full bg-white rounded-lg shadow-lg">
        <thead className="bg-green-400 text-white">
          <tr>
            <th className="py-2 px-4">שם</th>
            <th className="py-2 px-4">אימייל</th>
            <th className="py-2 px-4">פעולות</th>
          </tr>
        </thead>
        <tbody>
          {customers.map(c => (
            <tr key={c.id} className="border-b hover:bg-green-50 transition-all">
              <td className="py-2 px-4">{c.name}</td>
              <td className="py-2 px-4">{c.email}</td>
              <td className="py-2 px-4 space-x-2">
                <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600 transition">ערוך</button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                  onClick={() => handleDelete(c.id)}
                >
                  מחק
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export {};
