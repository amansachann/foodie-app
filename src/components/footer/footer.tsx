import React from "react";
import classes from "./footer.module.css";

const Footer = () => {
  return (
    <>
      <footer className={classes.footer}>
          <p>NextLevel Food</p>
          <p>|</p>
          <p>
            Created with ❤️ by{" "}
            <a href="https://www.linkedin.com/in/aman-sachan-mr-hacker/" target="_blank">
              Aman Sachan
            </a>
          </p>
      </footer>
    </>
  );
};

export default Footer;
