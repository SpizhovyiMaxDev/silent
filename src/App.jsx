import { lazy, Suspense } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import Navbar from "./modules/sections/components/Navbar/Navbar"
import Footer from "./modules/sections/components/Footer/Footer"
import PageEventListener from "./modules/pages/components/PageEventListener/PageEventListener"
import ProductsList from "./modules/common/components/ProductsList/ProductsList"
import PagesLoader from "./modules/common/components/PagesLoader/PagesLoader"


// import Home from "./modules/pages/components/Home/Home"
// import Productspage from "./modules/pages/components/Productspage/Productspage"
// import Cartpage from "./modules/pages/components/Cartpage/Cartpage"
// import Productpage from "./modules/pages/components/Productpage/Productpage"

const Home = lazy(() => import("./modules/pages/components/Home/Home"));
const Productspage = lazy(() => import("./modules/pages/components/Productspage/Productspage"));
const Cartpage = lazy(() => import("./modules/pages/components/Cartpage/Cartpage"));
const Productpage = lazy(()=>import("./modules/pages/components/Productpage/Productpage"));


function App() {
  return (
    <>
        <BrowserRouter>
        <PageEventListener />
        <Navbar />
        <Suspense fallback = {<PagesLoader /> }>
        <Routes>
          <Route path="home" element={<Home />} />
          <Route index element={<Navigate replace to="/home" />} />
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
          <Route path="categories/men's-clothing/:id" element={<Productpage />} />
          <Route path="categories/women's-clothing/:id" element={<Productpage />} />
        </Routes>
        </Suspense>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
