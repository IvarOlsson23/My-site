import { React } from "react";
import "./Skills.scss";
import { motion } from "framer-motion";
import Heading2 from "../heading/Heading2";

const items = [
  {
    id: 1,
    title: "HTML",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor incididunt ut",
    style: "#F16529",
  },
  {
    id: 2,
    title: "CSS",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor incididunt ut",
    style: "#0070BA",
  },
  {
    id: 3,
    title: "Javascript",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor incididunt ut",
    style: "#F7D238",
  },
  {
    id: 4,
    title: "React.js",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor incididunt ut",
    style: "#5ED3F3",
  },
];
const items2 = [
  {
    id: 1,
    title: "Tailwind.css",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor incididunt ut",
    style: "#42A7B3",
  },
  {
    id: 2,
    title: "Storybook",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor incididunt ut",
    style: "#F74581",
  },
  {
    id: 3,
    title: "Figma",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor incididunt ut",
    style: "#9D56F7",
  },
  {
    id: 4,
    title: "Node.js",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor incididunt ut",
    style: "#6AA05C",
  },
];

const Skills = () => {
  return (
    <div className="skills-wrapper">
      <Heading2 heading="My skills" />
      <div className="spheres-wrapper">
        {items.map((items, index) => {
          return (
            <div key={index}>
              <motion.div
                whileHover={{
                  width: 150,
                  height: 150,
                  transition: { duration: 0.5 },
                }}
                style={{ background: `${items.style}` }}
                className="hover-sphere"
              >
                <p className="sphere-desc">{items.title}</p>
              </motion.div>
            </div>
          );
        })}
      </div>
      <div className="spheres-wrapper2">
        {items2.map((items, index) => {
          return (
            <div key={index}>
              <motion.div
                whileHover={{
                  width: 120,
                  height: 120,
                  transition: { duration: 0.5 },
                }}
                style={{ background: `${items.style}` }}
                className="hover-sphere2"
              >
                <p className="sphere-desc">{items.title}</p>
              </motion.div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Skills;

//  function Item() {
//    const [isOpen, setIsOpen] = useState(false);
//    const toggleOpen = () => setIsOpen(!isOpen);
//    for (let i = 0; i < items.length; i++) {
//      console.log(i);
//      return (
//        <motion.div className="skills-circle" layout onClick={toggleOpen}>
//          <motion.div className="icon" layout>
//            {items[i].text}
//          </motion.div>
//          <AnimatePresence>{isOpen && <Content />}</AnimatePresence>
//        </motion.div>
//      );
//    }
//  }

//  function Content() {
//    return (
//      <motion.div
//        layout
//        initial={{ opacity: 0 }}
//        animate={{ opacity: 1 }}
//        exit={{ opacity: 0 }}
//        className="popup"
//      >
//        <div className="row" />
//        <div className="row" />
//        <div className="row" />
//      </motion.div>
//    );
//  }

//  return (
//    <div className="skills-wrapper">
//      <AnimateSharedLayout>
//        <motion.ul layout>
//          {items.map((item) => (
//            <Item key={item.key} />
//          ))}
//        </motion.ul>
//      </AnimateSharedLayout>
//    </div>
//  );
