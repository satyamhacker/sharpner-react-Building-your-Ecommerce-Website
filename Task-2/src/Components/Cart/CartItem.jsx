import React from "react";
import Button from 'react-bootstrap/Button';

const cartElements = [
  {
    title: 'Colors',
    price: 100,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
    quantity: 2,
  },
  {
    title: 'Black and white Colors',
    price: 50,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
    quantity: 3,
  },
  {
    title: 'Yellow and Black Colors',
    price: 70,
    imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
    quantity: 1,
  }
];

function CartItem() {
  return (
    <div>
      {cartElements.map((item, index) => (
        <div key={index}>
          <img src={item.imageUrl} alt={item.title} />
          <h3>{item.title}</h3>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>

          <Button variant="danger">Remove</Button>

        </div>
      ))}
    </div>
  );
}

export default CartItem;
