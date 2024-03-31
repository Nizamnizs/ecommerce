import React from 'react';
import {  Route, Routes,  } from 'react-router-dom';
import ProductList from './ProductList';
import ProductDetails from './ProductDetails';
import CategoryList from './CategoryList';
import UserList from './UserList';
import Header from './Header';
import ProductListByCategory from './CategoryProducts';
import Cart from './Cart';
function App() {
  return (
    
    <div>
    <Header></Header>
    
      <Routes>
      <Route path='/' element={<ProductList></ProductList>}></Route>
        <Route path="/products/:productId" element={<ProductDetails></ProductDetails>} />
        <Route path="/categories" element={<CategoryList></CategoryList>}  />
        <Route path="/users" element={<UserList></UserList>} />
        <Route path="/categories/:categoryId/products" element={<ProductListByCategory></ProductListByCategory>} />
        <Route path="/cart" element={<Cart></Cart>} />

      </Routes>
    </div>
  
  );
}

export default App;
