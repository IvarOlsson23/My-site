import React from "react";
import "./Button.scss";
import { motion } from "framer-motion";

const Button = (props) => {
  return (
    <motion.button whileHover={{ scale: 1.2 }} type="button" className="btn">
      {props.text}
    </motion.button>
  );
};

export default Button;
