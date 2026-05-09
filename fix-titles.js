const fs = require("fs");
const path = require("path");

const root = "C:\\superflow-docs";

const pages = {
  "index.mdx": {
    title: "SuperFlow Protocol",
    description: "AI-Driven Trading Operating System, Built on High-Performance Execution Infrastructure."
  },

  "overview/introduction.mdx": {
    title: "项目简介",
    description: "SuperFlow Protocol 的核心定位、系统定义与项目愿景。"
  },
  "overview/why-superflow.mdx": {
    title: "为什么选择 SuperFlow",
    description: "为什么 SuperFlow 不是普通交易工具，而是交易能力系统。"
  },
  "overview/system-philosophy.mdx": {
    title: "系统理念",
    description: "SuperFlow Protocol 的核心系统哲学。"
  },

  "protocol/architecture.mdx": {
    title: "系统架构",
    description: "SuperFlow Protocol 的核心系统架构与模块关系。"
  },
  "protocol/super-agent.mdx": {
    title: "SUPER AGENT",
    description: "SuperFlow Protocol 的核心 AI 交易执行体。"
  },
  "protocol/smart-routing.mdx": {
    title: "智能路由 Smart Routing",
    description: "SuperFlow Protocol 的智能路由系统。"
  },
  "protocol/execution-layer.mdx": {
    title: "执行层 Execution Layer",
    description: "SuperFlow Protocol 的高性能交易执行层。"
  },
  "protocol/yield-system.mdx": {
    title: "收益系统 Yield System",
    description: "SuperFlow Protocol 的收益系统与收益形成逻辑。"
  },
  "protocol/risk-control.mdx": {
    title: "风控系统 Risk Control",
    description: "SuperFlow Protocol 的系统化风控机制。"
  },
  "protocol/verification-system.mdx": {
    title: "凭证系统 Verification System",
    description: "SuperFlow Protocol 的交易凭证与收益验证系统。"
  },

  "token/super-token.mdx": {
    title: "SUPER Token",
    description: "SUPER Token 是 SuperFlow Protocol 的系统控制权、行为驱动工具与系统稳定器。"
  },
  "token/utility.mdx": {
    title: "代币用途 Token Utility",
    description: "SUPER Token 在 SuperFlow Protocol 中的核心用途。"
  },
  "token/buyback-burn.mdx": {
    title: "回购销毁 Buyback & Burn",
    description: "SUPER Token 的回购、销毁与价值反馈机制。"
  },
  "token/flywheel.mdx": {
    title: "系统飞轮 System Flywheel",
    description: "SuperFlow Protocol 的系统飞轮与长期增长模型。"
  },

  "guide/create-account.mdx": {
    title: "创建账户 Create Account",
    description: "如何进入 SuperFlow Protocol 并创建系统账户。"
  },
  "guide/deposit.mdx": {
    title: "充值资产 Deposit Assets",
    description: "如何向 SuperFlow Protocol 充值资产，并让资金进入系统状态管理。"
  },
  "guide/activate-agent.mdx": {
    title: "启用 SUPER AGENT",
    description: "如何启用 SUPER AGENT，并让账户进入 AI 交易能力系统。"
  },
  "guide/view-yield.mdx": {
    title: "查看收益 View Yield",
    description: "如何查看 SuperFlow Protocol 中的收益、收益率、历史记录与凭证数据。"
  },
  "guide/verify-records.mdx": {
    title: "验证记录 Verify Records",
    description: "如何在 SuperFlow Protocol 中查看、理解和验证交易记录与收益凭证。"
  },

  "resources/faq.mdx": {
    title: "常见问题 FAQ",
    description: "SuperFlow Protocol 常见问题说明。"
  },
  "resources/brand-assets.mdx": {
    title: "品牌资产 Brand Assets",
    description: "SuperFlow Protocol 的品牌资产、视觉规范与素材说明。"
  },

  "legal/disclaimer.mdx": {
    title: "免责声明 Disclaimer",
    description: "SuperFlow Protocol 的免责声明。"
  },
  "legal/risk-disclosure.mdx": {
    title: "风险披露 Risk Disclosure",
    description: "SuperFlow Protocol 的风险披露说明。"
  }
};

for (const [file, meta] of Object.entries(pages)) {
  const fullPath = path.join(root, file);

  if (!fs.existsSync(fullPath)) {
    console.log("SKIP:", file);
    continue;
  }

  let content = fs.readFileSync(fullPath, "utf8");

  const frontmatter = `---\ntitle: "${meta.title}"\ndescription: "${meta.description}"\n---`;

  if (content.startsWith("---")) {
    content = content.replace(/^---[\s\S]*?---/, frontmatter);
  } else {
    content = frontmatter + "\n\n" + content;
  }

  fs.writeFileSync(fullPath, content, "utf8");
  console.log("UPDATED:", file);
}

console.log("\nDone. All page titles updated.");