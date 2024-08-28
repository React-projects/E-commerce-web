import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LogInSignUp from "./Pages/LogIngSignUp";
import Footer from "./Footer/Footer";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route path="mens" element={<ShopCategory Category="mens" />} />
          <Route path="womans" element={<ShopCategory Category="womans" />} />
          <Route path="kids" element={<ShopCategory Category="kids" />} />
          <Route path="product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<LogInSignUp />} />
        </Routes>
        <Footer/>
      </BrowserRouter>

    </div>
  );
}

export default App;
