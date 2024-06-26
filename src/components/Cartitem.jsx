import React from 'react'
import '../App.css'
import { useDispatch } from 'react-redux'
import { decreaseQuantity, increaseQuantity, itemDeleted } from '../reducers/cartSlice'
import { ToastContainer,toast } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
function Cartitem(props) {
    const{image,title,price,quantity,id}=props.item
    const dispatch=useDispatch()
    const deleteCart=()=>{
        dispatch(itemDeleted(id))
        toast(title+"was deleted successfully")
    }
    const increment=()=>{
      dispatch(increaseQuantity(props.item))
      toast("Quantity for the "+title+" was increased successfully")
    }    
    const decrement=()=>{
      dispatch(decreaseQuantity(props.item))
      toast("Quantity for the "+title+" was decreased successfully")
    }    
  return (
    <>
<div className='prod1'>
    <center><img src={image} height={100} width={100}></img></center>
    <p className='title1'>{title}</p>
    <p className='price1'>Price: {price}</p>
    <p className='quantity'>Quantity: {quantity}</p>
    <ToastContainer/>
    <p className='cartbtn'>
      <p><button className='btn2' onClick={decrement}>-</button> </p>
      <p> <button className='btn2' onClick={increment}>+</button></p>
       <p> <button className='btn2' onClick={deleteCart}>Delete</button></p>
       </p>
</div>
    </>
  )
}

export default Cartitem