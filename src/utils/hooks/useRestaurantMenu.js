import { useState, useEffect } from "react";
import { BASE_URL, GET_RESTAURANT_MENU_PARAMS, TAIL_URL } from "../constants";

const useRestaurantMenu = (resDetails) => {
   const [restaurantData, setRestaurantData] = useState(null);

   useEffect(() => {
      fetchData();
   }, []);

   const fetchData = async () => {
      try {
         const fetchUrl = BASE_URL + resDetails + GET_RESTAURANT_MENU_PARAMS + TAIL_URL;
         const data = await fetch(fetchUrl);
         const jsonData = await data.json();
         setRestaurantData(jsonData?.page_data)
      } catch (error) {
         console.log(error);
      }
   }

   return restaurantData;
}

export default useRestaurantMenu;
