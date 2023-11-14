import React, { useContext } from "react";
import Button from 'react-bootstrap/Button';
import Context from '../Context/Context'


function CartItem() {

  const context = useContext(Context);

  const removeItem=(item)=>{

    context.removeCartElement(item)

  }



  return (
    <div>

          <p>test</p>

          {context.cartElement.map((item, index) => (
        <div key={index}>
          <img src={item.imageUrl} alt={item.title} />
          <h3>{item.title}</h3>
          <p>Price: ${item.price}</p>
          {/* Add more details if needed */}
          <Button variant="danger" onClick={()=>removeItem(item)}>Remove</Button>
        </div>
      ))}

      <br/>

            <h1>Total  ${context.totalCartPrice()}</h1>

            <Button variant="success" onClick={()=>context.clearCart()}>Purchase</Button>
     

    </div>
  );
}

export default CartItem;
