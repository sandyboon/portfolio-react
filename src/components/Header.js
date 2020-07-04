import React from 'react';

function Header() {
  return (
    <nav id="sidebar" className="d-flex justify-content-center">
      <ul id="mainNavLinks" className="list-unstyled align-self-center ml-auto">
        <li>
          <a rel="index" href="/" className="">
            <i className="fas fa-home"></i>
          </a>
        </li>
        <li>
          <a rel="about" href="/about" className="">
            <i className="fas fa-user-tie"></i>
          </a>
        </li>

        <li>
          <a rel="skills" href="/skills" className="">
            <i className="fas fa-cog"></i>
          </a>
        </li>
        <li>
          <a rel="gallery" href="/projects" className="">
            <i className="fas fa-briefcase"></i>
          </a>
        </li>
        <li>
          <a rel="contact" href="/contact" className="">
            <i className="far fa-envelope"></i>
          </a>
        </li>
      </ul>

      <ul id="contactLinks" className="list-unstyled">
        <li>
          <a
            href="https://www.linkedin.com/in/sandarbh-bhadauria-a223231a2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-linkedin"></i>
          </a>
        </li>
        <li>
          <a
            href="https://github.com/sandyboon"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fab fa-github"></i>
          </a>
        </li>
        <li>
          <a
            href="./assets/Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fas fa-book"></i>
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
