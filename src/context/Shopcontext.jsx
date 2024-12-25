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

        if(localStorage.getItem("auth-token")){
            fetch("http://localhost:4000/getcart",{
                method:"POST",
                headers:{
                    Accept:"application/form-data",
                    "auth-token":`${localStorage.getItem("auth-token")}`,
                    'Content-Type':"application/json",
                },
                body:"",
            })
            .then((response)=>response.json())
            .then((data)=>setcartItems(data))
        }
    },[])
    const addtocart = (itemId) => {
        setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/addtocart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    "auth-token":`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"itemId":itemId})
            } )
            .then((response)=>response.json())
            .then((data)=>console.log(data))
        }
    }

    const removefromcart = (itemId) => {
        setcartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
        if(localStorage.getItem('auth-token')){
            fetch('http://localhost:4000/removefromcart',{
                method:'POST',
                headers:{
                    Accept:'application/form-data',
                    "auth-token":`${localStorage.getItem('auth-token')}`,
                    'Content-Type':'application/json',
                },
                body:JSON.stringify({"itemId":itemId})
            } )
            .then((response)=>response.json())
            .then((data)=>console.log(data))
        }
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
