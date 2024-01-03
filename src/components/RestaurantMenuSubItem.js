import { useDispatch } from "react-redux";
import { LOGO_URL } from "../utils/constants";
import { addToCart } from "../utils/store/cartSlice";

const RestaurantMenuSubItem = (props) => {
   const { menuSubItemData } = props;
   const { item } = menuSubItemData;
   const { item_image_thumb_url, fb_slug, name, price, desc } = item;
   const dispatch = useDispatch();

   const onAddClicked = () => {
      dispatch(addToCart(item));
   }

   return (
      <div className="restaurant-menu-subitem flex flex-col w-6/12">
         <div className="subitem-card flex justify-start pr-3 pt-3 pb-4">
            <div className="image w-3/12 mr-4 relative">
               <img className="w-full h-auto rounded-md" src={item_image_thumb_url ? item_image_thumb_url : LOGO_URL} alt={fb_slug} />
               <button type="button" className="absolute top-[55px] left-[20px] text-black bg-gray-300 hover:bg-gray-800 hover:text-white text-xs p-1 font-bold rounded" onClick={onAddClicked}>Add +</button>
            </div>
            <div className="content-text w-9/12 flex flex-col justify-start">
               <p className="heading font-medium">{name}</p>
               <p className="price">Rs.{price}</p>
               <p className="description">{desc}</p>
            </div>
         </div>
      </div>
   )
}

export default RestaurantMenuSubItem;
