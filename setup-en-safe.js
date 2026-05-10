const fs = require("fs");
const path = require("path");

const root = "C:\\superflow-docs";
const docsFile = path.join(root, "docs.json");

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

// 1. 创建英文目录，先复制中文版结构，保证页面都存在
const enRoot = path.join(root, "en");
if (fs.existsSync(enRoot)) {
  fs.rmSync(enRoot, { recursive: true, force: true });
}

fs.mkdirSync(enRoot, { recursive: true });

copyDir(path.join(root, "overview"), path.join(enRoot, "overview"));
copyDir(path.join(root, "protocol"), path.join(enRoot, "protocol"));
copyDir(path.join(root, "token"), path.join(enRoot, "token"));
copyDir(path.join(root, "guide"), path.join(enRoot, "guide"));
copyDir(path.join(root, "resources"), path.join(enRoot, "resources"));
copyDir(path.join(root, "legal"), path.join(enRoot, "legal"));

if (fs.existsSync(path.join(root, "index.mdx"))) {
  fs.copyFileSync(path.join(root, "index.mdx"), path.join(enRoot, "index.mdx"));
}

// 2. 先把英文首页替换成真正英文版
write(path.join(enRoot, "index.mdx"), `---
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

It is not a simple trading bot, a single strategy product, or another trading entrance. It is an on-chain operating system that abstracts trading capability into system capability.

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

```text
SuperFlow = AI Decision + Smart Routing + High-Performance Execution + Yield Records + Trading Verification