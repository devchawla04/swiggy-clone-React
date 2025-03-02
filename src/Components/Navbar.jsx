import { useCart } from "../Utils/CartContext";
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/react";
import {
  ArrowPathIcon,
  Bars3Icon,
  BookmarkSquareIcon,
  CalendarIcon,
  ChartBarIcon,
  CursorArrowRaysIcon,
  LifebuoyIcon,
  PhoneIcon,
  PlayIcon,
  ShieldCheckIcon,
  Squares2X2Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import appLogo from "../assets/appLogo.jpeg";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { cart } = useCart(); // Get cart state
  const totalItems = cart.length; // Count total items
  const [user, setUser] = useState(null);

  useEffect(() => {
    // Check if user is stored in localStorage (simulating login state)
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Parse stored user object
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
  };

  return (
    <Popover className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex items-center justify-between border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link to="/">
              <span className="sr-only">Your Company</span>
              <img alt="logo" src={appLogo} className="h-8 w-auto sm:h-15" />
            </Link>
          </div>
          <div className="-my-2 -mr-2 md:hidden">
            <PopoverButton className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open menu</span>
              <Bars3Icon aria-hidden="true" className="size-6" />
            </PopoverButton>
          </div>
          <PopoverGroup as="nav" className="hidden space-x-10 md:flex">
            <Link
              to="/"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              About Us
            </Link>
            <Link
              to="/contact"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Contact Us
            </Link>
            <Link
              to="/cart"
              className="text-base font-medium text-gray-500 hover:text-gray-900"
            >
              🛒 Cart ({totalItems})
            </Link>
          </PopoverGroup>
          <div className="flex items-center">
            {user ? (
              <>
                <span className="text-gray-600 font-medium">
                  Welcome, {user.name}
                </span>
                <button
                  onClick={handleLogout}
                  className="ml-4 text-base font-medium text-white bg-red-500 hover:bg-red-700 px-4 py-2 rounded"
                >
                  Logout
                </button>
              </>
            ) : (
              <Link
                to="/LogIn"
                className="text-base font-medium text-gray-500 hover:text-gray-900"
              >
                Log in
              </Link>
            )}
          </div>
        </div>
      </div>

      <PopoverPanel
        transition
        className="z-40 absolute inset-x-0 top-0 origin-top-right transform p-2 transition data-closed:scale-95 data-closed:opacity-0 data-enter:duration-200 data-enter:ease-out data-leave:duration-100 data-leave:ease-in md:hidden"
      >
        <div className="divide-y-2 divide-gray-50 rounded-lg bg-white ring-1 shadow-lg ring-black/5">
          <div className="px-5 pt-5 pb-6">
            <div className="flex items-center justify-between">
              <div>
                <img alt="Your Company" src={appLogo} className="h-8 w-auto" />
              </div>
              <div className="-mr-2">
                <PopoverButton className="relative inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:ring-2 focus:ring-indigo-500 focus:outline-hidden focus:ring-inset">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon aria-hidden="true" className="size-6" />
                </PopoverButton>
              </div>
            </div>
            <div className="mt-6"></div>
          </div>
          <div className="space-y-6 px-5 py-6">
            <div className="grid grid-cols-2 gap-x-8 gap-y-4">
              <Link
                to="/"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Home
              </Link>

              <Link
                to="/about"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                About Us
              </Link>
              <Link
                to="/contact"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                Contact Us
              </Link>
              <Link
                to="/cart"
                className="text-base font-medium text-gray-900 hover:text-gray-700"
              >
                🛒 Cart ({totalItems})
              </Link>
            </div>
            <div className="flex items-center">
              {user ? (
                <>
                  <span className="text-gray-600 font-medium">
                    Welcome, {user.name}
                  </span>
                  <button
                    onClick={handleLogout}
                    className="ml-4 text-base font-medium text-white bg-red-500 hover:bg-red-700 px-4 py-2 rounded"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <Link
                  to="/LogIn"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Log in
                </Link>
              )}
            </div>
          </div>
        </div>
      </PopoverPanel>
    </Popover>
  );
}
