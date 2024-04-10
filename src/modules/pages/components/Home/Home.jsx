import Hero from "../../../sections/components/Hero/Hero"
import Banner from "../../../sections/components/Banner/Banner"
import ProudProducts from "../../../sections/components/ProudProducts/ProudProducts"
import Navbar from "../../../common/components/Navbar/Navbar";
import Footer from "../../../common/components/Footer/Footer";


function Home(){
    return (
        <>
            <Navbar />
            <Hero />
            <Banner 
                image = {"./banner/banner.webp"} 
                title = {"Check out our new products"}
                description = {"From cutting-edge gadgets to timeless accessories, our carefully curated selection ensures that you'll find something to suit every taste and occasion."} 
            />
            <ProudProducts />
            <Footer/>
        </>
    )
}

export default Home
