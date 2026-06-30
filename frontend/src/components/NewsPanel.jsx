import { useState, useEffect } from 'react';
import axiosInstance from '../services/axios';

const NewsPanel = () => {
  const [newsItems, setNewsItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axiosInstance.get('/news/market');
        if (response.data.success) {
          setNewsItems(response.data.data);
        }
      } catch (err) {
        console.error("Failed to fetch news", err);
        setError("Failed to load news");
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  return (
    <div className="w-full md:w-[300px] flex-shrink-0">
      <div className="bg-white dark:bg-[#1e1e2d] rounded-lg border border-gray-200 dark:border-gray-800 p-4 sticky top-20 transition-colors duration-200">
        <h2 className="font-semibold text-base mb-4 flex items-center justify-between text-gray-900 dark:text-gray-100">
          Live Market News
          <span className="w-4 h-4 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded text-[10px] flex items-center justify-center font-bold">i</span>
        </h2>
        
        {loading ? (
          <div className="flex justify-center items-center py-4">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
          </div>
        ) : error ? (
          <p className="text-red-500 text-sm text-center py-2">{error}</p>
        ) : (
          <ul className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
            {newsItems.map((item, idx) => (
              <li key={idx} className="group border-b border-gray-100 dark:border-gray-800 pb-3 last:border-0">
                <a href={item.url} target="_blank" rel="noopener noreferrer" className="block">
                  <h3 className="text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 group-hover:underline line-clamp-2">
                    {item.headline}
                  </h3>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mt-2 flex items-center justify-between">
                    <span>{item.source}</span>
                    <span>{new Date(item.datetime * 1000).toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'})}</span>
                  </div>
                </a>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default NewsPanel;
