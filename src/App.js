import "./Theme.scss";
import { createContext, useState } from "react";
import Button from "./components/button/Button";
import Heading from "./components/heading/Heading";
import Card from "./components/card/Card";
import Nav from "./components/nav/Nav";
import Text from "./components/text/Text";
import CaseCard from "./components/case-card/CaseCard";
import CaseCardVariant from "./components/case-card-variant/CaseCardVariant";
import Carousel from "./components/Carousel/Carousel";
import Footer from "./components/footer/footer";
import ScrollIndicator from "./components/scroll-indicator/ScrollIndicator";
import Hero from "./components/hero/Hero";
import Skills from "./components/Skills/Skills";
export const ThemeContext = createContext(null);
function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        <Nav></Nav>
        {/* <ScrollIndicator /> */}
        <div className="toggle-btn-div" onClick={toggleTheme}>
          <Button type="button" text="Toggle mode" />
        </div>
        <Hero />
        {/* <section
          className="block-container"
          id="intro"
          style={{ position: "relative", zIndex: 2 }}
        >
          <Heading heading="Welcome to my World" />
          <Text text="tempor incididunt ut labore et doloreut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, " />
        </section> */}
        <Card
          heading="Hello!"
          cardText="Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor incididunt ut labore et doloreut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor incididunt ut labore et doloreut labore et dolore magna aliqua. Ut enim ad minim veniamLorem ipsum dolor sit amet, consectetur adipiscing elit, tempor incididunt ut labore et doloreut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor incididunt ut labore et doloreut labore et dolore magna aliqua. Ut enim ad minim veniam"
          imageSource={require("../src/assets/Cardheadshot.jpg")}
        />

        <section className="page-section-1" id="projects">
          <Carousel />
        </section>
        <Skills />
        {/* <section className="page-section-2">
          <CaseCardVariant
            class="images"
            heading="Hello!"
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
            imageSource={require("../src/assets/case1.png")}
          />
        </section> */}
        <Footer />
      </div>
    </ThemeContext.Provider>
  );
}
export default App;
