import { useParams } from 'react-router-dom';

const Stock = () => {
  const { symbol } = useParams();

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-6">
      <h1 className="text-2xl font-bold text-gray-900 mb-2">Stock Details: {symbol?.toUpperCase()}</h1>
      <p className="text-gray-600 mb-6">Detailed view, charts, and trading options for {symbol?.toUpperCase()}.</p>
      {/* Placeholder for Chart and Order Book */}
    </div>
  );
};

export default Stock;
