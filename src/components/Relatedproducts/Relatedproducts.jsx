import React from "react";
import "./Relatedproducts.css"
import data_product from "../assets/data.js"
import Item from "../Item/Item.jsx"

const Relatedproducts = () => {
    return (
        <div className="relatedproducts">
            <h1>Related Products</h1>
            <hr />
            <div className="relatedproducts-items">
                {data_product.map((products, i) => {
                    return <Item key={i} id={products.id} image={products.image} name={products.name} new_price={products.new_price} old_price={products.old_price} />
                })}

            </div>

        </div>
    )
}
export default Relatedproducts