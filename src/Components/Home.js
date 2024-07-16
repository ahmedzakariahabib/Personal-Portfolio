import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/banner.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import Skills from "./Skills";

const Home = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const toRotate = ["Web Developer", "FrontEnd Designer", "BackEnd Designer"];
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <>
      <section className="bigMain1 mt-5 img-fluid pt-5 mt-5 " id="home">
        <Container>
          <Row className="align-items-center mt-5 pt-5">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) => (
                  <div
                    className={
                      isVisible ? "animate__animated animate__fadeIn" : ""
                    }
                  >
                    <span className="tagline main1 p-2 ">
                      Welcome to my Portfolio
                    </span>
                    <h1 className="main3 mt-5 display-2">
                      {`Hi I'm Ahmed`}
                      <br></br>
                      {`Zakaria `}
                      <span>{text}</span>
                    </h1>
                    <p className="main3">
                      Hello EVeryone ,I have 3 years of Experience in Web
                      Development
                    </p>
                    <button
                      className="my-5 h3 text-white bg-black border-0"
                      onClick={() => console.log("connect")}
                    >
                      Let's connect <ArrowRightCircle size={25} />
                    </button>
                  </div>
                )}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <img
                className="main2 img-fluid  mt-5 mb-5 pb-5"
                src={headerImg}
                alt="Headder Img"
              />
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
};

export default Home;
