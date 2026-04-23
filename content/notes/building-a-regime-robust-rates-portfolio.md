---
title: "Building A Regime-Robust Rates Portfolio"
subtitle: "How to combine trades so expected returns remain resilient across different macro paths."
publishedAt: "2026-03-08"
coverImage: "/images/notes/structural-hedge.svg"
tags:
  - Portfolio Construction
  - Regimes
  - Risk
excerpt: "From single-trade conviction to portfolio-level asymmetry through diversification by driver, convexity, and implementation quality."
---

## Start with distributions

Each rates trade embeds a different distribution of outcomes. Portfolio construction should focus on combining those distributions, not just stacking convictions.

## Core design principles

1. Diversify by driver, not instrument label.
2. Blend carry and convexity intentionally.
3. Control interaction risk and correlation shifts.
4. Set explicit de-risking triggers before entry.

## Practical objective

Design portfolios that preserve positive expected returns across a wider range of regimes, including the ones you are most likely to be wrong about.

