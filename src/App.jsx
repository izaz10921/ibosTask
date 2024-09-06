import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';   
import Login from './components/Login';     
import SignUp from './components/SignUp';   
import ProductList from './components/ProductList';  
import CartProvider from './context/CartContext';  // Import CartProvider

// Main App component
function App() {
  return (
    <CartProvider> {/* Wrap the entire app with CartProvider */}
      <Router>
        <Layout />
      </Router>
    </CartProvider>
  );
}

// Layout component to conditionally render Navbar based on the route
const Layout = () => {
  const location = useLocation();
  const showNavbar = !['/login', '/signup'].includes(location.pathname);

  return (
    <>
      {showNavbar && <Navbar />}  {/* Conditionally show Navbar */}
      <Routes>
        <Route path="/" element={<Navigate to="/signup" />} />  
        <Route path="/signup" element={<SignUp />} />  
        <Route path="/login" element={<Login />} />  
        <Route path="/products" element={<ProductList />} />  
        <Route path="*" element={<h1 className="text-center mt-10">404: Page Not Found</h1>} />  
      </Routes>
    </>
  );
};

export default App;
