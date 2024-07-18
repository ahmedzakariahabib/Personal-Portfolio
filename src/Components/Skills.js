import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/skill1.svg";
import meter2 from "../assets/skill2.svg";
import meter3 from "../assets/skill3.svg";
import colorSharp from "../assets/skill2.svg";

const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <Row className="sectionSkill mx-auto p-5">
        <Col className="partsectionSkil">
          <div className="skill-bx ">
            <h1 className="text-center text-white my-2">Skills</h1>
            <h5 className="text-center text-white my-5">
              You Can See My Skills Here
            </h5>
            <Carousel
              responsive={responsive}
              infinite={true}
              className="skill-slider "
            >
              <div className="item   px-3 ">
                <img className=" img-fluid " src={meter1} alt="Image" />
                <h2 className="  text-center text-white mt-5">FrontEnd</h2>
              </div>
              <div className="item  px-3">
                <img className=" img-fluid   " src={meter2} alt="Image" />
                <h2 className="  text-center text-white mt-5">BackEnd</h2>{" "}
              </div>
              <div className="item  px-3">
                <img className=" img-fluid   " src={meter3} alt="Image" />
                <h2 className=" text-center text-white mt-5">
                  Data Science
                </h2>{" "}
              </div>
              <div className="item  px-3">
                <img className=" img-fluid  " src={meter1} alt="Image" />
                <h2 className="  text-center text-white mt-5">FrontEnd</h2>
              </div>
            </Carousel>
          </div>
        </Col>
      </Row>
    </section>
  );
};

export default Skills;
