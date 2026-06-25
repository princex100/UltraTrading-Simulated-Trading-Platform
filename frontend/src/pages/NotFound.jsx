import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <div className="min-h-[50vh] flex flex-col items-center justify-center bg-white rounded-lg border border-gray-200 p-6">
      <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
      <p className="text-lg text-gray-600 mb-8">Page not found</p>
      <Link to="/" className="px-6 py-2 bg-[#0a66c2] text-white font-semibold rounded-full hover:bg-[#004182] transition-colors">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
