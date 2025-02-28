import "./App.css";

import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />, 
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/restaurants/:resid",
    element: <RestaurantMenu />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
