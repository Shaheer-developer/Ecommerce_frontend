import React, { useEffect } from "react";
import "./Listproduct.css"
import cross_icon from "../../assets/admin-assets/cross_icon.png"

const Listproduct = () =>{
    const [allproducts, setAllproducts] = React.useState([]);
    const fetchInfo = async() => {
        await fetch("http://localhost:4000/allproducts")
         .then((response) => response.json())
         .then((data) => {
            setAllproducts(data);
        });
    }
    useEffect(() => {
        fetchInfo();
    }, []);

    const removeProduct = async (id) => {
        await fetch(`http://localhost:4000/delete-product`, {
            method: "POST",
            headers:{
                Accept: "application/json",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                id:id,
            }),
        });
       await fetchInfo();
    }

    return(
        <div className="list-product">
            <h1>All Products List</h1>
            <div className="listproduct-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Old Price</p>
                <p>New Price</p>
                <p>Category</p>
                <p>Remove</p>
            </div>
            <div className="listproduct-allproducts">
                <hr/>
                {allproducts.map((product,index) => {
               return <>
               <div key={index} class="listproduct-format-main  listproduct-format">
                        <img src={product.image} className="listproduct-product-icon" alt="product" />
                        <p>{product.name}</p>
                        <p>${product.old_price}</p>
                        <p>${product.new_price}</p>
                        <p>{product.category}</p>
                        <img onClick={()=>{removeProduct(product.id)}} className="listproduct-remove-icon" src={cross_icon} alt=""/>
                    </div>
                    <hr/>
                    </>
})}
            </div>
        </div>
    )
}

export default Listproduct;