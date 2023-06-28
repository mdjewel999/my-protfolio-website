import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { TypeAnimation } from "react-type-animation";
import myImage from "../../../assets/Banner/jewel2.jpg";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content grid grid-cols-2 gap-24">
          <div className="slider-container">
            <h2 className="text-5xl mb-6 gradient-text font-bold">
              Hi, I m Md.Jewel a{" "}
            </h2>

            <div className="mt-4">
              <TypeAnimation
                className="gradient-text font-semibold"
                sequence={[
                  "MERN Stack Developer",
                  1000,
                  "Web Developer",
                  1000,
                  "Front end Developer",
                  1000,
                  "Web Designer",
                  1000,
                  "Professional Coder",
                  1000,
                ]}
                speed={50}
                style={{ fontSize: "2em" }}
                repeat={Infinity}
              />
            </div>
            <p className="py-6  text-white">
              I love to play with codes to build a great website. I know how
              things work. I have a diverse set of skills in HTML5, CSS3,
              Bootstrap, Tailwind, JavaScript, React, NodeJs, ExpressJs,
              MongoDB, and WordPress. I love bug/error fixing. Bug fixing and
              website optimization is my favorite task.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
          <div>
            <img
              src={myImage}
              className="max-w-sm rounded-lg shadow-2xl"
              alt="Banner"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
