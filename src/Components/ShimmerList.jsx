import ShimmerCard from "./ShimmerCard"

const ShimmerList = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {Array(8).fill(0).map((_, index) => (
        <ShimmerCard key={index} />
      ))}
    </div>
  );
};
export default ShimmerList