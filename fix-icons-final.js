const fs = require("fs");
const path = require("path");

const root = "C:\\superflow-docs";

// 只使用已经在你页面里确认能正常显示的稳定图标
const iconMap = {
  // 首页 / 总览
  "开始了解 SuperFlow": "zap",
  "查看协议架构": "route",
  "理解 SUPER AGENT": "brain",
  "查看风险披露": "shield",
  "项目简介": "book-open",
  "系统架构": "route",
  "启用 SUPER AGENT": "brain",
  "验证记录": "shield-check",
  "常见问题": "book-open",
  "风险披露": "shield",

  // 核心模块
  "SUPER AGENT": "brain",
  "Smart Routing": "route",
  "Execution Layer": "zap",
  "Yield System": "chart-line",
  "Verification System": "shield-check",
  "SUPER Token": "coins",
  "Supermarket": "chart-line",

  // Architecture
  "Account System": "wallet",
  "Capital System": "wallet",

  // SUPER AGENT
  "Decision Engine": "brain",
  "Execution Scheduler": "route",
  "Risk Control": "shield",
  "仓位控制": "wallet",
  "亏损控制": "shield",
  "执行保护": "lock",
  "状态监控": "chart-line",

  // Why SuperFlow
  "执行门槛高": "zap",
  "策略难以持续": "chart-line",
  "收益难验证": "shield-check",
  "风险不可见": "shield",

  // Execution Layer
  "订单执行": "zap",
  "状态同步": "chart-line",
  "结果反馈": "route",
  "异常保护": "shield",
  "反馈给 SUPER AGENT": "brain",
  "反馈给 Yield System": "chart-line",
  "反馈给 Verification System": "shield-check",
  "反馈给用户界面": "chart-line",

  // Yield System
  "收益记录": "chart-line",
  "收益计算": "chart-line",
  "收益展示": "wallet",
  "收益验证": "shield-check",
  "收益信息": "chart-line",

  // Risk Control
  "仓位失控": "wallet",
  "连续亏损": "shield",
  "执行异常": "zap",
  "极端行情": "shield",

  // Verification
  "证明真实交易": "shield-check",
  "解释收益来源": "chart-line",
  "连接合作方": "shield-check",
  "减少信任成本": "lock",
  "交易信息": "wallet",
  "验证信息": "shield-check",
  "风险信息": "shield",

  // Token
  "系统权限": "lock",
  "行为驱动": "zap",
  "价值反馈": "chart-line",
  "系统稳定": "shield",
  "持有": "coins",
  "锁定": "lock",
  "使用": "zap",
  "贡献": "zap",
  "系统稳定器": "shield",
  "AGENT 能力": "brain",
  "收益权重": "chart-line",
  "长期激励": "chart-line",
  "持有行为": "coins",
  "锁定行为": "lock",
  "使用行为": "zap",
  "贡献行为": "zap",
  "供应管理": "coins",
  "增强信心": "shield-check",
  "飞轮加速": "chart-line"
};

function walk(dir) {
  let files = [];

  for (const item of fs.readdirSync(dir)) {
    const full = path.join(dir, item);
    const stat = fs.statSync(full);

    if (stat.isDirectory()) {
      if (["node_modules", ".git"].includes(item)) continue;
      files = files.concat(walk(full));
    } else if (full.endsWith(".mdx")) {
      files.push(full);
    }
  }

  return files;
}

function fixCardTag(tag) {
  const titleMatch = tag.match(/title="([^"]+)"/);
  if (!titleMatch) return tag;

  const title = titleMatch[1];
  const icon = iconMap[title] || "zap";

  if (tag.includes("icon=")) {
    return tag.replace(/icon="[^"]*"/, `icon="${icon}"`);
  }

  return tag.replace("<Card", `<Card icon="${icon}"`);
}

for (const file of walk(root)) {
  let content = fs.readFileSync(file, "utf8");
  const before = content;

  // 修复所有单行或多行 Card 开始标签
  content = content.replace(/<Card\b[\s\S]*?>/g, (tag) => {
    return fixCardTag(tag);
  });

  if (content !== before) {
    fs.writeFileSync(file, content, "utf8");
    console.log("UPDATED:", file.replace(root + "\\", ""));
  }
}

console.log("Done. All Card icons normalized.");