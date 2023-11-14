import { useState } from "react";
import Context from "./Context";

const CartContext = (props) => {
  const [cartNumber, setCartNumber] = useState(0);
  const [cartElement, setCartElement] = useState([]);

  const increaseCartNumber = (product) => {
    //console.log("Adding product to the cart:", product);

    // Check if the product is already in the cart
    const isProductInCart = cartElement.some(
      (item) => item.imageUrl === product.imageUrl
    );

    if (!isProductInCart) {
      // If not, update cartNumber and add the product to cartElement
      setCartNumber((prevCartNumber) => prevCartNumber + 1);
      setCartElement((prevCartElement) => [...prevCartElement, product]);
      console.log("Updated cartElement:", cartElement);
      alert("Your product has been added to the cart.");
    } else {
      // If the product is already in the cart, you can show a message or handle it as needed
      alert("This product is already in the cart.");
    }
  };

  const removeCartElement = (product) => {
    // Check if the product is in the cart
    const isProductInCart = cartElement.some(
      (item) => item.imageUrl === product.imageUrl
    );

    if (isProductInCart) {
      // If the product is in the cart, remove it
      const updatedCart = cartElement.filter(
        (item) => item.imageUrl !== product.imageUrl
      );
      setCartElement(updatedCart);
      //console.log("Updated cartElement after removal:", updatedCart);
      alert("Your product has been removed from the cart.");
    } else {
      // If the product is not in the cart, you can show a message or handle it as needed
      alert("This product is not in the cart.");
    }
  };

  const totalCartPrice=()=>{

     // Calculate the total price of items in the cart
  const totalPrice = cartElement.reduce((total, item) => total + item.price, 0);

  //console.log('Total Cart Price:', totalPrice);

  // You can return the total price if needed
  return totalPrice;

  }

  const clearCart=()=>{

    alert('Thanks for the purchase')

    setCartElement([])
  }

  return (
    <>
      <Context.Provider
        value={{
          cartNumber,
          increaseCartNumber,
          cartElement,
          removeCartElement,
          totalCartPrice,
          clearCart,
        }}
      >
        {props.children}
      </Context.Provider>
    </>
  );
};

export default CartContext;
