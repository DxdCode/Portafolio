import ContactCard from "./pages/ContactCard";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function App() {
  return (
    <>
      <Home />
      <div className="max-w-[1200px] w-full mx-auto">
        <Projects />
        <Skills />
        <ContactCard />
      </div>
      <Footer />
    </>
  );
}

export default App;
