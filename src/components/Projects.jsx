import texts from "../data/texts.js"
import projects from "../data/projects.js"
import ProjectCard from "./ProjectCard.jsx";

function Projects() {
    const t = texts.sv.projects
    return (
        <section id="projects">
            <h2>{t.title}</h2>
            <div className="project-grid">
                {projects.map(project => (
                    <ProjectCard key={project.title.sv} project={project} />
                ))}
            </div>
        </section>

    )
}

export default Projects