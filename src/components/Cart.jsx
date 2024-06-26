import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import Cartitem from './Cartitem'

function Cart() {
    const items = useSelector((state)=>state.cart.items)
  return (
    <>
    <div align='center'><h1>CART</h1></div>
     <div>
    {items.map((item)=><Cartitem item={item}/>)}
    </div>
    </>
  )
}

export default Cart