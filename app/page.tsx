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
  { date: "2025.11 — 至今", org: "大寒智能量化公司", role: "量化研究实习生 · Alpha / Beta Research", points: ["研究 A 股 20 日尺度市场 Beta 的可预测性。结果显示，主要信息来自市场所处的价格与回撤状态；控制这一状态后，传统估值信号不再提供独立增量。", "检验动量、流动性和技术形态等候选解释：简单动量和“顶底形态预示方向”的假设未成立，趋势一致性、订单簿持续性及形态出现频率则保留了部分增量信息。", "完成月频宏观状态与多资产配置研究。黄金和长债的候选信号较为稳定，股票信号需要宽信用确认；模型因此定位为风险覆盖层，而非独立择时策略。", "基本面与分析师预期类横截面 Alpha 仍在统一 PIT 口径下评估，尚未形成可公开的最终结论。"] },
  { date: "2024.11 — 2025.04", org: "东软集团", role: "大模型评测实习生 · 项目负责人", points: ["负责基于大模型的周期信息抓取项目。", "以 Selenium、浏览器截图和 EasyOCR 应对反爬并提取文本。", "结合讯飞星火语义切分、DeepSeek RAG、飞书多维表格与 Coze 自动化工作流。"] },
  { date: "2023.12 — 2024.01", org: "纵存科技 · SAS 验证部", role: "测试实习生", points: ["参与 SAS IP 中 SATA 协议状态机验证，覆盖协议规范、操作场景与边界条件。", "完善 UVM 验证仿真环境，设计测试激励并完成 IP 功能验证。"] },
];

const quantStudies = [
  { code: "01", label: "MARKET BETA", title: "中期市场 Beta 由什么驱动？", question: "在 20 个交易日的持有期上，价格状态、估值和微观结构信息，谁真正具有稳定的前瞻解释力？", finding: "主要信息来自市场所处的价格与回撤状态。估值信号单独看似有效，但在控制价格状态后失去独立解释力；订单簿持续性和部分流动性特征仍保留边际信息。", decision: "以价格状态作为基准因子，只吸收通过残差检验的微观结构增量。简单等权合成比滚动 IC 加权更稳定，因此没有采用更复杂的拟合权重。", evidence: "非重叠相位 · 逐年稳定性 · 环移 null · 联合回归 · 残差 IC" },
  { code: "02", label: "HYPOTHESIS TESTING", title: "常见择时假设经得住检验吗？", question: "中期动量、顶底形态和趋势强度是否能够预测下一阶段市场方向，还是只是价格状态的另一种表达？", finding: "简单中期动量没有通过空检验；“顶分型预示下跌、底分型预示上涨”的方向假设也未成立。真正留下信息的是趋势的一致性，以及形态在一段时间内出现的频率。", decision: "淘汰没有独立增量的动量和形态方向因子，保留趋势一致性与事件频率作为候选信号。证伪结果进入研究注册表，避免以后换参数重复挖掘同一假设。", evidence: "空检验 · 跨年度复核 · 共线性检查 · 失败假设登记" },
  { code: "03", label: "MACRO ALLOCATION", title: "宏观慢变量能否指导资产配置？", question: "货币、信用、增长和通胀状态，能否在真实发布时间约束下解释 A 股、债券、商品与黄金的相对机会？", finding: "模型更擅长在状态恶化时减少大幅失误，而不是捕捉每一次上涨。黄金和长债的候选信号较稳定；股票信号需要宽信用确认，对缺少基本面配合的流动性牛市存在明确盲区。", decision: "将模型定位为月频风险覆盖层，用于状态识别和候选资产排序，不作为独立的满仓择时策略；盲区与不适用阶段在报告中单独保留。", evidence: "设计期 / 样本外 · 执行滞后与成本 · 历史压力阶段 · PIT 快照审计" },
];

const projects = [
  { no: "01", title: "同轴电缆长度与负载检测装置", meta: "全国大学生电子设计竞赛 · 核心成员 · 2022.06—2023.04", body: "3 天内完成基于时域反射与阻抗测量的检测装置；建立同轴电缆阻抗模型，以时域反射法测量长度、等效阻抗法识别负载。", result: "长度误差 < 0.5% · 负载准确率 93% · 全国二等奖" },
  { no: "02", title: "制造与物流场景下的智能优化算法设计", meta: "科研训练负责人 · 2024.03—2024.06", body: "面向分时电价下的分布式柔性作业车间调度，对工序、生产与运输进行三级编码，采用自适应遗传算法并扩展 NSGA-II 的多目标优化设计。", result: "Energy / Makespan · Adaptive GA · NSGA-II" },
  { no: "03", title: "JPX 东京股票收益预测", meta: "Kaggle 金牌方案复现 · 2025.09", body: "基于约 2,000 只日本股票完成复权处理，并从滑动窗口、加权统计、波动率、K 线、交易日及监管数据中构造特征，按行业训练 LightGBM 模型。", result: "线上评分 0.41 · 超过公开榜首方案" },
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <div className="topbar-inner">
          <a className="top-name" href="#about">贾格非</a>
          <nav aria-label="学术主页导航"><a href="#about">PROFILE</a><a href="#education">EDUCATION</a><a href="#publications">OUTPUTS</a><a href="#experience">EXPERIENCE</a><a href="#quant-workflow">QUANT</a><a href="#research">PROJECTS</a></nav>
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
            <p className="identity-focus">Game-Theoretic Filtering<br />Alpha Research & Quant Infra</p>
          </div>
          <div className="profile-list">
            <div className="profile-item"><span className="side-icon">⌖</span><p><small>LOCATION</small><strong>Hefei, China</strong></p></div>
            <div className="profile-item"><span className="side-icon">U</span><p><small>AFFILIATION</small><strong>中国科学技术大学</strong><em>电子信息 · 硕士研究生</em></p></div>
            <div className="profile-item"><span className="side-icon">R</span><p><small>RESEARCH</small><strong>滤波控制、Alpha 与量化数据</strong></p></div>
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
            <div className="topic-pills"><a href="#education">Academic Background</a><a href="#publications">Research Output</a><a href="#experience">Industry Experience</a><a href="#quant-workflow">Quant Research</a></div>
            <p className="micro-title">RESEARCH FOCUS</p>
            <p className="lead-copy">贾格非现为中国科学技术大学电子信息专业硕士研究生，研究聚焦于<strong>基于博弈论的马尔可夫随机过程滤波与控制</strong>，并将概率建模、机器学习和实验验证方法延伸至 Alpha 研究与量化系统工程。</p>
            <blockquote>如何把带有不确定性的真实问题，转化为可建模、可求解、可验证的决策系统？</blockquote>
            <p className="body-copy">他的研究路径从本科阶段的医学图像识别与变结构神经网络滑模控制出发，逐步拓展至电子系统测量、智能调度、大模型信息处理和量化研发；贯穿其中的是同一条方法主线：建立模型、构造数据、验证假设并保留可追溯证据。</p>
            <div className="evidence-row"><span><b>Foundation</b>概率 · 博弈论 · 控制</span><span><b>Methods</b>机器学习 · 智能优化</span><span><b>Application</b>Alpha · PIT · 回测审计</span></div>
            <ResearchSketch />
          </section>

          <section className="paper-section">
            <AcademicHeading id="education" mark="ED" title="Education" subtitle="教育背景" />
            <div className="academic-list">{education.map((item) => <article className="academic-entry" key={item.school}><div className="entry-year">{item.date}</div><div><h3>{item.school}</h3><p className="entry-role">{item.degree}</p><p>{item.detail}</p><div className="tag-row">{item.tags.map((tag) => <span key={tag}>{tag}</span>)}</div></div></article>)}</div>
          </section>

          <section className="paper-section publication-section">
            <AcademicHeading id="publications" mark="PB" title="Publications & Research Output" subtitle="论文与研究成果" />
            <div className="publication-grid"><div><strong>01 · EI CONFERENCE</strong><h3>医学图像深度学习研究</h3><p>本科阶段围绕医学图像识别与深度学习方法形成的会议论文成果。</p><span>完整题名、作者顺序与链接待补充</span></div><div><strong>02 · CHINESE CORE</strong><h3>变结构神经网络与滑模控制</h3><p>围绕变结构神经网络和滑模控制方法形成的中文核心期刊成果。</p><span>完整题名、作者顺序与链接待补充</span></div></div>
          </section>

          <section className="paper-section">
            <AcademicHeading id="experience" mark="PR" title="Professional Experience" subtitle="研究与行业经历" />
            <div className="academic-list">{experience.map((item) => <article className="academic-entry" key={item.org}><div className="entry-year">{item.date}</div><div><h3>{item.org}</h3><p className="entry-role">{item.role}</p><ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul></div></article>)}</div>
          </section>

          <section className="paper-section quant-workflow-section">
            <AcademicHeading id="quant-workflow" mark="QR" title="Selected Quantitative Research" subtitle="大寒智能量化 · 2025.11—至今" />
            <p className="workflow-intro">以下只保留已经形成判断的研究。每项分别说明研究问题、得到的结论，以及结论如何影响因子保留或策略定位；公司策略公式和组合参数不公开。</p>
            <div className="quant-study-list">{quantStudies.map((item) => <article className="quant-study" key={item.code}><header><span>{item.code}</span><div><small>{item.label}</small><h3>{item.title}</h3></div></header><dl><div><dt>问题</dt><dd>{item.question}</dd></div><div><dt>发现</dt><dd>{item.finding}</dd></div><div><dt>研究决策</dt><dd>{item.decision}</dd></div></dl><p className="study-evidence">验证：{item.evidence}</p></article>)}</div>
            <aside className="alpha-progress"><b>ONGOING · CROSS-SECTIONAL ALPHA</b><h3>基本面与分析师预期 Alpha</h3><p>正在回答的问题是：价值、质量、成长、现金流和分析师预期因子，在统一的 point-in-time 口径下，哪些仍具有独立的横截面解释力？目前尚未形成可公开的最终结论，因此不在此页声明超额收益。</p></aside>
            <details className="method-details">
              <summary>研究数据与验证体系</summary>
              <figure className="quant-figure">
                <div className="quant-figure-scroll"><img src="/quant-research-architecture.svg" alt="大寒智能量化实习中的 Alpha、PIT 数据、市场 Beta、宏观配置与研究审计流程图" /></div>
                <figcaption><span>Point-in-time data · falsification · reproducible handoff</span><a href="/quant-research-architecture.svg" target="_blank" rel="noreferrer">打开原图 <External /></a></figcaption>
              </figure>
            </details>
          </section>

          <section className="paper-section">
            <AcademicHeading id="research" mark="SW" title="Selected Projects" subtitle="科研竞赛与独立研究" />
            <div className="project-list">{projects.map((project) => <article className="research-entry" key={project.no}><span className="research-number">{project.no}</span><div><h3>{project.title}</h3><p className="project-meta">{project.meta}</p><p>{project.body}</p><div className="result-badge">{project.result}</div></div></article>)}</div>
          </section>

          <section className="paper-section">
            <AcademicHeading id="honors" mark="HA" title="Honors & Awards" subtitle="荣誉与奖项" />
            <div className="honor-list"><article><span>2023</span><strong>全国大学生电子设计竞赛 · 全国二等奖</strong><p>辽宁赛区该赛道最高奖</p></article><article><span>NATIONAL</span><strong>创新方法大赛 · 全国一等奖</strong></article><article><span>NATIONAL</span><strong>创新体验竞赛 · 全国一等奖</strong></article><article><span>ACADEMIC</span><strong>命名奖学金 · 连续三年校奖学金 · 优秀学生</strong></article></div>
          </section>

          <section className="paper-section skills-section">
            <AcademicHeading id="skills" mark="TS" title="Technical Skills" subtitle="技术能力" />
            <dl><div><dt>Data & Scientific Computing</dt><dd>Pandas · NumPy · scikit-learn · Matplotlib · Seaborn</dd></div><div><dt>Machine Learning</dt><dd>XGBoost · LightGBM · CatBoost · Grid / Random Search · Feature Engineering</dd></div><div><dt>Automation & Evaluation</dt><dd>requests · pynput · Selenium · EasyOCR · RAG · UVM</dd></div><div><dt>Quant Data Engineering</dt><dd>PIT 数据工程 · Dolphin / PySim · 数据质量监控 · 自动化调度</dd></div><div><dt>Alpha Research</dt><dd>Factor Engineering · IC / RankIC · Rolling OOS · Null Test · Ablation · Mechanism Check</dd></div><div><dt>Quantitative Research</dt><dd>Backtrader · 海龟策略 · 事件驱动策略 · 宏观择时 · 多资产配置</dd></div></dl>
            <div className="research-note"><b>PERSONAL RESEARCH NOTE</b><p>2025.05 至今，A 股个人模拟盘累计收益 47.97%，最大回撤 6%。该记录仅用于个人研究展示，不构成投资建议或未来收益承诺。</p></div>
          </section>
        </div>
      </div>

      <footer className="academic-footer"><span>© 2026 GeFei Jia · Academic Profile v0.8</span><span>Last updated: September 2026</span></footer>
    </main>
  );
}
