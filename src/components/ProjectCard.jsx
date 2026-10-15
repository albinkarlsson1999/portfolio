import { useRef } from "react";
import texts from "../data/texts.js";

function ProjectCard({ project, lang }) {
    const t = texts[lang].projects;
    const dialogRef = useRef(null);

    return (
        <article className="project-card">
            {project.image && (
                <>
                    <button className="image-button" onClick={() => dialogRef.current.showModal()}>
                        <img
                            src={import.meta.env.BASE_URL + project.image}
                            alt={project.imageAlt[lang]}
                            className="project-image"
                            loading="lazy"
                        />
                    </button>

                    <dialog ref={dialogRef} onClick={() => dialogRef.current.close()}>
                        <figure>
                            <img
                                src={import.meta.env.BASE_URL + (project.imageFull || project.image)}
                                alt={project.imageAlt[lang]}
                            />
                            <figcaption>{project.imageCaption[lang]}</figcaption>
                        </figure>
                    </dialog>
                </>
            )}

            <h3>{project.title[lang]}</h3>
            <p>{project.description[lang]}</p>

            <div className="tags">
                {project.tags.map((tag) => (
                    <span key={tag}>{tag}</span>
                ))}
            </div>

            {project.link && (
                <a
                    className="button"
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    {t.codeLink}
                </a>
            )}
        </article>
    );
}

export default ProjectCard;