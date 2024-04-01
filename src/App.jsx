import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
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
            <Route index element = {<Navigate replace to = "/home" />} /> 
            <Route path = "home" element={<Home /> } />
            <Route path="categories" element={<Productspage /> } />
            <Route path = "cart" element = {<Cartpage /> } />
            <Route path = "categories/:id" element = {<Productpage />} /> 
          </Routes>
          <Footer />
        </BrowserRouter>
    </>
  )
}

export default App
