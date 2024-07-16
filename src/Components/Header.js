import React, { useEffect, useState } from "react";
import img2 from "../assets/logo.svg";
import img3 from "../assets/navIcon1.svg";
import img4 from "../assets/navIcon2.svg";
import img5 from "../assets/navIcon3.svg";
import { Link } from "react-scroll";
import { Nav } from "react-bootstrap";

export default function Header() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  return (
    <>
      <nav className="navbar navbar-expand-md navbar-expand-lg navbar-dark bg-dark fixed-top ">
        <div className="container">
          <a className="navbar-brand" href="javascript:void(0)">
            <img className="imgnav " src={img2} alt="img2" />
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#mynavbar"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse my-2 " id="mynavbar">
            <ul className="navbar-nav me-auto ms-auto">
              <Nav className="">
                <li className="nav-item">
                  <Nav.Link
                    href="#home"
                    className={` linkComponents text-white ${
                      activeLink === "home "
                        ? "active navbar-link"
                        : "navbar-link"
                    }`}
                    onClick={() => onUpdateActiveLink("home")}
                  >
                    Home
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link
                    href="#skills"
                    className={` linkComponents text-white ${
                      activeLink === "skills "
                        ? "active navbar-link"
                        : "navbar-link"
                    }`}
                    onClick={() => onUpdateActiveLink("skills")}
                  >
                    Skills
                  </Nav.Link>
                </li>
                <li className="nav-item">
                  <Nav.Link
                    href="#projects"
                    className={` linkComponents text-white ${
                      activeLink === "Projects "
                        ? "active navbar-link"
                        : "navbar-link"
                    }`}
                    onClick={() => onUpdateActiveLink("Projects")}
                  >
                    Projects
                  </Nav.Link>
                </li>
              </Nav>
            </ul>
            <a
              className="linkNav p-2 me-3 "
              href="https://www.linkedin.com/in/ahmed-zakaria-9b2a4b251/"
            >
              <img className="iconsNav" src={img3} alt="img3" />
            </a>
            <a
              className="linkNav p-2 me-2 "
              href="https://github.com/ahmedzakariahabib"
            >
              <img className="iconsNav" src={img4} alt="img4" />
            </a>
            <a className="linkNav p-2 me-5 " href="#">
              <img className="iconsNav" src={img5} alt="img5" />
            </a>

            <Link
              to="connect"
              smooth={true}
              duration={500}
              className="linkComponents connectnav border px-3 py-2  connectheader "
            >
              Let's Connect
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
