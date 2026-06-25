const ProfileCard = () => {
  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden relative pb-4 text-center">
      <div className="h-14 bg-gray-200 w-full mb-8"></div>
      <div className="w-16 h-16 rounded-full bg-white border-2 border-white absolute top-6 left-1/2 -translate-x-1/2 flex items-center justify-center shadow-sm">
        <div className="w-[60px] h-[60px] rounded-full bg-gray-300"></div>
      </div>
      <h3 className="font-semibold text-gray-900 mt-2 px-4 hover:underline cursor-pointer">John Doe</h3>
      <p className="text-xs text-gray-500 mt-1 px-4">Paper Trader Pro</p>
      <div className="mt-4 pt-4 border-t border-gray-100 flex flex-col items-start px-4 space-y-2">
        <div className="w-full flex justify-between text-xs font-semibold">
          <span className="text-gray-500">Profile viewers</span>
          <span className="text-blue-600">42</span>
        </div>
        <div className="w-full flex justify-between text-xs font-semibold">
          <span className="text-gray-500">Connections</span>
          <span className="text-blue-600">500+</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
