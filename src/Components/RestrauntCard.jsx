const RestrauntCard = (props) => {
  const { resData } = props;

  const {
    cloudinaryImageId,
    name,
    cuisines,
    avgRating,
    costForTwoString,
    deliveryTime,
  } = resData?.data;

  return (
    <>
      <div className="resCard">
        <img
          className="resLogo"
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
            cloudinaryImageId
          }
          alt="ResLogo"
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating + " ⭐"}</h4>
        <h4>{costForTwoString} </h4>
        <h4>{deliveryTime} Minutes</h4>
      </div>
    </>
  );
};
export default RestrauntCard;
