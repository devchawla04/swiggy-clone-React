const RestrauntCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;

  return (
    <>
      <div className="w-72 h-100 bg-white rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl p-4 flex flex-col">
        <img
          className="w-full h-40 object-cover rounded-t-lg"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
          alt="ResLogo"
        />
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
          <h4 className="text-gray-600 text-sm flex-grow">
            {cuisines.join(", ")}
          </h4>
          <span
            className={`inline-block px-3 py-1 mt-2 text-sm font-semibold text-white rounded-full ${
              avgRating >= 4 ? "bg-green-500" : "bg-red-500"
            }`}
          >
            {avgRating} ⭐
          </span>
          <h4 className="text-gray-700 mt-2 font-medium">{costForTwo}</h4>
          <h4 className="text-gray-500 text-sm">
            Delivery Time: {resData?.info?.sla?.slaString}
          </h4>
        </div>
      </div>
    </>
  );
};
export default RestrauntCard;
