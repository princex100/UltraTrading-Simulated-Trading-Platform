import { Outlet } from 'react-router-dom';
import Navbar from '../components/navbar/Navbar';
import Sidebar from '../components/sidebar/Sidebar';
import NewsPanel from '../components/NewsPanel';
import Chatbot from '../components/Chatbot';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#f3f2ef] dark:bg-[#111111] flex flex-col">
      <Navbar />
      <main className="flex-grow flex justify-center py-6 px-4 sm:px-6 lg:px-8 mx-auto w-full text-gray-900 dark:text-gray-100">
        <div className="flex flex-col md:flex-row w-full gap-6">
          <Sidebar />
          <div className="flex-grow min-w-0">
            <Outlet />
          </div>
          <NewsPanel />
        </div>
      </main>
      <Chatbot />
    </div>
  );
};

export default MainLayout;
