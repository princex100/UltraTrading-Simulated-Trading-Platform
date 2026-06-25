import { Bell, HelpCircle, LogOut, User } from 'lucide-react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-white border-b border-gray-200 sticky top-0 z-50 px-4 h-14 flex items-center justify-between">
      <div className="flex items-center space-x-6">
        <Link to="/" className="text-[#0a66c2] font-bold text-2xl tracking-tighter">PaperTrade</Link>
        <div className="hidden md:flex space-x-4">
          <Link to="/" className="text-gray-600 hover:text-black flex flex-col items-center">
            <span className="text-xs font-medium">Home</span>
          </Link>
          <Link to="/about" className="text-gray-600 hover:text-black flex flex-col items-center">
            <span className="text-xs font-medium">About</span>
          </Link>
          <Link to="/docs" className="text-gray-600 hover:text-black flex flex-col items-center">
            <span className="text-xs font-medium">Docs</span>
          </Link>
        </div>
      </div>
      <div className="flex items-center space-x-6">
        <button className="text-gray-600 hover:text-black flex flex-col items-center relative">
          <Bell size={24} />
          <span className="text-[10px] hidden md:block">Notifications</span>
        </button>
        <div className="relative group cursor-pointer text-gray-600 hover:text-black flex flex-col items-center">
          <User size={24} />
          <span className="text-[10px] hidden md:block">Me ▼</span>
          <div className="absolute right-0 top-full mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg hidden group-hover:block">
            <div className="py-1">
              <Link to="/profile" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Profile</Link>
              <Link to="/docs" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Help</Link>
              <button className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Logout</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
