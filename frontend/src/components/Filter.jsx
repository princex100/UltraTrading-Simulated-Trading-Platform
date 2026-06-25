import { Filter as FilterIcon } from 'lucide-react';

const Filter = () => {
  return (
    <button className="flex items-center space-x-2 px-4 py-2 border border-gray-200 rounded-md bg-white hover:bg-gray-50 text-gray-700 font-semibold text-sm transition-colors">
      <FilterIcon size={18} />
      <span>Filter</span>
    </button>
  );
};

export default Filter;
