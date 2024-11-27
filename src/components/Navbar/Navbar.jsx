import React,{ useState, useEffect ,useContext} from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { ShopContext } from "../../context/Shopcontext";



const Navbar = () => {
    const { getTotalCartItems } = useContext(ShopContext)
    const [menu,setMenu]=useState("Shop");
    const location=useLocation();
useEffect(()=>{
    const currentpath=location.pathname.split("/")[1];
    setMenu(currentpath || 'Shop');
},[location.pathname]);
    return (
        <>
        <div className='navbar'>
            <div className="nav-logo">
                <img src={logo} alt="" />
                <p>ESSENTIA</p>
            </div>
            <ul className="nav-menu">
                <li onClick={()=>{setMenu("Shop")}}><Link style={{textDecoration:'none'}} to='/'>Shop</Link>{menu==="Shop"? <hr/>:<></>}</li>
                <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:'none'}}  to='/mens'>Men</Link>{menu==="mens"? <hr/>:<></>}</li>
                <li onClick={()=>{setMenu("womens")}} ><Link style={{textDecoration:'none'}}  to='/womens'>Women</Link> {menu==="womens"? <hr/>:<></>}</li>
                <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration:'none'}}  to='/kids'>Kids</Link>  {menu==="kids"? <hr/>:<></>}</li>
            </ul>
            <div className="nav-login-cart">
               <Link style={{textDecoration:'none'}}  to='/login'><button>Login</button></Link> 
               <Link style={{textDecoration:'none'}}  to='/cart'> <img src={cart_icon} alt="" /></Link>
                <div className="nav-cart-count">{getTotalCartItems()}</div>

            </div>

        </div>
        <hr/>
        </>


    )
}
export default Navbar