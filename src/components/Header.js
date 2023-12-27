import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
	const [btnName, setBtnName] = useState("Login");

	const onLoginClicked = () => {
		btnName === "Login" ? setBtnName("Logout") : setBtnName("Login")
	}

	const onRefreshClicked = () => {
		window.location.reload(true);
	}

	return (
		<div className="header flex justify-between items-center p-4 border-solid border-black border-b">
			<div className="logo-container cursor-pointer w-20 h-20">
				<Link to="/" className="logo-link">
					<img className="logo w-full h-auto rounded-xl" src={LOGO_URL} alt="logo" width={200} height={200} />
				</Link>
			</div>
			<div className="nav-items">
				<ul className="flex justify-between items-center">
					<li className="cursor-pointer py-2 px-3"><Link className="no-underline text-black text-lg font-medium" to="/">Home</Link></li>
					<li className="cursor-pointer py-2 px-3"><Link className="no-underline text-black text-lg font-medium" to="/about">About</Link></li>
					<li className="cursor-pointer py-2 px-3"><Link className="no-underline text-black text-lg font-medium" to="/contact">Contact Us</Link></li>
					<li className="cursor-pointer py-2 px-3"><Link className="no-underline text-black text-lg font-medium" to="/grocery">Grocery</Link></li>
					<button type="button" className="refresh mx-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onRefreshClicked}>Refresh</button>
					<button type="button" className="login mx-4 mr-0 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={onLoginClicked}>{btnName}</button>
				</ul>
			</div>
		</div>
	);
};

export default Header;
