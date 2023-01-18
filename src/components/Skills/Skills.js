import { React } from "react";
import "./Skills.scss";
import { motion } from "framer-motion";
import Heading from "../heading/Heading";

const items = [
  {
    id: 1,
    title: "HTML",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor incididunt ut",
    style: "#151A35",
  },
  {
    id: 2,
    title: "CSS",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor incididunt ut",
    style: "#0B1013",
  },
  {
    id: 3,
    title: "Javascript",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor incididunt ut",
    style: "#1B3C24",
  },
  {
    id: 4,
    title: "React.js",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, tempor incididunt ut",
    style: "#281b1c",
  },
];

const Skills = () => {
  return (
    <div className="skills-wrapper">
      <Heading heading="My skills" />
      <div className="spheres-wrapper">
        {items.map((items, index) => {
          return (
            <div key={index}>
              <label className="skills-label" htmlFor="label">
                {items.title}
              </label>
              <motion.div
                whileHover={{
                  width: 300,
                  height: 300,
                  transition: { duration: 0.5 },
                }}
                style={{ background: `${items.style}` }}
                className="hover-sphere"
              >
                <p className="sphere-desc">{items.desc}</p>
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
