import React,{createContext, useState} from "react";
import all_product from '../components/assets/all_product'
export const ShopContext=createContext(null);

const defaultCart = ()=>{
    let cart={}
for(let i=0; i<all_product.length;i++){
    cart[i]=0;
}
return cart

}
const ShopContextProvider=(props)=>{
const[cartItems ,setcartItems]=useState(defaultCart())
    const ContextValue={all_product,cartItems}
    const addtocart=(itemId)=>{
setcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
    }
    const removefromcart=(itemId)=>{
        setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
            }
            
return(
    <ShopContext.Provider value={ContextValue}>
        {props.children}
    </ShopContext.Provider>
)
}
export default ShopContextProvider
