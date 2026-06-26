import { useParams } from 'react-router-dom';

const Stock = () => {
  const { symbol } = useParams();

  return (
    <div className="bg-white dark:bg-[#1e1e2d] rounded-lg border border-gray-200 dark:border-gray-800 p-6 transition-colors duration-200">
      <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">Stock Details: {symbol?.toUpperCase()}</h1>
      <p className="text-gray-600 dark:text-gray-400 mb-6">Detailed view, charts, and trading options for {symbol?.toUpperCase()}.</p>
      {/* Placeholder for Chart and Order Book */}
    </div>
  );
};

export default Stock;
