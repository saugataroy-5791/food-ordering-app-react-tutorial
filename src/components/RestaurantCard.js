import { Link } from "react-router-dom";
const RestaurantCard = (props) => {
   const { resData } = props;
   // const clickUrl = resData?.cardAction?.clickUrl;
   // const resDetails = clickUrl.split("/")[2];

   return (
      <div className="restaurant-card no-underline text-black flex mr-4 mb-4 text-sm">
         <div className="restaurant-container flex justify-between flex-col w-[250px] h-[300px] bg-restaurant-card border rounded-md">
            <div className="res-image">
               <img src={resData?.info?.image?.url} alt="res-image" className="w-full h-[180px] rounded-t-md" />
            </div>
            <div className="res-details p-2">
               <div className="res-details-double-container flex justify-between items-center py-2">
                  <h4 className="name max-w-[150px] truncate">{resData?.info?.name}</h4>
                  <h4 className="rating flex items-center justify-between w-[40px] bg-green-600 px-1 rounded-md text-white text-sm font-semibold">
                     <div>{resData?.info?.ratingNew?.ratings?.DELIVERY?.rating}</div>
                     <div>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="#FFFFFF" width="0.6rem" height="0.6rem" viewBox="0 0 20 20" aria-labelledby="icon-svg-title- icon-svg-desc-" role="img"><title>star-fill</title><path d="M6.76 6.8l-6.38 0.96c-0.22 0.040-0.38 0.22-0.38 0.44 0 0.12 0.040 0.24 0.12 0.32v0l4.64 4.76-1.1 6.66c0 0.020 0 0.040 0 0.080 0 0.24 0.2 0.44 0.44 0.44 0.1 0 0.16-0.020 0.24-0.060v0l5.7-3.12 5.68 3.12c0.060 0.040 0.14 0.060 0.22 0.060 0.24 0 0.44-0.2 0.44-0.44 0-0.040 0-0.060 0-0.080v0l-1.1-6.66 4.64-4.76c0.080-0.080 0.12-0.2 0.12-0.32 0-0.22-0.16-0.4-0.36-0.44h-0.020l-6.38-0.96-2.96-6.18c-0.060-0.12-0.18-0.2-0.32-0.2s-0.26 0.080-0.32 0.2v0z"></path></svg>
                     </div>
                  </h4>
               </div>
               <div className="res-details-double-container flex justify-between items-center py-2">
                  <div className="cuisine max-w-[120px] truncate">
                     {resData?.info?.cuisine.reduce((accumulator, currentValue, currentIndex) => {
                        return accumulator + (currentIndex === 0 ? '' : ', ') + currentValue.name
                     }, " ")}
                  </div>
                  <div className="cft">{resData?.info?.cft?.text}</div>
               </div>
               <div className="res-details-double-container flex justify-between items-center py-2">
                  <div className="location max-w-[150px] truncate">{resData?.info?.locality?.name}</div>
                  <div className="deliveryTime">
                     {resData?.order?.deliveryTime}
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};


export const PromotedRestaurantCard = (RestaurantCard) => {
   return (props) => {
      return (
         <div className="promoted-restaurant-card">
            <label className="absolute bg-black text-xs text-white rounded-lg p-2 opacity-50 m-2">Promoted</label>
            <RestaurantCard {...props} />
         </div>
      )
   }
}

export default RestaurantCard;
