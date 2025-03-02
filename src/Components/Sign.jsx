import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";

const SignInSignUp = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name && isSignUp) {
      setError("Full Name is required for Sign Up!");
      return;
    }
    if (!formData.email || !formData.password) {
      setError("All fields are required!");
      return;
    }
    setError("");

    // Simulating user authentication
    const user = {
      name: formData.name || formData.email.split("@")[0],
      email: formData.email,
    };
    localStorage.setItem("user", JSON.stringify(user)); // Store user in localStorage

    alert(isSignUp ? "Signed Up Successfully!" : "Signed In Successfully!");
    navigate("/"); // Redirect to home page
  };

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <div className="bg-white p-6 rounded-lg shadow-lg w-96">
          <h2 className="text-2xl font-bold text-center mb-4">
            {isSignUp ? "Sign Up" : "Sign In"}
          </h2>

          {error && <p className="text-red-500 text-center">{error}</p>}

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Full Name.."
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
            >
              {isSignUp ? "Sign Up" : "Sign In"}
            </button>
          </form>

          <p className="text-center mt-4 text-gray-600">
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <span
              className="text-blue-500 cursor-pointer hover:underline"
              onClick={() => setIsSignUp(!isSignUp)}
            >
              {isSignUp ? "Sign In" : "Sign Up"}
            </span>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignInSignUp;
