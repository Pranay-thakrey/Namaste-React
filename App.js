import React from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./SRC/components/Header";
import Body from "./SRC/components/Body";
import About from "./SRC/components/About";
import Contact from "./SRC/components/Contact";
import Error from "./SRC/components/Error";
import RestaurantMenu from "./SRC/components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <div className="app">
      <Header />
      <Outlet/>
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
        element: <Body/>,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/Contact",
        element: <Contact />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />
      }
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

root.render(<RouterProvider router={appRouter} />);

