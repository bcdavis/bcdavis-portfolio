import React, { useContext, useState, useEffect } from 'react';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';

/**
 * TODO:
 * - mark nav items as active as you scroll along the page and when you click
 *   on a certain section using the nav bar.
 *
 * - Make nav bar span height of screen but keep nav items centered vertically
 */

/* Set the width of the side navigation to 250px and the left margin of the page content to 250px */

// if(sidenav.class === "sidenav"){
//   sidenav.getElementsByClassName += "responsive";
//   //sidenav.style.width = "250px";
//   document.getElementById("right-content").style.marginLeft = "250px";
// }
// else{
//   sidenav.class = "sidenav";
//   //sidenav.style.width = "0";
//   document.getElementById("right-content").style.marginLeft = "0";
// }

const NavBar = () => {
  const { nav } = useContext(PortfolioContext);
  const { path1, path2, path3, path4 } = nav;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <>
      <Nav className="sidenav" id="vert-nav" as="ul">
        <Nav.Item as="li">
          <div id="vert-nav-top">
            <h3>Ben Davis</h3>
            <p>UI/UX Designer & Developer</p>
          </div>
        </Nav.Item>
        <Nav.Item as="li">
          <Link
            className="nav-link to-hero"
            to="hero"
            smooth
            duration={700}
            spy={true}
            offset={-100}
          >
            {path1 || 'Home1'}
          </Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Link
            className="nav-link to-about"
            to="about"
            smooth
            duration={700}
            spy={true}
            offset={-100}
          >
            {path2 || 'About1'}
          </Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Link
            className="nav-link to-projects"
            to="projects"
            smooth
            duration={700}
            spy={true}
            offset={-100}
          >
            {path3 || 'Projects1'}
          </Link>
        </Nav.Item>
        <Nav.Item as="li">
          <Link
            className="nav-link to-contact"
            to="contact"
            smooth
            duration={700}
            spy={true}
            offset={-100}
          >
            {path4 || 'Contacts1'}
          </Link>
        </Nav.Item>
      </Nav>
    </>
  );
};

export default NavBar;
