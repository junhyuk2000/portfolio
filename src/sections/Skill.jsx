import "../styles/sections/Skill.css"
import { CORE_SKILLS, STRENGTHS, TOOLS } from "../data/skills"

function SkillCard({ title, desc, tags, icon: Icon, colorKey }) {
  return (
    <article className="skill-card">
      <h3 className="skill-card-title">
        {Icon && <Icon className={`skill-icon skill-icon--${colorKey}`} />}
        {title}
      </h3>
      <p className="skill-card-desc">{desc}</p>
      {tags?.length ? (
        <ul className="skill-tags">
          {tags.map((t) => (
            <li key={t} className="skill-tag">
              {t}
            </li>
          ))}
        </ul>
      ) : null}
    </article>
  );
}

export default function Skill() {
  return (
    <section id="skills" className="skill-section fade-target">
      <div className="skill-container">
        <header className="skill-header">
          <h2 className="skill-title">Skills</h2>
          <p className="skill-subtitle">
            프로젝트에서 실제로 사용한 방식과 역량 중심으로 정리했습니다.
          </p>
        </header>

        <div className="skill-top-grid">
          <article className="skill-panel">
            <h3 className="skill-panel-title">Core Stack</h3>
            <p className="skill-panel-desc">HTML / CSS / TypeScript / React</p>

            <div className="skill-core-grid">
              {CORE_SKILLS.map((s) => (
                <SkillCard key={s.title} title={s.title} desc={s.desc} tags={s.tags} icon={s.icon} colorKey={s.colorKey} />
              ))}
            </div>
          </article>

          <article className="skill-panel">
            <h3 className="skill-panel-title">Strengths</h3>
            <p className="skill-panel-desc">업무에서 바로 쓰이는 방식 중심</p>

            <div className="skill-strength-grid">
              {STRENGTHS.map((s) => (
                <SkillCard key={s.title} title={s.title} desc={s.desc} tags={s.tags} />
              ))}
            </div>
          </article>
        </div>

        <article className="skill-panel">
          <h3 className="skill-panel-title">Tools & Workflow</h3>
          <p className="skill-panel-desc">협업/개발 흐름을 위한 기본 도구</p>

          <div className="skill-tool-grid">
            {TOOLS.map((t) => (
              <div key={t.title} className="skill-tool-item">
                <div className="skill-tool-title">{t.title}</div>
                <div className="skill-tool-desc">{t.desc}</div>
              </div>
            ))}
          </div>
        </article>
      </div>
    </section>
  );
}