import "./index.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Service";
import Pricing from "./components/Pricing";
import Testimony from "./components/Testimony";
import Feature from "./components/Feature";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Hero />
        <About />
        <Services />
        <Pricing />
        <Testimony />
        <Feature />
        <FAQ />
        <Contact />
        <Footer />
      </div>
    </>
  );
}

export default App;
