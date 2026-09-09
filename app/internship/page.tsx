/* eslint-disable @next/next/no-img-element, @next/next/no-html-link-for-pages */

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
            <div><dt>方向</dt><dd>Alpha、Beta、宏观配置与 PIT 数据</dd></div>
            <div><dt>核验日期</dt><dd>2026.09.09</dd></div>
          </dl>
          <div className="result-sidebar-link"><a className="raw-result-link" href="/results/remote-validation-2026-09-09.json" target="_blank" rel="noreferrer">查看机器可读结果 <External /></a></div>
        </aside>

        <div className="result-content">
          <header className="result-intro">
            <p className="eyebrow">实习工作与公开核验记录</p>
            <h2>量化研究实习｜公开工作记录</h2>
            <p>本页记录我在实习中承担的研究工作，并附上 2026 年 9 月 9 日在远端研究环境中的复跑结果。为遵守公司保密要求，策略公式、组合权重、信号值、IC / RankIC 数值和证券明细均未公开。</p>
          </header>

          <section className="result-section" id="work">
            <header className="result-section-heading"><h2>研究工作</h2><span>WORK</span></header>
            <div className="work-list">
              {work.map((item, index) => (
                <article key={item.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <div><h3>{item.title}</h3><p>{item.body}</p></div>
                </article>
              ))}
            </div>
          </section>

          <section className="result-section" id="rerun">
            <header className="result-section-heading"><h2>脚本复跑记录</h2><span>RERUN</span></header>
            <p className="result-section-intro">三项任务均在远端研究环境完成，退出状态为 0。两组 Beta 测试共 22 项，全部通过。</p>
            <div className="table-wrap">
              <table className="result-table">
                <thead><tr><th>任务</th><th>公开结果</th><th>耗时</th></tr></thead>
                <tbody>
                  <tr>
                    <td><strong>Alpha 日报生成</strong><small>实际研究数据 · 数据日 2026.09.08</small></td>
                    <td>4,169 / 4,300 个样本；覆盖率 96.95%；生成 5、10、20 日三个观察期报告</td>
                    <td>成功完成</td>
                  </tr>
                  <tr>
                    <td><strong>市场 Beta 合成测试 A</strong><small>合成数据 · 确定性单元测试</small></td>
                    <td>10 / 10 通过</td><td>0.878 s</td>
                  </tr>
                  <tr>
                    <td><strong>市场 Beta 合成测试 B</strong><small>合成数据 · 确定性单元测试</small></td>
                    <td>12 / 12 通过</td><td>0.272 s</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="method-note">测试覆盖：未来数据隔离、单日滞后、滚动边界、环移空检验、正交残差、预注册规则冻结、候选信号隔离及原子化输出。</p>
          </section>

          <section className="result-section" id="audit">
            <header className="result-section-heading"><h2>宏观研究审计摘要</h2><span>AUDIT</span></header>
            <p className="result-section-intro">以下数据来自已有审计产物，本次仅做只读核验，没有覆盖生产输出。</p>
            <dl className="audit-list">
              <div><dt>PIT 时点抽查</dt><dd><strong>72 / 72</strong><span>未发现提前读取</span></dd></div>
              <div><dt>确定性复跑</dt><dd><strong>一致</strong><span>相同输入得到相同结果</span></dd></div>
              <div><dt>参数敏感性</dt><dd><strong>46</strong><span>组变体</span></dd></div>
              <div><dt>状态时间线</dt><dd><strong>26</strong><span>个连续阶段</span></dd></div>
              <div><dt>历史压力检查</dt><dd><strong>4 / 6</strong><span>通过</span></dd></div>
            </dl>
            <div className="limitation-note">
              <h3>保留的失败案例</h3>
              <p>2015 年市场异常波动与 2018 年去杠杆阶段未通过预设检查，分别出现状态恢复判断偏早和状态分类偏差。这两段没有从报告中删除，而是作为模型适用边界继续保留。</p>
            </div>
          </section>

          <section className="result-section" id="diagram">
            <header className="result-section-heading"><h2>工作结构图</h2><span>MAP</span></header>
            <p className="result-section-intro">用于说明四类工作的衔接关系；具体策略参数不在图中展示。</p>
            <figure className="result-figure">
              <div><img src="/quant-research-architecture.svg" alt="量化研究实习工作结构图" /></div>
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
