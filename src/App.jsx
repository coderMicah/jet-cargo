import AboutUs from "./components/AboutUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Jumbotron from "./components/Jumbotron";
import Navbar from "./components/Navbar";
import Process from "./components/Process";
import Services from "./components/Services";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import TopNav from "./components/TopNav";

function App() {
  return (
    <>
      <header>
        <TopNav />
        <Navbar />
      </header>

      <main>
        <Hero />
        <AboutUs />
        <Services />
        <Process />
        <Testimonials/>
        <Team/>
        <Jumbotron/>
      </main>

      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;
