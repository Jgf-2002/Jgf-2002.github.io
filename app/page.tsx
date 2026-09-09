/* eslint-disable @next/next/no-img-element */

const External = () => <span aria-hidden="true">↗</span>;

function SectionHeading({ id, title, english }: { id: string; title: string; english: string }) {
  return (
    <header className="section-heading" id={id}>
      <h2>{title}</h2>
      <span>{english}</span>
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
  },
  {
    date: "2021.09 — 2025.07",
    school: "东北大学",
    degree: "自动化（郎世俊实验班）· 工学学士",
    details: [
      "GPA 4.16 / 5.0，专业前 5%；获命名奖学金、连续三年校级奖学金及校优秀学生。",
      "本科阶段研究医学图像识别与变结构神经网络滑模控制。",
    ],
  },
];

const experience = [
  {
    date: "2025.11 — 至今",
    org: "大寒智能量化公司",
    role: "量化研究实习生",
    scope: "A 股 Alpha 因子 · 市场 Beta · 宏观配置 · PIT 数据工程",
    points: [
      "按价值、质量、成长、现金流和营运效率等类别整理 253 个基本面及分析师预期因子，完成 178 个 Dolphin / PySim 可运行实现，并检查 IC、RankIC、覆盖率和跨年度稳定性。",
      "围绕 20 日持有期检验价格状态、估值、动量、流动性、订单簿和技术形态等市场 Beta 信号。使用非重叠相位、空检验、联合回归和残差 IC 排除重复解释，最终以价格和回撤状态为基准，保留订单簿持续性、趋势一致性和形态频率等补充信号。",
      "搭建月频宏观状态与多资产配置框架，将货币、信用、增长、通胀和市场确认指标用于股票、债券、商品及黄金的状态判断；完成回测、参数敏感性和历史时点审计。",
      "整理约 131 GB 基本面与分析师历史数据，完成 Tushare / 聚源 JY 字段对应、Dolphin PIT 加载、PySim 批量仿真和每日质量检查，供因子回测与日常研究调用。",
    ],
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
  },
  {
    date: "2023.12 — 2024.01",
    org: "纵存科技 · SAS 验证部",
    role: "测试实习生",
    points: [
      "负责 SAS IP 中 SATA 协议状态机验证，覆盖协议规范、操作场景和边界条件。",
      "完善基于 UVM 的验证仿真环境，模拟 SATA 数据传输并编写测试激励，完成 IP 功能验证。",
    ],
  },
];

const publications = [
  { type: "EI 会议论文 · 1 篇", topic: "医学图像识别与深度学习", note: "本科阶段研究成果" },
  { type: "中文核心期刊 · 1 篇", topic: "变结构神经网络与滑模控制", note: "本科阶段研究成果" },
];

const projects = [
  {
    date: "2022.06 — 2023.04",
    title: "同轴电缆长度与负载检测装置",
    role: "全国大学生电子设计竞赛 · 核心成员",
    body: "三天内完成基于单片机与电路模块的检测装置；建立同轴电缆阻抗模型，采用时域反射法测量长度、等效阻抗法识别终端负载。",
    result: "长度误差低于 0.5%，负载识别准确率 93%；全国二等奖。",
  },
  {
    date: "2024.03 — 2024.06",
    title: "制造与物流场景下的智能优化算法设计",
    role: "科研训练负责人",
    body: "面向分时电价下的分布式柔性作业车间调度，对工序、生产与运输环节进行三级编码；采用自适应遗传算法，并拓展 NSGA-II 的多目标优化设计。",
  },
  {
    date: "2025.09",
    title: "JPX 东京股票收益预测",
    role: "Kaggle 金牌方案复现",
    body: "基于约 2,000 只日本股票完成复权与特征工程，覆盖滑动窗口、加权统计、波动率、K 线、交易日及监管数据；按行业训练 LightGBM 模型。",
    result: "线上评分 0.41，超过当时公开榜首方案。",
  },
];

export default function Home() {
  return (
    <main>
      <header className="topbar">
        <div className="topbar-inner">
          <a className="top-identity" href="#about"><strong>贾格非</strong><span>JIA GEFEI</span></a>
          <nav aria-label="页面导航">
            <a href="#about">简介</a>
            <a href="#education">教育</a>
            <a href="#publications">论文</a>
            <a href="#experience">经历</a>
            <a href="#projects">项目</a>
            <a href="#honors">荣誉</a>
          </nav>
          <a className="github-link" href="https://github.com/Jgf-2002" target="_blank" rel="noreferrer">GitHub <External /></a>
        </div>
      </header>

      <div className="page-shell">
        <aside className="profile-sidebar" aria-label="个人信息">
          <div className="profile-identity">
            <div className="portrait-frame"><img src="/profile.jpg" alt="贾格非证件照" /></div>
            <h1>贾格非</h1>
            <p className="roman-name">Jia Gefei</p>
            <p className="affiliation">中国科学技术大学<br />电子信息硕士研究生</p>
          </div>

          <section className="sidebar-section">
            <h2>研究方向</h2>
            <p>博弈论与随机过程</p>
            <p>滤波与控制</p>
            <p>机器学习与量化研究</p>
          </section>

          <section className="sidebar-section sidebar-contact">
            <h2>联系方式</h2>
            <a href="mailto:gefei20020421@163.com">gefei20020421@163.com</a>
            <a href="https://github.com/Jgf-2002" target="_blank" rel="noreferrer">github.com/Jgf-2002 <External /></a>
            <p>合肥，中国</p>
          </section>
        </aside>

        <div className="resume-content">
          <section className="resume-section intro-section">
            <SectionHeading id="about" title="个人简介" english="ABOUT" />
            <p className="intro-lead">现就读于中国科学技术大学电子信息专业，研究方向为基于博弈论的马尔可夫随机过程滤波与控制。</p>
            <p>本科毕业于东北大学自动化专业（郎世俊实验班）。本科期间参与医学图像识别、滑模控制、电子系统测量和智能调度研究；目前在大寒智能量化公司实习，负责 A 股 Alpha 因子、市场 Beta、宏观配置和 point-in-time 数据工程。</p>
          </section>

          <section className="resume-section">
            <SectionHeading id="education" title="教育背景" english="EDUCATION" />
            <div className="timeline-list">
              {education.map((item) => (
                <article className="timeline-entry" key={item.school}>
                  <time>{item.date}</time>
                  <div><h3>{item.school}</h3><p className="entry-role">{item.degree}</p>{item.details.map((detail) => <p key={detail}>{detail}</p>)}</div>
                </article>
              ))}
            </div>
          </section>

          <section className="resume-section">
            <SectionHeading id="publications" title="论文成果" english="PUBLICATIONS" />
            <div className="publication-list">
              {publications.map((item) => (
                <article key={item.type}><div><span>{item.type}</span><h3>{item.topic}</h3></div><p>{item.note}</p></article>
              ))}
            </div>
            <p className="section-note">正式题名、作者顺序及论文链接将在公开版本补充。</p>
          </section>

          <section className="resume-section">
            <SectionHeading id="experience" title="实习经历" english="EXPERIENCE" />
            <div className="timeline-list">
              {experience.map((item, index) => index === 0 ? (
                <article className="timeline-entry featured-experience" key={item.org}>
                  <time>{item.date}</time>
                  <div>
                    <h3><a href="/internship/">{item.org}</a></h3>
                    <p className="entry-role">{item.role}</p>
                    <p className="entry-scope">{item.scope}</p>
                    <ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul>
                    <a className="result-link" href="/internship/">查看实习成果与脚本复跑记录 <External /></a>
                  </div>
                </article>
              ) : (
                <article className="timeline-entry" key={item.org}>
                  <time>{item.date}</time>
                  <div><h3>{item.org}</h3><p className="entry-role">{item.role}</p><ul>{item.points.map((point) => <li key={point}>{point}</li>)}</ul></div>
                </article>
              ))}
            </div>
          </section>

          <section className="resume-section">
            <SectionHeading id="projects" title="科研与项目" english="PROJECTS" />
            <div className="project-list">
              {projects.map((project) => (
                <article className="project-entry" key={project.title}>
                  <time>{project.date}</time>
                  <div><h3>{project.title}</h3><p className="entry-role">{project.role}</p><p>{project.body}</p>{project.result && <p className="project-result"><strong>结果：</strong>{project.result}</p>}</div>
                </article>
              ))}
            </div>
          </section>

          <section className="resume-section">
            <SectionHeading id="honors" title="荣誉与奖项" english="HONORS" />
            <ul className="honor-list">
              <li><span>2023</span><strong>全国大学生电子设计竞赛全国二等奖</strong><em>辽宁赛区该赛道最高奖</em></li>
              <li><span>国家级</span><strong>创新方法大赛一等奖</strong></li>
              <li><span>国家级</span><strong>创新体验竞赛一等奖</strong></li>
              <li><span>校级</span><strong>命名奖学金、连续三年校级奖学金、校优秀学生</strong></li>
            </ul>
          </section>

          <section className="resume-section skills-section">
            <SectionHeading id="skills" title="技术能力" english="SKILLS" />
            <dl className="skills-list">
              <div><dt>编程与数据</dt><dd>Python · Pandas · NumPy · scikit-learn · Matplotlib · Seaborn</dd></div>
              <div><dt>机器学习</dt><dd>XGBoost · LightGBM · CatBoost · 特征工程 · 网格与随机搜索</dd></div>
              <div><dt>量化研究</dt><dd>因子工程 · IC / RankIC · 滚动样本外 · 空检验 · 消融实验 · Backtrader</dd></div>
              <div><dt>工程工具</dt><dd>Dolphin · PySim · Selenium · EasyOCR · RAG · UVM</dd></div>
              <div><dt>个人研究实践</dt><dd>自 2025 年 5 月记录 A 股模拟组合；截至简历日期累计收益 47.97%，最大回撤 6%（模拟记录）。</dd></div>
            </dl>
          </section>
        </div>
      </div>

      <footer className="site-footer"><span>© 2026 贾格非</span><span>最后更新：2026 年 9 月</span></footer>
    </main>
  );
}
