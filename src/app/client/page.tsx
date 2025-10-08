import Navbar from "./components/NavBar"
import Hero from "./components/Hero"
import Catagories from "./components/Categories"
import HowToUse from "./components/Howtouse"
import Footer from "./components/Footer"
function page() {
  return (
    <div>
        <Navbar/>
        <Hero/>
        <Catagories/>
        <HowToUse/>
        <Footer/>
    </div>
  )
}

export default page