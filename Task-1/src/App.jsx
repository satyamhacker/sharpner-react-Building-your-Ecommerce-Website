import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Header from './Components/Header/Header';
import ProductList from './Components/ProductList/ProductList';

function App() {
  return (
    <>
      <Header />
      <ProductList />
      {/* Other content of your application */}
    </>
  );
}

export default App;