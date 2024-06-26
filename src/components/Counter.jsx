import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementByValue } from "../reducers/counterSlice";

function Counter() {
    // const [count,setCount] = useState(0)//Destructuring
    // let Count = 0;
    // function Increment() {
    //     setCount(count+1)
    //     // setCount((prev)=>prev+2)
    // }
    // function Decrement() {
    //     if(count>0)
    //     setCount(count-1)
    // }
    const [val,setval]=useState(0)
    const handle=(e)=>{setval(e.target.value)}
    const handleIncrement = ()=>{
        console.log(val)
        if(val){
            dispatch(incrementByValue(parseInt(val)))
        }
        else{
            dispatch(increment())
        }
    }
    const count=useSelector((state)=>state.counter.count)
    const dispatch=useDispatch()
    return (
        <>
            <h3>Count : {count}</h3>
            <input type="number" onChange={handle}></input>
            <button onClick={()=>dispatch(handleIncrement)}>Increment</button>
            <button onClick={()=>dispatch(decrement())}>Decrement</button>
        </>
    )
}

export default Counter;
