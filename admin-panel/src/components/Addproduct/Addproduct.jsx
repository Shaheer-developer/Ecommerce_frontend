import React,{useState} from "react";
import "./Addproduct.css";
import upload_area from "../../assets/admin-assets/upload_area.svg";

const Addproduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({ 
    name:"",
    image:"",
    category:"women",
    new_price:"",
    old_price:""
  });
  const imageHandler = (e) => {
    setImage(e.target.files[0]); 
  }
  const changeHandler = (e) => {
    setProductDetails({...productDetails, [e.target.name]:e.target.value});
  }
  const Add_Product = async() => {
    let responseData;
    let product = productDetails;
    let formData = new FormData();
    formData.append('product', image);
    await fetch('http://localhost:4000/upload', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
      },
      body: formData
    })
    .then((response) => response.json())
    .then((data) => {
      responseData = data;
    })
    if(responseData.success){
      product.image = responseData.image_url;
      await fetch('http://localhost:4000/add-product', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(product)
      })
      .then((response) => response.json())
      .then((data) => {
        data.success?alert("Product Added Successfully"):alert("Product Not Added");
      })   
  }
}
  return (
    <div className="add-product">
      <div className="addproduct-itemfield">
        <p>Product Title</p>
        <input value={productDetails.name} onChange={changeHandler} type="text" name="name" placeholder="Type here" />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input value={productDetails.old_price} onChange={changeHandler} type="text" name="old_price" placeholder="Type here" />
        </div>
        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input value={productDetails.new_price} onChange={changeHandler} type="text" name="new_price" placeholder="Type here" />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select value={productDetails.category} onChange={changeHandler} name="category" className="addproduct-selector">
          <option value="women">Women</option>
          <option value="men">Men</option>
          <option value="kid">Kid</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img src={image?URL.createObjectURL(image):upload_area} className="addproduct-thumbnail-img" alt=""/>
        </label>
        <input type="file" onChange={imageHandler} image="image" id="file-input" hidden/>
      </div>
      <button onClick={()=>{Add_Product()}} className="addproduct-button">ADD</button>   
    </div>
  );
}

export default Addproduct