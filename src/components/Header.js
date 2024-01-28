import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constant";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
const Header = () => {
  // const [btnNamereact, setBtnNameReact] = useState("Login");
  const { loggedInUser } = useContext(UserContext);
  const onlineStatus = useOnlineStatus();
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  //Subscribing to the cart using Selector 
  const cartItems = useSelector((store) => store.cart.items);
  
  return (
    <div className="header flex items-center justify-between shadow-lg p-4 md:p-3">
      <div className="logo-container">
        <img className="logo w-24 h-24" src={LOGO_URL} alt="Logo" />
      </div>
      <div className="flex items-center">
        {/* Hamburger icon for mobile view */}
        <button
          className="block md:hidden text-gray-600 focus:outline-none"
          onClick={toggleNav}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            ></path>
          </svg>
        </button>
        {/* Navigation menu */}
        <ul
          className={`${
            isNavOpen ? 'flex flex-col' : 'md:flex hidden'
          } md:flex-row md:items-center p-4 md:p-0`}
        >
          <li className="mb-2 md:mb-0 md:mr-4">
            Online Status: {onlineStatus === true ? '✅' : '❌'}
          </li>
          <li className="mb-2 md:mb-0 md:mr-4">
            <Link to="/">Home</Link>
          </li>
          <li className="mb-2 md:mb-0 md:mr-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="mb-2 md:mb-0 md:mr-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="mb-2 md:mb-0 md:mr-4 font-bold text-lg">
            <Link to="/cart">Cart ({cartItems.length} Items)</Link>
          </li>
          <li className="mb-2 md:mb-0 md:mr-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
