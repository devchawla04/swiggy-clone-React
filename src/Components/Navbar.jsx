import appLogo from "../assets/appLogo.png";

const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <div className="navLogo">
          <img src={appLogo} className="Logo" alt="Swiggy logo" />
        </div>
        <div>
          <ul className="navList">
            <li className="listItem">Home</li>
            <li className="listItem">About Us</li>
            <li className="listItem">Contact Us</li>
            <li className="listItem">Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
