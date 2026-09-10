"use client";

/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";

const External = () => <span aria-hidden="true">↗</span>;

const careerMoments = [
  { year: "2021", label: "自动化", title: "东北大学 · 郎世俊实验班", detail: "从自动控制与系统建模出发，建立数学、电子系统和工程实现基础。" },
  { year: "2023", label: "电子设计", title: "全国大学生电子设计竞赛", detail: "参与同轴电缆检测装置设计，以时域反射和等效阻抗完成测量与识别，获全国二等奖。" },
  { year: "2024", label: "AI 工程", title: "大模型测评与信息工作流", detail: "在东软负责定期信息抓取、OCR、RAG 与大模型抽取，并将流程编排为自动化工作流。" },
  { year: "2025", label: "研究转向", title: "中国科学技术大学 · 电子信息", detail: "进入硕士阶段，研究基于博弈论的马尔可夫随机过程滤波与控制。" },
  { year: "NOW", label: "量化研究", title: "数据工程、Alpha 与 Beta", detail: "在大寒智能量化公司建设 PIT 数据链路，并开展 A 股中低频 Alpha 与市场 Beta 研究。" },
];

const sectionLinks = [
  { id: "about", label: "简介" },
  { id: "education", label: "教育" },
  { id: "publications", label: "论文" },
  { id: "experience", label: "经历" },
  { id: "projects", label: "项目" },
  { id: "honors", label: "荣誉" },
];

const resumeLenses = [
  { key: "all", label: "完整履历", code: "ALL", summary: "按时间与模块查看完整经历，不隐藏任何信息。" },
  { key: "academic", label: "学术与控制", code: "RESEARCH", summary: "突出随机过程、滤波控制、论文与科研训练。" },
  { key: "quant", label: "量化研究", code: "QUANT", summary: "突出多源金融数据、Alpha / Beta 与因子验证。" },
  { key: "engineering", label: "工程实现", code: "SYSTEMS", summary: "突出数据链路、自动化工作流和系统实现。" },
] as const;

type LensKey = typeof resumeLenses[number]["key"];

function SectionHeading({ id, title, english }: { id: string; title: string; english: string }) {
  return (
    <header className="section-heading" id={id} aria-label={`${title} / ${english}`}>
      <div><span>{english}</span><h2>{title}</h2></div>
      <i aria-hidden="true" />
    </header>
  );
}

const education = [
  {
    date: "2025.09 — 至今",
    school: "中国科学技术大学",
    degree: "电子信息 · 硕士研究生",
    details: [
      "研究方向：基于博弈论的马尔可夫随机过程滤波与控制。",
      "相关课程：随机过程理论、线性系统理论、计算机视觉、计算机控制工程、图像测量技术。",
    ],
    focus: ["academic"],
  },
  {
    date: "2021.09 — 2025.07",
    school: "东北大学",
    degree: "自动化（郎世俊实验班）· 工学学士",
    details: [
      "GPA 4.16 / 5.0，专业前 5%；获命名奖学金、连续三年校级奖学金及校优秀学生。",
      "本科阶段研究医学图像识别与变结构神经网络滑模控制。",
    ],
    focus: ["academic", "engineering"],
  },
];

const experience = [
  {
    date: "2025.11 — 至今",
    org: "大寒智能量化公司",
    role: "量化研究实习生",
    scope: "量化数据工程 · 中低频 Alpha · 中低频 Beta",
    points: [
      "负责 Tushare、聚源 JY 与 AkShare 多源研究数据的生产化落盘：通过 XML 配置 Avatar / Dagflow 日更、补采与 Closeout 任务，以 binlog CDC 驱动 JY 增量同步和 PIT 快照发布，并开发 Dolphin C++ PIT Dataloader、质量巡检与飞书告警，形成从数据接入到研究消费的闭环。",
      "负责基本面、分析师预期与量价类中低频 Alpha 研究，围绕价值、质量、成长、现金流、营运效率和预期修正完成因子定义、PIT 取数、Dolphin / PySim 实现与日频跟踪；按覆盖率、IC / RankIC、年度稳定性和多周期表现筛选候选因子。",
      "负责 A 股 20 日尺度市场 Beta 研究，系统构建价格与回撤状态、估值、流动性与冲击、订单流、趋势和技术形态信号；使用非重叠相位、环移空检验、联合回归与残差 IC 分离共线信息，完成候选因子归因、取舍与合成。",
    ],
    focus: ["quant", "engineering"],
  },
  {
    date: "2024.11 — 2025.04",
    org: "东软集团",
    role: "大模型测评实习生 · 项目负责人",
    points: [
      "负责定期信息抓取项目，使用 Selenium 完成检索、链接提取与页面截图，并以 EasyOCR 识别图片文字。",
      "设计提示词并调用讯飞星火修正识别文本、提取关键字段；围绕采购招标术语构建 RAG 知识库，使用 DeepSeek 完成信息抽取与分类。",
      "将抓取、语义分割和信息处理编排为 Coze 定时工作流，结果写入飞书多维表格。",
    ],
    focus: ["engineering"],
  },
  {
    date: "2023.12 — 2024.01",
    org: "纵存科技 · SAS 验证部",
    role: "测试实习生",
    points: [
      "负责 SAS IP 中 SATA 协议状态机验证，覆盖协议规范、操作场景和边界条件。",
      "完善基于 UVM 的验证仿真环境，模拟 SATA 数据传输并编写测试激励，完成 IP 功能验证。",
    ],
    focus: ["engineering"],
  },
];

const publications = [
  { type: "EI 会议论文 · 1 篇", topic: "医学图像识别与深度学习", note: "本科阶段研究成果", focus: ["academic"] },
  { type: "中文核心期刊 · 1 篇", topic: "变结构神经网络与滑模控制", note: "本科阶段研究成果", focus: ["academic"] },
];

const projects = [
  {
    date: "2022.06 — 2023.04",
    title: "同轴电缆长度与负载检测装置",
    role: "全国大学生电子设计竞赛 · 核心成员",
    body: "三天内完成基于单片机与电路模块的检测装置；建立同轴电缆阻抗模型，采用时域反射法测量长度、等效阻抗法识别终端负载。",
    result: "长度误差低于 0.5%，负载识别准确率 93%；全国二等奖。",
    focus: ["engineering"],
  },
  {
    date: "2024.03 — 2024.06",
    title: "制造与物流场景下的智能优化算法设计",
    role: "科研训练负责人",
    body: "面向分时电价下的分布式柔性作业车间调度，对工序、生产与运输环节进行三级编码；采用自适应遗传算法，并拓展 NSGA-II 的多目标优化设计。",
    focus: ["academic", "engineering"],
  },
  {
    date: "2025.09",
    title: "JPX 东京股票收益预测",
    role: "Kaggle 金牌方案复现",
    body: "基于约 2,000 只日本股票完成复权与特征工程，覆盖滑动窗口、加权统计、波动率、K 线、交易日及监管数据；按行业训练 LightGBM 模型。",
    result: "线上评分 0.41，超过当时公开榜首方案。",
    focus: ["quant"],
  },
];

export default function Home() {
  const [activeMoment, setActiveMoment] = useState(4);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeSection, setActiveSection] = useState("about");
  const [activeLens, setActiveLens] = useState<LensKey>("all");

  useEffect(() => {
    const updateProgress = () => {
      const available = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(available > 0 ? Math.min(100, (window.scrollY / available) * 100) : 0);
    };
    updateProgress();
    window.addEventListener("scroll", updateProgress, { passive: true });
    window.addEventListener("resize", updateProgress);
    return () => {
      window.removeEventListener("scroll", updateProgress);
      window.removeEventListener("resize", updateProgress);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.add("js-reveal");
    const sections = Array.from(document.querySelectorAll<HTMLElement>(".resume-section"));
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        const heading = entry.target.querySelector<HTMLElement>("[id]");
        if (heading?.id) setActiveSection(heading.id);
      });
    }, { rootMargin: "-18% 0px -44%", threshold: 0.08 });
    sections.forEach((section) => observer.observe(section));
    return () => {
      observer.disconnect();
      document.documentElement.classList.remove("js-reveal");
    };
  }, []);

  const selectedMoment = careerMoments[activeMoment];
  const selectedLens = resumeLenses.find((lens) => lens.key === activeLens) ?? resumeLenses[0];
  const lensClass = (focus: string[]) => activeLens === "all" ? "lens-item" : focus.includes(activeLens) ? "lens-item is-lens-match" : "lens-item is-lens-muted";

  return (
    <main className="interactive-resume">
      <div className="scroll-progress" aria-hidden="true"><i style={{ width: `${scrollProgress}%` }} /></div>
      <header className="topbar home-topbar">
        <div className="topbar-inner">
          <a className="top-identity" href="#about"><strong>贾格非</strong><span>JIA GEFEI</span></a>
          <nav aria-label="页面导航">
            {sectionLinks.map((link) => <a className={activeSection === link.id ? "is-active" : ""} href={`#${link.id}`} key={link.id}>{link.label}</a>)}
          </nav>
          <a className="github-link" href="https://github.com/Jgf-2002" target="_blank" rel="noreferrer">GitHub <External /></a>
        </div>
      </header>

      <section className="landing-hero resume-hero" aria-labelledby="hero-name">
        <div className="hero-light hero-light-one" aria-hidden="true" />
        <div className="hero-light hero-light-two" aria-hidden="true" />
        <div className="hero-grid" aria-hidden="true" />
        <div className="hero-content interactive-hero-content editorial-hero">
          <div className="hero-copy">
            <div className="hero-profile-lockup">
              <div className="hero-portrait"><img src="/profile.jpg" alt="贾格非" /></div>
              <p className="hero-status"><i aria-hidden="true" /> OPEN TO RESEARCH &amp; QUANT OPPORTUNITIES</p>
            </div>
            <p className="hero-kicker">RESEARCH · ENGINEERING · QUANTITATIVE FINANCE</p>
            <h1 id="hero-name">贾格非</h1>
            <p className="hero-name-en">JIA GEFEI</p>
            <p className="hero-role">中国科学技术大学 · 电子信息硕士研究生</p>
            <p className="hero-focus">博弈论与随机过程 · 滤波与控制 · 量化研究</p>
            <nav className="hero-links" aria-label="首屏入口">
              <a className="hero-link-primary" href="#about">探索履历</a>
              <a href="/internship/">量化研究实习</a>
              <a href="https://github.com/Jgf-2002" target="_blank" rel="noreferrer">GitHub <External /></a>
            </nav>
          </div>
          <div className="trajectory-board" aria-label="个人研究轨迹">
            <header><span>RESEARCH TRAJECTORY</span><strong>2021 — NOW</strong></header>
            <div className="trajectory-track" role="tablist" aria-label="选择经历年份">
              {careerMoments.map((moment, index) => (
                <button
                  type="button"
                  role="tab"
                  className={activeMoment === index ? "is-active" : ""}
                  key={moment.year}
                  aria-selected={activeMoment === index}
                  onClick={() => setActiveMoment(index)}
                >
                  <i aria-hidden="true" /><span>{moment.year}</span><small>{moment.label}</small>
                </button>
              ))}
            </div>
            <article className="trajectory-detail" aria-live="polite" key={selectedMoment.year}>
              <span>{selectedMoment.year} / {selectedMoment.label}</span>
              <h2>{selectedMoment.title}</h2>
              <p>{selectedMoment.detail}</p>
            </article>
            <p className="trajectory-hint">点击年份，查看研究方向如何逐步形成</p>
          </div>
        </div>
        <a className="hero-scroll" href="#about"><span>SCROLL</span><i aria-hidden="true" /></a>
      </section>

      <section className="resume-lens" aria-label="选择简历阅读视角">
        <div className="resume-lens-inner">
          <div className="lens-label"><span>READING LENS</span><strong>{selectedLens.label}</strong></div>
          <div className="lens-tabs" role="tablist" aria-label="简历阅读视角">
            {resumeLenses.map((lens) => (
              <button type="button" role="tab" aria-selected={activeLens === lens.key} className={activeLens === lens.key ? "is-active" : ""} onClick={() => setActiveLens(lens.key)} key={lens.key}>
                <span>{lens.code}</span>{lens.label}
              </button>
            ))}
          </div>
          <p key={selectedLens.key}>{selectedLens.summary}</p>
        </div>
      </section>

      <div className="page-shell">
        <div className="resume-content">
          <section className="resume-section intro-section" data-chapter="01">
            <SectionHeading id="about" title="个人简介" english="ABOUT" />
            <div className="intro-grid">
              <div className="intro-copy">
                <p className="intro-lead">现就读于中国科学技术大学电子信息专业，研究方向为基于博弈论的马尔可夫随机过程滤波与控制。</p>
                <p>本科毕业于东北大学自动化专业（郎世俊实验班）。本科期间参与医学图像识别、滑模控制、电子系统测量和智能调度研究；目前在大寒智能量化公司实习，主要负责多源金融数据工程，以及 A 股中低频 Alpha 与 Beta 因子研究。</p>
              </div>
              <aside className="intro-meta" aria-label="研究方向与联系方式">
                <div><h3>研究方向</h3><p>博弈论与随机过程<br />滤波与控制<br />机器学习与量化研究</p></div>
                <div><h3>联系</h3><a href="mailto:gefei20020421@163.com">gefei20020421@163.com</a><a href="https://github.com/Jgf-2002" target="_blank" rel="noreferrer">GitHub <External /></a><p>合肥，中国</p></div>
              </aside>
            </div>
          </section>

          <section className="resume-section" data-chapter="02">
            <SectionHeading id="education" title="教育背景" english="EDUCATION" />
            <div className="timeline-list">
              {education.map((item) => (
                <article className={`timeline-entry ${lensClass(item.focus)}`} key={item.school}>
                  <time>{item.date}</time>
                  <div><h3>{item.school}</h3><p className="entry-role">{item.degree}</p>{item.details.map((detail) => <p key={detail}>{detail}</p>)}</div>
                </article>
              ))}
            </div>
          </section>

          <section className="resume-section" data-chapter="03">
            <SectionHeading id="publications" title="论文成果" english="PUBLICATIONS" />
            <div className="publication-list">
              {publications.map((item) => (
                <article className={lensClass(item.focus)} key={item.type}><div><span>{item.type}</span><h3>{item.topic}</h3></div><p>{item.note}</p></article>
              ))}
            </div>
            <p className="section-note">正式题名、作者顺序及论文链接将在公开版本补充。</p>
          </section>

          <section className="resume-section experience-section" data-chapter="04">
            <SectionHeading id="experience" title="实习经历" english="EXPERIENCE" />
            <div className="timeline-list experience-timeline">
              {experience.map((item, index) => (
                <article className={`timeline-entry ${lensClass(item.focus)}${index === 0 ? " featured-experience" : ""}`} key={item.org}>
                  <time>{item.date}</time>
                  <div>
                    <h3>{index === 0 ? <a href="/internship/">{item.org}</a> : item.org}</h3>
                    <p className="entry-role">{item.role}</p>
                    {item.scope && <p className="entry-scope">{item.scope}</p>}
                    <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
                    {index === 0 && <a className="result-link" href="/internship/">查看数据链路与研究记录 <External /></a>}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="resume-section" data-chapter="05">
            <SectionHeading id="projects" title="科研与项目" english="PROJECTS" />
            <div className="project-list project-evidence-list">
              {projects.map((project) => (
                <article className={`project-entry ${lensClass(project.focus)}`} key={project.title}>
                  <time>{project.date}</time>
                  <div><h3>{project.title}</h3><p className="entry-role">{project.role}</p><p>{project.body}</p>{project.result && <p className="project-result"><strong>结果：</strong>{project.result}</p>}</div>
                </article>
              ))}
            </div>
          </section>

          <section className="resume-section" data-chapter="06">
            <SectionHeading id="honors" title="荣誉与奖项" english="HONORS" />
            <ul className="honor-list">
              <li className={lensClass(["engineering"])}><span>2023</span><strong>全国大学生电子设计竞赛全国二等奖</strong><em>辽宁赛区该赛道最高奖</em></li>
              <li className={lensClass(["academic", "engineering"])}><span>国家级</span><strong>创新方法大赛一等奖</strong></li>
              <li className={lensClass(["academic", "engineering"])}><span>国家级</span><strong>创新体验竞赛一等奖</strong></li>
              <li className={lensClass(["academic"])}><span>校级</span><strong>命名奖学金、连续三年校级奖学金、校优秀学生</strong></li>
            </ul>
          </section>

          <section className="resume-section skills-section" data-chapter="07">
            <SectionHeading id="skills" title="技术能力" english="SKILLS" />
            <dl className="skills-list">
              <div className={lensClass(["quant", "engineering"])}><dt>编程与数据</dt><dd>Python · Pandas · NumPy · scikit-learn · Matplotlib · Seaborn</dd></div>
              <div className={lensClass(["academic", "quant", "engineering"])}><dt>机器学习</dt><dd>XGBoost · LightGBM · CatBoost · 特征工程 · 网格与随机搜索</dd></div>
              <div className={lensClass(["quant"])}><dt>量化研究</dt><dd>因子工程 · IC / RankIC · 滚动样本外 · 空检验 · 消融实验 · Backtrader</dd></div>
              <div className={lensClass(["quant", "engineering"])}><dt>量化工程</dt><dd>Dolphin · PySim · Avatar / Dagflow · MySQL binlog CDC · PIT 数据工程 · 飞书自动化</dd></div>
              <div className={lensClass(["engineering"])}><dt>其他工具</dt><dd>Selenium · EasyOCR · RAG · UVM</dd></div>
              <div className={lensClass(["quant"])}><dt>个人研究实践</dt><dd>自 2025 年 5 月记录 A 股模拟组合；截至简历日期累计收益 47.97%，最大回撤 6%（模拟记录）。</dd></div>
            </dl>
          </section>
        </div>
      </div>

      <footer className="site-footer"><span>© 2026 贾格非</span><span>最后更新：2026 年 9 月</span></footer>
    </main>
  );
}
