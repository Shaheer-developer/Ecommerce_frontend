import React, { useContext } from "react";
import './Productdisplay.css'
import staricon from '../assets/star_icon.png'
import stardullicon from '../assets/star_dull_icon.png'
import { ShopContext } from "../../context/Shopcontext";

const Productdisplay=(props)=>{
    const {product}=props;
    const {addtocart}=useContext(ShopContext)
    return(
        <div className="productdisplay">
<div className="productdisplay-left">
<div className="productdisplay-img-list">
    <img src={product.image} alt=""/>
    <img src={product.image} alt=""/>
    <img src={product.image} alt=""/>
    <img src={product.image} alt=""/>
</div>
<div className="productdisplay-img">
    <img className="productdisplay-main-img" src={product.image} alt=""/>
</div>

</div>
<div className="productdisplay-right">
<h1>{product.name}</h1>
<div className="productdisplay-right-star">
    <img src={staricon} alt=""/>
    <img src={staricon} alt=""/>
    <img src={staricon} alt=""/>
    <img src={staricon} alt=""/>
    <img src={stardullicon} alt=""/>
    <p>(132)</p>
</div>
<div className="productdisplay-right-prices">
    <div className="newprice">${product.new_price}</div>
<div className="oldprice">${product.old_price}</div>

</div>
<div className="productdisplay-right-description">
Lightweight, luxurious silk blouse designed for a chic, polished look. Tailored with a flattering fit and delicate button-down details. Ideal for elevating both work and evening outfits.
</div>
<div className="productdisplay-right-size">
<h1>Select Size</h1>
<div className="productdisplay-right-differentsizes">
    <div>S</div>
    <div>M</div>
    <div>L</div>
    <div>XL</div>
    <div>XXL</div>
</div>
</div>
<button onClick={()=>{addtocart(product.id)}} className="productdisplay-addtocart">ADD TO CART</button>
<p className="productdisplay-right-category"><span>Category:</span> Women , T-shirt , Crop-top</p>
<p className="productdisplay-right-category"><span>Tags:</span> Modern , Latest</p>
</div>
        </div>
    )
}

export default Productdisplay