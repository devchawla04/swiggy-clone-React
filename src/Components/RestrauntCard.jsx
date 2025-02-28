const RestrauntCard = (props) => {
  const { resData } = props;

  const { cloudinaryImageId, name, cuisines, avgRating, costForTwo } =
    resData?.info;

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
        <span className={avgRating >= 4.5 ? "Green" : "Red"}>
          {avgRating + " ⭐"}
        </span>
        <h4>{costForTwo} </h4>
        <h4>Delivery Time:- {resData?.info?.sla?.slaString}</h4>
      </div>
    </>
  );
};
export default RestrauntCard;
