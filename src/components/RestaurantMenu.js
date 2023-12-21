import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import ShimmerRestaurantMenu from "./ShimmerRestaurantMenu";
import RestaurantMenuSubItem from "./RestaurantMenuSubItem";
import { BASE_URL, GET_RESTAURANT_MENU_PARAMS, TAIL_URL } from "../utils/constants";

const RestaurantMenu = () => {
   const [restaurantData, setRestaurantData] = useState(null);
   const { resDetails } = useParams();
   const navigateBackToHome = useNavigate();

   useEffect(() => {
      fetchData();
   }, []);

   const fetchData = async () => {
      // const resName = "imperial-restaurant-since-1954";
      // const resLocation = "residency-road-bangalore";
      try {
         const fetchUrl = BASE_URL + resDetails + GET_RESTAURANT_MENU_PARAMS + TAIL_URL;
         const data = await fetch(fetchUrl);
         const jsonData = await data.json();
         setRestaurantData(jsonData?.page_data)
      } catch (error) {
         console.log(error);
      }
   }

   const onBackToHomeClicked = () => {
      navigateBackToHome("/", { replace: true });
   }

   return restaurantData === null ? <ShimmerRestaurantMenu /> : (
      <div className="restaurant-menu">
         <button type="button" className="back-home-btn" onClick={onBackToHomeClicked}>Back to Home</button>
         <h2 className="restaurant-menu-name">{restaurantData?.sections?.SECTION_BASIC_INFO?.name}</h2>
         <p className="cuisine">{restaurantData?.sections?.SECTION_BASIC_INFO?.cuisine_string}</p>
         <p className="location">{restaurantData?.sections?.SECTION_RES_CONTACT?.locality_verbose}</p>
         <p className="timing">{restaurantData?.sections?.SECTION_BASIC_INFO?.timing?.customised_timings?.opening_hours[0].days} : {restaurantData?.sections?.SECTION_BASIC_INFO?.timing?.customised_timings?.opening_hours[0].timing}</p>
         <h3 className="restaurant-menu-title">Menu</h3>

         <div className="menu-list">
            {restaurantData?.order?.menuList?.menus.map((menuList) => {
               return <div className="menulist-container" key={menuList?.menu?.id}>
                  <p className="menulist-name">{menuList?.menu?.name} ({menuList?.menu?.categories?.length})</p>
                  {menuList?.menu?.categories.map((menuItem) => {
                     return <div className="menuitem-container" key={menuItem?.category?.id}>
                        <p className="menuitem-name">{menuItem?.category?.name}</p>
                        <div className="menusubitem-container">
                           {menuItem?.category?.items.map((menuSubItem) => {
                              return <RestaurantMenuSubItem key={menuSubItem?.item?.id} menuSubItemData={menuSubItem} />
                           })}
                        </div>
                     </div>
                  })}
               </div>
            })}
         </div>
      </div >
   )
}

export default RestaurantMenu;
