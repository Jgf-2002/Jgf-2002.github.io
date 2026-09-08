/* eslint-disable @next/next/no-img-element */

const External = () => <span aria-hidden="true">↗</span>;

function AcademicHeading({ id, mark, title, subtitle }: { id: string; mark: string; title: string; subtitle?: string }) {
  return (
    <header className="academic-heading" id={id}>
      <div className="heading-title"><span className="heading-mark">{mark}</span><h2>{title}</h2></div>
      {subtitle && <p>{subtitle}</p>}
    </header>
  );
}

function ResearchSketch() {
  return (
    <svg className="research-sketch" viewBox="0 0 820 250" role="img" aria-labelledby="sketch-title sketch-desc">
      <title id="sketch-title">当前研究方法路线</title>
      <desc id="sketch-desc">从博弈论和马尔可夫随机过程出发，研究滤波与控制，并通过数据和实验形成反馈闭环。</desc>
      <defs>
        <marker id="blueArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0L8 4 0 8Z" fill="#516f98" /></marker>
        <marker id="orangeArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0L8 4 0 8Z" fill="#c77b38" /></marker>
        <filter id="softRough" x="-5%" y="-10%" width="110%" height="120%"><feTurbulence type="fractalNoise" baseFrequency="0.018" numOctaves="1" seed="7" result="noise" /><feDisplacementMap in="SourceGraphic" in2="noise" scale=".8" /></filter>
      </defs>
      <rect x="7" y="8" width="806" height="228" rx="12" className="sketch-border" />
      <text x="28" y="37" className="sketch-label">CURRENT RESEARCH LOGIC / 当前研究主线</text>
      <g filter="url(#softRough)">
        <path d="M183 127C211 105 228 105 254 121" className="sketch-arrow" markerEnd="url(#blueArrow)" />
        <path d="M374 121C402 103 421 104 448 121" className="sketch-arrow" markerEnd="url(#blueArrow)" />
        <path d="M568 121C598 103 617 104 644 121" className="sketch-arrow" markerEnd="url(#blueArrow)" />
        <path d="M712 161C690 216 499 222 405 198C322 176 212 185 125 163" className="sketch-loop" markerEnd="url(#orangeArrow)" />
      </g>
      <g transform="translate(55 82)"><rect width="128" height="82" rx="10" className="sketch-node blue" /><text x="15" y="25" className="node-code">N1 / THEORY</text><text x="15" y="51" className="node-name">博弈论</text><text x="15" y="70" className="node-note">Game theory</text></g>
      <g transform="translate(250 82)"><rect width="128" height="82" rx="10" className="sketch-node pale" /><text x="15" y="25" className="node-code">N2 / MODEL</text><text x="15" y="51" className="node-name">马尔可夫过程</text><text x="15" y="70" className="node-note">Stochastic process</text></g>
      <g transform="translate(445 82)"><rect width="128" height="82" rx="10" className="sketch-node gold" /><text x="15" y="25" className="node-code">N3 / CORE</text><text x="15" y="51" className="node-name">滤波与控制</text><text x="15" y="70" className="node-note">Filter · Control</text></g>
      <g transform="translate(640 82)"><rect width="128" height="82" rx="10" className="sketch-node green" /><text x="15" y="25" className="node-code">N4 / VERIFY</text><text x="15" y="51" className="node-name">数据与实验</text><text x="15" y="70" className="node-note">Evidence loop</text></g>
      <text x="347" y="220" className="loop-label">feedback / evidence / update ↻</text>
    </svg>
  );
}

const education = [
  { date: "2025.09 — 至今", school: "中国科学技术大学", degree: "电子信息 · 硕士研究生", detail: "研究方向：基于博弈论的马尔可夫随机过程滤波与控制。", tags: ["随机过程", "线性系统", "计算机视觉", "计算机控制工程", "图像测量"] },
  { date: "2021.09 — 2025.07", school: "东北大学", degree: "自动化（郎世俊实验班）· 工学学士", detail: "GPA 4.16 / 5.0，专业 TOP 5%；命名奖学金、连续三年校奖学金、优秀学生。", tags: ["自动化", "控制理论", "医学图像", "深度学习"] },
];

const experience = [
  { date: "2025.11 — 至今", org: "大寒智能量化公司", role: "量化研发实习生 · 数据工程与因子研究", points: ["建设并维护 Tushare、聚源 JY 等多源金融数据日更链路，按业务日与信息可见日生成 PIT 数据，避免回测中的未来信息泄漏。", "设计配置驱动的数据质量检查框架，覆盖字段完整性、关键列非空、未来日期、上游一致性、行数与数据新鲜度，并接入自动调度和异常汇报。", "构建面向 Dolphin / PySim 的百 GB 级 PIT 投影与共享内存缓存，支持百余项财务、分析师及横截面因子的批量生成与端到端验证。", "开展 A 股宏观择时与多资产配置研究，形成数据接入、信号构建、回测、敏感性分析和 PIT 审计闭环。"] },
  { date: "2024.11 — 2025.04", org: "东软集团", role: "大模型评测实习生 · 项目负责人", points: ["负责基于大模型的周期信息抓取项目。", "以 Selenium、浏览器截图和 EasyOCR 应对反爬并提取文本。", "结合讯飞星火语义切分、DeepSeek RAG、飞书多维表格与 Coze 自动化工作流。"] },
  { date: "2023.12 — 2024.01", org: "宗村科技 · SAS 验证部", role: "测试实习生", points: ["参与 SAS / SATA 状态机验证。", "搭建 UVM 仿真环境，设计测试激励并完成 IP 功能验证。"] },
];

const projects = [
  { no: "01", title: "量化研究数据与因子基础设施", meta: "大寒智能量化公司 · 2025.11—至今", body: "围绕多源金融数据构建日更、PIT 版本化、质量监控与研究消费链路；将财务、行情和分析师数据转化为回测时点真实可见的数据集，并支持百余项因子的批量生成、缓存加载与端到端验证。", result: "PIT Data · Factor Engineering · Quality Monitoring" },
  { no: "02", title: "同轴电缆长度与负载检测装置", meta: "全国大学生电子设计竞赛 · 核心成员 · 2022.06—2023.04", body: "3 天内完成基于时域反射与阻抗测量的检测装置；长度误差小于 0.5%，负载识别准确率 93%。", result: "全国二等奖 · 辽宁赛区该赛道最高奖" },
  { no: "03", title: "生产物流智能优化", meta: "科研负责人 · 2024.03—2024.06", body: "研究分时电价下的分布式柔性作业车间调度，以能耗和最大完工时间为多目标，设计三级编码、自适应遗传算法并扩展 NSGA-II 目标。", result: "Multi-objective scheduling · Energy / Makespan" },
  { no: "04", title: "JPX 东京股票收益预测", meta: "Kaggle 金牌方案复现 · 2025.09", body: "基于约 2,000 只日本股票构造复权、窗口统计、波动率、K 线、交易日及监管特征；按行业训练 LightGBM 模型。", result: "线上评分 0.41 · 超过公开榜单第一名方案" },
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <div className="topbar-inner">
          <a className="top-name" href="#about">贾格非</a>
          <nav aria-label="学术主页导航"><a href="#about">BIOSKETCH</a><a href="#education">EDUCATION</a><a href="#experience">PROFESSIONAL</a><a href="#research">RESEARCH</a><a href="#honors">HONORS</a></nav>
          <a className="portfolio-link" href="https://github.com/Jgf-2002" target="_blank" rel="noreferrer">GITHUB <External /></a>
        </div>
      </header>

      <div className="academic-shell">
        <aside className="scholar-sidebar">
          <div className="identity-card">
            <div className="portrait-circle"><img src="/profile.jpg" alt="贾格非" /></div>
            <h1>贾格非</h1><p className="degree-line">M.Eng. Candidate</p>
            <p className="identity-role">Researcher · Engineer<br />Control · AI · Quant</p>
            <span className="identity-rule" />
            <p className="identity-focus">Game-Theoretic Filtering<br />& Stochastic Control</p>
          </div>
          <div className="profile-list">
            <div className="profile-item"><span className="side-icon">⌖</span><p><small>LOCATION</small><strong>Hefei, China</strong></p></div>
            <div className="profile-item"><span className="side-icon">U</span><p><small>AFFILIATION</small><strong>中国科学技术大学</strong><em>电子信息 · 硕士研究生</em></p></div>
            <div className="profile-item"><span className="side-icon">R</span><p><small>RESEARCH</small><strong>滤波、控制与智能决策</strong></p></div>
          </div>
          <div className="sidebar-links">
            <a href="mailto:gefei20020421@163.com"><span>EMAIL</span><strong>gefei20020421@163.com</strong></a>
            <a href="https://github.com/Jgf-2002" target="_blank" rel="noreferrer"><span>GITHUB</span><strong>Jgf-2002 <External /></strong></a>
          </div>
          <div className="sidebar-stats"><div><strong>TOP 5%</strong><span>Undergraduate GPA</span></div><div><strong>10+</strong><span>National / Provincial Awards</span></div><div><strong>2</strong><span>Research Papers</span></div></div>
        </aside>

        <div className="academic-content">
          <section className="paper-section biosketch">
            <AcademicHeading id="about" mark="BS" title="BioSketch" subtitle="个人学术简介" />
            <div className="topic-pills"><a href="#research">Research Focus</a><a href="#education">Academic Background</a><a href="#experience">Industry Experience</a><a href="#honors">Honors & Awards</a></div>
            <p className="micro-title">RESEARCH FOCUS</p>
            <p className="lead-copy">贾格非现为中国科学技术大学电子信息专业硕士研究生，研究聚焦于<strong>基于博弈论的马尔可夫随机过程滤波与控制</strong>。他的学习与实践横跨控制理论、机器学习、智能优化、计算机视觉和量化研究。</p>
            <blockquote>如何把带有不确定性的真实问题，转化为可建模、可求解、可验证的决策系统？</blockquote>
            <p className="body-copy">本科阶段，他围绕医学图像深度学习和变结构神经网络滑模控制开展研究，形成 1 篇 EI 会议论文与 1 篇中文核心期刊论文；工程实践覆盖量化数据 PIT 与因子工程、大模型信息抓取、SAS / SATA 状态机验证、电子系统测量与多目标调度优化。</p>
            <div className="evidence-row"><span><b>Control</b>状态估计与系统控制</span><span><b>AI</b>机器学习与优化算法</span><span><b>Quant</b>PIT 数据、因子与回测</span></div>
            <ResearchSketch />
          </section>

          <section className="paper-section">
            <AcademicHeading id="education" mark="ED" title="Education" subtitle="教育背景" />
            <div className="academic-list">{education.map((item) => <article className="academic-entry" key={item.school}><div className="entry-year">{item.date}</div><div><h3>{item.school}</h3><p className="entry-role">{item.degree}</p><p>{item.detail}</p><div className="tag-row">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</div>
          </section>

          <section className="paper-section">
            <AcademicHeading id="experience" mark="PR" title="Professional Experience" subtitle="研究与行业经历" />
            <div className="academic-list">{experience.map((item) => <article className="academic-entry" key={item.org}><div className="entry-year">{item.date}</div><div><h3>{item.org}</h3><p className="entry-role">{item.role}</p><ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul></div></article>)}</div>
          </section>

          <section className="paper-section">
            <AcademicHeading id="research" mark="RW" title="Research & Selected Work" subtitle="研究与代表项目" />
            <div className="project-list">{projects.map((project) => <article className="research-entry" key={project.no}><span className="research-number">{project.no}</span><div><h3>{project.title}</h3><p className="project-meta">{project.meta}</p><p>{project.body}</p><div className="result-badge">{project.result}</div></div></article>)}</div>
          </section>

          <section className="paper-section publication-section">
            <AcademicHeading id="publications" mark="PB" title="Publications & Research Output" subtitle="论文与研究成果" />
            <div className="publication-grid"><div><strong>01</strong><h3>EI Conference Paper</h3><p>医学图像深度学习 / 变结构神经网络与滑模控制相关研究。</p><span>题名与链接待补充</span></div><div><strong>02</strong><h3>Chinese Core Journal Paper</h3><p>本科科研阶段形成的中文核心期刊论文成果。</p><span>题名与链接待补充</span></div></div>
          </section>

          <section className="paper-section">
            <AcademicHeading id="honors" mark="HA" title="Honors & Awards" subtitle="荣誉与奖项" />
            <div className="honor-list"><article><span>2023</span><strong>全国大学生电子设计竞赛 · 全国二等奖</strong><p>辽宁赛区该赛道最高奖</p></article><article><span>NATIONAL</span><strong>创新方法大赛 · 全国一等奖</strong></article><article><span>NATIONAL</span><strong>创新体验竞赛 · 全国一等奖</strong></article><article><span>ACADEMIC</span><strong>命名奖学金 · 连续三年校奖学金 · 优秀学生</strong></article></div>
          </section>

          <section className="paper-section skills-section">
            <AcademicHeading id="skills" mark="TS" title="Technical Skills" subtitle="技术能力" />
            <dl><div><dt>Data & Scientific Computing</dt><dd>Pandas · NumPy · scikit-learn · Matplotlib · Seaborn</dd></div><div><dt>Machine Learning</dt><dd>XGBoost · LightGBM · CatBoost · Grid / Random Search · Feature Engineering</dd></div><div><dt>Automation & Evaluation</dt><dd>requests · pynput · Selenium · EasyOCR · RAG · UVM</dd></div><div><dt>Quant Data Engineering</dt><dd>PIT 数据工程 · Dolphin / PySim · 数据质量监控 · 自动化调度</dd></div><div><dt>Quantitative Research</dt><dd>Backtrader · 海龟策略 · 事件驱动策略 · 因子研究 · 宏观择时</dd></div></dl>
            <div className="research-note"><b>PERSONAL RESEARCH NOTE</b><p>2025.05 至今，A 股个人模拟盘累计收益 47.97%，最大回撤 6%。该记录仅用于个人研究展示，不构成投资建议或未来收益承诺。</p></div>
          </section>
        </div>
      </div>

      <footer className="academic-footer"><span>© 2026 GeFei Jia · Academic Profile v0.2</span><span>Last updated: September 2026</span></footer>
    </main>
  );
}
