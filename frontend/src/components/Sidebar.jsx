import { NavLink } from 'react-router-dom';
import ProfileCard from './ProfileCard';
import { LayoutDashboard, Briefcase, List, Eye, ArrowLeftRight, Wallet, Settings } from 'lucide-react';

const Sidebar = () => {
  const navItems = [
    { name: 'Dashboard', path: '/', icon: LayoutDashboard },
    { name: 'Portfolio', path: '/portfolio', icon: Briefcase },
    { name: 'Holdings', path: '/holdings', icon: List },
    { name: 'Watchlist', path: '/watchlist', icon: Eye },
    { name: 'Transactions', path: '/transactions', icon: ArrowLeftRight },
    { name: 'Wallet', path: '/wallet', icon: Wallet },
    { name: 'Settings', path: '/settings', icon: Settings },
  ];

  return (
    <div className="w-full md:w-[225px] flex-shrink-0 space-y-4">
      <ProfileCard />
      <div className="bg-white rounded-lg border border-gray-200 overflow-hidden sticky top-20">
        <nav className="flex flex-col py-2">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={({ isActive }) =>
                `flex items-center space-x-3 px-4 py-3 text-sm font-semibold transition-colors ${
                  isActive ? 'bg-blue-50 text-blue-700 border-l-4 border-blue-700' : 'text-gray-600 hover:bg-gray-100 border-l-4 border-transparent'
                }`
              }
            >
              <item.icon size={20} />
              <span>{item.name}</span>
            </NavLink>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
