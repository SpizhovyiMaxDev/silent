import Hero from "../../../sections/components/Hero/Hero"
import Banner from "../../../sections/components/Banner/Banner"
import ProudProducts from "../../../sections/components/ProudProducts/ProudProducts"

function Home(){
    return (
        <>
            <Hero />
            <Banner 
                image = {"./banner/banner.webp"} 
                title = {"Check out our new products"}
                description = {"From cutting-edge gadgets to timeless accessories, our carefully curated selection ensures that you'll find something to suit every taste and occasion."} 
            />
            <ProudProducts />
        </>
    )
}

export default Home
