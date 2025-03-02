import { useCart } from "../Utils/CartContext";
import Navbar from "./Navbar";
import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, clearCart, addToCart } = useCart();
  const [isSignedIn, setIsSignedIn] = useState(false); // Replace with actual authentication logic
  const [message, setMessage] = useState(""); // State for success/error message
  const navigate = useNavigate();

  // Check if user is signed in
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")); // Example: Assume user data is stored in localStorage
    setIsSignedIn(!!user);
  }, []);

  // Calculate total price
  const totalPrice = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  // Handle place order
  const handlePlaceOrder = () => {
    if (!isSignedIn) {
      setMessage("⚠️ Please login first to place an order.");
      return;
    }
    setMessage("✅ Order placed successfully!");
    clearCart();
  };

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto p-6">
        <h2 className="text-2xl font-bold">Your Cart</h2>

        {/* Display success/error message */}
        {message && (
          <div
            className={`mt-4 p-3 rounded-lg text-center ${
              message.includes("⚠️")
                ? "bg-red-100 text-red-700"
                : "bg-green-100 text-green-700"
            }`}
          >
            {message}
          </div>
        )}

        {cart.length === 0 && message !== "✅ Order placed successfully!" ? (
          <p className="text-gray-500">Your cart is empty.</p>
        ) : (
          message !== "✅ Order placed successfully!" && ( // This prevents rendering the cart when order is placed
            <>
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center bg-white shadow-md p-4 rounded-lg mt-2"
                >
                  <div>
                    <h5 className="text-lg font-medium">{item.name}</h5>
                    <h5 className="text-green-700 font-semibold">
                      ₹ {item.price}
                    </h5>
                    <p className="text-gray-500">Quantity: {item.quantity}</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      className="px-4 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600"
                      onClick={() => removeFromCart(item.id)}
                    >
                      -
                    </button>
                    <button
                      className="px-4 py-1 bg-green-500 text-white rounded-lg hover:bg-green-600"
                      onClick={() =>
                        addToCart({
                          id: item.id,
                          name: item.name,
                          price: item.price,
                        })
                      }
                    >
                      +
                    </button>
                  </div>
                </div>
              ))}

              {/* Total Price Display */}
              <div className="mt-4 text-lg font-semibold text-right">
                Total Price:{" "}
                <span className="text-green-700">
                  ₹ {totalPrice.toFixed(2)}
                </span>
              </div>

              <button
                className="mt-4 px-4 py-2 bg-gray-700 text-white rounded-lg"
                onClick={clearCart}
              >
                Clear Cart
              </button>

              {/* Place Order Button */}
              <button
                className="mt-4 px-4 py-2 rounded-lg w-full bg-blue-500 hover:bg-blue-600 text-white cursor-pointer"
                onClick={handlePlaceOrder}
              >
                Place Order
              </button>
            </>
          )
        )}
      </div>
    </>
  );
};

export default Cart;
