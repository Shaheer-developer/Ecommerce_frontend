import React, { useContext } from "react";
import './CSS/Shopcategory.css'
import {ShopContext} from '../context/Shopcontext';
import dropdown_icon from '../components/assets/dropdown_icon.png'
import Item from '../components/Item/Item'


const Shopcategory=(props)=>{

    const {all_products}=useContext(ShopContext)
    return(
<div className="shopcategory">
<img className='banner'   src={props.banner} alt=""/>
<div className="shopcategory-indexsort">
<p>
    <span>Showing 1-12</span> out of 36 products
</p>
<div className="shopcategory-sort">
    Sort by <img src={dropdown_icon} alt=""/>
</div>

</div>

<div className="shopcategory-products">
{all_products.map((products,i)=>{
    if(props.category===products.category)
    {return <Item key={i} id={products.id} image={products.image} name={products.name} new_price={products.new_price} old_price={products.old_price}/>}
    else{
        return null;
    }
})}

</div>
<div class="shopcategory-loadmoe">
    Explore More
</div>

</div>

    )
}
export default Shopcategory