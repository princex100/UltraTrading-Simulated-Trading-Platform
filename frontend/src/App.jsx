import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';


// Layouts
import MainLayout from './layouts/MainLayout';
import AuthLayout from './layouts/AuthLayout';


// Pages
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import Portfolio from './pages/Portfolio';
import Transactions from './pages/Transactions';
import Watchlist from './pages/Watchlist';
import Stock from './pages/Stock';
import About from './pages/About';
import Docs from './pages/Docs';
import NotFound from './pages/NotFound';


import Notification from './components/Notification';


import axiosInstance from './services/axios';
import { setUser, logout } from './redux/userSlice';


function App() {

  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme?.theme || 'light');

  const [isCheckingAuth, setIsCheckingAuth] = useState(true);


  useEffect(() => {

    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }

  }, [theme]);


  useEffect(() => {

    const fetchCurrentUser = async () => {

      try {

        const response = await axiosInstance.get('/users/current-user');
        const responseData = response.data;


        if (responseData.success) {
          dispatch(setUser(responseData.data));
        }

      } catch (error) {

        dispatch(logout());
        console.error(error);

      } finally {

        setIsCheckingAuth(false);

      }

    };


    fetchCurrentUser();

  }, [dispatch]);


  if (isCheckingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#f3f2ef] dark:bg-[#111111] text-gray-900 dark:text-gray-100 transition-colors duration-200">
        <p className="text-lg font-medium">Loading......</p>
      </div>
    );
  }


  return (
    <>
      <Notification />
      <Routes>

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>


        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/watchlist" element={<Watchlist />} />
          <Route path="/transactions" element={<Transactions />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/stock/:symbol" element={<Stock />} />
          <Route path="/about" element={<About />} />
          <Route path="/docs" element={<Docs />} />

          {/* Catch all */}
          <Route path="*" element={<NotFound />} />
        </Route>

      </Routes>
    </>
  );
}

export default App;
