---
title: "Where To Express Duration On The Curve"
subtitle: "A practical framework for choosing the cleanest implementation point for a duration view."
publishedAt: "2026-04-02"
coverImage: "/images/notes/curve-constraints.svg"
tags:
  - Duration
  - Curves
  - Implementation
excerpt: "How to move from a macro duration view to the right curve expression under carry, convexity, and liquidity constraints."
---

## Why expression matters

A duration view is only the starting point. Portfolio outcomes are driven by how that view is implemented across maturities, instruments, and risk budgets.

## Practical decision sequence

1. Define the macro view and expected horizon.
2. Compare candidate tenors on carry and roll.
3. Stress each candidate under plausible regime changes.
4. Select the expression with the strongest risk-adjusted path, not just best point forecast.

## Bottom line

The right curve point is the one that best matches your horizon, downside tolerance, and funding reality.

