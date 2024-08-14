import "./App.css";
import { useState } from "react";
import { Navbar } from "./container/Navbar";
import { Hero } from "./container/Hero";
import { About } from "./container/About";
import { Contact } from "./container/Contact";
import { Services } from "./container/Services";
import { Footer } from "./container/Footer";
import { Theme } from "@radix-ui/themes";
function App() {
  const [activetheme, setActivetheme] = useState("/src/assets/hero2.jpg");
  return (
    <>
      <Theme appearance="dark" accentColor="ruby">
        <div
          className={`min-h-screen ${
            activetheme == "/src/assets/hero2.jpg" &&
            "bg-gradient-to-br from-indigo-600 to-indigo-950 text-white"
          } ${
            activetheme == "/src/assets/hero3.jpg" &&
            "bg-gradient-to-br from-slate-100 to-cyan-200 text-black"
          }
        ${
          activetheme == "/src/assets/hero1.jpg" &&
          "bg-gradient-to-br from-indigo-600 to-indigo-950 text-white"
        } overflow-hidden`}
        >
          <Navbar />
          <Hero activetheme={activetheme} setActivetheme={setActivetheme} />
          <About />
          <Contact />
          <Services />
          <Footer />
        </div>
      </Theme>
    </>
  );
}

export default App;
