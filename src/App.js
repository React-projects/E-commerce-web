import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar/Navbar";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LogInSignUp from "./Pages/LogIngSignUp";
import Footer from "./Components/Footer/Footer";
import ManBanner from "./Components/Assets/banner_mens.png";
import WomanBanner from "./Components/Assets/banner_women.png";
import KidsBanner from "./Components/Assets/banner_kids.png";
function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />} />
          <Route
            path="mens"
            element={<ShopCategory banner={ManBanner} category="men" />}
          />
          <Route
            path="womans"
            element={<ShopCategory banner={WomanBanner} category="women" />}
          />
          <Route
            path="kids"
            element={<ShopCategory banner={KidsBanner} category="kid" />}
          />
          <Route path="product" element={<Product />}>
            <Route path=":productId" element={<Product />} />
          </Route>
          <Route path="cart" element={<Cart />} />
          <Route path="login" element={<LogInSignUp />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
