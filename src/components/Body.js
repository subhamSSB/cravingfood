import Restaurantcard, { withPromotedLabel } from "./Restaurantcard";
import resList, { PROXY_URL, SWIGGY_API } from "../utils/mockData";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import UserContext from "../utils/UserContext";
import NoData from "./NoData";
import fetch from 'cross-fetch';
const Body = () => {
  const [listOfRestaurant, setListOfRestraunt] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);

  const [searchText, setSearchText] = useState("");

  const [currentView, setCurrentView] = useState("all"); // 'all' or 'topRated'

  const RestaurantPromoted = withPromotedLabel(Restaurantcard);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      PROXY_URL+   encodeURIComponent(SWIGGY_API)
    );

    const json = await data.json();
    console.log(json);
    setListOfRestraunt(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRestaurant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };
  const handleShowAllClick = () => {
    setFilteredRestaurant(listOfRestaurant);
    setCurrentView("all");
  };
  const { loggedInUser, setUserName } = useContext(UserContext);

  //conditional rendering
  //   if(listOfRestaurant.length === 0){
  //       console.log(true)
  //       return <Shimmer />;
  //   }
  console.log(listOfRestaurant)
  return listOfRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container md:container md:mx-auto">
      <div className="filter flex flex-wrap items-center">
        <div className="search m-4 flex">
          <input
            className="placeholder:italic placeholder:text-slate-400 block bg-white border w-full border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-green-500 focus:ring-green-500 focus:ring-1 sm:text-sm"
            placeholder="Search for any Restaurant.."
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="ml-2 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition duration-300 ease-in-out"
            onClick={() => {
              const filteredRes = listOfRestaurant.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filteredRes);
            }}
          >
            Search
          </button>
        </div>

        <div className="p-4 m-4 flex">
          {currentView === "all" && 
          <button
            className="px-6 py-3 bg-gray-800 text-white rounded-md hover:bg-gray-700 transition duration-300 ease-in-out"
            onClick={() => {
              const filtered = listOfRestaurant.filter(
                (res) => res.info.avgRating < 4
              );
              setFilteredRestaurant(filtered);
              setCurrentView("topRated");
            }}
          >
            Top Rated Restaurant
          </button>
          }
          {currentView === "topRated" && (
            <button
              className="px-6 py-3 bg-gray-200 text-gray-800 rounded-md hover:bg-gray-300 transition duration-300 ease-in-out"
              onClick={handleShowAllClick}
            >
              Show All
            </button>
          )}
        </div>

        <div className="p-2 m-6 flex items-center">
          <label className="mr-2 text-gray-700 font-semibold text-lg">
            User Name:
          </label>
          <input
            className="border border-gray-300 p-2 rounded-md focus:outline-none focus:border-green-500 focus:ring-green-500 focus:ring-1"
            value={loggedInUser}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
      </div>

      <div className={`res-container flex flex-wrap  ${currentView === "topRated"? 'justify-center':'justify-center'}`}>
        {filteredRestaurant.length == 0 ? (
          <NoData />
        ) : (
          filteredRestaurant.map((restaurant) => (
            <Link
              key={restaurant?.info.id}
              to={"/restaurants/" + restaurant?.info.id}
            >
              {restaurant?.info.promoted ? (
                <RestaurantPromoted resData={restaurant?.info} />
              ) : (
                <Restaurantcard resData={restaurant?.info} />
              )}
            </Link>
          ))
        )}
      </div>
    </div>
  );
};

export default Body;
