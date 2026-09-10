/* eslint-disable @next/next/no-html-link-for-pages, @next/next/no-img-element */

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "量化研究实习成果 | 贾格非",
  description: "大寒智能量化实习期间的多源数据工程、中低频 Alpha 与 Beta 因子研究。",
  openGraph: {
    type: "article",
    url: "https://jgf-2002.github.io/internship/",
    title: "量化研究实习成果 | 贾格非",
    description: "多源数据工程、中低频 Alpha 与 Beta 因子研究。",
    images: [],
  },
  twitter: {
    card: "summary",
    title: "量化研究实习成果 | 贾格非",
    description: "多源数据工程、中低频 Alpha 与 Beta 因子研究。",
    images: [],
  },
};

const External = () => <span aria-hidden="true">↗</span>;

const projectRecords = [
  {
    index: "01",
    label: "DATA ENGINEERING",
    title: "多源金融数据落盘与研究数据底座",
    body: "负责 Tushare、聚源 JY 与 AkShare 数据接入和落盘，覆盖财务报表、分析师预期、A 股量价与资金流，以及指数、基金、期货、期权和部分海外市场数据。建立全量初始化、日增量更新、缺口补采和日终核验链路，统一证券代码、字段、交易日和公告可见时间口径。",
    note: "累计整理约 131 GB 历史数据；完成 Dolphin 原生财务 PIT 加载和 Tushare / JY 字段映射。聚源 PIT 全量审计覆盖 22 张表、97,105 个文件和约 1.45 亿行可见记录，未发现未来数据或文件、内容、行数和表头差异。",
  },
  {
    index: "02",
    label: "ALPHA RESEARCH",
    title: "基本面、分析师预期与量价 Alpha",
    body: "负责 A 股中低频 Alpha 因子研究，覆盖价值、质量、成长、现金流、营运效率、分析师预期和量价等方向；完成因子定义、PIT 取数、Dolphin / PySim 实现、批量回测和日报跟踪，并以统一证券池和收益窗口比较候选因子。",
    note: "整理 253 个基本面及分析师因子定义，完成 178 个可运行实现；按覆盖率、IC、RankIC、分年度稳定性和多周期表现进行筛选。最近一次日报覆盖 4,300 只股票，其中 4,169 只进入计算，覆盖率 96.95%。",
  },
  {
    index: "03",
    label: "BETA RESEARCH",
    title: "A 股市场中低频 Beta 因子研究",
    body: "负责 20 日尺度市场 Beta 因子挖掘，围绕价格与回撤状态、估值、流动性与冲击、订单流、趋势和技术形态构建候选信号；使用 20 个非重叠相位、分年度稳定性、环移空检验、联合回归和残差 IC 识别真正具有独立解释力的信息。",
    note: "登记并检验 790 余种候选构造，完成候选族归因和合成。研究确认价格与回撤状态构成基准解释，趋势一致性与部分微观结构信号提供增量；缺乏独立信息的估值、简单动量和形态方向信号未纳入合成。",
  },
];

export default function InternshipPage() {
  return (
    <main>
      <header className="topbar result-topbar">
        <div className="topbar-inner">
          <a className="top-identity" href="/"><strong>贾格非</strong><span>JIA GEFEI</span></a>
          <nav aria-label="成果页导航">
            <a href="#work">核心工作</a>
            <a href="#rerun">核验结果</a>
            <a href="#method">研究口径</a>
            <a href="#diagram">工作图</a>
          </nav>
          <a className="github-link" href="/">返回主页</a>
        </div>
      </header>

      <div className="result-shell">
        <aside className="result-sidebar" aria-label="实习信息">
          <div className="result-identity">
            <a className="back-link" href="/">← 返回个人主页</a>
            <p className="result-kicker">QUANTITATIVE RESEARCH</p>
            <h1>大寒智能量化公司</h1>
            <p className="result-role">量化研究实习生</p>
          </div>
          <dl className="result-meta">
            <div><dt>时间</dt><dd>2025.11 — 至今</dd></div>
            <div><dt>方向</dt><dd>数据工程、中低频 Alpha 与 Beta</dd></div>
            <div><dt>核验日期</dt><dd>2026.09.09</dd></div>
          </dl>
          <div className="result-sidebar-link"><a className="raw-result-link" href="/results/remote-validation-2026-09-09.json" target="_blank" rel="noreferrer">查看机器可读结果 <External /></a></div>
        </aside>

        <div className="result-content">
          <header className="result-intro">
            <p className="eyebrow">QUANTITATIVE RESEARCH INTERNSHIP</p>
            <h2>量化研究实习｜工作记录</h2>
            <p>实习工作围绕一套可直接服务量化研究的数据与验证链路展开：先将 Tushare、聚源 JY 和 AkShare 数据整理为统一、可追溯的研究口径，再在同一数据底座上开展 A 股中低频 Alpha 与 Beta 因子研究。</p>
          </header>

          <section className="result-section" id="work">
            <header className="result-section-heading"><h2>核心工作</h2><span>CORE RESPONSIBILITIES</span></header>
            <div className="work-list">
              {projectRecords.map((item) => (
                <article key={item.index}>
                  <span>{item.index}</span>
                  <div>
                    <p className="work-label">{item.label}</p>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                    <p className="work-note">{item.note}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="result-section" id="rerun">
            <header className="result-section-heading"><h2>公开核验结果</h2><span>VALIDATION</span></header>
            <p className="result-section-intro">远端脚本只在合成数据、临时目录或只读模式下执行；下列记录不含公司策略参数和证券级结果。</p>
            <div className="table-wrap">
              <table className="result-table">
                <thead><tr><th>任务</th><th>公开结果</th><th>状态</th></tr></thead>
                <tbody>
                  <tr>
                    <td><strong>多源数据链路</strong><small>聚源 PIT 全量审计 · 日频任务测试</small></td>
                    <td>97,105 个历史文件与约 1.45 亿行可见记录全部匹配；日频更新、补采和收盘核验测试 26 / 26 通过</td>
                    <td>通过</td>
                  </tr>
                  <tr>
                    <td><strong>中低频 Alpha</strong><small>实际研究数据 · 数据日 2026.09.08</small></td>
                    <td>4,169 / 4,300 只股票进入计算，覆盖率 96.95%；5、10、20 日观察期报告均正常生成</td>
                    <td>完成</td>
                  </tr>
                  <tr>
                    <td><strong>中低频 Beta</strong><small>合成数据 · 确定性测试</small></td>
                    <td>因子合成、未来数据隔离、滚动边界、空检验和正交残差等两组测试全部通过</td>
                    <td>22 / 22</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="method-note">公开结果仅用于说明数据和研究流程完成情况；策略公式、组合参数、信号值、IC / RankIC 数值和证券明细不公开。</p>
          </section>

          <section className="result-section" id="method">
            <header className="result-section-heading"><h2>统一研究口径</h2><span>RESEARCH STANDARD</span></header>
            <dl className="audit-list">
              <div><dt>数据时点</dt><dd><strong>PIT</strong><span>按交易日只读取当时已公开的数据</span></dd></div>
              <div><dt>Alpha 评价</dt><dd><strong>IC</strong><span>覆盖率、IC / RankIC、年度稳定性与多周期表现</span></dd></div>
              <div><dt>Beta 增量</dt><dd><strong>20 相位</strong><span>空检验、联合回归与残差 IC</span></dd></div>
              <div><dt>工程交付</dt><dd><strong>可复跑</strong><span>增量更新、失败补采、质量检查与原子化输出</span></dd></div>
            </dl>
          </section>

          <section className="result-section" id="diagram">
            <header className="result-section-heading"><h2>工作结构图</h2><span>MAP</span></header>
            <p className="result-section-intro">多源数据落盘是研究底座，向上分别支持中低频 Alpha 与 Beta 研究。点击图片可单独查看。</p>
            <figure className="result-figure">
              <div><a href="/quant-research-architecture.svg" target="_blank" rel="noreferrer"><img src="/quant-research-architecture.svg" alt="量化研究与数据工程工作关系图" /></a></div>
              <figcaption><span>量化研究实习工作结构图</span><a href="/quant-research-architecture.svg" target="_blank" rel="noreferrer">单独查看 <External /></a></figcaption>
            </figure>
          </section>

          <p className="result-disclosure">复跑结果只证明相应程序在所述环境和数据口径下完成，并不构成投资建议，也不代表未来收益。</p>
        </div>
      </div>

      <footer className="site-footer"><span>© 2026 贾格非</span><a href="/">返回个人主页</a></footer>
    </main>
  );
}
