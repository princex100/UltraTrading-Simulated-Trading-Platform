import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-[#f3f2ef] dark:bg-[#111111] text-gray-900 dark:text-gray-100">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
