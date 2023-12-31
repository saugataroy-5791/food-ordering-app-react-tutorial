import { useEffect, useState, useContext } from "react";
import RestaurantCard, { PromotedRestaurantCard, PromotedRestaurantCard } from "./RestaurantCard";
import Search from "./Search";
import { BASE_URL, GET_RESTAURANTS_PARAMS, TAIL_URL } from "../utils/constants";
import ShimmerRestaurantCard from "../shimmer/ShimmerRestaurantCard";
import Filter from "./Filter";
import { Link } from "react-router-dom";
import useDocumentTitle from "../utils/hooks/useDocumentTitle";
import UserContext from "../utils/context/UserContext";

const Body = () => {
	useDocumentTitle();
	const [listOfRestaurants, setListOfRestaurants] = useState([]);
	const [filteredRestaurants, setFilteredRestaurants] = useState([]);
	const [searchText, setSearchText] = useState("");
	const { loggedInUser, isLoggedIn } = useContext(UserContext);

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
			setFilteredRestaurants(searchData.length > 0 ? searchData : []);
		} else {
			return false;
		}
	}



	const RestaurantCardPromoted = PromotedRestaurantCard(RestaurantCard);

	return listOfRestaurants.length === 0 ? (<ShimmerRestaurantCard />) : (
		<div className="body min-h-[550px] flex flex-wrap flex-col p-4">
			<div className="top-container flex mb-3 ">
				<Search searchText={searchText} onSearchTextChanged={onSearchTextChanged} onSearchButtonClicked={onSearchButtonClicked} />
				<Filter onTopRatedBtnClicked={onTopRatedBtnClicked} onResetBtnClicked={onResetBtnClicked} />
				{isLoggedIn && <div className="flex p-2 ml-5"><pre>Logged in User: {loggedInUser}</pre></div>}
			</div>
			<div className="restaurants flex flex-wrap">
				{filteredRestaurants.length > 0 ? filteredRestaurants.map((restaurant) => (
					<Link to={"/restaurant/" + restaurant?.cardAction?.clickUrl?.split("/")[2]} key={restaurant?.info?.resId} className="no-underline">
						{
							restaurant?.isPromoted ?
								<RestaurantCardPromoted resData={restaurant} /> :
								<RestaurantCard resData={restaurant} />
						}
					</Link>
				)) : <h2 className="w-full text-bold text-center text-xl p-4 m-4">Restaurant not found. Please search other restaurant.</h2>}
			</div>
		</div>
	);
};

export default Body;
