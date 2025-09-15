import ContactCard from "./pages/ContactCard";

import Home from "./pages/Home";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";

function App() {
  return (
    <>
      <div className="w-full">
        <Home />
      </div>

      <div className="max-w-[1200px] w-full mx-auto">
        <Projects /> 
        <Skills/>
        <ContactCard /> 
      </div>
    </>
  );
}

export default App;
