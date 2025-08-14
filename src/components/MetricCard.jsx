import React from "react";
import { ArrowUpIcon, ArrowDownIcon } from '@heroicons/react/20/solid';

export default function MetricCard({ title, value, trend }) {
  const isPositive = trend >= 0;
  return (
    <div className="bg-white dark:text-white dark:bg-gray-800 p-6 rounded-xl shadow hover:shadow-lg transition">
      <span className="text-gray-500 dark:text-gray-400">{title}</span>
      <span className="block text-3xl font-bold">{value}</span>
      <div className="flex items-center space-x-1 mt-2">
        {isPositive ? (
          <ArrowUpIcon className="w-5 h-5 text-green-500" />
        ) : (
          <ArrowDownIcon className="w-5 h-5 text-red-500" />
        )}
        <span className="text-sm text-gray-500">{Math.abs(trend)}% {isPositive ? 'increase' : 'decrease'}</span>
      </div>
    </div>
  );
}
