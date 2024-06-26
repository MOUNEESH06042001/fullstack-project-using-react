import { useState } from "react"
import './Button.css'
function Calculator()
{
    const [res,setres]=useState(0);
    const [n1,setnum1]=useState(0);
    const [n2,setnum2]=useState(0);
    const handleNum1 = (e) =>(setnum1(Number(e.target.value)))
    const handleNum2 = (e) =>(setnum2(Number(e.target.value)))
    function add(){
       setres(n1+n2)
       return {res}
    }
    function sub(){
        setres(n1-n2)
        return {res}
     }
     function mul(){
        setres(n1*n2)
        return {res}
     }
     function div(){
        setres(n1/n2)
        return {res}
     }
    return(
        <>
        <h3>Number1: <input type="number"placeholder="Enter First Number" onChange={handleNum1}></input></h3>
        <h3>Number2: <input type="number"placeholder="Enter Second Number"onChange={handleNum2}></input></h3>
        <button className="custom-button" onClick={add}>+</button>
        <button className="custom-button" onClick={sub}>-</button>
        <button className="custom-button" onClick={mul}>*</button>
        <button className="custom-button" onClick={div}>/</button>
        <div><h1>Result:{res}</h1></div>
        </>
    )
}

export default Calculator;