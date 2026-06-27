import { Outlet, Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../redux/themeSlice';
import { House } from 'lucide-react';


const AuthLayout = () => {

  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme?.theme || 'light');


  return (
    <div className="relative min-h-screen bg-[#f3f2ef] dark:bg-[#111111] text-gray-900 dark:text-gray-100 transition-colors duration-200 flex flex-col">
      
      <div className="absolute top-4 right-32 z-50">
        <Link 
          to="/" 
          className="flex items-center gap-2 text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-[#1e1e2d] py-2 px-4 rounded-full shadow-sm border border-gray-200 dark:border-gray-800 hover:bg-gray-50 dark:hover:bg-[#2a2a3b] transition-colors duration-200"
        >
          <House size={16} />
          Home
        </Link>
      </div>


      <div className="absolute top-4 right-8 z-50">
        <label className="flex items-center gap-2 cursor-pointer text-sm font-medium text-gray-700 dark:text-gray-300 bg-white dark:bg-[#1e1e2d] py-2 px-4 rounded-full shadow-sm border border-gray-200 dark:border-gray-800 transition-colors duration-200">
            <input 
                type="checkbox" 
                checked={theme === 'dark'} 
                onChange={() => dispatch(toggleTheme())} 
                className="cursor-pointer"
            />
            {theme === 'light' ? 'Light' : 'Dark'}
        </label>
      </div>


      <Outlet />

    </div>
  );
};

export default AuthLayout;
