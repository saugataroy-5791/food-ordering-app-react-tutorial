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
		<div className="header">
			<div className="logo-container">
				<Link to="/" className="logo-link">
					<img
						className="logo"
						src={LOGO_URL}
						alt="logo"
						width={200}
						height={200}
					/>
				</Link>
			</div>
			<div className="nav-items">
				<ul>
					<li><Link to="/">Home</Link></li>
					<li><Link to="/about">About</Link></li>
					<li><Link to="/contact">Contact Us</Link></li>
					<button type="button" className="refresh" onClick={onRefreshClicked}>Refresh</button>
					<button type="button" className="login" onClick={onLoginClicked}>{btnName}</button>
				</ul>
			</div>
		</div>
	);
};

export default Header;
