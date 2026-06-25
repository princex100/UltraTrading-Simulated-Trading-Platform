import { Outlet } from 'react-router-dom';

const AuthLayout = () => {
  return (
    <div className="min-h-screen bg-[#f3f2ef]">
      <Outlet />
    </div>
  );
};

export default AuthLayout;
