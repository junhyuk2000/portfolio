import React, { useMemo, useState } from "react";
import "../../styles/components/Modal.css";

export default function Modal({ onClose, project }) {
  if (!project) return null;

  const {
    title,
    img,
    skill,
    url,
    github,
    featured, // StudyDashboard 강조용(있으면 true)
  } = project;



  // skill이 문자열("html, css, js")이든 배열이든 칩으로 통일
  const chips = useMemo(() => {
    if (Array.isArray(skill)) return skill;
    return String(skill || "")
      .split(",")
      .map((s) => s.trim())
      .filter(Boolean);
  }, [skill]);

  return (
    <div className="pm-overlay" onClick={onClose} role="dialog" aria-modal="true">
      <div
        className={`pm-modal ${featured ? "is-featured" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* HEADER */}
        <div className="pm-header">
          <div className="pm-head">
            <h3 className="pm-title">{title}</h3>

            <div className="pm-chips">
              {chips.map((s) => (
                <span key={s} className="pm-chip">
                  {s}
                </span>
              ))}
            </div>
          </div>

          <button className="pm-close" onClick={onClose} aria-label="close" type="button">
            ✕
          </button>
        </div>

        {/* BODY */}
        <div className="pm-body">
          {/* LEFT: IMAGE */}
          <div className="pm-left">
            <img src={img} alt={title} className="pm-img" />
          </div>

          <div className="pm-right">
            <div className="pm-panel">
              <div className="pm-card">
                <div className="pm-label">기술 선택 이유</div>
                <p className="pm-text">{project.detail?.reason}</p>
              </div>

              <div className="pm-card">
                <div className="pm-label">설계 구조</div>
                <p className="pm-text">{project.detail?.structure}</p>
              </div>

              <div className="pm-card">
                <div className="pm-label">트러블슈팅</div>
                <p className="pm-text">{project.detail?.trouble}</p>
              </div>
            </div>
          </div>
        </div>

        {/* FOOTER */}
        <div className="pm-footer">
          <a className="pm-btn primary" href={url} target="_blank" rel="noreferrer">
            Live
          </a>
          <a className="pm-btn" href={github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}