import React from "react";

const Footer = () => {
  return (
    <footer className="footer black white-text">
      <div className="container">
        <div className="copyright-content">
          Copyright &copy; {new Date().getFullYear()}
        </div>
        <ul className="links">
          <li>
            <a
              href="https://www.linkedin.com/in/vivek-maddeshiya/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.github.com/vivekiet22"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-github"></i>
            </a>
          </li>
          <li>
            <a
              href="https://www.github.com/vivekiet22"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
