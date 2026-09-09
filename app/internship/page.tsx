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
            <a href="#map">工作关系</a>
            <a href="#work">项目记录</a>
            <a href="#rerun">核验记录</a>
            <a href="#audit">宏观审计</a>
            <a href="#materials">附件</a>
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
            <h2>量化研究实习</h2>
            <p className="result-byline">大寒智能量化公司 · 量化研究实习生 · 2025.11 — 至今</p>
            <p>实习工作分为研究与数据工程两部分：研究侧完成 Alpha、市场 Beta 和宏观配置课题，工程侧负责财务 PIT 加载、数据源同步与日频任务。以下按项目记录个人承担的工作、形成的产物和可公开核验的结果；公司策略公式、组合参数、信号值和证券明细不公开。</p>
          </header>

          <section className="result-section result-map" id="map">
            <header className="result-section-heading"><h2>工作关系</h2><span>WORK MAP</span></header>
            <figure>
              <a href="/quant-research-architecture.svg" target="_blank" rel="noreferrer">
                <img src="/quant-research-architecture.svg" alt="量化研究与数据工程工作关系图" />
              </a>
              <figcaption>数据可见性与质量控制是三类研究的共同底座；图中箭头表示数据交接、验证和研究结论回写。点击可查看原图。</figcaption>
            </figure>
          </section>

          <section className="result-section" id="work">
            <header className="result-section-heading"><h2>项目记录</h2><span>SELECTED WORK</span></header>
            <div className="project-records">
              {projectRecords.map((item) => (
                <article key={item.index}>
                  <div className="project-record-index"><strong>{item.index}</strong><span>{item.label}</span></div>
                  <div>
                    <h3>{item.title}</h3>
                    <p>{item.body}</p>
                    <p className="record-evidence">{item.note}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="result-section" id="rerun">
            <header className="result-section-heading"><h2>核验记录</h2><span>VALIDATION</span></header>
            <p className="result-section-intro">远端脚本只在合成数据、临时目录或只读模式下执行；下列记录不含公司策略参数和证券级结果。</p>
            <div className="research-records">
              <article>
                <time>2026.09.09</time>
                <div>
                  <h3>Alpha 因子日报</h3>
                  <p>使用 2026 年 9 月 8 日的实际研究数据重新生成日报。全市场范围为 4,300 个样本，其中 4,169 个进入计算，覆盖率为 96.95%；同时生成 5、10 和 20 日三个观察期的报告。</p>
                  <p className="record-note">运行完成 · 退出状态 0 · 收益与 IC 数值未公开</p>
                </div>
              </article>
              <article>
                <time>2026.09.09</time>
                <div>
                  <h3>市场 Beta 合成规则测试</h3>
                  <p>在合成数据上复跑两组确定性测试：因子合成测试 10 / 10 通过，耗时 0.878 秒；方向与因果约束测试 12 / 12 通过，耗时 0.272 秒。</p>
                  <p className="record-note">共 22 项测试 · 覆盖未来数据隔离、单日滞后、滚动边界、空检验、正交残差和原子化输出</p>
                </div>
              </article>
              <article>
                <time>2026.09.09</time>
                <div>
                  <h3>多资产日频任务测试</h3>
                  <p>复跑分页、交易日解析、补采任务、收盘核验和并发控制三组测试，共 26 / 26 项通过，耗时 0.50 秒。</p>
                  <p className="record-note">隔离临时目录 · 不写入生产数据 · 不调用真实网络接口</p>
                </div>
              </article>
              <article>
                <time>2026.09.09</time>
                <div>
                  <h3>聚源 PIT 全量完整性审计</h3>
                  <p>审计 22 张表和 97,105 个历史分区文件；应保留的 145,171,459 行记录全部匹配，1,826 行因当时尚不可见被正确排除。</p>
                  <p className="record-note">完成状态 0 · 未来行、缺失文件、内容、行数及表头不一致均为 0</p>
                </div>
              </article>
            </div>
          </section>

          <section className="result-section" id="audit">
            <header className="result-section-heading"><h2>宏观配置审计</h2></header>
            <p className="result-section-intro">本次读取已有审计产物进行核对，没有改写生产输出。</p>
            <div className="research-records">
              <article>
                <time>PIT</time>
                <div><h3>时点与确定性检查</h3><p>72 项历史时点抽查全部通过，未发现提前读取；使用相同输入进行两次复跑，输出一致。</p></div>
              </article>
              <article>
                <time>敏感性</time>
                <div><h3>参数与状态时间线</h3><p>审计产物包含 46 组参数敏感性变体和 26 个连续状态阶段，用于检查结论是否依赖单一参数以及状态切换是否连贯。</p></div>
              </article>
              <article>
                <time>压力阶段</time>
                <div>
                  <h3>六个历史阶段中四个通过</h3>
                  <p>2020 年疫情冲击、2020 年下半年修复、2021—2022 年下行和 2024 年 9 月市场反转通过预设检查。2015 年市场异常波动与 2018 年去杠杆阶段未通过，分别出现恢复判断偏早和状态分类偏差；这两段作为模型适用边界保留。</p>
                </div>
              </article>
            </div>
          </section>

          <section className="result-section" id="materials">
            <header className="result-section-heading"><h2>附件</h2></header>
            <ul className="attachment-list">
              <li><a href="/results/remote-validation-2026-09-09.json" target="_blank" rel="noreferrer">远端复跑结果（JSON） <External /></a><p>本页复跑数据的机器可读版本，已移除服务器、路径和策略敏感信息。</p></li>
              <li><a href="/quant-research-architecture.svg" target="_blank" rel="noreferrer">实习工作结构图 <External /></a><p>说明 Alpha、市场 Beta、宏观配置和 PIT 数据工程之间的工作关系。</p></li>
            </ul>
          </section>

          <p className="result-disclosure">复跑结果只证明相应程序在所述环境和数据口径下完成，并不构成投资建议，也不代表未来收益。</p>
        </div>
      </div>

      <footer className="site-footer"><span>© 2026 贾格非</span><a href="/">返回个人主页</a></footer>
    </main>
  );
}
