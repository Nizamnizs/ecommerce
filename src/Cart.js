import React, { useState } from 'react';
import { Table } from 'react-bootstrap';
import { Trash2 } from 'react-feather';
import { useDispatch, useSelector } from 'react-redux';
import { removeCart } from './reduxcart/cartSlice';

function Cart() {
  const dispatch = useDispatch();
  const cartArray = useSelector(state => state.cart);
  const [total, setTotal] = useState(0);

  // Calculate total price
  useState(() => {
    const totalPrice = cartArray.reduce((acc, product) => acc + product.price, 0);
    setTotal(totalPrice);
  }, [cartArray]);

  return (
    <div>
      <h1 className='p-5 text-center'> My Cart</h1>
      <Table className='container shadow stripped bordered hover'>
        <thead>
          <tr>
            <th>#</th>
            <th>Item Name</th>
            <th>Price</th>
            <th>Image</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            cartArray.length > 0 ? cartArray.map((product, index) => (
              <tr key={product.id}>
                <td className='border p-5'>{index + 1}</td>
                <td className='border p-5'>{product.title}</td>
                <td className='border p-5'>Rs {product.price}</td>
                <td className='border p-5'><img style={{ height:'70px' }} src={product.images} alt="" /></td>
                <td className='border p-5'><Trash2 onClick={() => dispatch(removeCart(product.id))}  className='text-danger '></Trash2></td>
              </tr>
            )) : <tr><td colSpan="5" className="text-center">No Items In Cart</td></tr>
          }
        </tbody>
      </Table>
      <h2 className='text-end pe-5 mb-5 me-5 w-75'>Total Price {total} Rs</h2>
    </div>
  );
}

export default Cart;
