import React from "react";
import imageLogo from "../assets/logo.svg";
import img3 from "../assets/navIcon1.svg";
import img4 from "../assets/navIcon2.svg";
import img5 from "../assets/navIcon3.svg";

export default function Footer() {
  return (
    <>
      <footer className="footerdivide">
        <div className="foooterPart ">
          <div className="row container mx-auto p-5">
            <div className="col-sm-12 col-md-6">
              <h1>See My Projects At Once </h1>
              <h1>& leave Here Your E-mail</h1>
              <h1>Address , Yasta</h1>
            </div>
            <div className="col-sm-12 col-md-6 ">
              <div className="footerbutton p-3">
                <h4 className="mt-4">Email Address Yasta</h4>
                <button className="input-button p-4 footerbutton1  h3 ">
                  submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="footersecion footerend ">
          <div className="row container  mx-auto py-5 ">
            <div className="col-sm-12 col-md-6">
              <img className="mb-3 mt-5" src={imageLogo} al="imageLoge" />
            </div>
            <div className="col-sm-12 col-md-6 mt-5 ">
              <div className="marginfooter mb-3">
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
              </div>
              <p className="text-white my-4">
                --Copyrights 2024-- All Rights Reserved here By Ahmed Zakaria
                Habib{" "}
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
