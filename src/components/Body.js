import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Search from "./Search";
import { BASE_URL, GET_RESTAURANTS_PARAMS, TAIL_URL } from "../utils/constants";
import ShimmerRestaurantCard from "./ShimmerRestaurantCard";

const Body = () => {
   const [listOfRestaurants, setListOfRestaurants] = useState([]);
   const [filteredRestaurants, setFilteredRestaurants] = useState([]);
   const [searchText, setSearchText] = useState("");

   useEffect(() => {
      fetchData();
   }, []);

   const fetchData = async () => {
      try {
         const data = await fetch(BASE_URL + GET_RESTAURANTS_PARAMS + TAIL_URL);
         const jsonData = await data.json();
         setListOfRestaurants(jsonData?.page_data?.sections?.SECTION_SEARCH_RESULT);
         setFilteredRestaurants(jsonData?.page_data?.sections?.SECTION_SEARCH_RESULT);
      } catch (error) {
         console.log(error);
      }
   }

   const onTopRatedBtnClicked = () => {
      const topRatedRestaurants = listOfRestaurants.filter((restaurant) => {
         return Number(restaurant?.info?.ratingNew?.ratings?.DELIVERY?.rating) > 4;
      })
      setFilteredRestaurants(topRatedRestaurants);
   };

   const onResetBtnClicked = () => {
      setSearchText("");
      setFilteredRestaurants(listOfRestaurants);
   }

   const onSearchTextChanged = (event) => {
      setSearchText(event.target.value)
   }

   const onSearchButtonClicked = () => {
      if (searchText && searchText !== "") {
         const searchData = listOfRestaurants.filter((restaurant) => {
            return restaurant?.info?.name.toLowerCase().includes(searchText.toLowerCase())
         });
         setSearchText("");
         setFilteredRestaurants(searchData);
      } else {
         return false;
      }
   }

   return listOfRestaurants.length === 0 ? (<ShimmerRestaurantCard />) : (
      <div className="body">
         <Search searchText={searchText} onSearchTextChanged={onSearchTextChanged} onSearchButtonClicked={onSearchButtonClicked} />
         <div className="filter">
            <button type="button" onClick={onTopRatedBtnClicked}>Top rated restaurants</button>
            <button type="button" onClick={onResetBtnClicked}>Reset</button>
         </div>
         <div className="restaurants">
            {filteredRestaurants.map((restaurant) => (
               <RestaurantCard key={restaurant?.info?.resId} resData={restaurant} />
            ))}
         </div>
      </div>
   );
};

export default Body;
