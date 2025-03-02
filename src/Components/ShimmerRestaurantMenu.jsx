const ShimmerRestaurantMenu = () => {
    return (
      <div className="max-w-4xl mx-auto p-6">
        {/* Restaurant Info Shimmer */}
        <div className="flex flex-col md:flex-row items-center bg-gray-200 animate-pulse shadow-lg rounded-xl p-6">
          <div className="w-40 h-40 bg-gray-300 rounded-lg"></div>
          <div className="ml-6 flex-1">
            <div className="h-6 bg-gray-300 rounded w-48 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-64 mb-2"></div>
            <div className="h-4 bg-gray-300 rounded w-40"></div>
          </div>
        </div>
  
        {/* Recommended Shimmer */}
        <div className="mt-6">
          <div className="h-6 bg-gray-300 rounded w-32 mb-2"></div>
          <div className="h-4 bg-gray-300 rounded w-20"></div>
        </div>
  
        {/* Dishes Shimmer */}
        <div className="mt-4 grid grid-cols-1 gap-4">
          {Array(5).fill(0).map((_, index) => (
            <div key={index} className="flex justify-between items-center bg-gray-200 animate-pulse p-4 rounded-lg">
              <div>
                <div className="h-5 bg-gray-300 rounded w-40 mb-2"></div>
                <div className="h-4 bg-gray-300 rounded w-20 mb-1"></div>
                <div className="h-3 bg-gray-300 rounded w-64"></div>
              </div>
              <div className="flex flex-col items-center">
                <div className="w-20 h-20 bg-gray-300 rounded-lg"></div>
                <div className="mt-2 h-6 w-16 bg-gray-300 rounded"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default ShimmerRestaurantMenu;