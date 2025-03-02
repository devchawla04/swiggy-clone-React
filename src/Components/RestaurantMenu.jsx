import Navbar from "./Navbar";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useCart } from "../Utils/CartContext";
import ShimmerRestaurantMenu from "./ShimmerRestaurantMenu";

const RestaurantMenu = () => {
  const { resid } = useParams();

  const [resmenu, SetresMenu] = useState([]);
  const [resDishes, SetresDishes] = useState([]);
  const [resDishes2, SetresDishes2] = useState([]);
  const { addToCart } = useCart();
  const [clickedItem, setClickedItem] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `https://food-ordering-server-wq4a.onrender.com/api/menu?page-type=REGULAR_MENU&complete-menu=true&lat=12.956924&lng=77.701127&restaurantId=514729&catalog_qa=undefined&query=Biryani&submitAction=ENTER`
    );

    const jsonData = await data.json();

    const restaurantData = jsonData?.data?.cards[2]?.card?.card?.info;
    const resDishes =
      jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[3]
        ?.card?.card;

    const resDishes2 =
      jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[4]
        ?.card?.card;

    SetresMenu(restaurantData);
    SetresDishes(resDishes);
    SetresDishes2(resDishes2);
  };
  // console.log(resmenu);
  // console.log(resDishes);

  if (resmenu.length === 0) {
    return (
      <>
        <Navbar />
        <ShimmerRestaurantMenu />
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6">
        <div className="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-xl p-6">
          <img
            className="w-40 h-40 rounded-lg object-cover"
            src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${resmenu.cloudinaryImageId}`}
            alt="ResLogo"
          />
          <div className="ml-6">
            <h1 className="text-2xl font-bold text-gray-800">
              {resmenu?.name}
            </h1>
            <h2 className="text-gray-600">{resmenu?.cuisines?.join(", ")}</h2>
            <div className="flex items-center gap-2 mt-2 text-sm text-gray-600">
              <span
                className={
                  resmenu.avgRating >= 4
                    ? "text-green-600 font-bold"
                    : "text-red-600 font-bold"
                }
              >
                ⭐ {resmenu?.avgRating}
              </span>
              <span>|</span>
              <h3>{resmenu?.sla?.slaString}</h3>
              <span>|</span>
              <h3>{resmenu?.costForTwoMessage}</h3>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <h4 className="text-xl font-semibold">Recommended</h4>
          <h5 className="text-gray-500">
            {resDishes?.itemCards?.length} ITEMS
          </h5>
        </div>

        <div className="mt-4 grid grid-cols-1 gap-4">
          {resDishes?.itemCards?.length > 0
            ? resDishes?.itemCards?.map((dish, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg"
                >
                  <div>
                    <h5 className="text-lg font-medium">
                      {dish?.card?.info?.name}
                    </h5>
                    <h5 className="text-green-700 font-semibold">
                      ₹{" "}
                      {dish?.card?.info?.price / 100 ||
                        dish?.card?.info?.defaultPrice / 100 ||
                        dish?.card?.info?.finalPrice / 100}
                    </h5>
                    <p className="text-sm text-gray-500">
                      {dish?.card?.info?.description}
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      className="w-20 h-20 object-cover rounded-lg"
                      src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${dish?.card?.info?.imageId}`}
                      alt={dish?.card?.info?.name}
                    />
                    <button
                      className={`px-4 py-1 text-white rounded-lg ${
                        clickedItem === dish?.card?.info?.id
                          ? "bg-green-500"
                          : "bg-blue-500 hover:bg-blue-600"
                      }`}
                      onClick={() => {
                        const cartItem = {
                          id: dish?.card?.info?.id,
                          name: dish?.card?.info?.name,
                          price:
                            dish?.card?.info?.price / 100 ||
                            dish?.card?.info?.defaultPrice / 100,
                        };

                        console.log("Adding to Cart:", cartItem); // Log item
                        addToCart(cartItem);

                        setClickedItem(dish?.card?.info?.id);
                        setTimeout(() => setClickedItem(null), 1000); // Reset color after 1s
                      }}
                    >
                      {clickedItem === dish?.card?.info?.id
                        ? "Added ✔"
                        : "Add +"}
                    </button>
                  </div>
                </div>
              ))
            : resDishes2?.itemCards?.map((dish, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg"
                >
                  <div>
                    <h5 className="text-lg font-medium">
                      {dish?.card?.info?.name}
                    </h5>
                    <h5 className="text-green-700 font-semibold">
                      ₹{" "}
                      {dish?.card?.info?.price / 100 ||
                        dish?.card?.info?.defaultPrice / 100 ||
                        dish?.card?.info?.finalPrice / 100}
                    </h5>
                    <p className="text-sm text-gray-500">
                      {dish?.card?.info?.description}
                    </p>
                  </div>
                  <div className="flex flex-col items-center">
                    <img
                      className="w-20 h-20 object-cover rounded-lg"
                      src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${dish?.card?.info?.imageId}`}
                      alt={dish?.card?.info?.name}
                    />
                    <button
                      className={`px-4 py-1 text-white rounded-lg ${
                        clickedItem === dish?.card?.info?.id
                          ? "bg-green-500"
                          : "bg-blue-500 hover:bg-blue-600"
                      }`}
                      onClick={() => {
                        const cartItem = {
                          id: dish?.card?.info?.id,
                          name: dish?.card?.info?.name,
                          price:
                            dish?.card?.info?.price / 100 ||
                            dish?.card?.info?.defaultPrice / 100,
                        };

                        console.log("Adding to Cart:", cartItem); // Log item
                        addToCart(cartItem);

                        setClickedItem(dish?.card?.info?.id);
                        setTimeout(() => setClickedItem(null), 1000); // Reset color after 1s
                      }}
                    >
                      {clickedItem === dish?.card?.info?.id
                        ? "Added ✔"
                        : "Add +"}
                    </button>
                  </div>
                </div>
              ))}
        </div>
      </div>
    </>
  );
};

export default RestaurantMenu;
