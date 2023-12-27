import { useEffect, useState } from "react";
import RestaurantMenuSubItem from "./RestaurantMenuSubItem";


const RestaurantMenuAccordion = (props) => {
   const { menuList, showAccordion, updateShowIndex } = props;

   const toggleArrow = () => {
      updateShowIndex();
   }

   const calculateTotalNumberOfItems = (arr) => {
      let totalNumberOfItems = 0;
      arr.forEach((el) => {
         totalNumberOfItems += el?.category?.items?.length;
      });
      return totalNumberOfItems;
   }

   return (
      <div className="restaurant-menu-accordion w-full flex flex-col justify-between bg-gray-200 rounded p-4 my-2 cursor-pointer shadow-lg" onClick={toggleArrow}>
         <div className="flex justify-between items-center">
            <div className="text font-semibold">{menuList?.menu?.name} ({calculateTotalNumberOfItems(menuList?.menu?.categories)})</div>
            <div className="icon text-lg">{!showAccordion ? <span>&darr;</span> : <span>&uarr;</span>}</div>
         </div>
         {menuList?.menu?.categories.map((menuItem) => {
            return showAccordion && (<div className="menuitem-container" key={menuItem?.category?.id}>
               {menuItem?.category?.name ?
                  <p className="menuitem-name text-lg font-medium border-b-2 border-b-gray-400 border-dotted py-2">
                     {menuItem?.category?.name} ({menuItem?.category?.items?.length})
                  </p> :
                  null
               }
               <div className="menusubitem-container flex flex-wrap">
                  {menuItem?.category?.items.map((menuSubItem) => {
                     return <RestaurantMenuSubItem key={menuSubItem?.item?.id} menuSubItemData={menuSubItem} />
                  })}
               </div>
            </div>)
         })}
      </div>
   )
}

export default RestaurantMenuAccordion;
