import React, { useEffect , useState } from 'react'
import ProductCard from './ProductCard'
import Topbar from './Topbar'

function Products() {
    const[list,setlist]=useState([])
    const[cate,setCate]=useState([])
    const[selectedcategory,setSelectedCategory]=useState('')
    const[Apires,setApires]=useState([])
    console.log(selectedcategory)
    useEffect(()=>{
        fetch('https://mocki.io/v1/72f8d1e9-055c-4e6b-bd6a-630de0dad7f4')
        .then((res)=>{
            return res.json()
        })
        .then((json)=>{
            setlist(json)
            setApires(json)
            //console.log(json)
            const cat=json.map((e)=>e.category);
            setCate([...new Set(cat)])
          }).catch(()=>{})
},[])

            useEffect(()=>{
              if(selectedcategory==''){
                setlist(Apires)
              }
              else{
              const res=Apires.filter((obj)=>obj.category===selectedcategory)
              setlist(res)}
            },[selectedcategory])
  return (
    // {JSON.stringify(list)}
      <div>
        <Topbar cate={cate} setSelectedCategory={setSelectedCategory}/>
     <div className='flex'>
      {list.map((product)=><ProductCard product = {product}>
    </ProductCard>)}
</div>
    </div>
  )
}

export default Products