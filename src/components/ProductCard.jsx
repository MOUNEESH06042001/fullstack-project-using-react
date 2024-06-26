import React from 'react'
import '../App.css'
import { useDispatch } from 'react-redux'
import { itemsAdded } from '../reducers/cartSlice'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/ReactToastify.css'
function ProductCard(props) {
    //console.log(props.product)
    const{title,description,price,image} = props.product || {}
    const dispatch=useDispatch()
    const addItems=()=>{
      dispatch(itemsAdded(props.product))
      toast(title+" added to cart")
    }
  return (
    <>
        <div className='prod'>
        <center><img src={image} width={200} height={200}/></center>
        <div className='title' align='center'>{title}</div>
        <div className='des'>{description}</div>
        <div className='price'>price: Rs.{price}</div>
        <ToastContainer/>
       <p className='add'> <button onClick={addItems} >Add to Cart</button></p>
    </div>
    </>
  )
}

export default ProductCard