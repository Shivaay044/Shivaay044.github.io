import { ThemeProvider } from "./theme/ThemeContext";
import Navbar from "./Components/Navbar/Navbar";
import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Skills from "./Components/Skills/Skills";
import Projects from "./Components/Projects/Projects";
import Process from "./Components/Process/Process";
import Timeline from "./Components/Timeline/Timeline";
import OpenSource from "./Components/OpenSource/OpenSource";
import Writing from "./Components/Writing/Writing";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <ThemeProvider>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Process />
      <Timeline />
      <OpenSource />
      <Writing />
      <Contact />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
