import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Header from './Components/Header/Header';
import ProductList from './Components/ProductList/ProductList';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CartItem from './Components/Cart/CartItem';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<>
            <Header />
            <ProductList />
          </>} />

          <Route path='/cart' element={<CartItem/>}/>


        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
