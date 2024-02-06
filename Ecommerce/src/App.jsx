import { useState } from 'react'

// import {cart} from "../src/Pages/cart"
import Products from './Pages/Product'
import Cart from './Pages/Cart'
import { createBrowserRouter, createRoutesFromElements,Route, RouterProvider } from 'react-router-dom';
import Layout from './Pages/Layout';

function App() {

  
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout/>}>
        <Route index element={<Products/>} />
        <Route path="cart" element={<Cart/>} />
      </Route>
    )
  );

  return (
    <>
      {/* <cart/> */}
      <RouterProvider router={router} />
      {/* <Cart/> */}
      {/* <Products/> */}
    </>
  )
}

export default App
