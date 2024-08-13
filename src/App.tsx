import "./App.css";
import { Navbar } from "./container/Navbar";
import { Hero } from "./container/Hero";
import { About } from "./container/About";
import { Contact } from "./container/Contact";
function App() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-indigo-600 to-indigo-950 overflow-hidden">
        <Navbar />
        <Hero />
        <About />
        <Contact />
      </div>
    </>
  );
}

export default App;
