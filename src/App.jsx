import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import ProductsList from "./modules/common/components/ProductsList/ProductsList"

import Home from "./modules/pages/components/Home/Home"
import Navbar from "./modules/sections/components/Navbar/Navbar"
import Footer from "./modules/sections/components/Footer/Footer"
import Productspage from "./modules/pages/components/Productspage/Productspage"
import Cartpage from "./modules/pages/components/Cartpage/Cartpage"
import Productpage from "./modules/pages/components/Productpage/Productpage"
import PageEventListener from "./modules/pages/components/PageEventListener/PageEventListener"



function App() {

  return (
    <>
        <BrowserRouter>
  <PageEventListener />
  <Navbar />
  <Routes>
    <Route index element={<Navigate replace to="/home" />} />
    <Route path="home" element={<Home />} />
    <Route path="categories" element={<Productspage />}>
      <Route index element={<Navigate replace to="all" />} />
      <Route path="all" element={<ProductsList type="all" />} />
      <Route path="jewelery" element={<ProductsList type="jewelery" />} />
      <Route path="electronics" element={<ProductsList type="electronics" />} />
      <Route path="men's-clothing" element={<ProductsList type="men's clothing" />} />
      <Route path="women's-clothing" element={<ProductsList type="women's clothing" />} />
    </Route>
    <Route path="cart" element={<Cartpage />} />
    <Route path="categories/jewelery/:id" element={<Productpage />} />
    <Route path="categories/electronics/:id" element={<Productpage />} />
    <Route path="categories/mens's-clothing/:id" element={<Productpage />} />
    <Route path="categories/women's-clothing/:id" element={<Productpage />} />
  </Routes>
  <Footer />
</BrowserRouter>

    </>
  )
}

export default App
