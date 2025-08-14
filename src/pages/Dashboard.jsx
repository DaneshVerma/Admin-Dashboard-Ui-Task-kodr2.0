import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import MetricCard from "../components/MetricCard";
import SalesChart from "../components/SalesChart";
import RecentActivityTable from "../components/RecentActivityTable";
import { analyticsData } from "../data/analyticsData";

export default function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-gray-100 dark:bg-gray-900">
      
      {/* Sidebar */}
      <div
        className={`${
          isSidebarOpen ? "block" : "hidden"
        } md:block fixed md:relative w-64 bg-gradient-to-b from-gray-800 to-gray-900 text-gray-100 h-full z-50 transition-all duration-300`}
      >
        <Sidebar />
      </div>

      {/* Main Content (Header + Body) */}
      <div className="flex-1 flex flex-col w-full">
        {/* Header stays at top */}
        <Header
          toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)}
          isSidebarOpen={isSidebarOpen}
        />

        {/* Page content */}
        <main className="space-y-6  dark:bg-gray-900 p-6">
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {analyticsData.map((card) => (
              <MetricCard key={card.title} {...card} />
            ))}
          </section>

          <SalesChart />
          <RecentActivityTable />
        </main>
      </div>
    </div>
  );
}
