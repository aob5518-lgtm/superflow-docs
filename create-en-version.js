const fs = require("fs");
const path = require("path");

const root = "C:\\superflow-docs";

function copyDir(src, dest) {
  if (!fs.existsSync(src)) return;

  fs.mkdirSync(dest, { recursive: true });

  for (const item of fs.readdirSync(src)) {
    const s = path.join(src, item);
    const d = path.join(dest, item);
    const stat = fs.statSync(s);

    if (stat.isDirectory()) {
      copyDir(s, d);
    } else {
      fs.copyFileSync(s, d);
    }
  }
}

function write(file, content) {
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, content, "utf8");
}

// 1. 删除旧 en，重新创建
const enRoot = path.join(root, "en");
if (fs.existsSync(enRoot)) {
  fs.rmSync(enRoot, { recursive: true, force: true });
}
fs.mkdirSync(enRoot, { recursive: true });

// 2. 复制中文结构到 en
copyDir(path.join(root, "overview"), path.join(enRoot, "overview"));
copyDir(path.join(root, "protocol"), path.join(enRoot, "protocol"));
copyDir(path.join(root, "token"), path.join(enRoot, "token"));
copyDir(path.join(root, "guide"), path.join(enRoot, "guide"));
copyDir(path.join(root, "resources"), path.join(enRoot, "resources"));
copyDir(path.join(root, "legal"), path.join(enRoot, "legal"));

// 3. 创建英文首页 en.mdx，让 /en 能打开
write(path.join(root, "en.mdx"), `---
title: "SuperFlow Protocol"
description: "AI-Driven Trading Operating System, Built on High-Performance Execution Infrastructure."
---

# SuperFlow Protocol

<img src="/images/super-agent.png" alt="SUPER AGENT" width="720" />

## AI-Driven Trading Operating System

<Info>
SuperFlow Protocol is not a trading tool. It is an AI-driven on-chain trading capability system that integrates accounts, capital, AI decision-making, smart routing, execution, yield records, and verification into one unified infrastructure.
</Info>

SuperFlow Protocol is an **AI-Driven Trading Operating System**, built on high-performance execution infrastructure.

It is not a simple trading bot, a single strategy platform, or another trading entrance. It is an on-chain operating system that abstracts trading capability into system capability.

> We do not provide trading tools.  
> We provide trading capability.

---

## Start Here

<CardGroup cols={2}>
  <Card title="Introduction" icon="zap" href="/en/overview/introduction">
    Understand the positioning, system definition, and long-term vision of SuperFlow Protocol.
  </Card>

  <Card title="System Architecture" icon="route" href="/en/protocol/architecture">
    See how accounts, capital, SUPER AGENT, smart routing, and execution form one system.
  </Card>

  <Card title="SUPER AGENT" icon="brain" href="/en/protocol/super-agent">
    Learn how the core AI trading execution body makes decisions, schedules execution, and controls risk.
  </Card>

  <Card title="Risk Disclosure" icon="shield" href="/en/legal/risk-disclosure">
    Understand the risks of real trading, AI automation, execution systems, and digital assets before participating.
  </Card>
</CardGroup>

---

## What is SuperFlow?

SuperFlow is an on-chain trading capability infrastructure that integrates trading capability, capital scheduling, smart routing, AI decision-making, execution, yield records, and verification.

In SuperFlow, users no longer face complex trading environments directly. They enter a system powered by:

- SUPER AGENT
- Smart Routing
- Execution Layer
- Yield System
- Verification System

\`\`\`text
SuperFlow = AI Decision + Smart Routing + High-Performance Execution + Yield Records + Trading Verification
\`\`\`

---

## Core Systems

<CardGroup cols={2}>
  <Card title="SUPER AGENT" icon="brain" href="/en/protocol/super-agent">
    The core AI trading execution body of SuperFlow, composed of a decision engine, execution scheduler, and risk-control system.
  </Card>

  <Card title="Smart Routing" icon="route" href="/en/protocol/smart-routing">
    The intelligent routing system that optimizes execution across platforms, paths, costs, and liquidity environments.
  </Card>

  <Card title="Execution Layer" icon="zap" href="/en/protocol/execution-layer">
    The high-performance execution layer responsible for real orders, state synchronization, and execution feedback.
  </Card>

  <Card title="Yield System" icon="chart-line" href="/en/protocol/yield-system">
    The system for recording, calculating, displaying, and verifying yield results.
  </Card>

  <Card title="Verification System" icon="shield-check" href="/en/protocol/verification-system">
    The trading voucher and yield verification system used to explain and verify execution results.
  </Card>

  <Card title="SUPER Token" icon="coins" href="/en/token/super-token">
    The system control right, behavior-driven tool, and stabilizer of SuperFlow Protocol.
  </Card>
</CardGroup>

---

## Architecture Overview

<Frame>
  <img src="/images/architecture.svg" alt="SuperFlow Protocol System Architecture" />
</Frame>

SuperFlow separates the trading process into multiple system modules and schedules them through SUPER AGENT.

\`\`\`text
User enters the system
  ↓
Capital enters state management
  ↓
SUPER AGENT makes AI decisions
  ↓
Smart Routing optimizes execution paths
  ↓
Execution Layer completes real trades
  ↓
Yield System records results
  ↓
Verification System generates vouchers
  ↓
SUPER Token connects the value flywheel
\`\`\`

---

## Risk Notice

<Warning>
SuperFlow Protocol does not provide fixed-return commitments, does not guarantee principal safety, and does not constitute investment advice.

SUPER AGENT is an AI trading execution body and system scheduling module. It is not a risk-free yield tool.

Real market trading involves price volatility, slippage, execution failure, strategy failure, platform abnormalities, and principal loss risk.
</Warning>

---

## Vision

> If Ethereum made value programmable,  
> SuperFlow makes trading capability programmable.

SuperFlow aims to make trading capability a system capability that can be called, combined, scheduled, and verified.
`);

// 4. 修改 docs.json，增加 EN 按钮和 English 栏目
const docsJsonPath = path.join(root, "docs.json");
const data = JSON.parse(fs.readFileSync(docsJsonPath, "utf8"));

data.navbar = data.navbar || {};
data.navbar.links = Array.isArray(data.navbar.links) ? data.navbar.links : [];

// 去重 EN
data.navbar.links = data.navbar.links.filter(item => item.label !== "EN" && item.label !== "English");

data.navbar.links.push({
  label: "EN",
  href: "/en"
});

data.navigation = data.navigation || {};
data.navigation.tabs = Array.isArray(data.navigation.tabs) ? data.navigation.tabs : [];

// 去重 English Tab
data.navigation.tabs = data.navigation.tabs.filter(tab => tab.tab !== "English");

data.navigation.tabs.push({
  tab: "English",
  groups: [
    {
      group: "Start",
      pages: [
        "en",
        "en/overview/introduction",
        "en/overview/why-superflow",
        "en/overview/system-philosophy"
      ]
    },
    {
      group: "Protocol",
      pages: [
        "en/protocol/architecture",
        "en/protocol/super-agent",
        "en/protocol/smart-routing",
        "en/protocol/execution-layer",
        "en/protocol/yield-system",
        "en/protocol/risk-control",
        "en/protocol/verification-system"
      ]
    },
    {
      group: "SUPER Token",
      pages: [
        "en/token/super-token",
        "en/token/utility",
        "en/token/buyback-burn",
        "en/token/flywheel"
      ]
    },
    {
      group: "User Guide",
      pages: [
        "en/guide/create-account",
        "en/guide/deposit",
        "en/guide/activate-agent",
        "en/guide/view-yield",
        "en/guide/verify-records"
      ]
    },
    {
      group: "Resources & Legal",
      pages: [
        "en/resources/faq",
        "en/resources/brand-assets",
        "en/legal/disclaimer",
        "en/legal/risk-disclosure"
      ]
    }
  ]
});

fs.writeFileSync(docsJsonPath, JSON.stringify(data, null, 2), "utf8");

console.log("Done. English version created.");
console.log("English homepage route: /en");
console.log("English folder created: C:\\superflow-docs\\en");