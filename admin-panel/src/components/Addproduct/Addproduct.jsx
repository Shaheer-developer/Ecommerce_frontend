import React from "react";
import "./Addproduct.css";

const Addproduct = () => {
  return (
    <div className="add-product">
      <div class="addproduct-itemfield">
        <p>Product Title</p>
        <input type="text" name="name" placeholder="Type here" />
      </div>
      <div class="addproduct-price">
        <div class="addproduct-itemfiled">
          <p>Price</p>
          <input type="text" name="old_price" placeholder="Type here" />
        </div>
        <div class="addproduct-itemfiled">
          <p>Offer Price</p>
          <input type="text" name="new_price" placeholder="Type here" />
        </div>
      </div>
    </div>
  );
}

export default Addproduct