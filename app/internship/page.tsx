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
    title: "数据平台与 PIT 底座",
    body: "负责 Tushare、聚源 JY 与 AkShare 数据的生产化接入。Tushare / JY 提供 A 股、财务与分析师等核心数据，AkShare 补充海外指数、中概股与商品行情。",
    details: [
      "任务编排｜使用 XML 配置 Avatar / Dagflow，将 A 股主链、Universe、期货、期权、基金、债券、指数权重、延迟补采与日终 Closeout 拆分为独立节点，统一调度、重试、超时、进程锁和日志。",
      "增量发布｜基于 MySQL binlog CDC 识别 JY 变更分区，数据依次经过 staging、latest / PIT / mirror 构建、质量检查与 generation 原子发布。",
      "PIT 加载｜开发 Dolphin C++ 财报 PIT Dataloader，直接读取财报公告流并按公告日完成 as-of 对齐；通过 XML 维护 Tushare / JY 字段、证券代码与报表合并规则，使下游因子回测切换数据源时能够一键复用。",
      "质量闭环｜围绕字段完整性、非空率、未来日期、数据新鲜度、上游对账和行数一致性设置自动校验；按正常、待上游发布、阻断异常分级，将缺数 / 短量、CDC 状态与产出审计汇总为飞书卡片，支持可视化审阅和异常定位。",
    ],
  },
  {
    title: "中低频 Alpha 研究",
    body: "负责 A 股基本面、分析师预期与量价类中低频 Alpha 研究。研究范围覆盖价值、质量、成长、现金流、营运效率、预期修正和量价状态，在统一证券池、PIT 数据口径和收益窗口下比较候选信号。",
    details: [
      "因子生产｜从经济含义和字段可得性出发整理因子定义，将公式实现为 Dolphin signal，并接入 PySim 批量仿真；财务与分析师数据均按当时可见信息读取。",
      "研究评价｜统一统计覆盖率、IC / RankIC、分年度稳定性和 5 / 10 / 20 日多周期表现，结合缺失来源和极值分布定位异常结果。",
      "日常交付｜维护因子注册表、批量执行脚本和日频监控报告，使新增因子沿同一取数、计算、验证和复核流程进入研究池。",
    ],
    note: "交付结果：打通“因子定义—PIT 取数—Dolphin 实现—PySim 验证—日报跟踪”的研究流程，为后续因子去冗余与组合研究提供同口径输入。",
  },
  {
    title: "中低频 Beta 研究",
    body: "负责 A 股 20 日尺度市场 Beta 研究，围绕价格与回撤状态、估值、流动性与冲击、订单流、趋势和技术形态构建候选信号，分析不同市场状态下的中期方向与风险暴露。",
    details: [
      "候选构建｜将价格路径、回撤、成交与盘口信息拆成可解释的候选族，统一计算时点、持有期和交易约束，避免不同定义之间的口径漂移。",
      "增量检验｜使用 20 个非重叠相位、分年度复核和环移 null 判断稳定性，再通过联合回归与残差 IC 检查候选信号在基准因子之外是否仍有信息。",
      "归因合成｜以价格与回撤状态作为基准解释，保留趋势一致性和部分微观结构增量；未通过独立性检验的估值、简单动量和形态方向信号不进入合成。",
    ],
    note: "交付结果：形成候选登记、单因子检验、共线性归因、残差复核与组合验证的完整记录，保留失败假设，避免更换参数后重复挖掘。",
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
            <a href="#rerun">工程核验</a>
            <a href="#method">研究口径</a>
            <a href="#diagram">工作图</a>
          </nav>
          <a className="github-link" href="/">返回主页</a>
        </div>
      </header>

      <div className="result-shell">
        <article className="result-content">
          <header className="result-intro">
            <a className="back-link" href="/">← 返回个人主页</a>
            <h1>量化研究实习</h1>
            <p className="result-byline"><strong>大寒智能量化公司</strong><span>量化研究实习生</span><time>2025.11 — 至今</time></p>
            <p className="result-summary">实习工作分为三条主线：建设 Tushare、聚源 JY 与 AkShare 多源数据落盘和 PIT 研究底座；开展基本面、分析师预期与量价类中低频 Alpha 研究；开展 A 股市场中低频 Beta 研究。以下内容来自实际脚本与运行链路，公开版本不包含服务器信息、策略公式和组合参数。</p>
            <a className="raw-result-link" href="/results/remote-validation-2026-09-09.json" target="_blank" rel="noreferrer">公开核验记录 <External /></a>
          </header>

          <section className="result-section" id="work">
            <header className="result-section-heading"><h2>核心工作</h2></header>
            <div className="work-list">
              {projectRecords.map((item) => (
                <article key={item.title}>
                  <h3>{item.title}</h3>
                  <div className="work-body">
                    <p>{item.body}</p>
                    <ul className="work-detail-list">{item.details.map((detail) => {
                      const [term, description] = detail.split("｜");
                      return <li key={detail}><strong>{term}</strong><span>{description}</span></li>;
                    })}</ul>
                    {item.note && <p className="work-note">{item.note}</p>}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="result-section" id="rerun">
            <header className="result-section-heading"><h2>工程与研究核验</h2></header>
            <p className="result-section-intro">为核对简历表述与实际实现，我对远端脚本进行了只读梳理，并仅在合成数据或临时目录复跑可公开的测试。这里保留能说明工程完成度的结果，不展示公司策略参数和证券级数据。</p>
            <div className="table-wrap">
              <table className="result-table">
                <thead><tr><th>任务</th><th>公开结果</th><th>状态</th></tr></thead>
                <tbody>
                  <tr>
                    <td><strong>Dolphin PIT Dataloader</strong><small>财报公告流 · as-of 对齐</small></td>
                    <td>四张财务报表可直接解析并送入 PySim；2022 年全交易日、全股票检查未发现未来数据，兼容模式输出保持字节一致</td>
                    <td>验证通过</td>
                  </tr>
                  <tr>
                    <td><strong>JY CDC 与 PIT 发布</strong><small>staging · generation · watermark</small></td>
                    <td>增量同步、PIT / mirror 构建、质量检查和原子发布顺序完整；全量审计未发现未来记录、缺失文件、表头或行数差异</td>
                    <td>链路闭环</td>
                  </tr>
                  <tr>
                    <td><strong>XML / Avatar 日频任务</strong><small>日更 · 补采 · Closeout · 飞书</small></td>
                    <td>覆盖分页拉取、短量拒收、交易日判定、pending repair、并发锁、原子写入和 Closeout 审计的测试全部通过</td>
                    <td>测试通过</td>
                  </tr>
                  <tr>
                    <td><strong>Alpha / Beta 研究链路</strong><small>日报 · 因子合成 · 因果边界</small></td>
                    <td>Alpha 多周期日报可稳定生成；Beta 合成、未来数据隔离、滚动边界、空检验与正交残差测试全部通过</td>
                    <td>可复跑</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="method-note">公开结果仅用于说明数据和研究流程完成情况；策略公式、组合参数、信号值、IC / RankIC 数值和证券明细不公开。</p>
          </section>

          <section className="result-section" id="method">
            <header className="result-section-heading"><h2>统一研究口径</h2></header>
            <dl className="audit-list">
              <div><dt>数据时点</dt><dd>按交易日只读取当时已经公开的数据，财务与分析师数据遵循 PIT 口径。</dd></div>
              <div><dt>Alpha 评价</dt><dd>统一检查覆盖率、IC / RankIC、年度稳定性与 5 / 10 / 20 日多周期表现。</dd></div>
              <div><dt>Beta 增量</dt><dd>使用非重叠相位、空检验、联合回归与残差 IC 区分共同暴露和独立信息。</dd></div>
              <div><dt>工程交付</dt><dd>保留增量更新、失败补采、质量检查、原子发布和运行记录，保证任务可复跑。</dd></div>
            </dl>
          </section>

          <section className="result-section" id="diagram">
            <header className="result-section-heading"><h2>工作结构图</h2></header>
            <p className="result-section-intro">多源数据落盘是研究底座，向上分别支持中低频 Alpha 与 Beta 研究。点击图片可单独查看。</p>
            <figure className="result-figure">
              <div><a href="/quant-research-architecture.svg" target="_blank" rel="noreferrer"><img src="/quant-research-architecture.svg" alt="量化研究与数据工程工作关系图" /></a></div>
              <figcaption><span>量化研究实习工作结构图</span><a href="/quant-research-architecture.svg" target="_blank" rel="noreferrer">单独查看 <External /></a></figcaption>
            </figure>
          </section>

          <p className="result-disclosure">复跑结果只证明相应程序在所述环境和数据口径下完成，并不构成投资建议，也不代表未来收益。</p>
        </article>
      </div>

      <footer className="site-footer"><span>© 2026 贾格非</span><a href="/">返回个人主页</a></footer>
    </main>
  );
}
