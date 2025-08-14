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
      <Sidebar isOpen={isSidebarOpen} />
      <div className="flex-1 flex flex-col">
        <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
        <main className="p-6 space-y-6">
          <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {analyticsData.map(card => (
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
