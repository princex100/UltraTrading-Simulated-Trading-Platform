const NewsPanel = () => {
  const newsItems = [
    { title: 'Tech stocks rally amid AI hopes', time: '1h ago', readers: '10,432' },
    { title: 'Fed keeps interest rates steady', time: '3h ago', readers: '8,192' },
    { title: 'Crypto market shows signs of recovery', time: '5h ago', readers: '5,021' },
    { title: 'New IPO breaks records on day one', time: '7h ago', readers: '4,890' },
    { title: 'Oil prices drop slightly', time: '12h ago', readers: '3,210' },
  ];

  return (
    <div className="w-full md:w-[300px] flex-shrink-0">
      <div className="bg-white rounded-lg border border-gray-200 p-4 sticky top-20">
        <h2 className="font-semibold text-base mb-4 flex items-center justify-between">
          Market News
          <span className="w-4 h-4 bg-blue-100 text-blue-700 rounded text-[10px] flex items-center justify-center font-bold">i</span>
        </h2>
        <ul className="space-y-4">
          {newsItems.map((item, idx) => (
            <li key={idx} className="cursor-pointer group">
              <h3 className="text-sm font-semibold text-gray-800 group-hover:text-blue-600 group-hover:underline flex items-start">
                <span className="mr-2 text-gray-500">•</span>
                {item.title}
              </h3>
              <div className="text-xs text-gray-500 mt-1 ml-3 flex items-center space-x-2">
                <span>{item.time}</span>
                <span>•</span>
                <span>{item.readers} readers</span>
              </div>
            </li>
          ))}
        </ul>
        <button className="text-sm text-gray-500 hover:text-gray-800 hover:bg-gray-100 mt-4 px-2 py-1 rounded font-semibold w-full text-left transition-colors flex items-center">
          Show more <span className="ml-1">▼</span>
        </button>
      </div>
    </div>
  );
};

export default NewsPanel;
