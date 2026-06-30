import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import NewsPanel from '../components/NewsPanel';
import Chatbot from '../components/Chatbot';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#f3f2ef] dark:bg-[#111111] flex flex-col">
      <Navbar />
      <main className="flex-grow flex justify-center py-6 px-4 sm:px-6 lg:px-8 mx-auto w-full text-gray-900 dark:text-gray-100 max-w-[1600px]">
        <div className="flex flex-col md:flex-row w-full gap-6">
          <Sidebar />
          
          {/* Main Content Area (Stocks listing, Profile, etc.) */}
          <div className="flex-grow min-w-0 lg:max-w-2xl xl:max-w-3xl">
            <Outlet />
          </div>
          
          {/* Right Sidebar Area (News + Graphs) */}
          <div className="hidden md:flex w-full md:w-[350px] lg:w-[450px] flex-shrink-0 flex-col gap-4 sticky top-20 h-[calc(100vh-100px)]">
            <NewsPanel />
            
            {/* Graphs Placeholder */}
            <div className="bg-white dark:bg-[#1e1e2d] rounded-lg border border-gray-200 dark:border-gray-800 p-4 transition-colors duration-200 flex-1 flex flex-col min-h-0">
              <h2 className="font-semibold text-base mb-4 flex-shrink-0 flex items-center justify-between text-gray-900 dark:text-gray-100 w-full text-left">
                Market Trends
                <span className="w-4 h-4 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded text-[10px] flex items-center justify-center font-bold">i</span>
              </h2>
              <div className="flex-grow flex items-center justify-center border-2 border-dashed border-gray-200 dark:border-gray-800 rounded-lg bg-gray-50 dark:bg-[#1a1a24] text-gray-400 dark:text-gray-500 text-sm">
                Graphs section coming soon...
              </div>
            </div>
          </div>
        </div>
      </main>
      <Chatbot />
    </div>
  );
};

export default MainLayout;
