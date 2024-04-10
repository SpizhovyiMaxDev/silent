import { lazy, Suspense } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import PageEventListener from "./modules/pages/components/PageEventListener/PageEventListener"
import ProductsList from "./modules/common/components/ProductsList/ProductsList"
import PagesLoader from "./modules/common/components/PagesLoader/PagesLoader"
import PageError from "./modules/common/components/PageError/PageError";

const Home = lazy(() => import("./modules/pages/components/Home/Home"));
const Productspage = lazy(() => import("./modules/pages/components/Productspage/Productspage"));
const Cartpage = lazy(() => import("./modules/pages/components/Cartpage/Cartpage"));
const Productpage = lazy(()=>import("./modules/pages/components/Productpage/Productpage"));


function App() {
  return (
    <>
        <BrowserRouter>
        <PageEventListener />
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
          <Route path = "*" element = {<PageError />} />
        </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
