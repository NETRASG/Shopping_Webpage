
import { commerce } from './lib/Commerce'
import React, { useState, useEffect } from 'react';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'
import Checkout from './Components/CheckoutForm/Checkout/Checkout'

import Products from './Components/Products/Products';
import NavBar from './Components/NavBar/NavBar';
import Cart from './Components/Cart/Cart'


function App() {

  const [products, setProducts] = useState([]);
  const [cart,SetCart]=useState({});

  const fetchProducts = async () => {
    try{
      const { data } = await commerce.products.list();
      if(!data){
        console.log("Empty Data")
      }
      else{
      setProducts(data);
      console.log(data)
      }
    }
    catch(e){
      console.log(e)
    }
   
  }

  const fetchCart=async()=>{
    SetCart(await commerce.cart.retrieve());
  }

  const handleAddToCart=async(productId,quantity)=>{
    const item=await commerce.cart.add(productId,quantity);
    SetCart(item)
  }
  const handleCartItemUpdateQuatity=async(productId,quantity)=>{
    const response=await commerce.cart.update(productId,{quantity})
    SetCart(response)
  }

  const handleCartItemRemove=async(productId)=>{
    const response=await commerce.cart.remove(productId);
    SetCart(response)

  }
  const handleCartEmpty=async()=>{
    const response=await commerce.cart.empty();
    SetCart(response)

  }



  useEffect(() => {
    fetchProducts();
    fetchCart();
  }, [])


console.log(cart)
  

  return (
    <Router>
    <div>
      <NavBar totalItems={cart.total_items}></NavBar>
      <Routes>
     
        <Route path='/' element={ <Products products={products} onAddToCart={handleAddToCart}  />}/>
     
      <Route path='/cart' element={ <Cart cart={cart} handleCartItemUpdateQuatity={handleCartItemUpdateQuatity} handleCartItemRemove={handleCartItemRemove} handleCartEmpty={handleCartEmpty}/>}/>
      <Route path='/checkout' element={<Checkout  cart={cart}/>}></Route>
     
      
      </Routes>
    </div>
    </Router>
  );
}

export default App;
