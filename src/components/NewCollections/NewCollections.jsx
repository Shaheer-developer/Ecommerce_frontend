import React from "react";
import './NewCollections.css'
import new_collections from "../assets/new_collections";
import Item from "../Item/Item";

const NewCollection = () => {
    return (
        <div className="newcollections">
           <div class="heading">
            <h1>NEW COLLECIONS</h1>
            <div className="underline"></div>
            </div>
            <div class="collections">
                {new_collections.map((products, index) => {
                    return <Item key={index} id={products.id} image={products.image} name={products.name} new_price={products.new_price} old_price={products.old_price} />
                })}

            </div>


        </div>
    )
}

export default NewCollection