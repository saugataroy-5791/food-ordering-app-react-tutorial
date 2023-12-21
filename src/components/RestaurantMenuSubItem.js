import { LOGO_URL } from "../utils/constants";

const RestaurantMenuSubItem = (props) => {
   const { menuSubItemData } = props;
   const { item } = menuSubItemData;
   const { item_image_thumb_url, fb_slug, name, price, desc } = item;

   return (
      <div className="restaurant-menu-subitem">
         <div className="subitem-card">
            <div className="image"><img src={item_image_thumb_url ? item_image_thumb_url : LOGO_URL} alt={fb_slug} /></div>
            <div className="content-text">
               <p className="heading">{name}</p>
               <p className="price">Rs.{price}</p>
               <p className="description">{desc}</p>
            </div>
         </div>
      </div>
   )
}

export default RestaurantMenuSubItem;
