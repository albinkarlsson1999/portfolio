import texts from '../data/texts.js'
function ProjectCard({project, lang}) {
    const t = texts[lang].projects
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
                <a className="button" href={project.link} target="_blank" rel="noopener noreferrer">{t.codeLink}</a>
            )}
        </article>)
}

export default ProjectCard