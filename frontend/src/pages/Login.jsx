import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axiosInstance from '../services/axios';
import { setUser } from '../redux/userSlice';


const Login = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e) => {
    
    e.preventDefault();

    setError(null);
    setLoading(true);

    const data = { email, password };


    try {

      const response = await axiosInstance.post("/users/login", data);


      if (response.data) {
        
        // Usually you extract the user from response.data.data.user
        dispatch(setUser(response.data.data?.user || response.data));

        // You might need to set localStorage here if not handled in interceptors
        if (response.data.data?.accessToken) {
            localStorage.setItem('accessToken', response.data.data.accessToken);
        }

      }

      navigate('/home');


    } catch (error) {

      setError(error.response?.data?.message || "An error occurred during login.");

    } finally {

      setLoading(false);

    }

  };


  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-[#1e1e2d] p-8 rounded-lg shadow-sm border border-gray-200 dark:border-gray-800 transition-colors duration-200">
        
        <div>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-[#0a66c2] dark:text-blue-500">
            Ultra Trading
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            Sign in to your account
          </p>
        </div>


        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-md text-sm text-center">
            {error}
          </div>
        )}


        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          
          <div className="rounded-md shadow-sm space-y-4">
            
            <div>
              <input
                id="email-address"
                name="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 bg-white dark:bg-[#2b2b40] rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors duration-200"
                placeholder="Email address"
              />
            </div>
            
            <div>
              <input
                id="password"
                name="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="appearance-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-700 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-gray-100 bg-white dark:bg-[#2b2b40] rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm transition-colors duration-200"
                placeholder="Password"
              />
            </div>

          </div>


          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-full text-white bg-[#0a66c2] hover:bg-[#004182] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {loading ? "Signing in..." : "Sign in"}
            </button>
          </div>

        </form>


        <div className="text-center mt-4">
          <p className="text-sm text-gray-600 dark:text-gray-400">
            New to Ultra Trading?{' '}
            <Link to="/register" className="font-medium text-[#0a66c2] dark:text-blue-500 hover:underline">
              Join now
            </Link>
          </p>
        </div>

      </div>

    </div>
  );

};


export default Login;
