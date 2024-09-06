import { useContext } from 'react';
import { CartContext } from '../context/CartContext';  // Import CartContext

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);  // Access cart items from CartContext

  return (
    <div className="overflow-x-auto">
      <h1 className='text-3xl font-semibold mb-5'>An overview of your order</h1>
      <table className="table">
        {/* Table Head */}
        <thead>
          <tr>
            <th></th>
            <th>Product</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {/* Display Cart Items */}
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
              <th>
                <button onClick={() => removeFromCart(product.id)} className="btn btn-ghost btn-xs">
                  Remove
                </button>
              </th>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
