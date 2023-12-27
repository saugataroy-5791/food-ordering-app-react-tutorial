import React, { Suspense, lazy, useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import ErrorPage from "./components/ErrorPage";
import RestaurantMenu from "./components/RestaurantMenu";
import { UserProvider } from "./utils/context/UserContext";

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

const Grocery = lazy(() => import("./components/Grocery"));
const About = lazy(() => import("./components/About"));

const AppLayout = () => {
	return (
		<div className="applayout">
			<UserProvider>
				<Header />
				<Outlet />
				<Footer />
			</UserProvider>
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
				element: <Suspense fallback={<h4>loading...</h4>}><About /></Suspense>
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
