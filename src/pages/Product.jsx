import React, { useContext } from "react";
import { ShopContext } from "../context/Shopcontext";
import { useParams } from "react-router-dom";
import Breadcrumbs from "../components/Breadcrumbs/Breadcrumbs";
import Productdisplay from "../components/Productdisplay/Productdisplay";
import Descriptionbox from "../components/Descriptionbox/Descriptionbox";
import Relatedproducts from "../components/Relatedproducts/Relatedproducts";

const Product = ()=>{
    const {all_product}=useContext(ShopContext);
    const {productId}=useParams();
    const product =all_product.find((e)=>e.id===Number(productId))
    return(
<div>
<Breadcrumbs product={product}/>
<Productdisplay product={product}/>
<Descriptionbox/>
<Relatedproducts/>
</div>

    )
}

export default Product