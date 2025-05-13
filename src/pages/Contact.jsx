function Contact() {
  return (
    <section id="contact">
      <div className="scroll-mt-16 min-h-screen flex flex-col justify-center items-center bg-base-200 px-4">
        <div className="max-w-xl text-center">
          <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
          <p className="text-lg mb-6">
            Feel free to reach out if you’re interested in working together or
            just want to connect.
          </p>

          <form className="space-y-4">
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="input input-bordered w-full"
            />
            <textarea
              className="textarea textarea-bordered w-full"
              placeholder="Your Message"
              rows="5"
            ></textarea>
            <button type="submit" className="btn btn-primary w-full">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Contact;

