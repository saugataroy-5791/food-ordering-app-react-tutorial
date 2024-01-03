import { useSelector } from "react-redux";

const cartItems = useSelector((store) => store.cart.items);

const Cart = () => {
    return (
        <div className="cart min-h-[550px] p-4">
			<h2 className="cart-title text-2xl font-bold mb-5">Cart</h2>
            {cartItems.map((item) => {
                <div className="flex flex-col w-6/12" key={item?.name}>
                    <div className="flex justify-start pr-3 pt-3 pb-4">
                    <div className="image w-3/12 mr-4 relative">
                        {/* <img className="w-full h-auto rounded-md" src={item?.item_image_thumb_url ? item?.item_image_thumb_url : LOGO_URL} alt={item?.fb_slug} /> */}
                    </div>
                    <div className="content-text w-9/12 flex flex-col justify-start">
                        <p className="heading font-medium">{item?.name}</p>
                        <p className="price">Rs.{item?.price}</p>
                        <p className="description">{item?. desc}</p>
                    </div>
                    </div>
                </div>
            })}
        </div>
    )
}

export default Cart;