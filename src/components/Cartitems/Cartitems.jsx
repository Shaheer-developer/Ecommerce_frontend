import React, { useContext } from "react";
import "./Cartitems.css"
import { ShopContext } from "../../context/Shopcontext";
import remove_icon from "../assets/cart_cross_icon.png"

const Cartitems=()=>{
    const {all_product, cartItems , removefromcart}=useContext(ShopContext)
    return(
        <div className="cartitems">
<div className="cartitems-format-main">
<p>Products</p>
<p>Title</p>
<p>Price</p>
<p>Quantity</p>
<p>Total</p>
<p>Remove</p>
</div>
<hr/>
{all_product.map((e)=>{
if(cartItems[e.id]>0){
   return  (<div>
<div className="cartitems-format cartitems-format-main">
    <img src={e.image} alt="" className="cartitem-producticon"/>
    <p>{e.name}</p>
    <p className="cartitems-price">${e.new_price}</p>
    <button className="cartitems-quantity">{cartItems[e.id]}</button>
    <p className="cartitems-total">${e.new_price*cartItems[e.id]}</p>
    <img className="cartitems-removeicon" src={remove_icon} onClick={()=>{removefromcart(e.id)}} alt=""/>
</div>
<hr/>

</div>
)}
return null;
})
}
<div className="cartitems-down">

</div>
        </div>
    )
}
export default Cartitems