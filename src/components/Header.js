import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav id="sidebar" className="d-flex justify-content-center">
      <ul id="mainNavLinks" className="list-unstyled align-self-center ml-auto">
        <li>
          <a rel="index" href="/deployed-react-portfolio/" className="">
            <i className="fas fa-home"></i>
          </a>
        </li>
        <li>
          <Link to={'/deployed-react-portfolio/about'}>
            <i className="fas fa-user-tie"></i>
          </Link>
        </li>

        <li>
          <Link to={'/deployed-react-portfolio/skills'}>
            <i className="fas fa-cog"></i>
          </Link>
        </li>
        <li>
          <Link to={'/deployed-react-portfolio/projects'}>
            <i className="fas fa-briefcase"></i>
          </Link>
        </li>
        <li>
          <Link to={'/deployed-react-portfolio/contact'}>
            <i className="far fa-envelope"></i>
          </Link>
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
