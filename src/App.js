import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Industries from "./components/Industries";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Tagline from "./components/Tagline";
import SideNav from "./components/SideNav";

function App() {
  return (
    <div>
      <Navbar />
      <SideNav />
      <Hero />
      <Tagline />
      <Services />
      <Experience />
      <Industries />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
