import useDocumentTitle from "../utils/hooks/useDocumentTitle";

export const Grocery = () => {
	useDocumentTitle("Grocery");

	return (
		<div className="grocery min-h-[550px] p-4">
			<h2 className="about-title text-2xl font-bold mb-5">Grocery</h2>
		</div>
	)
}

export default Grocery;
