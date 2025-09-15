import ContactCard from "./components/Contact/ContactCard";

import Home from "./pages/Home";
import Projects from "./pages/Projects";

function App() {
  return (
    <>
      <div className="w-full">
        <Home /> {/* Esta sección ocupa todo el ancho */}
      </div>

      <div className="max-w-[1200px] w-full mx-auto">
        <Projects /> 
        <ContactCard /> 
      </div>
    </>
  );
}

export default App;
