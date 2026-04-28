---
title: "The Strange Value in Austria's 100-Year Bond"
subtitle: "An illustrative case study in convexity, curve structure, and why the most obviously \"expensive\" bond in Europe was not necessarily the worst one to own."
publishedAt: "2026-04-28"
coverImage: "/images/notes/structural-hedge.svg"
tags:
  - Case Studies
  - Fixed Income
  - Convexity
  - Austria
excerpt: "A delayed educational case study on Austria's 100-year bond, convexity, curve structure, DV01-neutral trades, and why headline yield can miss hidden fixed-income value."
pdfUrl: "/assets/notes/austria-100-year-bond-convexity/austria-100-year-bond-convexity.pdf"
ttsEnabled: true
metaTitle: "The Strange Value in Austria's 100-Year Bond | Decision Desk"
metaDescription: "A delayed educational case study on Austria's 100-year bond, convexity, curve structure, DV01-neutral trades, and why headline yield can miss hidden fixed-income value."
---

**Mark Martin**  
*Decision Desk - Case Studies*

## Opening question

In June 2020, Austria issued a 100-year government bond maturing in 2120.

The coupon was 0.85%. The yield was roughly 0.88%. The bond offered around 55bp of yield pick-up versus Austria's 2047 bond.

Yes, a century bond.

Yes, issued at a yield more than 120bp below the ECB's inflation target.

Yes, issued into a monetary union whose future, like every long-run currency arrangement, cannot be assumed with certainty over a 100-year horizon.

At first glance, the bond looked like an almost perfect example of late-cycle fixed-income excess. The ECB had spent years compressing term premia and removing duration from the market. Large parts of the European government-bond universe traded at negative yields. Fiscal spending was high. Inflation risk, while not yet visible in spot data, was beginning to look less one-sided than it had through much of the post-crisis period.

So the natural question was simple: who, in their right mind, would want to own a 100-year bond at less than 1%?

But that question misses the more interesting point.

The Austrian 2120 bond was not only a low-yielding bond. It was also an unusually convex instrument. For an investor willing to think in curve and scenario terms rather than yield-to-maturity terms, that convexity had value.

The bond was probably not the "deal of the century" for a passive hold-to-maturity investor.

It may, however, have been a very interesting piece of fixed-income optionality.

## The wrong way to look at it

A century bond yielding less than 1% looks absurd if judged only as a long-term lending contract.

Over a 100-year horizon, the investor is exposed to inflation, fiscal regimes, political regimes, currency arrangements, and reinvestment assumptions that are impossible to forecast with precision. Austria's own monetary history is a useful reminder that long-run currency continuity should not be treated as a trivial assumption.

That scepticism is reasonable.

The mistake is to stop there.

Most fixed-income investors are trained to look first at yield, carry, duration and spread. Those are important, but they are incomplete. In very long, low-coupon bonds, the key feature is often not the running yield. It is the shape of the price/yield function.

A 100-year low-coupon bond is not just a longer 30-year bond.

It behaves more like a deeply convex rates instrument.

## The simple bond maths

The price of a fixed-coupon bond is the discounted value of its future cashflows. When the maturity is extremely long and the coupon is low, small changes in the discount rate have a large and non-linear impact on the present value of those cashflows.

That non-linearity is convexity.

A straight-line duration approximation says that the price impact from a yield move is roughly proportional to the size of the move. That approximation is useful for small changes, but it becomes less reliable for ultra-long low-coupon bonds.

When yields rise, the bond price falls, but its DV01 also falls. The bond becomes less sensitive as it sells off.

When yields fall, the bond price rises, and its DV01 increases. The bond becomes more sensitive in the profitable direction.

That is the attractive asymmetry.

A linear model sees only the initial duration. The actual bond embeds a changing duration profile: less exposure after losses, more exposure after gains.

![Chart showing the Austrian 100-year bond price as a curved function of yield, compared with a straight-line approximation.](/assets/notes/austria-100-year-bond-convexity/images/price-vs-yield.png)

*Austria 100-year bond: price/yield convexity versus a linear approximation.*

## Why the curve expression matters

Owning the 2120 bond outright was not the only way to think about the opportunity.

The cleaner expression was a DV01-neutral curve trade: long the Austrian 2120 bond and short a shorter, more liquid Austrian long bond, such as the 2047.

The purpose of the hedge was not to eliminate all risk. It was to reduce dependence on the daily direction of rates and make the position more about relative convexity.

At issue, the 2120 bond offered around 55bp of yield pick-up versus the 2047 bond. That spread provided a useful anchor. The position could therefore be viewed less as a simple long-duration bet and more as a structure designed to own convexity against a shorter hedge.

In that framing, the question changes.

It is no longer: do I want to lend to Austria until 2120 at 0.88%?

It becomes: is the market adequately compensating the holder of the shorter bond for giving up the convexity of the century bond?

That is a much more interesting question.

![Spreadsheet-style calculation showing yield changes, DV01 changes, static position P&L, rebalanced P&L and total convexity impact for an Austria 100-year bond curve trade.](/assets/notes/austria-100-year-bond-convexity/images/calculations.png)

*Illustrative DV01-neutral curve-trade P&L between Austria 2120 and Austria 2047.*

## Scenario asymmetry

The scenario grid makes the convexity argument clearer.

In an illustrative parallel rally of 100bp, the convexity contribution from the 100-year bond versus the hedge is around 32bp. In a parallel 100bp sell-off, the convexity contribution is still positive, around 16bp.

The precise numbers depend on pricing assumptions, hedge construction, rebalancing, transaction costs and the curve move used in the scenario. But the direction of the result is the point: convexity is positive in both large rallies and large sell-offs.

The payoff is not symmetric in the way a linear duration position is symmetric.

The long 100-year bond gains DV01 as yields fall and loses DV01 as yields rise. Against a shorter hedge, that creates an embedded asymmetry. Large yield moves become potentially valuable even if the investor does not have a strong directional view on rates.

This is the type of scenario shape portfolio managers tend to like: limited reliance on a single forecast, better behaviour in large moves, and a source of return that is not simply carry or beta.

![Table showing convexity move from spread in basis points across parallel yield-curve shift scenarios from minus 100 basis points to plus 100 basis points.](/assets/notes/austria-100-year-bond-convexity/images/parallel-yield-curve-shocks.png)

*Convexity contribution from parallel yield-curve shocks.*

## Why volatility matters

Convexity is not worth much if nothing moves.

Its value rises with the size of yield moves, and the effect is non-linear. A 100bp move is more than twice as important as a 50bp move for convexity P&L. That is why the value of convexity is closely related to volatility.

In a low-volatility regime, the Austrian 100-year bond might simply look like an expensive, low-yielding instrument.

In a higher-volatility regime, the same bond can look very different. The investor is not only exposed to the realised move in rates. They are also exposed to the repricing of convexity itself.

This matters because markets often rediscover convexity after volatility has already risen. Instruments that looked optically expensive on yield can begin to richen as investors become more willing to pay for positive scenario asymmetry.

![Table showing estimated convexity P&L for Austria 2120 and Austria 2047 under two different rates-volatility regimes.](/assets/notes/austria-100-year-bond-convexity/images/convexity-in-different-regimes.png)

*Illustrative 12-month convexity P&L under different rates-volatility assumptions.*

## The practical problem: harvesting convexity is not clean

The spreadsheet version of the trade is elegant.

The market version is more difficult.

Bonds beyond 30 years are often illiquid. The investor base is narrower. Dealer balance-sheet capacity is more constrained. Bid-offer costs matter. Rebalancing is not frictionless.

This is especially important for a DV01-neutral curve trade because the risk profile changes as yields move. If the century bond rallies, its DV01 increases. To keep the trade balanced, the hedge may need to be adjusted. If the bond sells off, its DV01 falls, and the hedge may again need to be resized.

That rebalancing can create implementation problems.

In a trending rally, an investor may keep needing to adjust the short hedge as the long bond gains sensitivity. If the curve is also steepening, which can happen when central banks are cutting rates or when official purchases concentrate around the more liquid part of the curve, spread exposure can build in uncomfortable ways.

The theoretical convexity is still real.

But realising it requires liquidity, balance sheet, execution quality and tolerance for mark-to-market noise.

## The other risk: ultra-long bonds can gap

There is also a more idiosyncratic risk.

Ultra-long bonds are not generic futures contracts. They are cash bonds with specialist investor bases. If a large holder decides to liquidate, or if market makers reach risk limits, the bond can reprice sharply against the curve.

That type of move may have little to do with Austria's credit quality or the fair value of long-term rates. It can simply reflect positioning, balance sheet and liquidity.

This is why the convexity opportunity should not be confused with a free option.

The same features that make the bond interesting - scarcity, maturity, low coupon and specialist demand - also make it fragile.

Positive convexity improves the shape of the payoff. It does not remove liquidity risk.

## What the market missed

The most obvious facts about the Austrian 2120 bond were all negative.

The yield was low. The maturity was extreme. The inflation target was well above the issue yield. The currency horizon was unknowable. The bond was illiquid. The duration was huge.

All of that was true.

But the market's simple objection - "why would anyone buy a 100-year bond at less than 1%?" - was not the whole story.

The more nuanced answer is that the bond was not just a yield instrument. It was a convexity instrument.

For an outright investor, that distinction may not have been enough.

For a relative-value investor, it mattered.

The 2120 bond offered a combination of low coupon, very long maturity, yield pick-up to the shorter long bond, and highly positive convexity. In a DV01-neutral curve structure, those features could create attractive scenario asymmetry even when the headline yield looked unattractive.

## Conclusion

The Austrian 100-year bond was easy to mock.

It was a century bond issued below 1%. It came after years of central-bank duration suppression. It asked investors to underwrite a horizon over which inflation, currencies and political arrangements are impossible to forecast.

But fixed-income value is not always visible in the yield.

Sometimes it sits in the curvature of the price function, the way risk changes after the market moves, and the structure used to isolate that exposure.

The Austrian 2120 bond looked expensive as a simple lending instrument.

As a convexity instrument, it was far more interesting.

That is the broader lesson. In fixed income, the headline yield can tell you what you are being paid.

It does not always tell you what you own.

---

## Appendix: source notes

### Austrian 100-year bond terms

Austria's 0.85% government bond maturing on 30 June 2120 was issued in June 2020. Public bond databases list the coupon, maturity date and ISIN AT0000A2HLC4.

Suggested source:  
Cbonds page for Austria 0.85% 2120 bond:  
https://cbonds.com/bonds/746547/

### ECB inflation target

The ECB's medium-term inflation target is 2%.

Suggested source:  
ECB price stability objective:  
https://www.ecb.europa.eu/mopo/strategy/pricestab/html/index.en.html

### ECB purchase-programme maturity limits

The ECB's public-sector purchase framework concentrated eligibility around the liquid public-sector curve rather than the 100-year sector. PSPP and PEPP materials describe residual maturity limits for eligible public-sector securities.

Suggested sources:  
ECB PSPP FAQ:  
https://www.ecb.europa.eu/mopo/implement/app/html/ecb.faq_pspp.en.html

ECB PEPP implementation details:  
https://www.ecb.europa.eu/mopo/implement/pepp/html/index.en.html

### Austrian monetary-history context

Austria's monetary history includes several regime changes and reforms, including the replacement of the crown by the schilling in 1925, the replacement of the schilling by the Reichsmark after the Anschluss in 1938, the post-war schilling, and the later euro conversion.

A cautious summary is that Austria's cleanest modern uninterrupted monetary regime was the post-war schilling period: roughly 52 years from the 1947 reform to euro book-money conversion in 1999, or 55 years to euro cash replacement in 2002.

Suggested sources:  
Oesterreichische Nationalbank history pages:  
https://www.oenb.at/en/About-Us/History.html

OeNB schilling-to-euro exchange information:  
https://www.oenb.at/en/the-euro/cash-management/schilling.html

## Disclaimer

This article is a delayed, illustrative case study for general informational and educational purposes only. It is not investment advice, not a recommendation, and not a solicitation to buy or sell any security or financial instrument. The views expressed are personal and are not affiliated with, endorsed by, or representative of any employer or institution. Any examples are simplified and may omit transaction costs, financing costs, liquidity constraints, taxes, market impact and other practical considerations.
