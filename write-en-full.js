const fs = require("fs");
const path = require("path");

const root = "C:\\superflow-docs";

function write(file, content) {
  const fullPath = path.join(root, file);
  fs.mkdirSync(path.dirname(fullPath), { recursive: true });
  fs.writeFileSync(fullPath, content.trim() + "\n", "utf8");
  console.log("UPDATED:", file);
}

function mdx(title, description, body) {
  return `---
title: "${title}"
description: "${description}"
---

${body.trim()}
`;
}

// English homepage
write("en.mdx", mdx(
  "SuperFlow Protocol",
  "AI-Driven Trading Operating System, Built on High-Performance Execution Infrastructure.",
  `
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

## Architecture Overview

<Frame>
  <img src="/images/architecture.svg" alt="SuperFlow Protocol System Architecture" />
</Frame>

SuperFlow separates the trading process into multiple system modules and schedules them through SUPER AGENT.

## Risk Notice

<Warning>
SuperFlow Protocol does not provide fixed-return commitments, does not guarantee principal safety, and does not constitute investment advice. SUPER AGENT is an AI trading execution body and system scheduling module, not a risk-free yield tool.
</Warning>

## Vision

> If Ethereum made value programmable,  
> SuperFlow makes trading capability programmable.

SuperFlow aims to make trading capability a system capability that can be called, combined, scheduled, and verified.
`
));

// Overview
write("en/overview/introduction.mdx", mdx(
  "Introduction",
  "Core positioning, definition, and vision of SuperFlow Protocol.",
  `
# Introduction

SuperFlow Protocol is an AI-driven trading operating system built on high-performance execution infrastructure.

Its core mission is to abstract trading capability from individual user behavior into a system capability that can be scheduled, executed, recorded, and verified.

## Core Positioning

<CardGroup cols={2}>
  <Card title="AI Trading Operating System" icon="brain">
    SuperFlow connects AI decision-making, execution routing, capital scheduling, yield records, and verification into one system.
  </Card>

  <Card title="Trading Capability Infrastructure" icon="route">
    SuperFlow does not simply provide tools. It provides access to system-level trading capability.
  </Card>
</CardGroup>

## One-Line Positioning

> We do not provide trading tools.  
> We provide trading capability.

## System Components

| Component | Role |
| --- | --- |
| SUPER AGENT | AI trading execution body |
| Smart Routing | Execution path optimization system |
| Execution Layer | Real order execution infrastructure |
| Yield System | Yield recording and calculation system |
| Verification System | Trading voucher and proof layer |
| SUPER Token | System control right and value layer |

## Final Definition

SuperFlow Protocol is a system that connects users, capital, intelligence, execution, yield, and token value into one AI-driven trading capability network.
`
));

write("en/overview/why-superflow.mdx", mdx(
  "Why SuperFlow",
  "Why the market needs trading capability instead of another trading entrance.",
  `
# Why SuperFlow

The market does not lack trading entrances.  
The market lacks trading capability.

Most users can see market prices, but they cannot process market structure, execution costs, liquidity depth, risk exposure, and cross-market opportunities as a system.

## Problems in Traditional Trading

<CardGroup cols={2}>
  <Card title="High Execution Threshold" icon="zap">
    Even correct decisions can fail due to latency, slippage, liquidity, or platform limits.
  </Card>

  <Card title="Weak Risk Control" icon="shield">
    Users often rely on emotion and manual judgment instead of systematic risk management.
  </Card>

  <Card title="Unstable Strategies" icon="chart-line">
    Single strategies may fail when market regimes change.
  </Card>

  <Card title="Difficult Verification" icon="shield-check">
    Many systems show yield numbers without providing clear execution proof.
  </Card>
</CardGroup>

## SuperFlow's Answer

SuperFlow turns trading into a system process:

| Traditional Model | SuperFlow Model |
| --- | --- |
| User decides manually | SUPER AGENT assists decision-making |
| User executes manually | System schedules execution |
| Yield shown as numbers | Yield records and proof |
| Risk depends on experience | Systematic risk control |
| Tool-based product | Trading capability infrastructure |

## Core Conclusion

SuperFlow exists because users need access to trading capability, not just another trading interface.
`
));

write("en/overview/system-philosophy.mdx", mdx(
  "System Philosophy",
  "The core system philosophy behind SuperFlow Protocol.",
  `
# System Philosophy

SuperFlow is built around one central idea:

> Trading capability should become a system capability.

## From Tools to Capability

Traditional products provide tools. Users must still make decisions, execute trades, manage risk, and verify results themselves.

SuperFlow changes this structure by building a system that can process data, generate decisions, schedule execution, record yield, and produce verification.

## Core Principles

<CardGroup cols={2}>
  <Card title="System First" icon="route">
    Every module exists as part of a unified trading operating system.
  </Card>

  <Card title="AI as Decision System" icon="brain">
    AI is not only a prediction machine. It is a decision and risk-control system.
  </Card>

  <Card title="Execution Matters" icon="zap">
    A strategy becomes valuable only when it can be executed with quality.
  </Card>

  <Card title="Verification Builds Trust" icon="shield-check">
    Yield must be traceable, explainable, and verifiable.
  </Card>
</CardGroup>

## Final Philosophy

SuperFlow does not ask users to become professional traders.  
It allows users to enter a system where trading capability is structured, scheduled, and verified.
`
));

// Protocol
write("en/protocol/architecture.mdx", mdx(
  "System Architecture",
  "Core architecture and module relationship of SuperFlow Protocol.",
  `
# System Architecture

<Frame>
  <img src="/images/architecture.svg" alt="SuperFlow Protocol System Architecture" />
</Frame>

SuperFlow Protocol consists of multiple connected system layers.

## Core Architecture

<CardGroup cols={2}>
  <Card title="Account System" icon="wallet">
    Manages user identity, account state, permissions, and system records.
  </Card>

  <Card title="Capital System" icon="wallet">
    Turns user capital into schedulable system resources.
  </Card>

  <Card title="SUPER AGENT" icon="brain">
    Generates trading decisions, schedules execution, and controls risk.
  </Card>

  <Card title="Smart Routing" icon="route">
    Selects optimized execution paths across cost, depth, speed, and risk.
  </Card>

  <Card title="Execution Layer" icon="zap">
    Converts trading intent into real market orders.
  </Card>

  <Card title="Verification System" icon="shield-check">
    Converts execution results into readable and verifiable proof.
  </Card>
</CardGroup>

## System Flow

<Steps>
  <Step title="User Enters the System">
    The user creates an account and deposits assets.
  </Step>

  <Step title="Capital Becomes Schedulable">
    The system identifies capital type, state, cycle, and permission.
  </Step>

  <Step title="SUPER AGENT Makes Decisions">
    AI generates trading intent based on market, account, capital, and risk states.
  </Step>

  <Step title="Smart Routing Optimizes Execution">
    The system selects the most suitable execution path.
  </Step>

  <Step title="Execution Layer Completes Trades">
    Orders are submitted, synchronized, and returned to the system.
  </Step>

  <Step title="Verification System Creates Proof">
    Yield records and trading vouchers are generated.
  </Step>
</Steps>
`
));

write("en/protocol/super-agent.mdx", mdx(
  "SUPER AGENT",
  "The core AI trading execution body of SuperFlow Protocol.",
  `
# SUPER AGENT

<img src="/images/super-agent.png" alt="SUPER AGENT" />

<Frame>
  <img src="/images/super-agent-system.svg" alt="SUPER AGENT Mechanism" />
</Frame>

SUPER AGENT is the core AI trading execution body of SuperFlow Protocol.

It is not a simple signal tool, not a price-prediction bot, and not a fixed-yield machine.

## Core Definition

SUPER AGENT = Decision Engine + Execution Scheduler + Risk-Control System

## Core Modules

<CardGroup cols={3}>
  <Card title="Decision Engine" icon="brain">
    Evaluates market state, account state, capital state, route state, and risk state.
  </Card>

  <Card title="Execution Scheduler" icon="route">
    Converts trading intent into executable tasks and connects routing and execution.
  </Card>

  <Card title="Risk Control" icon="shield">
    Controls position exposure, abnormal volatility, execution failures, and drawdown.
  </Card>
</CardGroup>

## Decision Inputs

| Input | Description |
| --- | --- |
| Market State | Price, trend, volatility, volume, and liquidity |
| Account State | Balance, position, margin, permission, and exposure |
| Capital State | Available capital, capital cycle, and scheduling state |
| Route State | Cost, depth, speed, and route availability |
| Risk State | Drawdown, abnormal market conditions, and execution risk |

## Conclusion

SUPER AGENT turns market data, capital state, route conditions, and risk signals into executable trading capability.
`
));

write("en/protocol/smart-routing.mdx", mdx(
  "Smart Routing",
  "SuperFlow Protocol's intelligent execution routing system.",
  `
# Smart Routing

<Frame>
  <img src="/images/smart-routing.svg" alt="SuperFlow Smart Routing" />
</Frame>

Smart Routing is the execution optimization system of SuperFlow Protocol.

It chooses the most suitable execution path for each trading intent generated by SUPER AGENT.

## Core Definition

Smart Routing = Cost Optimization + Path Selection + Execution Protection + Feedback

<CardGroup cols={2}>
  <Card title="Cost Check" icon="chart-line">
    Evaluates fees, slippage, funding cost, and total execution cost.
  </Card>

  <Card title="Depth Check" icon="wallet">
    Evaluates liquidity depth and executable size.
  </Card>

  <Card title="Speed Check" icon="zap">
    Evaluates latency, response speed, and execution window.
  </Card>

  <Card title="Risk Check" icon="shield">
    Evaluates account risk, route risk, and market risk before execution.
  </Card>
</CardGroup>

## Routing Flow

<Steps>
  <Step title="Receive Trading Intent">
    SUPER AGENT generates trading intent.
  </Step>

  <Step title="Check Execution Conditions">
    The system checks balance, margin, route availability, and risk.
  </Step>

  <Step title="Compare Execution Paths">
    Smart Routing compares cost, depth, speed, and failure probability.
  </Step>

  <Step title="Send to Execution Layer">
    The optimized execution task is sent for real order execution.
  </Step>
</Steps>
`
));

write("en/protocol/execution-layer.mdx", mdx(
  "Execution Layer",
  "The high-performance trading execution layer of SuperFlow Protocol.",
  `
# Execution Layer

Execution Layer is the infrastructure that converts trading intent into real market orders.

## Core Definition

Execution Layer = Order Execution + State Synchronization + Result Feedback + Exception Handling

<CardGroup cols={2}>
  <Card title="Order Execution" icon="zap">
    Converts trading intent into real orders and sends them to execution venues.
  </Card>

  <Card title="State Synchronization" icon="chart-line">
    Synchronizes order status, position state, balance state, and execution feedback.
  </Card>

  <Card title="Result Feedback" icon="route">
    Sends execution results back to SUPER AGENT, Yield System, and Verification System.
  </Card>

  <Card title="Exception Protection" icon="shield">
    Handles failed orders, insufficient balance, platform errors, and risk triggers.
  </Card>
</CardGroup>

## Why It Matters

A correct decision has no value if it cannot be executed properly. Execution quality directly affects yield quality, risk control, and user trust.
`
));

write("en/protocol/yield-system.mdx", mdx(
  "Yield System",
  "The yield recording, calculation, display, and verification system of SuperFlow Protocol.",
  `
# Yield System

<Frame>
  <img src="/images/yield-system.svg" alt="SuperFlow Yield System" />
</Frame>

Yield System records, calculates, displays, and verifies yield results generated by system execution.

## Core Definition

Yield System = Yield Record + Yield Calculation + Yield Display + Yield Verification

<CardGroup cols={2}>
  <Card title="Yield Record" icon="chart-line">
    Records trading results, profit and loss, yield rate, and cycle data.
  </Card>

  <Card title="Yield Calculation" icon="chart-line">
    Calculates yield based on capital, time, permission, execution quality, and market result.
  </Card>

  <Card title="Yield Display" icon="wallet">
    Displays account yield, historical yield, cycle yield, and yield rate.
  </Card>

  <Card title="Yield Verification" icon="shield-check">
    Connects yield records with trading vouchers and verification data.
  </Card>
</CardGroup>

## Yield Logic

Yield is not a fixed promise.

It is the result of capital, time, permission, market capability, execution quality, and risk control working together.
`
));

write("en/protocol/risk-control.mdx", mdx(
  "Risk Control",
  "The systematic risk-control mechanism of SuperFlow Protocol.",
  `
# Risk Control

Risk Control is a system-level safety layer that operates before, during, and after execution.

## Core Definition

Risk Control = Risk Identification + Risk Limitation + Execution Protection + State Monitoring

<CardGroup cols={2}>
  <Card title="Position Control" icon="wallet">
    Controls exposure according to balance, margin, position size, and market state.
  </Card>

  <Card title="Loss Control" icon="shield">
    Identifies consecutive losses, abnormal drawdown, and strategy risk.
  </Card>

  <Card title="Execution Protection" icon="lock">
    Blocks execution when platform status, API feedback, or order state becomes abnormal.
  </Card>

  <Card title="State Monitoring" icon="chart-line">
    Monitors account, capital, market, order, and system state continuously.
  </Card>
</CardGroup>

## Important Boundary

Risk Control does not eliminate risk.  
It identifies, limits, records, and feeds back risk.
`
));

write("en/protocol/verification-system.mdx", mdx(
  "Verification System",
  "The trading voucher and yield verification system of SuperFlow Protocol.",
  `
# Verification System

<Frame>
  <img src="/images/verification-system.svg" alt="SuperFlow Verification System" />
</Frame>

Verification System records, explains, and verifies execution results and yield sources.

## Core Definition

Verification System = Trading Record + Yield Voucher + Query Path + Verifiable Proof

<CardGroup cols={2}>
  <Card title="Prove Real Trading" icon="shield-check">
    Uses order ID, trade ID, time, price, and query path to support verification.
  </Card>

  <Card title="Explain Yield Source" icon="chart-line">
    Shows asset, direction, entry price, exit price, profit and loss, and yield rate.
  </Card>

  <Card title="Connect Partners" icon="shield-check">
    Provides structured voucher data for partner systems and public APIs.
  </Card>

  <Card title="Reduce Trust Cost" icon="lock">
    Turns yield display into readable, explainable, and verifiable proof.
  </Card>
</CardGroup>
`
));

// Token
write("en/token/super-token.mdx", mdx(
  "SUPER Token",
  "SUPER Token is the system control right, behavior-driven tool, and stabilizer of SuperFlow Protocol.",
  `
# SUPER Token

SUPER Token is the only ecosystem token issued by SuperFlow Protocol.

It carries platform trading value, AI compute allocation, system permissions, and ecosystem value circulation.

## Basic Information

| Item | Information |
| --- | --- |
| Token Name | SUPER |
| Total Supply | 1,000,000,000 SUPER |
| Release Cycle | 10-year ecosystem output |
| Deployment Network | Ethereum |

## Core Positioning

SUPER is the value mapping and distribution medium for AI compute power, trading yield, and system growth inside SuperFlow.

<CardGroup cols={3}>
  <Card title="Compute Fuel" icon="zap">
    Users can stake SUPER to feed SUPER AGENT and obtain higher AI compute power and yield weight.
  </Card>

  <Card title="Deflationary Asset" icon="coins">
    Certain dynamic-yield withdrawals may be connected to SUPER burning mechanisms.
  </Card>

  <Card title="Value Capture Medium" icon="chart-line">
    Platform fees and system revenue can support buyback and long-term value feedback.
  </Card>
</CardGroup>

## Allocation

| Module | Ratio | Amount |
| --- | ---: | ---: |
| Compute Release / Staking Mining | 75% | 750,000,000 |
| Trading Mining / Behavioral Incentives | 20% | 200,000,000 |
| Compute Package Allocation | 1% | 10,000,000 |
| Airdrops and Market Incentives | 1% | 10,000,000 |
| Technology and Operations | 3% | 30,000,000 |
| Total | 100% | 1,000,000,000 |
`
));

write("en/token/utility.mdx", mdx(
  "Token Utility",
  "Core utilities of SUPER Token inside SuperFlow Protocol.",
  `
# Token Utility

SUPER Token is not a decorative token or a simple payment asset. It connects permissions, behavior, AGENT capability, yield weight, and long-term value feedback.

<CardGroup cols={2}>
  <Card title="System Permission" icon="lock">
    SUPER can connect account level, system access, AGENT permission, and participation depth.
  </Card>

  <Card title="AGENT Capability" icon="brain">
    SUPER can connect users to deeper SUPER AGENT capabilities and system scheduling rights.
  </Card>

  <Card title="Yield Weight" icon="chart-line">
    SUPER can work with capital, cycle, and permission to influence system participation weight.
  </Card>

  <Card title="Long-Term Incentives" icon="chart-line">
    SUPER can support staking, locking, nodes, ecosystem contribution, and partner incentives.
  </Card>
</CardGroup>
`
));

write("en/token/buyback-burn.mdx", mdx(
  "Buyback & Burn",
  "SUPER Token buyback, burn, and value feedback mechanism.",
  `
# Buyback & Burn

Buyback & Burn is one of the value feedback mechanisms of SUPER Token.

## Core Definition

Buyback & Burn = System Revenue Feedback + Market Buyback + Token Burn + Long-Term Value Support

<CardGroup cols={2}>
  <Card title="Value Feedback" icon="chart-line">
    Connects system revenue and trading activity back to SUPER Token.
  </Card>

  <Card title="Supply Management" icon="coins">
    Reduces circulation pressure through burn or locking mechanisms.
  </Card>

  <Card title="Confidence Support" icon="shield-check">
    Makes the relationship between system growth and token value clearer.
  </Card>

  <Card title="Flywheel Acceleration" icon="chart-line">
    Connects buyback, burn, incentives, and system growth into a positive loop.
  </Card>
</CardGroup>

<Warning>
Buyback and burn mechanisms do not guarantee token price appreciation and do not constitute a return commitment.
</Warning>
`
));

write("en/token/flywheel.mdx", mdx(
  "System Flywheel",
  "The long-term growth model of SuperFlow Protocol.",
  `
# System Flywheel

<Frame>
  <img src="/images/token-flywheel.svg" alt="SUPER Token System Flywheel" />
</Frame>

System Flywheel describes how users, capital, SUPER AGENT, real trading, yield verification, SUPER Token, and ecosystem expansion reinforce one another.

<CardGroup cols={2}>
  <Card title="Trading Capability Flywheel" icon="chart-line">
    Real execution and verifiable results improve user trust and capital participation.
  </Card>

  <Card title="SUPER Token Flywheel" icon="coins">
    System usage, buyback, burn, locking, and incentives support long-term token value logic.
  </Card>

  <Card title="AGENT Evolution Flywheel" icon="brain">
    More execution feedback improves future decision quality, routing preference, and risk parameters.
  </Card>

  <Card title="Ecosystem Expansion Flywheel" icon="route">
    Partners, APIs, nodes, and ecosystem modules expand the boundary of SuperFlow.
  </Card>
</CardGroup>
`
));

// User Guide
write("en/guide/create-account.mdx", mdx(
  "Create Account",
  "How to enter SuperFlow Protocol and create a system account.",
  `
# Create Account

Create Account is the first step for users to enter SuperFlow Protocol.

An account is not only a login identity. It connects user identity, asset state, permission state, AGENT status, and yield records.

<Steps>
  <Step title="Enter SuperFlow">
    Open the official SuperFlow website or application entrance.
  </Step>

  <Step title="Create Account">
    Register or connect through the system account entrance.
  </Step>

  <Step title="Complete Security Verification">
    Complete email, verification code, 2FA, or other required security steps.
  </Step>

  <Step title="Enter Dashboard">
    View assets, AGENT status, yield records, and verification data.
  </Step>
</Steps>
`
));

write("en/guide/deposit.mdx", mdx(
  "Deposit Assets",
  "How to deposit assets into SuperFlow Protocol.",
  `
# Deposit Assets

Deposit Assets is the process of moving assets into SuperFlow's system account and capital state management.

## Supported Asset Types

| Asset | Description |
| --- | --- |
| BTC | Major crypto asset |
| ETH | Major on-chain asset |
| USDT | Stablecoin asset |
| USDC | Stablecoin asset |
| SUPER | SuperFlow ecosystem token |

<Warning>
Always confirm asset type, network, deposit address, memo or tag, and official URL before depositing.
</Warning>
`
));

write("en/guide/activate-agent.mdx", mdx(
  "Activate SUPER AGENT",
  "How to activate SUPER AGENT and enter the AI trading capability system.",
  `
# Activate SUPER AGENT

Activating SUPER AGENT connects user capital, permission state, risk state, and system rules into the trading capability process.

<Steps>
  <Step title="Enter Dashboard">
    Log in and open the AGENT or Dashboard page.
  </Step>

  <Step title="Check Account State">
    Review balance, permission, AGENT status, cycle, and risk notice.
  </Step>

  <Step title="Activate SUPER AGENT">
    Confirm system rules, risk disclosure, and participation conditions.
  </Step>

  <Step title="System Check">
    SuperFlow checks balance, capital state, permission, risk status, and execution conditions.
  </Step>
</Steps>

<Warning>
Activating SUPER AGENT does not mean guaranteed yield. Real market trading involves principal loss risk.
</Warning>
`
));

write("en/guide/view-yield.mdx", mdx(
  "View Yield",
  "How to view yield, yield rate, history, and voucher data in SuperFlow.",
  `
# View Yield

View Yield allows users to check current yield, historical yield, capital state, risk status, and voucher data.

<CardGroup cols={2}>
  <Card title="Current Yield" icon="chart-line">
    View current cycle yield, yield amount, and yield rate.
  </Card>

  <Card title="Historical Yield" icon="chart-line">
    Review historical cycles, trading records, and settlement results.
  </Card>

  <Card title="Capital State" icon="wallet">
    View active capital, available capital, locked capital, and cycle state.
  </Card>

  <Card title="Yield Voucher" icon="shield-check">
    Open verification details connected to specific yield records.
  </Card>
</CardGroup>
`
));

write("en/guide/verify-records.mdx", mdx(
  "Verify Records",
  "How to verify trading records and yield vouchers in SuperFlow Protocol.",
  `
# Verify Records

Verify Records helps users understand and verify where yield comes from.

## A Complete Voucher May Include

| Field | Description |
| --- | --- |
| Voucher ID | Internal voucher number |
| Asset | Trading asset |
| Side | Long, Short, Buy, or Sell |
| Entry Price | Entry or buy price |
| Exit Price | Exit or sell price |
| PnL | Profit and loss |
| Yield Rate | Yield percentage |
| Platform | Execution platform |
| Order ID | Platform order number |
| Trade ID | Platform trade number |
| Verify Link | Query path or verification entrance |

## Core Purpose

Verification turns yield from a displayed number into readable, explainable, and verifiable proof.
`
));

// Resources & Legal
write("en/resources/faq.mdx", mdx(
  "FAQ",
  "Frequently asked questions about SuperFlow Protocol.",
  `
# FAQ

## What is SuperFlow?

SuperFlow Protocol is an AI-driven on-chain trading capability system. It integrates accounts, capital, SUPER AGENT, Smart Routing, Execution Layer, Yield System, Verification System, and SUPER Token.

## Does SUPER AGENT guarantee yield?

No. SUPER AGENT is an AI trading execution body and system scheduler. It does not guarantee profit or principal safety.

## Where does yield come from?

Yield comes from real market behavior, execution results, and system strategies. It is not a fixed internal distribution.

## What is SUPER Token?

SUPER Token is the system control right, behavior-driven tool, and stabilizer of SuperFlow Protocol.

## Why is verification important?

Verification helps users understand where yield comes from, when trades occurred, and whether records can be checked.
`
));

write("en/resources/brand-assets.mdx", mdx(
  "Brand Assets",
  "Brand assets, visual guidelines, and official expression standards of SuperFlow Protocol.",
  `
# Brand Assets

Brand Assets define how SuperFlow Protocol should appear across Docs, websites, whitepapers, PPTs, posters, videos, and partner materials.

## Official Name

SuperFlow Protocol

## Core Positioning

AI-Driven Trading Operating System  
Built on High-Performance Execution Infrastructure

## One-Line Positioning

> We do not provide trading tools.  
> We provide trading capability.

## Visual Style

SuperFlow should remain clean, premium, systematic, technological, and trustworthy.

<CardGroup cols={2}>
  <Card title="Logo" icon="shield-check">
    Use the official logo with clear contrast and no distortion.
  </Card>

  <Card title="SUPER AGENT IP" icon="brain">
    Use the official SUPER AGENT character consistently across pages and media.
  </Card>
</CardGroup>
`
));

write("en/legal/disclaimer.mdx", mdx(
  "Disclaimer",
  "Disclaimer for SuperFlow Protocol.",
  `
# Disclaimer

This disclaimer applies to SuperFlow Protocol websites, documents, product descriptions, interfaces, community content, marketing materials, and related public information.

SuperFlow Protocol does not constitute investment advice, financial advice, legal advice, tax advice, a securities offering, or a guaranteed return commitment.

<Warning>
SuperFlow Protocol does not guarantee fixed returns, principal safety, or future results. Users should make independent decisions based on their own risk tolerance and local regulations.
</Warning>

## Important Boundaries

- No fixed-yield commitment
- No principal protection
- No investment advice
- No price guarantee
- No guarantee of execution success
- No guarantee of future performance
`
));

write("en/legal/risk-disclosure.mdx", mdx(
  "Risk Disclosure",
  "Risk disclosure for SuperFlow Protocol.",
  `
# Risk Disclosure

Users should understand the risks of digital assets, AI trading systems, automated execution, third-party platforms, and SUPER Token before participating.

<CardGroup cols={2}>
  <Card title="Market Risk" icon="chart-line">
    Digital asset prices can fluctuate sharply and may cause losses.
  </Card>

  <Card title="Execution Risk" icon="zap">
    Orders may fail, be delayed, partially filled, or affected by slippage.
  </Card>

  <Card title="System Risk" icon="shield">
    Servers, APIs, networks, databases, and execution environments may fail.
  </Card>

  <Card title="Token Risk" icon="coins">
    SUPER Token may be affected by liquidity, volatility, adoption, and regulatory changes.
  </Card>
</CardGroup>

<Warning>
Risk Control can identify and limit certain risks, but it cannot eliminate all risks or guarantee principal safety.
</Warning>
`
));

// Update docs.json navigation
const docsFile = path.join(root, "docs.json");
const data = JSON.parse(fs.readFileSync(docsFile, "utf8"));

data.navbar = data.navbar || {};
data.navbar.links = Array.isArray(data.navbar.links) ? data.navbar.links : [];

data.navbar.links = data.navbar.links.filter((item) => {
  return !["中文", "CN", "EN", "English"].includes(item.label);
});

data.navbar.links.push(
  { label: "中文", href: "/" },
  { label: "EN", href: "/en" }
);

data.navigation = data.navigation || {};
data.navigation.tabs = Array.isArray(data.navigation.tabs) ? data.navigation.tabs : [];

data.navigation.tabs = data.navigation.tabs.filter((tab) => tab.tab !== "English");

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

fs.writeFileSync(docsFile, JSON.stringify(data, null, 2), "utf8");

console.log("Done. Full English docs written.");
console.log("Route: /en");