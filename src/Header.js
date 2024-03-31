import React from 'react'

import './header.css';
import {  ShoppingCart, Users } from 'react-feather';
import { Link } from 'react-router-dom';

function Header() {

  
  return (

    
    <div className="navbar  bg-white shadow-md p-2 container d-flex justify-content-between align-items-center ">
      <div className="navbar__logo btn">
       <Link to={"/"}><img src="https://i.postimg.cc/vZRNvHkT/IMG-20220801-204856.png" alt=" Logo" /></Link> 
      </div>
      <div className="navbar__search">
        <input type="text" placeholder="Search for products, brands, and more" />
        <button >Search</button>
      </div>
      <div className="navbar__links">
        <Link to={"categories"}><a><i class="fa-solid fa-list"></i> Category</a></Link>
        <a href="cart"><ShoppingCart></ShoppingCart> Cart</a>
        <Link to={"users"}><a ><Users></Users> Users</a></Link>

      </div>
    </div>
 
  )
}

export default Header