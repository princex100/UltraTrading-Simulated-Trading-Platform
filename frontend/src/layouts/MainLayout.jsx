import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import Sidebar from '../components/Sidebar';
import NewsPanel from '../components/NewsPanel';

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-[#f3f2ef] flex flex-col">
      <Navbar />
      <main className="flex-grow flex justify-center py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col md:flex-row w-full gap-6">
          <Sidebar />
          <div className="flex-grow min-w-0">
            <Outlet />
          </div>
          <NewsPanel />
        </div>
      </main>
    </div>
  );
};

export default MainLayout;
