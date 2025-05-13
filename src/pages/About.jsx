function About() {
  return (
    <section id="about">
      <div className="max-w-2xl text-center">
        <div className="min-h-screen flex flex-col justify-center items-center bg-base-100 px-4"> 
          <h2 className="text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg leading-relaxed">
            Hey! I'm Anton, a recent Computer Science grad who’s passionate
            about building cool things with React, Firebase, and AI tools like
            OpenAI and AzureAI. I enjoy solving real-world problems, especially
            when it helps others.
          </p>
          <p className="text-lg leading-relaxed mt-4">
            I’ve worked with web frameworks, done mobile development with
            Expo/React Native, and played with machine learning models in
            Python. I’m currently looking for entry-level
            opportunities—especially with startups—where I can keep learning and
            contribute to meaningful projects.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
