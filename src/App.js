import "./Theme.scss";
import { createContext, useState } from "react";
import Button from "./components/button/Button";
import Nav from "./components/nav/Nav";
import Carousel from "./components/Carousel/Carousel";
import Footer from "./components/footer/footer";
import ScrollIndicator from "./components/scroll-indicator/ScrollIndicator";
import Hero from "./components/hero/Hero";
import Skills from "./components/Skills/Skills";
import Background from "./components/Background/Background";
import Heading2 from "./components/heading/Heading2";
import Card from "./components/card/Card";
export const ThemeContext = createContext(null);
function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Background />
        <Nav></Nav>
        <ScrollIndicator />
        <div className="toggle-btn-div" onClick={toggleTheme}>
          <Button text="Toggle mode" />
        </div>
        <div id="hero"></div>
        <Hero />
        <Card />
        <div id="Projects"></div>
        <div className="carousel-with-heading">
          <Heading2 heading="Some of my projects" />
        </div>
        <Carousel />
        <div id="Skills"></div>
        <Skills />

        <div id="Contact"></div>
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
export default App;
