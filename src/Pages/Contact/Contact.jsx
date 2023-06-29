import { Link } from "react-router-dom";
import person from "../../assets/skills/person.png";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import './Contact.css'

const Contact = () => {
  return (
    <div className="mb-8 p-4 backgroundColor text-white">
      <div>
        <h1 className="text-center mt-16 text-5xl font-bold">
          Contact With Me
        </h1>
      </div>
      <div>
        <div className="hero  mt-16 ">
          <div className="hero-content flex-col lg:flex-row-reverse">
            <div className="card flex-shrink-0 w-full  shadow-2xl ">
              <div className="card-body">
                <div className=" mb-6">
                  <div className="form-control w-full ">
                    <label className="label">
                      <span className="label-text mb-2 text-white">YOUR NAME</span>
                    </label>
                    <input
                      type="text"
                      placeholder="name"
                      className="input input-bordered text-black"
                    />
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text mb-2 text-white">PHONE NUMBER</span>
                    </label>
                    <input
                      type="text"
                      placeholder="number"
                      className="input input-bordered text-black"
                    />
                  </div>
                </div>
                <div className="form-control mb-6">
                  <label className="label">
                    <span className="label-text mb-2 text-white">YOUR EMAIL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered text-black"
                  />
                </div>

                <div className="form-control mb-8">
                  <span className="label-text mb-2  text-white">YOUR MESSAGE</span>
                  <textarea
                    className="textarea textarea-bordered  h-24 text-black"
                    placeholder=""
                  ></textarea>
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-primary hover:bg-white hover:text-black hover:font-bold">Send Massage</button>
                </div>
              </div>
            </div>

            <div className="text-center lg:text-left">
              <div className="card w-96  shadow-xl">
                <figure>
                  <img src={person} alt="Shoes" />
                </figure>
                <div className="card-body">
                  <h1 className="card-title text-2xl">MD.JEWEL RHAMAN ZEHAD</h1>
                  <h2 className="mt-4">MERN Stack-developer</h2>
                  <p>
                    I am available for freelance work. Connect with me via email
                    and call in to my account.
                  </p>
                  <p className="mt-4">Phone: +8801761105578</p>
                  <p>Email: mdjewel878761@gmail.com</p>
                  <h3 className="mt-4">FIND WITH ME</h3>
                  <div className="card-actions justify-start">
                    <div className="flex gap-10">
                      <Link
                        className="flex justify-center items-center mt-2 w-[52px] h-[52px] text-gray-700 hover:text-gray-900 rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400  dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
                        target="_blank"
                        to="https://www.facebook.com/"
                      >
                        {" "}
                        <FaFacebook />
                      </Link>
                      <Link
                        className="flex justify-center items-center mt-2 w-[52px] h-[52px] text-gray-700 hover:text-gray-900  rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400  dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
                        target="_blank"
                        to="https://github.com/mdjewel999"
                      >
                        <FaGithub />
                      </Link>
                      <Link
                        className="flex justify-center items-center mt-2 w-[52px] h-[52px] text-gray-700 hover:text-gray-900  rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400  dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
                        target="_blank"
                        to="https://www.linkedin.com/in/md-jewel-954986250/"
                      >
                        <FaLinkedinIn />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
