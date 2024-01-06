import React, { useContext } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS
import Header from "./Components/Header/Header";
import ProductList from "./Components/ProductList/ProductList";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartItem from "./Components/Cart/CartItem";
import CartContext from "./Components/Context/CartContext";
import About from "./Components/Header/About";
import Home from "./Components/Header/Home";
import ContactUs from "./Components/Header/ContactUs";
import Signup from "./Components/signup_login/Signup";
import Login from "./Components/signup_login/Login";

function App() {
  return (
    <>
      <CartContext>
        <BrowserRouter>
          <Routes>
            <Route
              path="/store"
              element={
                <>
                  <Header />
                  <ProductList />
                </>
              }
            />

            <Route path="/cart" element={<CartItem />} />

            <Route path="/about" element={<About />} />

            <Route path="/home" element={<Home />} />

            <Route path="/contactUs" element={<ContactUs />} />

            <Route path="/" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </CartContext>
    </>
  );
}

export default App;
