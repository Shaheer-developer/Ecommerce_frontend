import React, { createContext, useState } from "react";
import all_product from '../components/assets/all_product'
export const ShopContext = createContext(null);

const defaultCart = () => {
    let cart = {}
    for (let i = 0; i < all_product.length; i++) {
        cart[i] = 0;
    }
    return cart

}
const ShopContextProvider = (props) => {
    const [cartItems, setcartItems] = useState(defaultCart())

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
