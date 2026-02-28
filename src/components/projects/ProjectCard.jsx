import React from "react";

export default function ProjectCard({ project, onOpen }) {
  return (
    <li className="card">
        <div className="thumb">
            <img src={project.img} alt={project.alt} />
        </div>

        <h5 className="project-name">{project.title}</h5>

        <div className="p-skill">
            {project.skill.map((s) => (
            <span key={s} className="project-skill">
                {s}
            </span>
            ))}
        </div>
        <p className="project-summary">{project.summary}</p>

        <ul className="project-bullets">
            {project.bullets.map((b, i) => (
                <li key={i}>{b}</li>
            ))}    
        </ul>
        <div className="project-links">
            <button className="project-btn" onClick={() => onOpen(project.id)}>
                Detail
            </button>
            <a
                href={project.links.github}
                className="project-btn outline"
                target="_blank"
                rel="noopener noreferrer"
            >
                GitHub
            </a>
        </div>
    </li>
  );
}