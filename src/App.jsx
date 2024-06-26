import './App.css'
import Header from './components/Header'
import Body from './components/Body'
import Calculator from './components/Calculator'
import Counter from './components/Counter'
import { useEffect, useState } from 'react'
import { ThemeContext } from './contexts/Theme'
import { CountContext } from './contexts/count'
import Products from './components/Products'
import { Outlet } from 'react-router-dom'
// function App(){
//   const name="Mouneesh B"
//   const age=30
//   const height=180
//   const dept="ct-ug"
//   return(
//     <div>
//       <Header/>
//       <h1>App Component</h1>
//       <button>click</button>
//       <Body name={name} age={age} height={height} dept={dept}/>
//       {/* {Body()} */}
//       <Counter/>
//       <Calculator/>

//       </div>
//   )
// }
// const App = () =>{
//   return(
//     <div>App Component</div>
//   )
// }
//fragment will not appear in dom but div will be in dom
function App()
{
    const [count,setCount] = useState(0)//Destructuring
    let Count = 0;
    function Increment() {
        setCount(count+1)
        // setCount((prev)=>prev+2)
    } 

  const [theme,setTheme] = useState('Light')
  useEffect(()=>{document.body.className=theme},[theme])
  function toggleTheme(){
    setTheme(theme === 'Light'?'Dark':'Light')
    Increment()
  }
  return(
    <>
    <ThemeContext.Provider value={{theme:theme,toggleTheme:toggleTheme}}>
    <Header/>
    {/* <Counter/> */}
    </ThemeContext.Provider>
    <Outlet/>
    <Products/>
    {/* <h3>Count : {count}</h3>
            <button onClick={Increment}>Increment</button> */}
    {/* <Counter/> */}
    </>
  )
}

export default App;
