import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import RestaurantMenu from "./components/RestaurantMenu";

/**
 * JSX
 */
const heading = <h1 className="heading">Namaste React</h1>;

/**
 * Functional component
 */
const HeadingComponent = () => {
	return (
		// <h1 className='heading'>Namaste React</h1>
		heading
	);
};

const Grocery = lazy(() => import("./components/Grocery"))

const AppLayout = () => {
	return (
		<div className="applayout">
			<Header />
			<Outlet />
			<Footer />
		</div>
	);
};

const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <AppLayout />,
		children: [
			{
				path: "/",
				element: <Body />
			},
			{
				path: "/about",
				element: <About />
			},
			{
				path: "/contact",
				element: <Contact />
			},
			{
				path: "restaurant/:resDetails",
				element: <RestaurantMenu />
			},

			{
				path: "/grocery",
				element: <Suspense fallback={<h4>loading...</h4>}><Grocery /></Suspense>
			}
		],
		errorElement: <ErrorPage />
	}
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
