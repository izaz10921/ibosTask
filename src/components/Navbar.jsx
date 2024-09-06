import { NavLink, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';  // Import CartContext

const Navbar = () => {
  const { cart } = useContext(CartContext);  // Access cart items from CartContext
  const navigate = useNavigate();  // Hook for programmatic navigation

  // Handle Logout
  const handleLogout = () => {
    // Clear any necessary user data here (e.g., session storage, cookies, etc.)
    
    // Navigate to SignUp page
    navigate('/signup');
  };

  const handleViewCart = () => {
    navigate('/cart');  // Navigate to the Cart page
  };

  return (
    <div className="navbar bg-base-100">
      {/* Left Section - Logo */}
      <div className="flex-none">
        <a className="btn btn-ghost">
          <img
            src="https://i.ibb.co/cT6Vq9B/logo.png"
            alt="Logo"
            className="h-10"
          />
        </a>
      </div>

      {/* Middle Section - Centered Tabs */}
      <div className="flex-1 flex justify-center">
        <ul className="menu menu-horizontal px-1">
          <li>
            <NavLink to="/" className={({ isActive }) => (isActive ? 'active-tab' : '')}>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/products" className={({ isActive }) => (isActive ? 'active-tab font-bold' : 'font-bold')}>
              Products
            </NavLink>
          </li>
          <li><a>Categories</a></li>
          <li><a>Custom</a></li>
          <li><a>Blog</a></li>
        </ul>
      </div>

      {/* Right Section - Cart & Profile */}
      <div className="flex-none flex items-center space-x-4">
        {/* Cart Dropdown */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" />
              </svg>
              {/* Display cart item count dynamically */}
              <span className="badge badge-sm indicator-item">{cart.length}</span>
            </div>
          </div>
          <div tabIndex={0} className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 shadow">
            <div className="card-body">
              <div className="card-actions">
                <button onClick={handleViewCart} className="btn btn-primary btn-block">View cart</button> {/* Trigger navigation */}
              </div>
            </div>
          </div>
        </div>

        {/* Profile Section */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img alt="User Avatar" src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
            </div>
          </div>
          <ul tabIndex={0} className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
            <li><a onClick={handleLogout}>Logout</a></li> {/* Call handleLogout on click */}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
