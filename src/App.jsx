import "./App.css";
import { CartProvider } from "./Utils/CartContext";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Error from "./Components/Error";
import Cart from "./Components/Cart"
import Sign from './Components/Sign'
import RestaurantMenu from "./Components/RestaurantMenu";

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
    path: "/cart",
    element: <Cart />,
  },
  {
    path: "/LogIn",
    element: <Sign />,
  },
  {
    path: "/restaurants/:resid",
    element: <RestaurantMenu />,
  },
]);

const App = () => {
  return (
    <CartProvider>
      <RouterProvider router={router} />;
    </CartProvider>
  );
};

export default App;
