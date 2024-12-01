import React, { useState, useEffect, useContext, useRef } from 'react'
import './Navbar.css'
import logo from '../assets/logo.png'
import cart_icon from '../assets/cart_icon.png'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom'
import { ShopContext } from "../../context/Shopcontext";



const Navbar = () => {
    const { getTotalCartItems } = useContext(ShopContext)
    const [menu, setMenu] = useState("Shop");
    const [isopen, setisopen] = useState("false")
    const location = useLocation();
    useEffect(() => {
        const currentpath = location.pathname.split("/")[1];
        setMenu(currentpath || 'Shop');
        setisopen(false);
        menuRef.current?.classList.remove("nav-menu-visible");
    }, [location.pathname]);
    const menuRef = useRef();

    const dropdown_toggle = () => {
        setisopen(!isopen)
        menuRef.current.classList.toggle("nav-menu-visible")
    }
    const handleMenuClick = (menuName) => {
        setMenu(menuName);
        setisopen(false);
        menuRef.current?.classList.remove("nav-menu-visible");
    };

    return (
        <>
            <div className='navbar'>
                <div className="nav-logo">
                    <img src={logo} alt="" />
                    <p>ESSENTIA</p>
                </div>
                <ul ref={menuRef} className="nav-menu">
                    <li onClick={() => { handleMenuClick("Shop") }}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu === "Shop" ? <hr /> : <></>}</li>
                    <li onClick={() => { handleMenuClick("mens") }}><Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link>{menu === "mens" ? <hr /> : <></>}</li>
                    <li onClick={() => { handleMenuClick("womens") }} ><Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link> {menu === "womens" ? <hr /> : <></>}</li>
                    <li onClick={() => { handleMenuClick("kids") }}><Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>  {menu === "kids" ? <hr /> : <></>}</li>
                </ul>


                <div className="nav-login-cart">
                    <button
                        className={`hamburger ${isopen ? "open" : ""}`}
                        onClick={dropdown_toggle}>

                        <span className="bar"></span>
                        <span className="bar"></span>
                        <span className="bar"></span>
                    </button>

                    <Link style={{ textDecoration: 'none' }} to='/login'><button className='loginbutton'>Login</button></Link>
                    <Link style={{ textDecoration: 'none' }} to='/cart'> <img src={cart_icon} alt="" /></Link>
                    <div className="nav-cart-count">{getTotalCartItems()}</div>


                </div>


            </div>

        </>


    )
}
export default Navbar