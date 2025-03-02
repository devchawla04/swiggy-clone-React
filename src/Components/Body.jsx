import RestrauntCard from "./RestrauntCard";
import { useState, useEffect } from "react";
import ShimmerList from "./ShimmerList";
import { Link } from "react-router-dom";
import { LOGO_URL } from "../Utils/Contants";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [resListState, setResListState] = useState([]); // Filtered list
  const [originalListState, setOriginalListState] = useState([]); // Full list backup
  const [loading, setLoading] = useState(true); // Loading state

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
    try {
      setLoading(true);
      const response = await fetch(
        "https://food-ordering-server-wq4a.onrender.com/api/restaurants?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING"
      );

     
      const jsonData = await response.json();
      console.log(jsonData);

      const restaurantData =
        jsonData?.data?.cards?.find(
          (card) => card?.card?.card?.gridElements?.infoWithStyle?.restaurants
        )?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

      setResListState(restaurantData);
      setOriginalListState(restaurantData);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <>
        <div className="searchBarContainer">
          <button
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
            onClick={() => setResListState(originalListState)}
          >
            All Restaurants
          </button>
          <input
            type="text"
            className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 placeholder-gray-400 bg-white transition-all duration-300"
            placeholder="🔍 Search here..."
            value={searchText}
            onChange={handleSearch}
          />
          <button
            className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
            onClick={() => {
              let filteredRes = resListState.filter(
                (res) => res.info.avgRating > 4
              );
              setResListState(filteredRes);
            }}
          >
            High Rated Restaurants
          </button>
        </div>
        <ShimmerList />
      </>
    );
  }

  return (
    <div className="bodyContainer">
      <div className="searchBarContainer">
        <button
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
          onClick={() => setResListState(originalListState)}
        >
          All Restaurants
        </button>
        <input
          type="text"
          className="w-full max-w-md px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 placeholder-gray-400 bg-white transition-all duration-300"
          placeholder="🔍 Search here..."
          value={searchText}
          onChange={handleSearch}
        />
        <button
          className="px-6 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 transition-all duration-300"
          onClick={() => {
            let filteredRes = resListState.filter(
              (res) => res.info.avgRating > 4
            );
            setResListState(filteredRes);
          }}
        >
          High Rated Restaurants
        </button>
      </div>
      {resListState.length === 0 ? (
        <div className="flex items-center justify-center h-60">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-2">
              Sorry, we couldn't find any results for
            </h2>
            <p className="text-2xl text-blue-500 font-bold">"{searchText}"</p>
            <p className="text-gray-500 mt-2">
              Try searching for something else.
            </p>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
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
      )}
    </div>
  );
};

export default Body;
