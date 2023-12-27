import { createContext, useState } from "react";

const UserContext = createContext({
	loggedInUser: "Default User",
	isLoggedIn: false
});

export const UserProvider = ({ children }) => {
	const [loggedInUser, setLoggedInUser] = useState("Default User");
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const changeLoggedInUser = (value) => {
		setLoggedInUser(value);
	}

	const changeLogInStatus = (value) => {
		setIsLoggedIn(value);
	}

	return (
		<UserContext.Provider value={{ loggedInUser, isLoggedIn, changeLoggedInUser, changeLogInStatus }}>
			{children}
		</UserContext.Provider>
	)
}

export default UserContext;
