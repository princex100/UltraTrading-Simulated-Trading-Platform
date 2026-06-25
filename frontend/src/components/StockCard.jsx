const StockCard = ({ stock }) => {
  const isPositive = stock.change >= 0;

  return (
    <div className="bg-white rounded-lg border border-gray-200 p-4 flex items-center justify-between hover:shadow-sm transition-shadow">
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center font-bold text-gray-700">
          {stock.symbol[0]}
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">{stock.symbol}</h3>
          <p className="text-xs text-gray-500">{stock.name}</p>
        </div>
      </div>
      <div className="text-right">
        <p className="font-semibold text-gray-900">${stock.price.toFixed(2)}</p>
        <p className={`text-xs font-semibold ${isPositive ? 'text-green-600' : 'text-red-600'}`}>
          {isPositive ? '+' : ''}{stock.change.toFixed(2)}%
        </p>
      </div>
      <div className="ml-4">
        <button className="px-4 py-1.5 border border-blue-600 text-blue-600 font-semibold rounded-full hover:bg-blue-50 transition-colors text-sm">
          Details
        </button>
      </div>
    </div>
  );
};

export default StockCard;
