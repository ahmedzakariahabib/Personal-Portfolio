import { React } from "react";
import imageconnect from "../assets/contact-img.svg";

export default function Connect() {
  return (
    <>
      <section className="connectsection ">
        <div className="connectparent   ">
          <div className="parentconnect row container mx-auto pt-5 pb-5  ">
            <div className="col-sm-12 col-md-6 py-5 divconnimg ">
              <img
                className="img-fluid connimg"
                src={imageconnect}
                alt="imageconnect"
              />
            </div>
            <div className="col-sm-12 col-md-6 py-5">
              <p className="display-2 text-white">Get In Touch</p>
              <div className="row">
                <input
                  className=" p-3 m-2 inputIConnect col-sm-5 "
                  type="text"
                  placeholder="First Name"
                />
                <input
                  className="p-3  m-2 inputIConnect col-sm-5"
                  type="text"
                  placeholder="Last Name"
                />
                <input
                  className=" p-3  m-2 inputIConnect col-sm-5"
                  type="text"
                  placeholder="Email Address"
                />
                <input
                  className=" p-3 m-2 inputIConnect col-sm-5"
                  type="text"
                  placeholder="Phone No."
                />
                <textarea
                  className=" inputIConnect px-5 col-sm-10 m-2"
                  placeholder="Message"
                  rows={10}
                ></textarea>
              </div>
              <button className="p-4 h2 inputIConnect mb-5  inputBtn">
                Send
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
