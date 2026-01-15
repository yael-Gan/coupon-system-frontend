import React from "react";
type CardProps = {
  title: string;
  value: string | number;
  color: string;
};

// 2️⃣ ואז מגדירים את הקומפוננטה עם הטיפוסים
const Card: React.FC<CardProps> = ({ title, value, color }) => (
  <div className={`p-6 rounded shadow ${color} text-white`}>
    <h3 className="text-lg font-semibold">{title}</h3>
    <p className="text-3xl font-bold mt-2">{value}</p>
  </div>
);

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-3 gap-6">
        <Card title="Total Coupons" value="128" color="bg-indigo-500" />
        <Card title="Active Clients" value="76" color="bg-green-500" />
        <Card title="Companies" value="24" color="bg-yellow-500" />
      </div>

      <div className="bg-white shadow rounded p-4">
        <h2 className="text-lg font-bold mb-4">Recent Coupons</h2>
        <table className="w-full table-auto">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left">ID</th>
              <th className="p-2 text-left">Title</th>
              <th className="p-2 text-left">Discount</th>
              <th className="p-2 text-left">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-b hover:bg-gray-50 transition">
              <td className="p-2">001</td>
              <td className="p-2">Black Friday</td>
              <td className="p-2">50%</td>
              <td className="p-2 text-green-600 font-bold">Active</td>
            </tr>
            <tr className="border-b hover:bg-gray-50 transition">
              <td className="p-2">002</td>
              <td className="p-2">Cyber Monday</td>
              <td className="p-2">30%</td>
              <td className="p-2 text-red-500 font-bold">Expired</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default Dashboard;
