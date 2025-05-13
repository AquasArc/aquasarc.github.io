function Projects() {
    return (
      <section id="projects">
        <div className="text-center bg-base-200 py-16 px-4 ">
          <h2 className="text-4xl font-bold mb-6">My Projects</h2>
          <p className="text-lg mb-12">Here are a few projects I've worked on. You can check them out on GitHub or see their live demos!</p>
  
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Project 1 */}
            <div className="card w-full bg-base-100 shadow-xl">
              <figure>
                <img src="https://via.placeholder.com/300" alt="Project 1" className="w-full h-48 object-cover" />
              </figure>
              <div className="card-body">
                <h3 className="card-title">Project 1</h3>
                <p className="text-sm">A brief description of the project goes here. It could be about the technology stack used, the problem it solves, or the impact it had.</p>
                <div className="card-actions justify-end">
                  <a href="https://github.com/antonlim/project1" target="_blank" className="btn btn-primary btn-sm">View on GitHub</a>
                </div>
              </div>
            </div>
  
            {/* Project 2 */}
            <div className="card w-full bg-base-100 shadow-xl">
              <figure>
                <img src="https://via.placeholder.com/300" alt="Project 2" className="w-full h-48 object-cover" />
              </figure>
              <div className="card-body">
                <h3 className="card-title">Project 2</h3>
                <p className="text-sm">Another brief description of another awesome project that I’ve worked on, along with some highlights.</p>
                <div className="card-actions justify-end">
                  <a href="https://github.com/antonlim/project2" target="_blank" className="btn btn-primary btn-sm">View on GitHub</a>
                </div>
              </div>
            </div>
  
            {/* Project 3 */}
            <div className="card w-full bg-base-100 shadow-xl">
              <figure>
                <img src="https://via.placeholder.com/300" alt="Project 3" className="w-full h-48 object-cover" />
              </figure>
              <div className="card-body">
                <h3 className="card-title">Project 3</h3>
                <p className="text-sm">This project is about [briefly describe what the project does and its significance].</p>
                <div className="card-actions justify-end">
                  <a href="https://github.com/antonlim/project3" target="_blank" className="btn btn-primary btn-sm">View on GitHub</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
  
  export default Projects
  