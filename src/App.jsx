import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';  
import Login from './components/Login';    
import SignUp from './components/SignUp';   
import ProductList from './components/ProductList';  
import Cart from './components/Cart';  // Import Cart component
import CartProvider from './context/CartContext';  // Import CartProvider

// Main App component
function App() {
  return (
    <CartProvider> {/* Wrap app with CartProvider */}
      <Router>
        <Layout />
      </Router>
    </CartProvider>
  );
}

// Layout component to conditionally render Navbar based on the route
const Layout = () => {
  const location = useLocation();

  // Conditionally render the Navbar: Hide on /login and /signup
  const showNavbar = !['/login', '/signup'].includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />}  {/* Conditionally show Navbar */}
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />  {/* Redirect root to SignUp */}
        <Route path="/signup" element={<SignUp />} />  {/* SignUp page */}
        <Route path="/login" element={<Login />} />    {/* Login page */}
        <Route path="/products" element={<ProductList />} />  {/* Product List page */}
        <Route path="/cart" element={<Cart />} />  {/* Cart page */}
        <Route path="*" element={<h1 className="text-center mt-10">404: Page Not Found</h1>} />  {/* Catch-all route */}
      </Routes>
    </>
  );
};

export default App;
