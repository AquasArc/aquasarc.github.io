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
        <div className="flex justify-center gap-6">
          {/* Phone */}
          <a
            href="tel:1234567890"
            className="tooltip tooltip-bottom"
            data-tip="Phone"
          >
            <div className="text-xl bg-base-200 p-3 rounded-full hover:bg-primary hover:text-white transition duration-200 shadow-md cursor-pointer">
              <FaPhone />
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:your@email.com"
            className="tooltip tooltip-bottom"
            data-tip="Email"
          >
            <div className="text-xl bg-base-200 p-3 rounded-full hover:bg-primary hover:text-white transition duration-200 shadow-md cursor-pointer">
              <FaEnvelope />
            </div>
          </a>

          {/* GitHub */}
          <a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="tooltip tooltip-bottom"
            data-tip="GitHub"
          >
            <div className="text-xl bg-base-200 p-3 rounded-full hover:bg-primary hover:text-white transition duration-200 shadow-md cursor-pointer">
              <FaGithub />
            </div>
          </a>

          {/* LinkedIn */}
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="tooltip tooltip-bottom"
            data-tip="LinkedIn"
          >
            <div className="text-xl bg-base-200 p-3 rounded-full hover:bg-primary hover:text-white transition duration-200 shadow-md cursor-pointer">
              <FaLinkedin />
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Home;
