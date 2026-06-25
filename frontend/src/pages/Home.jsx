import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';
import StockCard from '../components/StockCard';

const Home = () => {
  const dummyStocks = [
    { symbol: 'AAPL', name: 'Apple Inc.', price: 178.25, change: 1.25 },
    { symbol: 'MSFT', name: 'Microsoft Corp.', price: 335.02, change: -0.85 },
    { symbol: 'GOOGL', name: 'Alphabet Inc.', price: 138.40, change: 2.10 },
    { symbol: 'TSLA', name: 'Tesla Inc.', price: 245.50, change: -1.50 },
    { symbol: 'AMZN', name: 'Amazon.com Inc.', price: 140.20, change: 0.75 },
  ];

  return (
    <div className="space-y-6">
      <div className="bg-white rounded-lg border border-gray-200 p-4">
        <h1 className="text-xl font-bold text-gray-900 mb-4">Market Overview</h1>
        <div className="flex items-center space-x-4">
          <SearchBar />
          <Filter />
        </div>
      </div>
      
      <div className="space-y-4">
        {dummyStocks.map(stock => (
          <StockCard key={stock.symbol} stock={stock} />
        ))}
      </div>
    </div>
  );
};

export default Home;
