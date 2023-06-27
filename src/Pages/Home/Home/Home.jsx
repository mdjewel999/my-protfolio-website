import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import myImage from "../../../assets/Banner/jewel2.jpg";
import "./Home.css";

const Home = () => {
  const texts = [
    "Front end Developer",
    "Professional Coder",
    "MERN Stack Developer",
    "A NoSQL database and flexible",
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content grid grid-cols-2 gap-24">
          <div className="slider-container">
            <h2 className="text-7xl mb-6 gradient-text font-semibold">Hi, I m Md.Jewel </h2>
            <Slider {...settings}>
              {texts.map((text, index) => (
                <div key={index}>
                  <h1 className="slider-text  text-3xl text-white">
                  <span className="text-red-600"> a </span> {text}
                  </h1>
                </div>
              ))}
            </Slider>
            <p className="py-6  text-white">
              I love to play with codes to build a great website.  I know
              how things work.  I have a diverse set of skills in HTML5,
              CSS3, Bootstrap, Tailwind, JavaScript, React,  NodeJs,
              ExpressJs, MongoDB, and WordPress. I love bug/error fixing.
              Bug fixing and website optimization is my favorite task.
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
