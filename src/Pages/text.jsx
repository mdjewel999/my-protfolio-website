import bannerPic from "../../assets/myPic.png";
import { TypeAnimation } from "react-type-animation";
import resumeFile from "../../assets/Resume-of-Moriam_Akter_Swarna.pdf";

const Banner = () => {
  const handleDownload = () => {
    // const element = document.createElement("a");
    window.open(resumeFile, "_blank");
  };
  return (
    <>
      <div
        id="home"
        tabIndex="-1"
        className="banner-section flex flex-col lg:flex-row px-4 py-16 pt-32 md:py-20 md:pt-44 lg:px-10 lg:pt-32 lg:pb-4 
border-b border-gray-200 dark:bg-gray-900 dark:border-gray-600"
      >
        <div className=" flex flex-col items-center justify-center sm:mt-10 lg:justify-start lg:items-start sm:ml-4 lg:ml-16 lg:mb-4 lg:mt-36">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-6xl lobster-fonts title-text">
            Hi, I am <br /> Moriam Akter Swarna
          </h1>
          <div className="mt-4">
            <TypeAnimation
              className="text-violet-600 font-semibold"
              sequence={[
                "MERN Stack Developer",
                1000,
                "Web Developer",
                1000,
                "Tech Enthusiast",
                1000,
                "Web Designer",
                1000,
              ]}
              speed={50}
              style={{ fontSize: "2em" }}
              repeat={Infinity}
            />
          </div>
          <button
            id="input"
            onClick={handleDownload}
            type="button"
            className="primary-btn mt-6"
          >
            Download Resume
          </button>
        </div>
        <div className="flex items-center justify-center lg:mt-0 lg:ml-6 lg:mb-10">
          <img
            className="h-[50vh] 
      lg:h-[70vh] md:w-1/2
       lg:w-96 object-cover  border-2 p-1 rounded-lg"
            src={bannerPic}
            alt="Moriam Akter Swarna"
          />
        </div>
      </div>
    </>
  );
};

export default Banner;
