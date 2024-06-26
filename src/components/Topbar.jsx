import React, { useState } from 'react'
import '../App.css'
function Topbar(props) {
    const[items,setitems]=useState('')
    const handle = (e)=>(setitems(e.target.value))
    const handleCategorySelection=((e)=>{
        props.setSelectedCategory(e.target.value)
    })
    const handleitem = (e)=>{props.setSelectedCategory(items)}
  return (
    <>
    <div className='s1'>
      <p>
        <select onChange={handleCategorySelection}>
        <option value=''>Select Categories</option>
        {props.cate.map((c)=> <option value={c}>{c}</option>)}
    </select>
    </p>
    <p className='s2'>
    <input type='text' placeholder='search items' onChange={handle}></input>
    </p>
    <p className='s2'>
    <button className='btn1' onClick={handleitem}>Search</button>
    </p>
    </div>
    
    </>
  )
}

export default Topbar