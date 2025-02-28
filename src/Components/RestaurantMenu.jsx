import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";

const RestaurantMenu = () => {
  const { resid } = useParams();

  const [resmenu, SetresMenu] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=12.956924&lng=77.701127&restaurantId=" +
        resid +
        "&catalog_qa=undefined&query=Biryani&submitAction=ENTER"
    );

    var jsonData = await data.json();
    var restaurantData = jsonData?.data?.cards[2]?.card?.card?.info;
    SetresMenu(restaurantData);
  };
  if (resmenu.length === 0) {
    return (
      <>
        <Navbar />
        <div className="shimmer-container">
          <Shimmer />
        </div>
      </>
    );
  }

  console.log(resmenu);

  return (
    <>
      <Navbar />
      <img
        className="resMenu-Logo"
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
          resmenu.cloudinaryImageId
        }
        alt="ResLogo"
      />
      <h1>{resmenu?.name}</h1>
      <h2>
        {resmenu?.cuisines?.length > 1
          ? resmenu?.cuisines.join(", ")
          : resmenu?.cuisines}
      </h2>
      <h3>{resmenu?.sla?.slaString}</h3>
      <h3>{resmenu?.costForTwoMessage}</h3>
      <span className={resmenu.avgRating >= 4.5 ? "Green" : "Red"}>
        ⭐ {resmenu?.avgRating}
      </span>
      <div>RestaurantMenu Page for Red id :{resid}</div>
    </>
  );
};

export default RestaurantMenu;
