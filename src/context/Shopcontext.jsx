import React, { createContext, useEffect, useState } from "react";
export const ShopContext = createContext(null);

const defaultCart = () => {
    let cart = {}
    for (let i = 0; i < 300+1; i++) {
        cart[i] = 0;
    }
    return cart

}
const ShopContextProvider = (props) => {
    const [all_product, setall_product]=useState([])
    const [cartItems, setcartItems] = useState(defaultCart())

    useEffect(()=>{
        fetch('http://localhost:4000/allproducts')
        .then((response)=>response.json())
        .then((data)=>setall_product(data))
    },[])
    const addtocart = (itemId) => {
        setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        console.log(cartItems)
    }

    const removefromcart = (itemId) => {
        setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }
const getTotalCartAmount = ()=>{
    let totalAmount = 0;
    for(const item in cartItems){
        if(cartItems[item]>0){
            let iteminfo = all_product.find((product)=>product.id === Number(item))
            totalAmount +=iteminfo.new_price *cartItems[item]
        }
    }
    return totalAmount;
}
const getTotalCartItems = () =>{
    let totalitem = 0;
    for(const item in cartItems){
        if(cartItems[item]>0){
            totalitem+=cartItems[item];
        }
    }
    return totalitem
}

    const ContextValue = { all_product, cartItems , addtocart , removefromcart , getTotalCartAmount, getTotalCartItems}
    return (
        <ShopContext.Provider value={ContextValue}>
            {props.children}
        </ShopContext.Provider>
    )
}
export default ShopContextProvider
