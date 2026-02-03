import ContactCard from "../sections/ContactCard";
import Footer from "../sections/Footer";
import Home from "../sections/Home";
import Projects from "../sections/Projects";
import Skills from "../sections/Skills";

export default function Page() {
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
