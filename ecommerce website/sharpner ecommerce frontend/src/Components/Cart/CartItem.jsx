import React, { useContext } from "react";
import Button from "react-bootstrap/Button";
import Context from "../Context/Context";

function CartItem() {
  const context = useContext(Context);

  let databaseCartElementLength = context.returnCartElement().length;

  let databaseCartElement = context.returnCartElement();
  //databaseCartElement is array of objects

  const removeItem = (item) => {
    context.removeCartElement(item);
  };

  return (
    <div>
      {databaseCartElementLength > 0
        ? databaseCartElement.map((item, index) => (
            <div key={index}>
              <img src={item.imageUrl} alt={item.title} />
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
              {/* Add more details if needed */}
              <Button variant="danger" onClick={() => removeItem(item)}>
                Remove
              </Button>
            </div>
          ))
        : context.cartElement.map((item, index) => (
            <div key={index}>
              <img src={item.imageUrl} alt={item.title} />
              <h3>{item.title}</h3>
              <p>Price: ${item.price}</p>
              {/* Add more details if needed */}
              <Button variant="danger" onClick={() => removeItem(item)}>
                Remove
              </Button>
            </div>
          ))}

      <br />

      <h1>
        Total $
        {context.returnTotalDatabaseCartPrice() > 0
          ? context.returnTotalDatabaseCartPrice()
          : context.totalCartPrice()}
      </h1>

      <Button variant="success" onClick={() => context.clearCart()}>
        Purchase
      </Button>
    </div>
  );
}

export default CartItem;
