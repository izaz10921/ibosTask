import { useContext } from 'react';
import { CartContext } from '../context/CartContext'; 
import { useNavigate } from 'react-router-dom'; 

const Cart = () => {
  const { cart, removeFromCart, incrementQuantity, decrementQuantity } = useContext(CartContext); 
  const navigate = useNavigate();  

  const subtotal = cart.reduce((acc, product) => acc + product.price * product.quantity, 0);

  const handleCheckout = () => {
    navigate('/checkout');  
  };

  return (
    <div className="container mx-auto p-5">
      <div className="grid grid-cols-3 gap-6">
        
        <div className="col-span-2">
          <h1 className="text-3xl font-semibold mb-5">Your Shopping Cart</h1>
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {cart.map((product, index) => (
                  <tr key={product.id}>
                    <th>{index + 1}</th>
                    <td>
                      <div className="flex items-center gap-3">
                        <div className="avatar">
                          <div className="mask mask-squircle h-12 w-12">
                            <img src={product.image} alt={product.name} />
                          </div>
                        </div>
                        <div>
                          <div className="font-bold">{product.name}</div>
                        </div>
                      </div>
                    </td>
                    <td>${product.price}</td>
                    <td>
                      <div className="flex items-center">
                        <button
                          onClick={() => decrementQuantity(product.id)}
                          className="btn btn-xs btn-secondary"
                        >
                          -
                        </button>
                        <span className="mx-2">{product.quantity}</span>
                        <button
                          onClick={() => incrementQuantity(product.id)}
                          className="btn btn-xs btn-secondary"
                        >
                          +
                        </button>
                      </div>
                    </td>
                    <th>
                      <button
                        onClick={() => removeFromCart(product.id)}
                        className="btn btn-ghost btn-xs"
                      >
                        Remove
                      </button>
                    </th>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      
        <div className="col-span-1 p-5 bg-gray-100 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">Order Summary</h2>
          <div className="flex justify-between mb-2">
            <span>Subtotal:</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between mb-2">
            <span>Shipping:</span>
            <span className="text-green-500">Free</span>
          </div>
          <div className="flex justify-between mb-4">
            <span className="font-bold">Total:</span>
            <span className="font-bold">${subtotal.toFixed(2)}</span>
          </div>
          <button
            onClick={handleCheckout}
            className="btn btn-primary w-full mt-4"
          >
            Go to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
