import React from 'react'
import { jwtDecode } from 'jwt-decode';

function Restaorder() {
    const token = localStorage.getItem('token');
       const decode = jwtDecode(token);
       const restaname = decode?.restaurantname;

console.log(restaname);
console.log(customerorder);


  
  
  return (
    <div>
      <h2>Customer Orders {restaname}</h2>

 {Array.isArray(customerorder) && customerorder.length > 0 ? (

        customerorder.map((order, index) => (
          <div  style={{ border: '1px solid #ccc', marginBottom: '10px', padding: '10px' }}>
            <p><strong>Customer:</strong> {order.customerName}</p>
            <p><strong>Phone:</strong> {order.phone}</p>
            <p><strong>Item:</strong> {order.menuname}</p>
            <p><strong>Quantity:</strong> {order.quantity}</p>
            <p><strong>Price:</strong> ₹{order.price}</p>
            <p><strong>Total:</strong> ₹{order.total}</p>
            <p><strong>Status:</strong> {order.status}</p>
          </div>
        ))
      ) : (
        <p>No orders found for this restaurant.</p>
      )}

          
    </div>
  )
}

export default Restaorder