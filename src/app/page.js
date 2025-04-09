'use client';
import React from 'react';
import PieChart from '@/components/Chart';
import LineChart from '@/components/LineChart';
import MapView from '@/components/Map';
import StateFilter from '@/components/StateWiseFilter';

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-100 px-4 py-6 sm:px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl sm:text-4xl font-bold justify-center text-center mb-10 text-blue-800">
         COVID-19 Dashboard 
        </h1>

        <div className="mb-6">
          <StateFilter />
        </div>

        <div className="flex flex-col lg:flex-row gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-md p-5 w-full lg:w-1/2">
            <PieChart />
          </div>
          <div className="bg-white rounded-xl shadow-md p-5 w-full lg:w-1/2">
            <LineChart />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-5">
          <MapView />
        </div>
      </div>
    </main>
  );
}
