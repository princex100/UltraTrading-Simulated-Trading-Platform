import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import axiosInstance from "../services/axios";
import toast from "react-hot-toast";

const Watchlist = () => {

  const user = useSelector(state => state.user.user);

  const [watchlistArray,setWatchlistArray]=useState([]);

  useEffect(()=>{
    const fetchwatchlist=async()=>{

      try {
         const res=await axiosInstance.get("/watchlist")

         if(res && res.data && res.data.data){
          setWatchlistArray(res.data.data);
         }

         toast.success(res.data.message,{id:"watchlist-fetch-success"})
      } catch (error) {
        toast.error(error?.data?.message || "watchlist not found.");
        console.log(error);
      }
    }

    fetchwatchlist();
  },[])

  return (
    <div className="bg-white dark:bg-[#1e1e2d] rounded-lg border border-gray-200 dark:border-gray-800 p-6 transition-colors duration-200 min-h-[60vh]">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6">Your Watchlist</h1>
      
      {!user ? (
        <div className="flex flex-col items-center justify-center h-full py-16 space-y-4">
          <p className="text-gray-600 dark:text-gray-400 text-lg">You must be logged in to view your Watchlist.</p>
          <Link 
            to="/login" 
            className="px-8 py-3 bg-[#0a66c2] hover:bg-[#004182] text-white font-semibold rounded-lg transition-colors shadow-sm"
          >
            Sign in to continue
          </Link>
        </div>
      ) : (
        <div className="space-y-4">
          <p className="text-gray-600 dark:text-gray-400 mb-6">Keep an eye on your favorite stocks.</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {watchlistArray.map((item) => (
                <div key={item._id} className="p-4 border border-gray-200 dark:border-gray-700 rounded-lg">
                  <h3 className="font-bold text-gray-900 dark:text-gray-100">{item.symbol}</h3>
                  <p className="text-gray-500">Add your stock details here...</p>
                </div>
            ))}
          </div>

        </div>
      )}
    </div>
  );
};

export default Watchlist;
