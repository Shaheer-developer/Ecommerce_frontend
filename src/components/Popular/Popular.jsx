import React, { useEffect, useState } from "react";
import './Popular.css'
import Item from "../Item/Item";
const Popular = () => {
    const [Popular_product, setPopular_product] = useState([])
    useEffect(()=>{
        fetch("http://localhost:4000/popularinwomen")
        .then((response)=>response.json())
        .then((data)=>setPopular_product(data))
    },[])
    return (
        <div className="popular">
            <h1>POPULAR IN WOMEN</h1>
            <hr />
            <div className="popular-items" >
                {Popular_product.map((product, index) => {
                    return <Item key={index} id={product.id} name={product.name} image={product.image} old_price={product.old_price} new_price={product.new_price} />
                })}
            </div>

        </div>
    )
}
export default Popular