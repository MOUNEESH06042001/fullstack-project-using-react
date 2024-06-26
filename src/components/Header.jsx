import './Header.css'
import image from '../assets/image.png'
import ThemeButton from './ThemeButton';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
function Header(props){
    const cartItems= useSelector((state)=>state.cart.items)
    return(
        <>
        <div className='head'>
        <div><img className='h' src={image} width={70} height={70}></img></div>
        <div className="header">   
        <div>Home</div>
        <Link to="/About">About</Link>
        <Link to="/Products">Products</Link>
        <Link to ="/Cart">Cart: {cartItems.length}</Link>
        <ThemeButton theme={props.theme} toggleTheme={props.toggleTheme}/>
        </div>
        </div>
        </>
    )
}

export default Header;