import Hero from "../Components/Hero";
import Navber from "../Components/Navber";
import Products from "../Components/Products";
import About from "../Components/About";
import Mission from "../Components/Mission";
import Expertise from "../Components/Expertise";
import Reviews from "../Components/Reviews";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

function Home() {
  return (
    <div className="overflow-y-hidden bg-[#f1faee] w-full">
      <Navber />
      <Hero />
      <Products />
      <About />
      <Mission />
      <Expertise />
      <Reviews />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
