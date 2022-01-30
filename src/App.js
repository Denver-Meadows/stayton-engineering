import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Experience from "./components/Experience";
import Industries from "./components/Industries";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Tagline from "./components/Tagline";

function App() {
  return (
    <div>
      <Navbar />
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
