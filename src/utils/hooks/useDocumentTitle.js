import { useEffect, useRef } from "react";

const useDocumentTitle = (title) => {
	const defaultTitle = "Uber Eats";
	useEffect(() => {
		document.title = title ? title : defaultTitle;
	}, [title])
}

export default useDocumentTitle;
