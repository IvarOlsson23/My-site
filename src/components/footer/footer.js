import React from "react";
import "./footer.scss";
import { RxLinkedinLogo, RxGithubLogo, RxInstagramLogo } from "react-icons/rx";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-content">
        <p>Contact me for work please!</p>
        <p>Contact me for work please!</p>
      </div>
      <div className="sm-symbols">
        <motion.a
          href="https://www.instagram.com/ivarolssonwl/"
          className="sm-icons"
          whileHover={{ scale: 1.8, rotate: 9 }}
        >
          <RxLinkedinLogo className="sm-symbols-inside" />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/ivarolssonwl/"
          className="sm-icons"
          whileHover={{ scale: 1.8, rotate: -9 }}
        >
          <RxGithubLogo className="sm-symbols-inside" />
        </motion.a>
        <motion.a
          href="https://www.instagram.com/ivarolssonwl/"
          className="sm-icons"
          whileHover={{ scale: 1.8, rotate: 14 }}
        >
          <RxInstagramLogo className="sm-symbols-inside" />
        </motion.a>
      </div>
    </div>
  );
};

export default Footer;
