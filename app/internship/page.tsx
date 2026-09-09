/* eslint-disable @next/next/no-html-link-for-pages, @next/next/no-img-element */

import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "量化研究实习成果 | 贾格非",
  description: "大寒智能量化实习期间的研究工作、脚本复跑结果与公开审计摘要。",
  openGraph: {
    type: "article",
    url: "https://jgf-2002.github.io/internship/",
    title: "量化研究实习成果 | 贾格非",
    description: "研究工作、脚本复跑结果与公开审计摘要。",
    images: [],
  },
  twitter: {
    card: "summary",
    title: "量化研究实习成果 | 贾格非",
    description: "研究工作、脚本复跑结果与公开审计摘要。",
    images: [],
  },
};

const External = () => <span aria-hidden="true">↗</span>;

const projectRecords = [
  {
    index: "01",
    label: "CROSS-SECTIONAL ALPHA",
    title: "A 股基本面与分析师预期 Alpha",
    body: "负责价值、质量、成长、现金流、营运效率和分析师预期等因子族的定义整理、实现与批量检验。已整理 253 个因子定义，其中 178 个完成 Dolphin / PySim 可运行实现；统一输出覆盖率、IC、RankIC、分年度稳定性及多周期观察结果。",
    note: "最近一次日报复跑：4,300 只股票中 4,169 只进入计算，覆盖率 96.95%；5 / 10 / 20 日观察期均正常生成。该方向仍在研究中，不公开声明未经确认的超额收益。",
  },
  {
    index: "02",
    label: "MARKET BETA",
    title: "20 日尺度市场 Beta 因子库",
    body: "围绕价格结构、流动性与冲击、估值、订单流、技术形态及既有信号，登记并检验 790 余种候选构造。建立 20 个非重叠相位、逐年稳定性、环移空检验、联合回归和残差 IC 的统一筛选口径，用于区分表面相关与独立增量。",
    note: "完成候选族归因与合成：以价格及回撤状态作为基准，保留通过增量检验的趋势与微观结构信息；同时修正滚动标准化破坏水平信息、不同样本直接比较两类研究口径问题。研究结论已确认，尚未接入实盘。",
  },
  {
    index: "03",
    label: "MACRO ALLOCATION",
    title: "月频宏观状态与多资产配置",
    body: "构建货币、信用、增长、通胀与市场确认指标组成的月频 PIT 面板，研究股票、债券、商品和黄金在不同宏观状态下的相对配置关系；交付信号表、状态时间线、样本外回测、执行滞后及参数敏感性报告。",
    note: "审计记录包含 72 / 72 项历史时点检查、46 组敏感性变体和 26 个连续状态阶段；六个历史压力阶段中四个通过，2015 年与 2018 年的失败结果作为模型边界保留。",
  },
  {
    index: "04",
    label: "PIT LOADER",
    title: "Dolphin 原生财务 PIT 加载器",
    body: "将原先依赖 Python 预烘焙的财务数据链路改为 Dolphin 原生 C++ 加载：直接读取公告事件，按交易日选择当时可见的最新报告，并通过 XML 字段映射支持 Tushare 与聚源 JY 数据源切换；完成四张财务报表及利润表补充字段的统一合并。",
    note: "以 2022 年全交易日、全股票范围核验：未来数据违规为 0，字段覆盖约 89%，合并差异为 0.001%—0.003%；兼容模式与旧输出逐字节一致，并完成 PySim 端到端因子运行。",
  },
  {
    index: "05",
    label: "JY FINANCIAL DATA",
    title: "聚源财务数据同步与 PIT 数据集",
    body: "建设 latest、历史 PIT 与兼容镜像三层数据链路，按公告可见时间生成不可回写的历史分区；以 manifest 管理表结构和字段映射，并加入空结果保护、删除标记、原子发布、增量同步及每日质量检查。",
    note: "完整性审计覆盖 22 张表、97,105 个 PIT 文件和 145,171,459 行当时可见记录；过滤 1,826 行尚不可见数据，未来行、缺失文件、内容差异、行数差异和表头差异均为 0。",
  },
  {
    index: "06",
    label: "DAILY DATA PIPELINE",
    title: "Tushare 多资产日频数据任务",
    body: "维护 A 股及多资产日更任务，补充交易日识别、分页完整性检查、延迟数据补采、失败任务登记、按分区修复、收盘核验与日终报告；脚本统一支持重试、断点续跑和 dry-run，并以锁和原子写入避免并发覆盖。",
    note: "本次在隔离临时目录复跑 26 项测试，全部通过，耗时 0.50 秒；覆盖超 6,000 行分页、短响应拒绝、交易日边界、待补任务闭环、并发锁、原子输出和 dry-run 网络隔离。",
  },
];

export default function InternshipPage() {
  return (
    <main>
      <header className="topbar result-topbar">
        <div className="topbar-inner">
          <a className="top-identity" href="/"><strong>贾格非</strong><span>JIA GEFEI</span></a>
          <nav aria-label="成果页导航">
            <a href="#work">项目记录</a>
            <a href="#rerun">复跑结果</a>
            <a href="#audit">审计摘要</a>
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
            <div><dt>方向</dt><dd>因子研究、宏观配置与量化数据工程</dd></div>
            <div><dt>核验日期</dt><dd>2026.09.09</dd></div>
          </dl>
          <div className="result-sidebar-link"><a className="raw-result-link" href="/results/remote-validation-2026-09-09.json" target="_blank" rel="noreferrer">查看机器可读结果 <External /></a></div>
        </aside>

        <div className="result-content">
          <header className="result-intro">
            <p className="eyebrow">实习工作与公开核验记录</p>
            <h2>量化研究实习｜工作记录</h2>
            <p>实习工作分为研究与数据工程两部分：研究侧完成 Alpha、市场 Beta 和宏观配置课题，工程侧负责财务 PIT 加载、数据源同步与日频任务。以下按项目记录个人承担的工作、形成的产物和可公开核验的结果；公司策略公式、组合参数、信号值和证券明细不公开。</p>
          </header>

          <section className="result-section" id="work">
            <header className="result-section-heading"><h2>项目记录</h2><span>SELECTED WORK</span></header>
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
            <header className="result-section-heading"><h2>脚本复跑结果</h2><span>RERUN</span></header>
            <p className="result-section-intro">远端脚本只在合成数据、临时目录或只读模式下执行；下列记录不含公司策略参数和证券级结果。</p>
            <div className="table-wrap">
              <table className="result-table">
                <thead><tr><th>任务</th><th>公开结果</th><th>状态</th></tr></thead>
                <tbody>
                  <tr>
                    <td><strong>Alpha 因子日报</strong><small>实际研究数据 · 数据日 2026.09.08</small></td>
                    <td>4,169 / 4,300 个样本，覆盖率 96.95%；生成 5、10、20 日三个观察期报告</td>
                    <td>完成</td>
                  </tr>
                  <tr>
                    <td><strong>市场 Beta 合成测试</strong><small>合成数据 · 确定性测试</small></td>
                    <td>两组测试分别为 10 / 10、12 / 12 通过</td>
                    <td>22 / 22</td>
                  </tr>
                  <tr>
                    <td><strong>多资产日频任务</strong><small>临时目录 · 模拟依赖</small></td>
                    <td>分页、交易日解析、补采、收盘核验和并发控制测试全部通过</td>
                    <td>26 / 26</td>
                  </tr>
                  <tr>
                    <td><strong>聚源 PIT 完整性</strong><small>全量只读审计</small></td>
                    <td>97,105 个历史文件与 145,171,459 行可见记录全部匹配</td>
                    <td>0 差异</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="method-note">测试与审计覆盖未来数据隔离、滚动边界、环移空检验、正交残差、分页完整性、待补任务闭环、并发锁和原子化输出。</p>
          </section>

          <section className="result-section" id="audit">
            <header className="result-section-heading"><h2>宏观研究审计摘要</h2><span>AUDIT</span></header>
            <p className="result-section-intro">本次读取已有审计产物进行核对，没有改写生产输出。</p>
            <dl className="audit-list">
              <div><dt>PIT 时点抽查</dt><dd><strong>72 / 72</strong><span>未发现提前读取</span></dd></div>
              <div><dt>确定性复跑</dt><dd><strong>一致</strong><span>相同输入得到相同输出</span></dd></div>
              <div><dt>参数敏感性</dt><dd><strong>46</strong><span>组变体</span></dd></div>
              <div><dt>状态时间线</dt><dd><strong>26</strong><span>个连续阶段</span></dd></div>
              <div><dt>历史压力检查</dt><dd><strong>4 / 6</strong><span>通过预设检查</span></dd></div>
            </dl>
            <div className="limitation-note">
              <h3>保留的失败案例</h3>
              <p>2015 年市场异常波动与 2018 年去杠杆阶段未通过预设检查，分别出现恢复判断偏早和状态分类偏差；两段结果作为模型适用边界保留。</p>
            </div>
          </section>

          <section className="result-section" id="diagram">
            <header className="result-section-heading"><h2>工作结构图</h2><span>MAP</span></header>
            <p className="result-section-intro">数据可见性与质量控制是三类研究的共同底座。点击图片可单独查看。</p>
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
