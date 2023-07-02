// import React, { useState } from 'react';
// import "./SingleProject.css"

const SingleProject = ({ project, setSingleProject }) => {
  // const [liFold, setLiFold] = useState(true);

  return (
    <div
      data-aos="zoom-in"
      data-aos-duration="500"
      className="single-project mx-auto bg-bandSecondary shadow-xl text-white rounded-lg lg:h-full transform rotate-30 hover:rotate-0 transition-transform duration-300"
    >
      <figure className="px-2 pt-2 w-[300px] h-[300px]">
        <img
          src={project.image}
          alt="Shoes"
          className="w-full h-full object-cover object-top transition-all duration-[5s] ease-linear hover:object-bottom"
        />
      </figure>
      <div className="card-body items-center text-center  flex flex-col flex-grow justify-between">
        <h2 className="card-title text-xl font-bold">{project.projectName}</h2>
        <p className="text-left leading-3">Technologies:</p>
        <p className="list-disc list-inside leading-5">
          {project.technology.map((tech, i) => (
            <span key={i} className="text-left leading-3 text-xs my-1">
              &#8226; &nbsp;{tech} &nbsp;
            </span>
          ))}
        </p>
        <div className="card-actions mt-auto">
          <label
            onClick={() => {
              setSingleProject(project);
              window.my_modal_4.showModal();
            }}
            htmlFor="my-modal-5"
            className="btn text-white bg-bandPrimary hover:text-bandPrimary hover:bg-white transform duration-300 px-10 py-2 rounded-full font-bold"
          >
            Details
          </label>
        </div>
      </div>
    </div>
  );
};

export default SingleProject;
