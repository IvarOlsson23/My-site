import "./Theme.scss";
import Button from "./components/button/Button";
import Heading from "./components/heading/Heading";
import Card from "./components/card/Card";
import Nav from "./components/nav/Nav";
import CaseCard from "./components/case-card/CaseCard";
import CaseCardVariant from "./components/case-card-variant/CaseCardVariant";

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Button text="Dark Theme" />
      <Button text="Light Theme" />
      <Card
        heading="Hello!"
        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        imageSource={require("../src/assets/profile.jpg")}
      />
      <section className="page-section-1">
        <Heading heading="My Projects" />
        <CaseCard
          class="images"
          heading="Hello!"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          imageSource={require("../src/assets/case1.png")}
        />
      </section>
      <section className="page-section-2">
        <CaseCardVariant
          class="images"
          heading="Hello!"
          text="Lorem ipsum dolor sit amet, consectetur adipiscing elit"
          imageSource={require("../src/assets/case1.png")}
        />
      </section>
    </div>
  );
}

export default App;
