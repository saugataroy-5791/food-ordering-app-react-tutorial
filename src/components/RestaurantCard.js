import { Link } from "react-router-dom";
const RestaurantCard = (props) => {
   const { resData } = props;
   const clickUrl = resData?.cardAction?.clickUrl;
   const resDetails = clickUrl.split("/")[2];

   return (
      <Link to={"/restaurant/" + resDetails} className="restaurant-card">
         <div className="restaurant-container">
            <div className="res-image">
               <img src={resData?.info?.image?.url} alt="res-image" />
            </div>
            <div className="res-details">
               <div className="res-details-double-container">
                  <h4 className="name">{resData?.info?.name}</h4>
                  <h4 className="rating">{resData?.info?.ratingNew?.ratings?.DELIVERY?.rating}</h4>
               </div>
               <div className="res-details-double-container">
                  <div className="cuisine">
                     {resData?.info?.cuisine.reduce((accumulator, currentValue, currentIndex) => {
                        return accumulator + (currentIndex === 0 ? '' : ', ') + currentValue.name
                     }, " ")}
                  </div>
                  <div className="cft">{resData?.info?.cft?.text}</div>
               </div>
               <div className="res-details-double-container">
                  <div className="location">{resData?.info?.locality?.name}</div>
                  <div className="deliveryTime">
                     {resData?.order?.deliveryTime}
                  </div>
               </div>
            </div>
         </div>
      </Link>
   );
};

export default RestaurantCard;
