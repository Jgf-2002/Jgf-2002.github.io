/* eslint-disable @next/next/no-img-element */
const Arrow = () => <span aria-hidden="true">↗</span>;

const SectionHead = ({ index, eyebrow, title, note }: { index: string; eyebrow: string; title: string; note: string }) => (
  <header className="section-head">
    <span className="section-index">{index}</span>
    <div><p className="eyebrow">{eyebrow}</p><h2>{title}</h2></div>
    <p className="section-note">{note}</p>
  </header>
);

function ResearchMap() {
  return (
    <svg className="research-map" viewBox="0 0 1180 470" role="img" aria-labelledby="research-map-title research-map-desc">
      <title id="research-map-title">贾格非的研究方法地图</title>
      <desc id="research-map-desc">从随机过程、博弈论和控制理论出发，连接机器学习、优化算法、计算机视觉与量化研究。</desc>
      <defs>
        <filter id="rough" x="-10%" y="-10%" width="120%" height="120%">
          <feTurbulence type="fractalNoise" baseFrequency="0.012" numOctaves="1" seed="9" result="noise" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="1.5" />
        </filter>
        <marker id="arrowBlue" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#6488c8" /></marker>
        <marker id="arrowOrange" markerWidth="9" markerHeight="9" refX="8" refY="4.5" orient="auto"><path d="M0,0 L9,4.5 L0,9 Z" fill="#d8793c" /></marker>
      </defs>
      <g filter="url(#rough)">
        <rect x="36" y="42" width="1108" height="374" rx="30" className="map-boundary" />
        <path d="M302 170 C370 96 438 90 520 142" className="map-arrow" markerEnd="url(#arrowBlue)" />
        <path d="M302 246 C374 280 438 278 520 225" className="map-arrow" markerEnd="url(#arrowBlue)" />
        <path d="M657 176 C765 116 825 114 908 154" className="map-arrow" markerEnd="url(#arrowBlue)" />
        <path d="M655 240 C754 302 838 310 920 265" className="map-arrow" markerEnd="url(#arrowBlue)" />
        <path d="M1020 220 C1090 320 1005 374 860 354 C718 334 638 315 596 276" className="map-loop" markerEnd="url(#arrowOrange)" />
        <path d="M196 202 C168 91 316 59 420 84" className="map-pencil" />
      </g>
      <text x="63" y="77" className="svg-kicker">RESEARCH NOTEBOOK / 研究方法白板</text>
      <text x="1090" y="77" textAnchor="end" className="svg-small">v0.1 · evolving</text>
      <g transform="translate(78 128)">
        <rect width="225" height="146" rx="18" className="node node-blue" />
        <text x="22" y="35" className="node-id">INPUT / 理论基础</text><text x="22" y="72" className="node-title">随机过程</text>
        <text x="22" y="101" className="node-body">概率 · 信息论 · 马尔可夫过程</text><text x="22" y="125" className="node-body">Game theory / 博弈论</text>
      </g>
      <g transform="translate(476 126)">
        <rect width="210" height="158" rx="18" className="node node-purple" />
        <text x="23" y="35" className="node-id">CORE / 当前主线</text><text x="23" y="72" className="node-title">滤波与控制</text>
        <text x="23" y="101" className="node-body">状态估计 · 线性系统</text><text x="23" y="126" className="node-body">变结构神经网络 · 滑模控制</text>
      </g>
      <g transform="translate(890 116)">
        <rect width="205" height="188" rx="18" className="node node-green" />
        <text x="22" y="35" className="node-id">OUTPUT / 系统验证</text><text x="22" y="72" className="node-title">智能决策</text>
        <text x="22" y="102" className="node-body">机器学习 · 优化算法</text><text x="22" y="128" className="node-body">计算机视觉 · 工程验证</text><text x="22" y="154" className="node-body">量化研究 · 回测</text>
      </g>
      <text x="340" y="118" className="svg-annotation">建模 / formulate</text><text x="738" y="111" className="svg-annotation">求解 / optimize</text>
      <text x="815" y="375" className="svg-feedback">evidence → update ↻</text><text x="87" y="386" className="svg-caption">工作方式：把问题抽象成可验证的模型，再用数据与实验闭环。</text>
    </svg>
  );
}

function LlmFlow() {
  const nodes = [[54, "N1", "浏览器", "Selenium"], [235, "N2", "截图识别", "EasyOCR"], [416, "N3", "语义切分", "讯飞星火"], [597, "N4", "RAG 检索", "DeepSeek"], [778, "N5", "结构化", "飞书表格"], [959, "N6", "自动执行", "Coze"]];
  return (
    <svg className="flow-board" viewBox="0 0 1080 330" role="img" aria-labelledby="llm-title llm-desc">
      <title id="llm-title">大模型信息抓取系统流程</title><desc id="llm-desc">使用 Selenium、截图、EasyOCR、讯飞星火、DeepSeek RAG、飞书多维表格和 Coze 形成自动化流程。</desc>
      <defs>
        <filter id="flowRough" x="-10%" y="-10%" width="120%" height="120%"><feTurbulence type="fractalNoise" baseFrequency="0.018" numOctaves="1" seed="4" result="noise" /><feDisplacementMap in="SourceGraphic" in2="noise" scale="1.2" /></filter>
        <marker id="flowBlueArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8Z" fill="#708dc1" /></marker>
        <marker id="flowOrangeArrow" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto"><path d="M0 0 L8 4 L0 8Z" fill="#d8793c" /></marker>
      </defs>
      <g filter="url(#flowRough)">
        <rect x="22" y="32" width="1036" height="252" rx="24" className="flow-boundary" />
        {[176, 353, 535, 717, 898].map((x, i) => <path key={x} d={`M${x} ${i === 0 ? 163 : i === 1 ? 154 : i === 2 ? 153 : i === 3 ? 153 : 151} C${x + 30} 136 ${x + 48} 136 ${x + 71} 153`} className="flow-arrow" markerEnd="url(#flowBlueArrow)" />)}
        <path d="M1016 203 C1000 268 881 281 770 260 C650 237 507 237 405 266 C301 294 166 284 112 227" className="flow-retry" markerEnd="url(#flowOrangeArrow)" />
      </g>
      {nodes.map(([x, id, title, tech]) => <g transform={`translate(${x} 113)`} key={id}><rect width="122" height="92" rx="14" className="flow-node" /><text x="14" y="23" className="flow-id">{id}</text><text x="14" y="49" className="flow-title">{title}</text><text x="14" y="72" className="flow-tech">{tech}</text></g>)}
      <text x="52" y="72" className="flow-label">LLM PERIODIC INTELLIGENCE PIPELINE / 大模型周期信息抓取</text><text x="410" y="305" className="flow-retry-label">失败 / 反爬 → 调整策略 → retry ↻</text>
    </svg>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="主导航">
        <a className="brand" href="#top" aria-label="返回首页"><span className="brand-mark">JG</span><span><strong>贾格非</strong><small>Control · AI · Quant</small></span></a>
        <div className="nav-links"><a href="#research">研究</a><a href="#experience">经历</a><a href="#work">项目</a><a href="#skills">能力</a><a href="#contact">联系</a></div><span className="draft-chip">RESUME · v0.1</span>
      </nav>

      <section className="hero" id="top">
        <div className="hero-copy"><p className="eyebrow">SYSTEMS × INTELLIGENCE × DECISION</p><h1>贾格非<span>GeFei Jia</span></h1><p className="role">电子信息硕士研究生 · 控制、机器学习与量化研究</p><p className="intro">现就读于中国科学技术大学，关注基于博弈论的马尔可夫随机过程滤波与控制；从数学建模出发，把控制理论、智能算法与真实系统连接起来。</p><div className="hero-actions"><a className="button primary" href="#work">查看代表项目 <Arrow /></a><a className="button ghost" href="mailto:gefei20020421@163.com">联系我</a></div><div className="quick-links" aria-label="个人链接"><a href="https://github.com/Jgf-2002" target="_blank" rel="noreferrer">GitHub <Arrow /></a><span>Hefei, China</span><span>2025 — Present</span></div></div>
        <aside className="profile-panel" aria-label="个人概览"><div className="portrait-wrap"><span className="sketch-corner corner-a" /><span className="sketch-corner corner-b" /><img src="/profile.jpg" alt="贾格非证件照" /><span className="status-dot">MSc · YEAR 1</span></div><div className="now-card"><p>NOW / 当前</p><strong>中国科学技术大学</strong><span>电子信息 · 硕士研究生</span><em>Game theory · Stochastic process · Control</em></div></aside>
      </section>

      <section className="signal-strip" aria-label="核心数据"><article><strong>TOP 5%</strong><span>本科 GPA 4.16 / 5.0</span></article><article><strong>10+</strong><span>国家级及省级奖项</span></article><article><strong>2</strong><span>EI 会议 / 中文核心论文</span></article><article><strong>47.97%</strong><span>A 股个人模拟盘累计收益</span></article></section>

      <section className="content-section" id="research">
        <SectionHead index="01" eyebrow="RESEARCH / 研究" title="方法先行，验证闭环" note="理论基础、算法实现和真实应用之间，保持可解释的连接。" />
        <div className="whiteboard"><ResearchMap /></div>
        <div className="research-detail-grid"><article><span>CURRENT FOCUS</span><h3>博弈论 × 随机过程</h3><p>研究基于博弈论的马尔可夫随机过程滤波与控制，关注不确定环境中的状态估计与决策。</p></article><article><span>FOUNDATION</span><h3>数学与控制基础</h3><p>概率论、信息论、博弈论、随机过程、线性系统与计算机控制工程。</p></article><article><span>RESEARCH OUTPUT</span><h3>论文与验证</h3><p>本科阶段围绕医学图像深度学习、变结构神经网络滑模控制开展研究，形成 1 篇 EI 会议论文与 1 篇中文核心期刊论文。</p></article></div>
      </section>

      <section className="content-section" id="experience">
        <SectionHead index="02" eyebrow="EDUCATION & EXPERIENCE / 教育与经历" title="从控制工程到智能系统" note="教育、工程实践与研究主线并行推进。" />
        <div className="timeline">
          <article className="timeline-item featured"><div className="timeline-date">2025.09 — 至今</div><div className="timeline-dot" /><div className="timeline-card"><p className="card-label">EDUCATION</p><h3>中国科学技术大学</h3><strong>电子信息 · 硕士研究生（一年级）</strong><p>研究方向：基于博弈论的马尔可夫随机过程滤波与控制。</p><div className="tags"><span>随机过程</span><span>高等计算机网络</span><span>线性系统</span><span>计算机视觉</span><span>计算机控制工程</span><span>图像测量</span></div></div></article>
          <article className="timeline-item"><div className="timeline-date">2024.11 — 2025.04</div><div className="timeline-dot" /><div className="timeline-card"><p className="card-label">INTERNSHIP</p><h3>东软集团</h3><strong>大模型评测实习生 · 周期信息抓取项目负责人</strong><p>负责基于大模型的周期信息抓取项目，串联网页自动化、OCR、语义切分、RAG 与自动化工作流。</p></div></article>
          <article className="timeline-item"><div className="timeline-date">2023.12 — 2024.01</div><div className="timeline-dot" /><div className="timeline-card"><p className="card-label">INTERNSHIP</p><h3>宗村科技 · SAS 验证部</h3><strong>测试实习生</strong><p>参与 SAS / SATA 状态机验证，搭建 UVM 仿真环境、设计测试激励并完成 IP 功能验证。</p></div></article>
          <article className="timeline-item"><div className="timeline-date">2021.09 — 2025.07</div><div className="timeline-dot" /><div className="timeline-card"><p className="card-label">EDUCATION</p><h3>东北大学</h3><strong>自动化（郎世俊实验班）</strong><p>GPA 4.16 / 5.0，专业 TOP 5%；获得命名奖学金、连续三年校奖学金与优秀学生荣誉。</p></div></article>
        </div>
      </section>

      <section className="content-section project-section" id="work">
        <SectionHead index="03" eyebrow="SELECTED WORK / 代表项目" title="把方法做成可运行的系统" note="角色、技术路径与结果均来自当前简历；后续可继续补充代码仓库与成果链接。" />
        <article className="project-hero-card"><div className="project-copy"><p className="card-label">01 · LLM ENGINEERING</p><h3>大模型周期信息抓取系统</h3><p>东软集团 · 项目负责人</p><ul><li>Selenium 处理反爬并完成浏览器截图，EasyOCR 提取页面文本。</li><li>基于讯飞星火提示词完成语义切分，结合 DeepSeek RAG 进行知识检索。</li><li>结果写入飞书多维表格，并通过 Coze 工作流实现周期自动化。</li></ul></div><div className="flow-wrap"><LlmFlow /></div></article>
        <div className="project-grid">
          <article className="project-card blue-card"><div className="project-top"><span>02 · EMBEDDED / CONTROL</span><span>2022.06 — 2023.04</span></div><h3>同轴电缆长度与负载检测装置</h3><p>全国大学生电子设计竞赛 · 核心成员</p><div className="sketch-metric"><span>signal</span><i>〰→</i><span>TDR</span><i>→</i><span>impedance</span><i>→</i><span>result</span></div><p>3 天内完成基于时域反射与阻抗测量的检测装置：长度误差小于 0.5%，负载识别准确率 93%。</p><div className="result-line"><b>RESULT</b><strong>全国二等奖</strong><span>辽宁赛区该赛道最高奖</span></div></article>
          <article className="project-card paper-card"><div className="project-top"><span>03 · OPTIMIZATION</span><span>2024.03 — 2024.06</span></div><h3>生产物流智能优化</h3><p>科研负责人</p><ul><li>面向分时电价下的分布式柔性作业车间调度。</li><li>以能耗与最大完工时间为多目标，设计三级编码与自适应遗传算法。</li><li>扩展 NSGA-II 目标设计，平衡生产效率与能源成本。</li></ul><div className="paper-note">schedule → energy / makespan → Pareto frontier</div></article>
          <article className="project-card green-card"><div className="project-top"><span>04 · QUANT RESEARCH</span><span>2025.09</span></div><h3>JPX 东京股票收益预测</h3><p>Kaggle 金牌方案复现</p><ul><li>覆盖约 2,000 只日本股票，构造复权、窗口统计、加权均值、波动率、K 线、交易日与监管特征。</li><li>按行业训练 LightGBM 模型；线上评分 0.41，超过公开榜单第一名方案。</li></ul><div className="score-sketch"><span>public baseline</span><i /><strong>0.41</strong><em>online score</em></div></article>
        </div>
      </section>

      <section className="content-section" id="skills">
        <SectionHead index="04" eyebrow="CAPABILITIES / 能力矩阵" title="研究、工程与数据工具" note="以能解决的问题组织，而不是简单堆叠技术名词。" />
        <div className="capability-grid"><article><div className="cap-icon">Σ</div><p className="card-label">DATA</p><h3>数据分析</h3><p>Pandas · NumPy · scikit-learn<br />Matplotlib · Seaborn</p></article><article><div className="cap-icon">↻</div><p className="card-label">AUTOMATION</p><h3>自动化采集</h3><p>requests · pynput · Selenium<br />OCR · 网页流程自动化</p></article><article><div className="cap-icon">△</div><p className="card-label">MODELING</p><h3>机器学习</h3><p>XGBoost · LightGBM · CatBoost<br />网格 / 随机搜索 · 特征工程</p></article><article><div className="cap-icon">∿</div><p className="card-label">QUANT</p><h3>量化研究</h3><p>Backtrader · 海龟策略<br />事件驱动策略 · 因子研究</p></article></div>
        <div className="personal-note"><p className="eyebrow">PERSONAL RESEARCH LOG / 个人研究记录</p><div><strong>2025.05 — 至今</strong><p>A 股个人模拟盘累计收益 47.97%，最大回撤 6%；持续阅读投资经典并以回测验证交易想法。</p><small>注：模拟盘历史记录仅用于个人研究展示，不构成投资建议或未来收益承诺。</small></div></div>
      </section>

      <section className="award-band"><div><span>SELECTED RECOGNITION</span><strong>全国大学生电子设计竞赛 · 全国二等奖</strong></div><div><strong>创新方法大赛 · 全国一等奖</strong><strong>创新体验竞赛 · 全国一等奖</strong></div><p>累计 10+ 项国家级 / 省级奖项</p></section>

      <footer id="contact"><div className="footer-lead"><p className="eyebrow">CONTACT / 联系</p><h2>讨论控制、AI 与量化研究。</h2><p>这是第一版个人履历站，内容与项目链接将持续补充。</p></div><div className="contact-grid"><a href="mailto:gefei20020421@163.com"><span>EMAIL</span><strong>gefei20020421@163.com</strong><Arrow /></a><a href="tel:13352134131"><span>PHONE</span><strong>133-5213-4131</strong><Arrow /></a><div><span>WECHAT</span><strong>Geography020421</strong></div><a href="https://github.com/Jgf-2002" target="_blank" rel="noreferrer"><span>GITHUB</span><strong>Jgf-2002</strong><Arrow /></a></div><div className="footer-bottom"><span>© 2026 GeFei Jia</span><span>Designed as an evolving research notebook.</span><a href="#top">BACK TO TOP ↑</a></div></footer>
    </main>
  );
}
