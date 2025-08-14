import React from "react";
import { recentActivities } from "../data/recentActivities";

export default function RecentActivityTable() {
  return (
    <div className="bg-white dark:text-white dark:bg-gray-800 p-6 rounded-xl shadow overflow-x-auto">
      <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>
      <table className="w-full text-left">
        <thead className="bg-gray-100 dark:bg-gray-700">
          <tr>
            <th className="p-3">User</th>
            <th className="p-3">Action</th>
            <th className="p-3">Time</th>
          </tr>
        </thead>
        <tbody>
          {recentActivities.map(a => (
            <tr key={a.id} className="border-b border-gray-200 dark:border-gray-700">
              <td className="p-3">{a.user}</td>
              <td className="p-3">{a.action}</td>
              <td className="p-3 text-gray-500">{a.time}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
