import texts from '../data/texts.js'
function ProjectCard({project}) {
    const t = texts.sv.projects
    return (
        <article className="project-card">
            <h3>{project.title.sv}</h3>
            <p>{project.description.sv}</p>
            <div className="tags">
            {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
            ))}
            </div>

            { project.link && (
                <a href={project.link} target="_blank" rel="noopener noreferrer">{t.codeLink}</a>
            )}
        </article>)
}

export default ProjectCard