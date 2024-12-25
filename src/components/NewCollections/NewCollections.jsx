import React, { useEffect, useState } from "react";
import './NewCollections.css'
import Item from "../Item/Item";

const NewCollection = () => {
    const [new_collection, setnew_collection] = useState([])
    useEffect(()=>{
        fetch("http://localhost:4000/newcollection")
        .then((response)=>response.json())
        .then((data)=>setnew_collection(data))
    },[])
    return (
        <div className="newcollections">
           <div className="heading">
            <h1>NEW COLLECIONS</h1>
            <div className="underline"></div>
            </div>
            <div className="collections">
                {new_collection.map((products, index) => {
                    return <Item key={index} id={products.id} image={products.image} name={products.name} new_price={products.new_price} old_price={products.old_price} />
                })}

            </div>


        </div>
    )
}

export default NewCollection