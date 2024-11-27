import React, { useContext } from "react";
import "./Cartitems.css"
import { ShopContext } from "../../context/Shopcontext";
import remove_icon from "../assets/cart_cross_icon.png"

const Cartitems = () => {
    const { all_product, cartItems, removefromcart , getTotalCartAmount } = useContext(ShopContext)
    return (
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_product.map((e) => {
                if (cartItems[e.id] > 0) {
                    return (<div>
                        <div className="cartitems-format cartitems-format-main">
                            <img src={e.image} alt="" className="cartitem-producticon" />
                            <p>{e.name}</p>
                            <p className="cartitems-price">${e.new_price}</p>
                            <button className="cartitems-quantity">{cartItems[e.id]}</button>
                            <p className="cartitems-total">${e.new_price * cartItems[e.id]}</p>
                            <img className="cartitems-removeicon" src={remove_icon} onClick={() => { removefromcart(e.id) }} alt="" />
                        </div>
                        <hr />

                    </div>
                    )
                }
                return null;
            })
            }
            <div className="cartitems-down">
                <div className="cartitem-total">
                    <h1>Cart Total</h1>
                    <div>
                        <div className="cartitems-total-items">
                            <p>Subtotal</p>
                            <p>$ {getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cartitems-total-items">
                            <p>Shipping fee</p>
                            <p>Free</p>
                        </div>
                        <hr />
                        <div class="cartitems-total-items">
                            <h3>Total</h3>
                            <h3>$ {getTotalCartAmount()}</h3>
                        </div>
                    </div>
                    <button>PROCEED TO CHECKOUT</button>
                </div>
                    <div class="cartitems-promocode">
                        <p>if you have a promo code , Enter it here</p>
                        <div class="cartitems-promobox">
                            <input type="text" placeholder="promo code"/>
                            <button>Submit</button>
                        </div>
                    </div>
            </div>
        </div>
    )
}
export default Cartitems