import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import SubNavbar from '../components/navbar/SubNavbar';
import Sidebar from '../components/sidebar/Sidebar';
import NewsPanel from '../components/NewsPanel';
import Chatbot from '../components/Chatbot';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#f3f2ef] dark:bg-[#111111] flex flex-col relative">
      <Navbar />
      <SubNavbar />
      <main className="flex-grow flex justify-center py-6 px-4 sm:px-6 lg:px-8 mx-auto w-full text-gray-900 dark:text-gray-100 max-w-[1600px]">
        <div className="flex flex-col md:flex-row w-full gap-6">
          {/* Left Sidebar Area (Graphs) */}
          <div className="hidden md:flex w-full md:w-[250px] lg:w-[350px] xl:w-[400px] flex-shrink-0 flex-col gap-4 sticky top-20 h-[calc(100vh-100px)]">
            
            {/* Upper Chart Placeholder */}
            <div className="bg-white dark:bg-[#1e1e2d] rounded-xl border border-gray-200 dark:border-gray-800 p-4 shadow-sm transition-colors duration-200 flex-1 flex flex-col min-h-0">
              <h2 className="font-semibold text-sm mb-2 text-gray-900 dark:text-gray-100 w-full text-left">
                Market Performance
              </h2>
              <div className="flex-grow flex items-center justify-center border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-lg bg-gray-50 dark:bg-[#1a1a24] text-gray-400 dark:text-gray-500 text-sm">
                [Line Chart Placeholder]
              </div>
            </div>

            {/* Division Line */}
            <div className="w-full h-[2px] bg-gray-200 dark:bg-gray-800 rounded-full flex-shrink-0 my-1"></div>

            {/* Lower Chart Placeholder */}
            <div className="bg-white dark:bg-[#1e1e2d] rounded-xl border border-gray-200 dark:border-gray-800 p-4 shadow-sm transition-colors duration-200 flex-1 flex flex-col min-h-0">
              <h2 className="font-semibold text-sm mb-2 text-gray-900 dark:text-gray-100 w-full text-left">
                Volume Analysis
              </h2>
              <div className="flex-grow flex items-center justify-center border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-lg bg-gray-50 dark:bg-[#1a1a24] text-gray-400 dark:text-gray-500 text-sm">
                [Bar Chart Placeholder]
              </div>
            </div>
            
          </div>
          
          {/* Main Content Area (Stocks listing, etc.) */}
          <div className="flex-grow min-w-0 lg:max-w-2xl xl:max-w-3xl flex flex-col gap-4">
            <Outlet />
          </div>
          
          {/* Right Sidebar Area (News + Copyright) */}
          <div className="hidden md:flex w-full md:w-[350px] lg:w-[400px] flex-shrink-0 flex-col gap-4 sticky top-20 h-[calc(100vh-100px)]">
            <NewsPanel />
            
            {/* Copyright / Credits (Approx 1.5 inches / ~144px height) */}
            <div className="h-32 bg-transparent text-gray-500 dark:text-gray-500 text-xs text-center flex flex-col items-center justify-end pb-6 border-t border-gray-200 dark:border-gray-800 flex-shrink-0">
              <p className="font-semibold text-gray-700 dark:text-gray-400">© 2026 UltraTrading Platform.</p>
              <p>All rights reserved.</p>
              <p className="mt-2 text-[10px]">Data provided by Finnhub & external sources.</p>
              <p className="text-[10px]">Built with precision for simulated trading.</p>
            </div>
          </div>
        </div>
      </main>
      <Chatbot />
    </div>
  );
};

export default MainLayout;
