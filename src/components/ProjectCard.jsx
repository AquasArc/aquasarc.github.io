function ProjectCard({ title, description, link }) {
    return (
      <div className="card bg-base-100 shadow-md">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <a className="btn btn-outline btn-sm" href={link} target="_blank">View</a>
          </div>
        </div>
      </div>
    )
  }
  
  export default ProjectCard
  