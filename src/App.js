import './App.css';
import Navbar from './components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Shop from "./pages/Shop"
import Shopcategory from './pages/Shopcategory';
import LoginSignup from './pages/Loginsignup';
import Cart from './pages/Cart';
import Product from './pages/Product';
import Footer from './components/Footer/Footer';
import men_banner from './components/assets/banner_mens.png'
import women_banner from './components/assets/banner_women.png'
import kids_banner from './components/assets/banner_kids.png'


function App() {
  return (
    <div >
      <BrowserRouter>
<Navbar/>
<Routes>
<Route path="/" element={<Shop/>}/>
<Route path="/mens" element={<Shopcategory banner={men_banner} category="men"/>}/>
<Route path="/womens" element={<Shopcategory banner={women_banner}  category="women"/>}/>
<Route path="/kids" element={<Shopcategory  banner={kids_banner}  category="kid"/>}/>
<Route path="/product" element={<Product/>}>
  <Route path=':productId' element={<Product/>}/>
</Route>
<Route path="/cart" element={<Cart/>}/>
<Route path="/login" element={<LoginSignup/>}/>

</Routes>
<Footer/>
</BrowserRouter>
    </div>
  );
}

export default App;
