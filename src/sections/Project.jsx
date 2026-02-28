import React from "react";
import "../styles/sections/Project.css"
import Modal from "../components/common/Modal"
import { projects } from '../data/projectsData'
import { useState } from "react";
import ProjectCard from "../components/projects/ProjectCard";

export default function Project() {

  const Tabs = ["All","Team","Personal"];
  const [tab,setTab] = useState("All");
  const list = tab === "All" ? projects : projects.filter((p)=>p.type === tab);

  const [open,setOpen] = useState(false);
  const [selected,setSelected] = useState(null);
  const openModal = (id) => {
    const detail = projects.find((d) => d.id === id);
    setSelected(detail || null);
    setOpen(true);
  };

  return <>
    <section className="project fade-target">
      <h4 className="project-title">Project</h4>
      <div className="tab-menu">
        {Tabs.map((name)=>(
          <button
          key={name}
          className={`tab ${tab === name ? "active": ""}`}
          onClick={()=>setTab(name)}
          >
            {name}          
          </button>
        ))}
      </div>

      <ul className="project-overview">
        {list.map(p=>(
          <ProjectCard key={p.id} project={p} onOpen={openModal}/>
        ))}
      </ul>
    </section>

    {open && <Modal onClose={() => { setOpen(false); setSelected(null); }} project={selected}/>}
  </>;
}


