import RestrauntCard from "./RestrauntCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../Utils/Contants";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [resListState, setResListState] = useState([]); // Filtered list
  const [originalListState, setOriginalListState] = useState([]); // Full list backup

  const handleSearch = (event) => {
    const query = event.target.value;
    setSearchText(query);

    if (query === "") {
      setResListState(originalListState);
    } else {
      const filtered = originalListState.filter((restaurant) =>
        restaurant.info.name.toLowerCase().includes(query.toLowerCase())
      );
      setResListState(filtered);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.956924&lng=77.701127&collection=83639&page_type=DESKTOP_WEB_LISTING"
    );

    var jsonData = await data.json();
    var restaurantData =
      jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setResListState(restaurantData);
    setOriginalListState(restaurantData);
  };

  if (resListState.length === 0) {
    return (
      <>
        <div className="searchBarContainer" time="40" imagelogo={LOGO_URL}>
          <button className="filter-btn">All Restaurants</button>
          <input
            className="searchBar"
            placeholder="Search Here..."
            value={searchText}
            onChange={handleSearch}
          />
          <button className="filter-btn">High Rated Restaurants</button>
        </div>
        <div className="shimmer-container">
          <Shimmer />
        </div>
      </>
    );
  }

  return (
    <>
      <div className="bodyContainer" time="40" imagelogo={LOGO_URL}>
        <div className="searchBarContainer" time="40" imagelogo={LOGO_URL}>
          <button
            className="filter-btn"
            onClick={() => {
              setResListState(originalListState);
            }}
          >
            All Restaurants
          </button>
          <input
            className="searchBar"
            placeholder="Search Here..."
            value={searchText}
            onChange={handleSearch}
          />
          <button
            className="filter-btn"
            onClick={() => {
              let filteredRes = resListState.filter(
                (res) => res.info.avgRating > 4.5
              );
              setResListState(filteredRes);
            }}
          >
            High Rated Restaurants
          </button>
        </div>
        <div className="resCardContainer" time="40" imagelogo={LOGO_URL}>
          {resListState.map((data) => (
            <Link
              to={`/restaurants/${data.info.id}`}
              key={data.info.id}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <RestrauntCard resData={data} />
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Body;
