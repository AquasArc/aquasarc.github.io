import { FaGithub, FaLinkedin, FaEnvelope, FaPhone } from "react-icons/fa";

function Home() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center bg-base-100 text-center px-4"
    >
      <div className="max-w-2xl">
        {/* Profile Image Placeholder */}
        <div className="mb-6">
          <div className="w-40 h-40 mx-auto rounded-full overflow-hidden border-4 border-primary shadow-lg">
            <img
              src="https://via.placeholder.com/150"
              alt="Your Face Here"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Intro Text */}
        <h1 className="text-4xl font-bold mb-2 text-primary">
          Hi, I'm Anton Lim
        </h1>
        <p className="text-lg mb-6 text-base-content">
          Full-Stack Developer | AI Enthusiast | Firebase + React Lover
        </p>

        {/* Contact / Social Links */}
        <div className="flex justify-center gap-12 mb-6">
          {/* Phone */}
          <div className="flex flex-col items-center">
            <a
              href="tel:6505808385"
              className="tooltip tooltip-bottom"
              data-tip="Phone"
            >
              <div className="text-xl bg-base-200 p-3 rounded-full hover:bg-primary hover:text-white transition duration-200 shadow-md cursor-pointer">
                <FaPhone />
              </div>
            </a>
            <p className="text-sm text-base-content mt-2">(650) 580-8385</p>
          </div>

          {/* Email */}
          <div className="flex flex-col items-center">
            <a
              href="mailto:antonlim23232@gmail.com"
              className="tooltip tooltip-bottom"
              data-tip="Email"
            >
              <div className="text-xl bg-base-200 p-3 rounded-full hover:bg-primary hover:text-white transition duration-200 shadow-md cursor-pointer">
                <FaEnvelope />
              </div>
            </a>
            <p className="text-sm text-base-content mt-2">antonlim23232@gmail.com</p>
          </div>

          {/* GitHub */}
          <div className="flex flex-col items-center">
            <a
              href="https://github.com/AquasArc"
              target="_blank"
              rel="noopener noreferrer"
              className="tooltip tooltip-bottom"
              data-tip="GitHub"
            >
              <div className="text-xl bg-base-200 p-3 rounded-full hover:bg-primary hover:text-white transition duration-200 shadow-md cursor-pointer">
                <FaGithub />
              </div>
            </a>
            <p className="text-sm text-base-content mt-2">AquasArc</p>
          </div>

          {/* LinkedIn */}
          <div className="flex flex-col items-center">
            <a
              href="https://www.linkedin.com/in/antonnlim"
              target="_blank"
              rel="noopener noreferrer"
              className="tooltip tooltip-bottom"
              data-tip="LinkedIn"
            >
              <div className="text-xl bg-base-200 p-3 rounded-full hover:bg-primary hover:text-white transition duration-200 shadow-md cursor-pointer">
                <FaLinkedin />
              </div>
            </a>
            <p className="text-sm text-base-content mt-2">antonnlim</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
