/* eslint-disable @next/next/no-html-link-for-pages */

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

const work = [
  {
    title: "基本面与分析师预期 Alpha",
    body: "按价值、质量、成长、现金流和营运效率等类别整理 253 个因子定义，完成 178 个 Dolphin / PySim 可运行实现；统一检查覆盖率、IC、RankIC 和跨年度稳定性。当前仍在继续研究，公开页不声明未经确认的超额收益。",
  },
  {
    title: "20 日尺度市场 Beta",
    body: "检验价格状态、估值、动量、流动性、订单簿和技术形态等候选信号，并用非重叠相位、环移空检验、联合回归和残差 IC 判断独立增量。价格与回撤状态被用作基准；订单簿持续性、趋势一致性和形态频率作为补充信号。",
  },
  {
    title: "月频宏观状态与资产配置",
    body: "整理货币、信用、增长、通胀和市场确认指标，研究股票、债券、商品与黄金的状态关系；完成设计期与样本外回测、执行滞后、参数敏感性、确定性复跑和历史压力阶段审计。模型作为风险覆盖和候选资产排序工具使用。",
  },
  {
    title: "Point-in-time 数据工程",
    body: "整理约 131 GB 基本面与分析师历史数据，完成 Tushare / 聚源 JY 字段对应、Dolphin PIT 加载、PySim 批量仿真和每日质量检查，避免研究时读取当时尚未公开的数据。",
  },
];

export default function InternshipPage() {
  return (
    <main>
      <header className="topbar result-topbar">
        <div className="topbar-inner">
          <a className="top-identity" href="/"><strong>贾格非</strong><span>JIA GEFEI</span></a>
          <nav aria-label="成果页导航">
            <a href="#work">研究工作</a>
            <a href="#rerun">复跑记录</a>
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
            <div><dt>方向</dt><dd>Alpha、Beta、宏观配置与 PIT 数据</dd></div>
            <div><dt>核验日期</dt><dd>2026.09.09</dd></div>
          </dl>
          <div className="result-sidebar-link"><a className="raw-result-link" href="/results/remote-validation-2026-09-09.json" target="_blank" rel="noreferrer">查看机器可读结果 <External /></a></div>
        </aside>

        <div className="result-content">
          <header className="result-intro">
            <h2>量化研究实习</h2>
            <p className="result-byline">大寒智能量化公司 · 量化研究实习生 · 2025.11 — 至今</p>
            <p>本页记录我在实习中承担的研究工作，并附上 2026 年 9 月 9 日在远端研究环境中的复跑结果。为遵守公司保密要求，策略公式、组合权重、信号值、IC / RankIC 数值和证券明细均未公开。</p>
          </header>

          <section className="result-section" id="work">
            <header className="result-section-heading"><h2>主要工作</h2></header>
            <ul className="responsibility-list">
              {work.map((item) => (
                <li key={item.title}><strong>{item.title}</strong><p>{item.body}</p></li>
              ))}
            </ul>
          </section>

          <section className="result-section" id="rerun">
            <header className="result-section-heading"><h2>复跑记录</h2></header>
            <p className="result-section-intro">以下任务于 2026 年 9 月 9 日在远端研究环境执行，均正常结束。</p>
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
