import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';
import StockCard from '../components/StockCard';
import { useState, useEffect } from 'react';
import { io } from 'socket.io-client';
import axiosInstance from '../services/axios';


const socket = io('http://localhost:8000', {
    withCredentials: true,
});


const Home = () => {

  const [stocks, setStocks] = useState([]);


  useEffect(() => {

     const fetchStocks = async () => {

        try {

            const res = await axiosInstance.get("/stocks");


            if (res.data?.data) {
                setStocks(res.data.data);
            } else {
                setStocks(res.data);
            }

        } catch (err) {

            console.log(err);

        }

    };


    fetchStocks();
    

    socket.on("stock", (data) => {
        setStocks(data);
    });


    return () => {
        socket.off("stock");
    };

  }, []);


  return (
    <div className="space-y-6">

      <div className="bg-white dark:bg-[#1e1e2d] rounded-lg border border-gray-200 dark:border-gray-800 p-4 transition-colors duration-200">
        
        <h1 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-4">Market Overview</h1>
        
        <div className="flex items-center space-x-4">
          <SearchBar />
          <Filter />
        </div>

      </div>
      
      <div className="space-y-4">

        {stocks.length > 0 ? (

          stocks.map(stock => (
            <StockCard key={stock._id} stock={stock} />
          ))

        ) : (

          <p className="text-gray-500 dark:text-gray-400 text-center py-4">Waiting for live market data...</p>
        
        )}

      </div>

    </div>
  );

};


export default Home;
