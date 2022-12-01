import "./Theme.scss";
import { createContext, useState } from "react";
import Button from "./components/button/Button";
import Heading from "./components/heading/Heading";
import Card from "./components/card/Card";
import Nav from "./components/nav/Nav";
import CaseCard from "./components/case-card/CaseCard";
import CaseCardVariant from "./components/case-card-variant/CaseCardVariant";

export const ThemeContext = createContext(null);
function App() {
  const [theme, setTheme] = useState("dark");

  const toggleTheme = () => {
    setTheme((current) => (current === "light" ? "dark" : "light"));
  };
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App" id={theme}>
        {/* <Card
          heading="Hello!"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor incididunt ut labore et doloreut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor incididunt ut labore et doloreut labore et dolore magna aliqua. Ut enim ad minim veniamLorem ipsum dolor sit amet, consectetur adipiscing elit, tempor incididunt ut labore et doloreut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor incididunt ut labore et doloreut labore et dolore magna aliqua. Ut enim ad minim veniam"
          imageSource={require("../src/assets/profile.jpg")}
        /> */}
        <Nav></Nav>
        {/* <Button text="Dark Theme" />
      <Button text="Light Theme" /> */}
        {/* <section className="page-section-1">
        <Heading heading="My Projects" />
        <CaseCard
          class="images"
          heading="Hello!"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          imageSource={require("../src/assets/case1.png")}
        />
      </section> */}
        {/* <section className="page-section-2">
        <CaseCardVariant
          class="images"
          heading="Hello!"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          imageSource={require("../src/assets/case1.png")}
        />
      </section> */}
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
