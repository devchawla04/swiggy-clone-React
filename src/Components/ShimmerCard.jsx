const ShimmerCard = () => {
    return (
      <div className="w-72 h-96 bg-gray-200 rounded-xl shadow-lg overflow-hidden p-4 animate-pulse">
        <div className="w-full h-40 bg-gray-300 rounded-lg"></div>
        <div className="p-4">
          <div className="h-5 w-3/4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 w-1/2 bg-gray-300 rounded mb-4"></div>
          <div className="h-5 w-1/4 bg-gray-300 rounded mb-2"></div>
          <div className="h-4 w-2/3 bg-gray-300 rounded"></div>
        </div>
      </div>
    );
  };
  export default ShimmerCard;
  