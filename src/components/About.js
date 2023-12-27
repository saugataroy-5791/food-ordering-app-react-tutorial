import { useContext, useState } from "react";
import useDocumentTitle from "../utils/hooks/useDocumentTitle";
import UserContext from "../utils/context/UserContext";

const About = () => {
	useDocumentTitle("About");
	const { loggedInUser, isLoggedIn, changeLoggedInUser } = useContext(UserContext);
	const [userName, setUserName] = useState(loggedInUser);

	const onUserNameChange = (event) => {
		setUserName(event.target.value);
	}

	const changeUserName = () => {
		changeLoggedInUser(userName);
	}

	return (
		<div className="about min-h-[550px] p-4">
			<h2 className="about-title text-2xl font-bold mb-5">About Us</h2>
			{isLoggedIn && <div className="flex py-2"><pre>Logged in User: {loggedInUser}</pre></div>}
			{isLoggedIn && <div>
				<input type="text" className="border rounded-md p-2 mr-4" value={userName} onChange={onUserNameChange} />
				<button type="button" className="change-username-button bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={changeUserName}>Change</button>
			</div>}
			<p className="about-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
		</div>
	)
}

export default About;
