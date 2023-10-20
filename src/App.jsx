import AboutUs from "./components/AboutUs";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import TopNav from "./components/TopNav";

function App() {
  return (
    <>
      <header>
        <TopNav />
        <Navbar />
      </header>

      <main >
         <Hero />
         <AboutUs/>
         <Services/>
      </main>

     
    </>
  );
}

export default App;
