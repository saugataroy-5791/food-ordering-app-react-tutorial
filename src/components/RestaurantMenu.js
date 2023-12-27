import { useParams, useNavigate } from "react-router-dom";
import ShimmerRestaurantMenu from "../shimmer/ShimmerRestaurantMenu";
import useRestaurantMenu from "../utils/hooks/useRestaurantMenu";
import RestaurantMenuAccordion from "./RestaurantMenuAccordion";
import { useState } from "react";
import useDocumentTitle from "../utils/hooks/useDocumentTitle";

const RestaurantMenu = () => {

	const { resDetails } = useParams();
	const navigateBackToHome = useNavigate();
	const restaurantData = useRestaurantMenu(resDetails);
	useDocumentTitle(restaurantData?.sections?.SECTION_BASIC_INFO?.name);
	const [showIndex, setShowIndex] = useState(0);

	const onBackToHomeClicked = () => {
		navigateBackToHome("/", { replace: true });
	}

	return restaurantData === null ? <ShimmerRestaurantMenu /> : (
		<div className="min-h-[550px] restaurant-menu p-4">
			<button type="button" className="back-home-btn w-full bg-green-500 hover:bg-green-700 text-white p-2 mb-4 font-bold rounded" onClick={onBackToHomeClicked}>Back to Home</button>
			<div className="w-full flex justify-between">
				<div className="restaurant-menu-primary-details">
					<h2 className="restaurant-menu-name text-2xl font-bold mb-2">{restaurantData?.sections?.SECTION_BASIC_INFO?.name}</h2>
					<p className="cuisine text-base font-medium mb-2">{restaurantData?.sections?.SECTION_BASIC_INFO?.cuisine_string}</p>
				</div>
				<div className="restaurant-menu-secondary-details">
					<p className="location text-2xl font-bold mb-2">{restaurantData?.sections?.SECTION_RES_CONTACT?.locality_verbose}</p>
					<p className="timing text-base font-medium mb-2">{restaurantData?.sections?.SECTION_BASIC_INFO?.timing?.customised_timings?.opening_hours[0].days} : {restaurantData?.sections?.SECTION_BASIC_INFO?.timing?.customised_timings?.opening_hours[0].timing}</p>
				</div>
			</div>
			<hr />
			<h3 className="restaurant-menu-title text-xl font-semibold mb-4 underline">Menu</h3>
			<div className="menu-list w-[70%] my-3 mx-auto flex flex-col justify-between items-center">
				{restaurantData?.order?.menuList?.menus.map((menuList, index) => {
					return (
						<RestaurantMenuAccordion
							key={menuList?.menu?.id}
							menuList={menuList}
							showAccordion={index === showIndex ? true : false}
							updateShowIndex={() => setShowIndex(index)}
						/>
					)
				})}
			</div>
		</div >
	)
}

export default RestaurantMenu;
