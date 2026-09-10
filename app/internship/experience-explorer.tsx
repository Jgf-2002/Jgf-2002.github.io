"use client";

import { useEffect, useState } from "react";

type ProjectRecord = {
  title: string;
  body: string;
  details: string[];
  flow: string[];
  note?: string;
};

export default function ExperienceExplorer({ records }: { records: ProjectRecord[] }) {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(available > 0 ? Math.min(100, (window.scrollY / available) * 100) : 0);
    };
    const sections = Array.from(document.querySelectorAll<HTMLElement>(".result-section"));
    document.documentElement.classList.add("detail-interactive");
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible"));
    }, { rootMargin: "-12% 0px -18%", threshold: 0.06 });
    sections.forEach((section) => observer.observe(section));
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("detail-interactive");
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  const current = records[active];

  return (
    <>
      <div className="scroll-progress" aria-hidden="true"><i style={{ width: `${progress}%` }} /></div>
      <div className="research-explorer">
        <div className="explorer-tabs" role="tablist" aria-label="实习工作模块">
          <p>SELECT WORKSTREAM</p>
          {records.map((record, index) => (
            <button
              type="button"
              role="tab"
              aria-selected={active === index}
              aria-controls="workstream-panel"
              className={active === index ? "is-active" : ""}
              onClick={() => setActive(index)}
              key={record.title}
            >
              <span>0{index + 1}</span><strong>{record.title}</strong><i aria-hidden="true">→</i>
            </button>
          ))}
        </div>

        <article className="explorer-panel" id="workstream-panel" role="tabpanel" key={current.title}>
          <div className="explorer-flow" aria-label={`${current.title}工作流`}>
            {current.flow.map((step, index) => <span key={step}><i>{index + 1}</i>{step}</span>)}
          </div>
          <p className="explorer-eyebrow">WORKSTREAM / 0{active + 1}</p>
          <h3>{current.title}</h3>
          <p className="explorer-summary">{current.body}</p>
          <ul className="explorer-details">
            {current.details.map((detail) => {
              const [term, description] = detail.split("｜");
              return <li key={detail}><strong>{term}</strong><span>{description}</span></li>;
            })}
          </ul>
          {current.note && <p className="explorer-note">{current.note}</p>}
        </article>
      </div>
    </>
  );
}
