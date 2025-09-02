import React from 'react'
import { jwtDecode } from 'jwt-decode';

function Restaorder({ customerorder }) {
    const token = localStorage.getItem('token');
       const decode = jwtDecode(token);
       const restaname = decode?.restaurantname;

   


  
  
  return (
    <div>
      <h2>Customer Orders {restaname}</h2>

 {customerorder.length > 0 ? (
        customerorder.map((order, index) => (
          <div key={index} style={{ border: '1px solid #ccc', marginBottom: '10px', padding: '10px' }}>
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