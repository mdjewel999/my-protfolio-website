const Contact = () => {
  return (
    <div className="mb-8 p-4">
      <div>
        <h1 className="text-center mt-16 text-5xl font-bold">
          Contact With Me
        </h1>
      </div>
      <div>
        <div className="hero  bg-base-200 mt-16">
          <div className="hero-content flex-col lg:flex-row-reverse">
            
            <div className="card flex-shrink-0 w-2/3  shadow-2xl bg-base-100">
              <div className="card-body">
                <div className="flex gap-4  mb-4">
                  <div className="form-control w-full ">
                    <label className="label">
                      <span className="label-text">YOUR NAME</span>
                    </label>
                    <input
                      type="text"
                      placeholder="name"
                      className="input input-bordered"
                    />
                  </div>
                  <div className="form-control w-full">
                    <label className="label">
                      <span className="label-text">PHONE NUMBER</span>
                    </label>
                    <input
                      type="text"
                      placeholder="number"
                      className="input input-bordered"
                    />
                  </div>
                </div>
                <div className="form-control mb-4">
                  <label className="label">
                    <span className="label-text">YOUR EMAIL</span>
                  </label>
                  <input
                    type="text"
                    placeholder="email"
                    className="input input-bordered"
                  />
                </div>

                <div className="form-control mb-4">
                    <span className="label-text">YOUR MESSAGE</span>
                  <textarea
                    className="textarea textarea-bordered h-24"
                    placeholder=""
                  ></textarea>
                </div>

                <div className="form-control mt-6">
                  <button className="btn btn-primary">Send Massage</button>
                </div>
              </div>
            </div>

            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
              <p className="py-6">
                Provident cupiditate voluptatem et in. Quaerat fugiat ut
                assumenda excepturi exercitationem quasi. In deleniti eaque aut
                repudiandae et a id nisi.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
