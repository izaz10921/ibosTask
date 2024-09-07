import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';  
import Footer from './components/Footer'; 
import Login from './components/Login';    
import SignUp from './components/SignUp';   
import ProductList from './components/ProductList';  
import Cart from './components/Cart'; 
import CartProvider from './context/CartContext';  


function App() {
  return (
    <CartProvider> 
      <Router>
        <Layout />
      </Router>
    </CartProvider>
  );
}


const Layout = () => {
  const location = useLocation();

  const showNavbar = !['/login', '/signup'].includes(location.pathname);
  const showFooter = showNavbar;  

  return (
    <div className="flex flex-col min-h-screen">  
      {showNavbar && <Navbar />}  
      <div className="flex-grow">  
        <Routes>
          <Route path="/" element={<Navigate to="/signup" />} /> 
          <Route path="/signup" element={<SignUp />} />  
          <Route path="/login" element={<Login />} />    
          <Route path="/products" element={<ProductList />} />  
          <Route path="/cart" element={<Cart />} />  
          <Route path="*" element={<h1 className="text-center mt-10">404: Page Not Found</h1>} />  
        </Routes>
      </div>
      {showFooter && <Footer />} 
    </div>
  );
};

export default App;
