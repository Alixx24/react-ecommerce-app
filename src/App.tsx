import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Store from "./pages/store/Store";
import Cart from "./pages/cart/Cart";

import Product from "./pages/product/Product";
import Layout from "./components/layout/Layout";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";


function App() {

  return (
    <>
    <ShoppingCartProvider>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Layout>
       </ShoppingCartProvider>
    </>
  )
}

export default App
