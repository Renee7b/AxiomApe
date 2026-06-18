# Site-Wide Template Rollout Progress

Tracking application of the global template (ad placeholders, educational content,
glossary, FAQ, topic disclaimer, dash cleanup, site-chrome `?v=6`) across all tools.

Legend: [x] done, [ ] not started

## Batch 173 (new tools, built directly to template) - DONE
- [x] `supply-chain-safety-stock-calculator` - Supply Chain Safety Stock Calculator: Statistical Z-Score Buffer Stock by Service Level (2026-06-17) - Dark AxiomApe theme on Enterprise Slate (#475569) input panels with System Blue (#2563EB) hero safety stock / active buffer accents and Warning Yellow (#F59E0B) on the dominant lead-time risk and featured reorder-point card. Hero displays Optimal Safety Stock (Units) as the single primary metric. Three input panels (no submit button, all oninput/onchange real-time, recalc() on load): Demand Profile (Average Daily Demand Units default 50, Standard Deviation of Daily Demand default 12); Supplier Lead Time (Average Lead Time Days default 14, Standard Deviation of Lead Time Days default 3); Target Service Level (dropdown 90% Z 1.28 / 95% Z 1.65 default / 97% Z 1.88 / 99% Z 2.33 / 99.9% Z 3.09, z-score in option value, percentage in data-level). Engine (100% client-side): Demand Variability Risk = avgLeadTime * sdDemand^2; Lead Time Variability Risk = avgDemand^2 * sdLeadTime^2; Total Variance = sum; Safety Stock = Math.ceil(Z * Math.sqrt(Total Variance)); Reorder Point = Math.ceil(avgDemand*avgLeadTime + Z*sqrt(variance)); demand/lead risk percentages = each risk / total variance. Validates avgDemand > 0 and avgLead > 0 else resetOutputs(). Default state computes demand risk 2,016, lead risk 22,500, total variance 24,516, combined SD 156.6, safety stock 259 units, reorder point 959, demand-during-lead 700, risk split 8.2% demand vs 91.8% supplier delays. Risk Breakdown UI: two labeled progress bars ("Risk from Demand Fluctuation: X%" blue vs "Risk from Supplier Delays: Y%" amber) plus a dynamic verdict sentence telling the manager which lever (supplier reliability vs demand forecasting) lowers their buffer. Dynamic blue status banner: "By holding [N] buffer units, you statistically ensure a [service level]% probability that you will not experience a stockout during a replenishment cycle." with reorder-point sub-line. Secondary metric cards: Reorder Point (featured amber), Avg. Demand During Lead Time, Std. Dev. of Lead Time Demand. 10-term glossary (Safety Stock, Service Level, Z-Score/Service Factor, Standard Deviation, Demand Variability, Lead Time Variability, Reorder Point, Normal Distribution in Supply Chain, Holding Cost, Stockout). Educational guide (how to use, formula box, worked example, reading the risk breakdown, service-level table with relative buffer vs 95%, choosing a service level). 5-item FAQ accordion matching JSON-LD FAQPage (reorder point formula vs statistical safety stock, what a Z-score is in inventory management, why 99.9% needs far more stock than 95%, how to calculate standard deviation of demand, data privacy). JSON-LD @graph: SoftwareApplication (FinanceApplication) + FAQPage. applicationCategory: FinanceApplication. Category: Finance. See-also cross-references to inventory-turnover-ratio and cogs-calculator (SOP minor-overlap = build both; safety stock is a distinct buffer-sizing use case). Tool-specific disclaimer (educational only, standard formula assumes independent normally distributed demand and lead time, ignores seasonality/correlation/supplier minimums, validate against own data). One header landmark (site-chrome injects #axiom-header; tool's own <header class="tool-header"> has no role="banner"). Both ad placements present (leaderboard after content, mobile anchor after main). Pre-flight check: no existing safety stock / reorder point / service level / EOQ tool; minor conceptual overlap with inventory-turnover-ratio (sales velocity) and cogs-calculator (cost accounting), distinct function, SOP minor-overlap = build with see-also. Dash check: 0.

## Batch 0 (pilot + first batch) - DONE
- [x] bmi-calculator (pilot)
- [x] amortization-schedule
- [x] supplements-tracker
- [x] tax-filing
- [x] calorie-counter

## Batch 2 - DONE
- [x] alphabetize
- [x] area-calculator
- [x] audio-reverser
- [x] baby-name-generator
- [x] barcode-generator

## Batch 3 - DONE
- [x] base64-encoder-and-decoder
- [x] binary-converter
- [x] body-fat-calculator
- [x] bottleneck-calculator
- [x] box-shadow-generator

## Batch 4 - DONE
- [x] bpm-counter
- [x] break-even-calculator
- [x] budget-planner
- [x] business-name-generator
- [x] calories-burned

## Batch 5 - DONE
- [x] caps-converter
- [x] car-loan-calculator
- [x] character-name-generator
- [x] color-palette-creator
- [x] comma-separate

## Batch 6 - DONE
- [x] compound-interest-calculator
- [x] credit-card-validator
- [x] css-compressor
- [x] csv-to-json-converter
- [x] currency-exchange

## Batch 7 - DONE
- [x] debt-payoff-planner
- [x] delete-duplicates
- [x] diff-checker
- [x] due-date-calculator
- [x] electricity-usage-calculator

## Batch 8 - DONE
- [x] emoji-keyboard
- [x] epoch-converter
- [x] excel-to-html-converter
- [x] fancy-font
- [x] find-and-replace

## Batch 9 - DONE
- [x] flooring-and-tile-calculator
- [x] fractions-calculator
- [x] freelance-rate-calculator
- [x] gas-cost-calculator
- [x] geometry-caculator

## Batch 10 - DONE
- [x] gif-maker
- [x] global-numeral-converter
- [x] gpa-calculator
- [x] grades-calculator
- [x] gradient-to-css-converter

## Batch 11 - DONE
- [x] hash-generator
- [x] hashtag-generator
- [x] heart-rate
- [x] heic-to-jpg-converter
- [x] hex-to-rgb-converter

## Batch 12 - DONE
- [x] home-repair-cost-estimator
- [x] html-minifier
- [x] html-to-markdown
- [x] ideal-body-weight
- [x] image-compress

## Batch 13 - DONE
- [x] image-resize
- [x] image-to-favicon-converter
- [x] inflation-calculator
- [x] ip-address-lookup-tool
- [x] java-script-minifier

## Batch 14 - DONE
- [x] jpg-to-pdf-converter
- [x] json-formatter
- [x] json-to-csv-converter
- [x] light-years-converter
- [x] loan-calculator

## Batch 15 - DONE
- [x] lorem-ipsum-generator
- [x] macros
- [x] margin-markup-calculator
- [x] markdown-to-html
- [x] meme-generator

## Batch 16 - DONE
- [x] mortgage-calculator
- [x] moving-cost-calculator
- [x] mp3-cutter
- [x] mpg-calculator
- [x] net-worth-calculator

## Batch 17 - DONE
- [x] one-rep-max
- [x] online-coin-flipper
- [x] online-screen-recorder
- [x] online-video-cutter
- [x] online-voice-recorder

## Batch 18 - DONE
- [x] open-graph-generator
- [x] paint-coverage-calculator
- [x] password-strength-checker
- [x] paycheck-calculator
- [x] pdf-merger

## Batch 19 - DONE
- [x] pdf-page-numbering-tool
- [x] pdf-password-protector
- [x] pdf-rotator
- [x] pdf-splitter
- [x] pdf-to-jpg-converter

## Batch 20 - DONE
- [x] pdf-to-word-converter
- [x] percentage-calculator
- [x] pet-age-calculator
- [x] pet-name-generator
- [x] pixels-to-rem-and-em-converter

## Batch 21 - DONE
- [x] plant-watering-schedule-generator
- [x] prefix-suffix-tool
- [x] probability-calculator
- [x] profile-picture-maker
- [x] qr-code-generator

## Batch 22 - DONE
- [x] quote-search-engine
- [x] random-name-picker
- [x] random-number-generator
- [x] random-trivia-generator
- [x] regex-tester

## Batch 23 - DONE
- [x] relativity-simulator
- [x] rent-proration-calculator
- [x] replace-with-emoji
- [x] retirement-calculator
- [x] reverse-text

## Batch 24 - DONE
- [x] robots-text-generator
- [x] roi-calculator
- [x] running-pace
- [x] salary-converter
- [x] savings-calculator

## Batch 25 - DONE
- [x] scientific-calculator
- [x] seo-meta-title-and-description-generator
- [x] sip-calculator
- [x] sleep-calculator
- [x] social-security-estimator

## Batch 26 - DONE
- [x] speed-calculator
- [x] statistics-computer
- [x] sudoku-generator
- [x] time-elapsed
- [x] time-lived

## Batch 27 - DONE
- [x] time-zone-converter
- [x] tip-calculator
- [x] twitter-character-counter
- [x] units-converter
- [x] unix-epoch-converter

## Batch 28 - DONE
- [x] url-percent-encoder-and-decoder
- [x] url-slug-generator
- [x] utm-builder
- [x] uuid-generator
- [x] video-library

## Batch 29 - DONE
- [x] video-to-audio-mp3
- [x] virtual-dice-roller
- [x] water
- [x] watermark-maker
- [x] webp-to-jpg-converter

## Batch 30 - DONE
- [x] website-ad-optimizer
- [x] website-ad-revenue-calculator
- [x] whatsapp-link-generator
- [x] word-count
- [x] word-to-pdf-converter

## Final batch - DONE
- [x] word-unscrambler

## New tools (post-rollout)
- [x] bill-splitter-tip-matrix
- [x] xml-to-json-converter
- [x] youtube-thumbnail-downloader
- [x] youtube-title-analyzer

## Batch 32 (new tools, built directly to template) - DONE
- [x] drip-calculator

## Batch 33 (new tools, built directly to template) - DONE
- [x] deck-material-estimator

## Batch 31 (new tools) - DONE
- [x] capital-gains-tax-calculator

## Batch 34 (new tools, built directly to template) - DONE
- [x] hvac-sizing-calculator

## Batch 35 (new tools, built directly to template) - DONE
- [x] intermittent-fasting-schedule

## Batch 35 (new tools, built directly to template) - DONE
- [x] fire-calculator

## Batch 36 (new tools, built directly to template) - DONE
- [x] mortgage-refinance-calculator

## Batch 37 (new tools, built directly to template) - DONE
- [x] wallpaper-calculator

## Batch 38 (new tools, built directly to template) - DONE
- [x] concrete-masonry-calculator

## Batch 39 (new tools, built directly to template) - DONE
- [x] social-media-image-resizer

## Batch 39 (new tools, built directly to template) - DONE
- [x] auto-depreciation-estimator

## Batch 40 (new tools, built directly to template) - DONE
- [x] youtube-tag-generator

## Batch 41 (new tools, built directly to template) - DONE
- [x] credit-card-payoff-calculator

## Batch 42 (new tools, built directly to template) - DONE
- [x] tiktok-engagement-rate-calculator

## Batch 43 (new tools, built directly to template) - DONE
- [x] twitch-payout-estimator

## Batch 44 (new tools, built directly to template) - DONE
- [x] cron-job-generator

## Batch 45 (new tools, built directly to template) - DONE
- [x] jwt-decoder

## Batch 47 (new tools, built directly to template) - DONE
- [x] standard-deviation-calculator

## Batch 48 (new tools, built directly to template) - DONE
- [x] sql-formatter

## Batch 115 (new tools, built directly to template) - DONE
- [x] periodic-table

## Remaining tools (alphabetical)
None. Rollout complete: all tools have been updated to the site-wide template.

## Per-tool checklist (apply to each)
1. Remove all em/en dashes (perl bulk replace), verify 0 remain
2. Bump `/js/site-chrome.js` to `?v=6`
3. Remove any pre-existing top-of-page ad placeholder (ads not allowed at very top)
4. Add edu-section CSS block (edu-wrap, edu-section, glossary, faq-item, disclaimer)
5. Insert Ad Placement 1 (leaderboard 728x90) between tool and educational content
6. Insert educational content: usage guide, original insights, glossary, FAQ
7. Insert topic-specific disclaimer (preserve/relocate any existing disclaimer text)
8. Insert Ad Placement 2 (mobile sticky anchor 320x50)
9. Remove/neutralize old footer if it duplicates site-chrome footer
10. Final grep verification (dashes = 0, classes present)

## Batch 46 (new tools, built directly to template) - DONE
- [x] matrix-calculator

## Batch 49 (new tools, built directly to template) - DONE
- [x] brick-block-wall-calculator

## Batch 49 (new tools, built directly to template) - DONE
- [x] projectile-motion-simulator

## Batch 50 (new tools, built directly to template) - DONE
- [x] concrete-slab-footing-calculator

## Batch 51 (new tools, built directly to template) - DONE
- [x] retaining-wall-estimator

## Batch 52 (new tools, built directly to template) - DONE
- [x] gravel-aggregate-calculator

## Batch 53 (new tools, built directly to template) - DONE
- [x] mulch-topsoil-calculator

## Batch 53 (new tools, built directly to template) - DONE
- [x] asphalt-driveway-estimator

## Batch 53 (new tools, built directly to template) - DONE
- [x] mortar-grout-mixer-estimator

## Batch 54 (new tools, built directly to template) - DONE
- [x] paver-patio-calculator

## Batch 54 (new tools, built directly to template) - DONE
- [x] drywall-sheetrock-estimator

## Batch 54 (new tools, built directly to template) - DONE
- [x] lumber-stud-finder

## Batch 55 (new tools, built directly to template) - DONE
- [x] roof-shingle-estimator

## Batch 56 (new tools, built directly to template) - DONE
- [x] siding-trim-estimator


## Batch 56 (new tools, built directly to template) - DONE
- [x] stair-stringer-calculator

## Batch 57 (new tools, built directly to template) - DONE
- [x] insulation-r-value-calculator
## Batch 58 (new tools, built directly to template) - DONE
- [x] fence-material-estimator

## Batch 59 (new tools, built directly to template) - DONE
- [x] decking-lumber-estimator

## Batch 60 (new tools, built directly to template) - DONE
- [x] drop-ceiling-grid-estimator

## Batch 61 (new tools, built directly to template) - DONE
- [x] wallpaper-coverage-tool

## Batch 62 (new tools, built directly to template) - DONE
- [x] hvac-sizing-calculator

## Batch 63 (new tools, built directly to template) - DONE
- [x] pipe-friction-loss-calculator

## Batch 64 (new tools, built directly to template) - DONE
- [x] circuit-load-estimator

## Batch 65 (new tools, built directly to template) - DONE
- [x] wire-size-voltage-drop-calculator

## Batch 65 (new tools, built directly to template) - DONE
- [x] sump-pump-sizing-calculator

## Batch 66 (new tools, built directly to template) - DONE
- [x] water-heater-sizing-calculator

## Batch 67 (new tools, built directly to template) - DONE
- [x] solar-panel-array-output-calculator

## Batch 68 (new tools, built directly to template) - DONE
- [x] lumen-to-watt-led-converter

## Batch 69 (new tools, built directly to template) - DONE
- [x] heloc-estimator

## Batch 70 (new tools, built directly to template) - DONE
- [x] debt-consolidation-loan-evaluator

## Batch 71 (new tools, built directly to template) - DONE
- [x] property-tax-estimator

## Batch 70 (new tools, built directly to template) - DONE
- [x] rent-vs-buy-calculator

## Batch 72 (new tools, built directly to template) - DONE
- [x] fha-vs-conventional-loan

## Batch 72 (new tools, built directly to template) - DONE
- [x] bi-weekly-mortgage-payment-calculator

## Batch 73 (new tools, built directly to template) - DONE
- [x] cap-rate-calculator

## Batch 73 (new tools, built directly to template) - DONE
- [x] brrrr-calculator

## Batch 74 (new tools, built directly to template) - DONE
- [x] 72t-distribution-calculator

## Batch 75 (new tools, built directly to template) - DONE
- [x] cac-ltv-calculator

## Batch 74 (new tools, built directly to template) - DONE
- [x] inventory-turnover-ratio

## Batch 74 (new tools, built directly to template) - DONE
- [x] saas-churn-mrr-forecaster

## Batch 74 (new tools, built directly to template) - DONE
- [x] equipment-lease-buy-calculator

## Batch 75 (new tools, built directly to template) - DONE
- [x] business-valuation-ebitda-multiplier

## Batch 75 (new tools, built directly to template) - DONE
- [x] accounts-receivable-dso

## Batch 76 (new tools, built directly to template) - DONE
- [x] working-capital-ratio-calculator

## Batch 77 (new tools, built directly to template) - DONE
- [x] depreciation-calculator

## Batch 76 (new tools, built directly to template) - DONE
- [x] cogs-calculator

## Batch 78 (new tools, built directly to template) - DONE
- [x] corporate-tax-flow-through-simulator

## Batch 79 (new tools, built directly to template) - DONE
- [x] drip-visualizer

## Batch 80 (new tools, built directly to template) - DONE
- [x] capital-gains-tax-estimator


## Batch 81 (new tools, built directly to template) - DONE
- [x] 401k-maxout-optimizer

## Batch 82 (new tools, built directly to template) - DONE
- [x] hsa-growth-forecaster


## Batch 82 (new tools, built directly to template) - DONE
- [x] roth-ira-traditional-ira-comparator

## Batch 83 (new tools, built directly to template) - DONE
- [x] hyper-inflation-purchasing-power-visualizer

## Batch 84 (new tools, built directly to template) - DONE
- [x] coffee-micro-expense-habit-compounder

## Batch 85 (new tools, built directly to template) - DONE
- [x] college-savings-529-plan-estimator

## Batch 83 (new tools, built directly to template) - DONE
- [x] sequence-of-returns-risk-simulator

## Batch 85 (new tools, built directly to template) - DONE
- [x] css-grid-flexbox-layout-builder

## Batch 86 (new tools, built directly to template) - DONE
- [x] svg-optimizer

## Batch 86 (new tools, built directly to template) - DONE
- [x] web-safe-typography-style-sheet-generator

## Batch 86 (new tools, built directly to template) - DONE
- [x] tailwind-css-configurator

## Batch 86 (new tools, built directly to template) - DONE
- [x] base64-image-data-uri-injector

## Batch 87 (full spec rebuild, JWT.io palette + 3-pane UI + Claims card) - DONE
- [x] jwt-decoder

## Batch 87 (new tools, built directly to template) - DONE
- [x] cubic-bezier-animator

## Batch 88 (new tools, built directly to template) - DONE
- [x] html-entity-encoder-decoder

## Batch 88 (new tools, built directly to template) - DONE
- [x] security-headers-policy-generator

## Batch 88 (new tools, built directly to template) - DONE
- [x] cron-job-expression-translator

## Batch 89 (new tools, built directly to template) - DONE
- [x] regex-visual-explainer

## Batch 89 (new tools, built directly to template) - DONE
- [x] cidr-subnet-calculator

## Batch 89 (new tools, built directly to template) - DONE
- [x] dns-record-staging-generator

## Batch 89 (new tools, built directly to template) - DONE
- [x] htaccess-redirect-url-mapping

## Batch 90 (new tools, built directly to template) - DONE
- [x] bcrypt-password-hasher

## Batch 90 (new tools, built directly to template) - DONE
- [x] nginx-reverse-proxy-config-builder

## Batch 91 (new tools, built directly to template) - DONE
- [x] graphql-schema-to-json-mock-generator

## Batch 90 (new tools, built directly to template) - DONE
- [x] docker-file-boilerplate-scaffolder

## Batch 91 (new tools, built directly to template) - DONE
- [x] ssh-key-generator

## Batch 91 (new tools, built directly to template) - DONE
- [x] url-query-parameter-parser

## Batch 91 (new tools, built directly to template) - DONE
- [x] reel-engagement-calculator

## Batch 92 (new tools, built directly to template) - DONE
- [x] youtube-tag-extractor

## Batch 93 (new tools, built directly to template) - DONE
- [x] social-media-aspect-resizer

## Batch 94 (new tools, built directly to template) - DONE
- [x] instagram-clean-caption-spacer

## Batch 95 (new tools, built directly to template) - DONE
- [x] twitch-stream-revenue-estimator

## Batch 94 (new tools, built directly to template) - DONE
- [x] podcast-episode-file-bitrate-estimator
## Batch 95 (new tools, built directly to template) - DONE
- [x] link-in-bio-generator

## Batch 96 (new tools, built directly to template) - DONE
- [x] ctr-impact-predictor


## Batch 96 (new tools, built directly to template) - DONE
- [x] social-handle-checker

## Batch 97 (new tools, built directly to template) - DONE
- [x] hex-dump-inspector

## Batch 97 (new tools, built directly to template) - DONE
- [x] sponsorship-rate-evaluator

## Batch 96 (new tools, built directly to template) - DONE
- [x] morse-code-audio-synthesizer

## Batch 98 (new tools, built directly to template) - DONE
- [x] bip39-mnemonic-generator

## Batch 99 (new tools, built directly to template) - DONE
- [x] yaml-to-json-converter

## Batch 99 (new tools, built directly to template) - DONE
- [x] markdown-table-grid-builder

## Batch 99 (new tools, built directly to template) - DONE
- [x] vigenere-cipher

## Batch 99 (new tools, built directly to template) - DONE
- [x] caesar-cipher-matrix

## Batch 100 (new tools, built directly to template) - DONE
- [x] levenshtein-distance

## Batch 101 (new tools, built directly to template) - DONE
- [x] sql-input-sanitizer

## Batch 101 (new tools, built directly to template) - DONE
- [x] diffie-hellman-key-exchange-simulator

## Batch 102 (new tools, built directly to template) - DONE
- [x] ohms-law-calculator

## Batch 103 (new tools, built directly to template) - DONE
- [x] multi-stage-kinematics-calculator

## Batch 104 (new tools, built directly to template) - DONE
- [x] wave-mechanics-solver

## Batch 104 (new tools, built directly to template) - DONE
- [x] gravitational-attraction-calculator

## Batch 104 (new tools, built directly to template) - DONE
- [x] reynolds-number-calculator

## Batch 104 (new tools, built directly to template) - DONE
- [x] half-life-radioactive-decay-visualizer

## Batch 105 (new tools, built directly to template) - DONE
- [x] projectile-motion-vector-animator

## Batch 106 (new tools, built directly to template) - DONE
- [x] pendulum-harmonic-motion-oscillator

## Batch 107 (new tools, built directly to template) - DONE
- [x] centripetal-force-rotation-estimator

## Batch 108 (new tools, built directly to template) - DONE
- [x] ideal-gas-law

## Batch 105 (new tools, built directly to template) - DONE
- [x] classical-kinematics-calculator

## Batch 109 (new tools, built directly to template) - DONE
- [x] matrix-determinant-solver

## Batch 109 (new tools, built directly to template) - DONE
- [x] linear-regression-trend-calculator

## Batch 110 (new tools, built directly to template) - DONE
- [x] vector-dot-cross-product-computer

## Batch 110 (new tools, built directly to template) - DONE
- [x] prime-factorization-engine

## Batch 111 (new tools, built directly to template) - DONE
- [x] quadratic-formula-solver

## Batch 110 (new tools, built directly to template) - DONE
- [x] permutation-combination-generator

## Batch 112 (new tools, built directly to template) - DONE
- [x] base-n-radix-calculator

## Batch 113 (new tools, built directly to template) - DONE
- [x] bayes-theorem-calculator

## Batch 114 (new tools, built directly to template) - DONE
- [x] logarithmic-exponential-growth-computer

## Batch 112 (new tools, built directly to template) - DONE
- [x] fibonacci-matrix-visualizer

## Batch 115 (new tools, built directly to template) - DONE
- [x] chemical-equation-balancer

## Batch 116 (new tools, built directly to template) - DONE
- [x] molarity-solution-dilution-calculator

## Batch 117 (new tools, built directly to template) - DONE
- [x] empirical-formula-calculator

## Batch 117 (new tools, built directly to template) - DONE
- [x] molecular-weight-calculator

## Batch 118 (new tools, built directly to template) - DONE
- [x] ph-hydrogen-ion-concentration-solver

## Batch 119 (new tools, built directly to template) - DONE
- [x] gas-law-comparator

## Batch 120 (new tools, built directly to template) - DONE
- [x] specific-heat-capacity-calculator

## Batch 121 (new tools, built directly to template) - DONE
- [x] golden-ratio-layout-grid-configurator

## Batch 121 (new tools, built directly to template) - DONE
- [x] fluid-typography-clamp-generator

## Batch 122 (new tools, built directly to template) - DONE
- [x] radioactive-isotope-half-life-computer

## Batch 123 (new tools, built directly to template) - DONE
- [x] css-aspect-ratio-box-sizing-visualizer

## Batch 121 (new tools, built directly to template) - DONE
- [x] electron-configuration-solver

## Batch 121 (new tools, built directly to template) - DONE
- [x] svg-path-shape-morphing-playground

## Batch 124 (new tools, built directly to template) - DONE
- [x] glassmorphism-generator

## Batch 125 (new tools, built directly to template) - DONE
- [x] variable-font-tester

## Batch 126 (new tools, built directly to template) - DONE
- [x] contrast-ratio-grid

## Batch 127 (new tools, built directly to template) - DONE
- [x] tailwind-value-map

## Batch 124 (new tools, built directly to template) - DONE
- [x] svg-text-to-path

## Batch 124 (new tools, built directly to template) - DONE
- [x] css-clip-path-maker

## Batch 128 (new tools, built directly to template) - DONE
- [x] bmr-comparative-engine


## Batch 128 (new tools, built directly to template) - DONE
- [x] recipe-scaler-multiplier

## Batch 128 (new tools, built directly to template) - DONE
- [x] glycemic-load-evaluator

## Batch 129 (new tools, built directly to template) - DONE
- [x] body-surface-area-calculator

## Batch 128 (new tools, built directly to template) - DONE
- [x] dough-hydration-calculator


## Batch 128 (new tools, built directly to template) - DONE
- [x] coffee-ratio-calculator

## Batch 129 (new tools, built directly to template) - DONE
- [x] macro-caloric-energy-tester

## Batch 130 (new tools, built directly to template) - DONE
- [x] ketogenic-net-carb-log

- [x] `volume-weight-ingredient-converter` - Ingredient Volume to Weight Converter (2026-06-14) - Density-based cups/tbsp/ml to grams/oz/lb converter with 40+ ingredient database, fraction parser, three-panel UI.
## Batch 131 (new tools, built directly to template) - DONE
- [x] `engine-displacement-converter` - Engine Displacement Calculator (2026-06-14) - CID/cc/liter converter with bore+stroke inputs, independent unit toggles, cylinder quick-select, overbore simulator, copy-specs button, glossary, and FAQ accordion.

## Batch 128 (new tools, built directly to template) - DONE
- [x] gear-ratio-speed-simulator

## Batch 132 (new tools, built directly to template) - DONE
- [x] tire-size-variance-calculator

## Batch 131 (new tools, built directly to template) - DONE
- [x] horsepower-kilowatt-ev-converter

## Batch 133 (new tools, built directly to template) - DONE
- [x] freight-volume-cube-estimator

## Batch 134 (new tools, built directly to template) - DONE
- [x] `braking-distance-solver` - Braking Distance Kinetic Energy Dissipation Solver (2026-06-14) - Reaction distance + braking distance + kinetic energy output. Three-panel UI: kinematic inputs (speed slider, vehicle weight presets, road condition segmented control), stacked visual stopping distance bar, telemetry readout. Metric/Imperial, four mu presets, speed comparison strip, copy telemetry button, glossary, FAQ accordion.

## Batch 135 (new tools, built directly to template) - DONE
- [x] `slugified-file-name-standardizer` - Slugified File Name Batch Standardizer (2026-06-14) - Bulk convert any list of file names or titles to URL-safe, SEO-friendly slugs. NFD Unicode diacritic normalization, configurable casing (lower/upper/preserve), separator toggle (hyphen/underscore/none), file extension preservation, real-time three-panel UI, telemetry readout (lines processed, invalid chars removed, diacritics converted), copy-all button, download as .txt, glossary, FAQ accordion. Developer and Webmaster category.

## Batch 136 (new tools, built directly to template) - DONE
- [x] `coding-casing-text-mutator` - CamelCase / snake_case Text Mutator (2026-06-14) - Instantly transform text between camelCase, snake_case, PascalCase, kebab-case, CONSTANT_CASE, and plain text. Smart word boundary engine handles acronyms (API, HTTP) gracefully. Bulk multiline support with 1-to-1 row matching, real-time three-panel dashboard (input + controls, live output, telemetry), Lines Processed and Words Detected stats, Copy Mutated Code button, Download .txt button, glossary of 8 terms, FAQ accordion with 5 questions matching JSON-LD schema. 100% client-side. Developer and Webmaster category.


## Batch 133 (new tools, built directly to template) - DONE
- [x] lease-money-factor-inspector

## Batch 135 (new tools, built directly to template) - DONE
- [x] `towing-capacity-payload-tracker` - Towing Capacity and Payload Margin Tracker (2026-06-14) - Three-panel hauling safety dashboard: Vehicle specs (GVWR, GCWR, curb weight, max tow rating) + load inputs (passengers, cargo, trailer gross weight, tongue weight % slider 5-25%). Dual capacity gauges (payload utilization and GCWR utilization) with overweight violation badges. Telemetry panel: tongue weight, remaining payload, GCWR margin. Lbs/Kg unit toggle, copy-specs button, 8-term glossary, 5-item FAQ accordion. Category: Science & Conversion.

## Batch 136 (new tools, built directly to template) - DONE
- [x] `delivery-route-fuel-optimizer` - Delivery Route Fuel Optimizer (2026-06-14) - Three-panel TSP route optimization dashboard: Fleet Setup (MPG, fuel price, dynamic stop manifest with X/Y coordinates, Load Sample Route button); Live Route Canvas (HTML5 canvas, dashed gray original path, glowing green 2-Opt optimized path, directional arrows, node labels); Telemetry panel (original vs optimized distance, original vs optimized fuel cost, hero savings metric, optimized stop order read-out, Copy Optimized Manifest button). Engine: Nearest Neighbor + 2-Opt swapping, fully client-side, oninput real-time recalc. 8-term glossary, 5-FAQ accordion, JSON-LD FAQPage + SoftwareApplication. Category: Home & Life (LifestyleApplication).

## Batch 135 (new tools, built directly to template) - DONE
- [x] `regex-content-redaction-tool` - Regex Content Redaction Tool (2026-06-14) - Browser-based PII sanitizer using live regex evaluation. Three-panel layout: raw input + rules engine (pattern field, g/i/m flag toggles, replacement string, quick-insert presets for email/phone/SSN/credit card), live sanitized output panel, telemetry bar (match count, chars removed, copy button, download .txt). try/catch on RegExp constructor with Redaction Red (#EF4444) syntax warning. Terminal Green (#10B981) dark terminal theme. Full glossary (7 terms) and 5-item FAQ accordion. applicationCategory: DeveloperApplication. Category: Developer and Webmaster.

## Batch 138 (new tools, built directly to template) - DONE
- [x] `base64-config-key-injector` - Base-64 Configuration Array Key Injector (2026-06-14) - Three-panel bulk Base64 encoding dashboard for DevOps, Kubernetes, and config management. Panel 1: raw input textarea (oninput live encoding) with segmented Standard vs URL-Safe Base64 toggle. Panel 2: amber-tinted monospaced pre output block with padding = chars highlighted in amber spans to visualize 4-character chunking math. Panel 3: telemetry (Total Entries Encoded, Average Size Increase %), Copy Encoded Array button (amber), Download .txt button. Engine: TextEncoder for full Unicode/UTF-8 support before btoa(); URL-Safe mode applies RFC 4648 Section 5 substitutions (+ to -, / to _, strips = padding). Security badge appears when input matches common secret patterns (password=, api_key=, token=, etc.). See-also notice cross-references base64-encoder-and-decoder and base64-image-data-uri-injector. 9-term glossary (Base64, Radix-64, RFC 4648, URL-Safe Encoding, Binary-to-Text Encoding, Padding, Encoding vs Encryption, Kubernetes Secret, Configuration Array). 5-FAQ accordion matching JSON-LD FAQPage schema. Colors: Injector Blue (#3B82F6) + Config Amber (#F59E0B). applicationCategory: DeveloperApplication. Category: Developer and Webmaster.

## Batch 137 (new tools, built directly to template) - DONE
- [x] `text-to-markdown-table-formatter` - Text to Markdown Table Formatter (2026-06-14) - Three-panel paste-to-Markdown converter. Panel 1: raw data textarea (oninput live parsing) with delimiter dropdown (Auto-Detect/Tab/Comma/Pipe/Semicolon/Space/Custom), first-row-is-header toggle, and three-way column alignment selector (:--- Left, :---: Center, ---: Right). Panel 2: Terminal Green syntax output block with padded cells (every column padded to max cell width via padEnd), Copy Markdown button. Panel 3: live HTML table preview. Engine: auto-detects Tab first (Excel/Sheets TSV), then Pipe, Comma, Semicolon, Spaces; matrix normalization pads short rows to max col count; separator row generated with colon alignment markers. Stat pills (cols, data rows, total rows) and detected-delimiter badge. 8-term glossary, 5-FAQ accordion, JSON-LD FAQPage + SoftwareApplication. Cross-reference notice on this tool and on markdown-table-grid-builder. applicationCategory: DeveloperApplication. Category: Developer and Webmaster.

## Batch 137 (new tools, built directly to template) - DONE
- [x] `engine-compression-ratio-calculator` - Engine Compression Ratio Calculator (2026-06-14) - Three-panel dark garage-themed dashboard: Panel 1 Swept Volume Specs (bore + stroke with global inches/mm toggle); Panel 2 Clearance Volume Specs (chamber cc, piston dome/dish toggle with sign hint, deck clearance, gasket bore, gasket thickness); Panel 3 Telemetry (Combustion Orange CR hero "X.XX : 1", swept cc + clearance cc breakdown, Copy Engine Specs button). Formula: CR = (Vswept + Vclearance) / Vclearance. Dome subtracts from Vclearance (raises CR), dish adds (lowers CR). Gasket and deck volumes via cylindrical formula with 16.387064 cc/in^3 conversion. oninput live recalc. 8-term glossary, 5-FAQ accordion matching JSON-LD FAQPage. applicationCategory: UtilitiesApplication. Category: Science and Conversion.

## Batch 136 (new tools, built directly to template) - DONE
- [x] `keyword-density-frequency-matrix-tool` - Keyword Density Matrix Tool (2026-06-14) - Three-panel dark-theme dashboard: Panel 1 textarea input with stop-word toggle and N-gram segmented selector (1/2/3-word phrases), Panel 2 real-time sortable density matrix table (rank, phrase, count, density %, frequency bar), Panel 3 telemetry card (total words, unique words, reading time) with CSV copy-to-clipboard button. 100+ stop words dictionary, performant loop-based N-gram engine, Density Cyan (#06B6D4) and Highlight Yellow (#EAB308) accents. 8-term glossary, 5-item FAQ accordion with JSON-LD FAQPage schema. Category: Text & Formatting.

## Batch 139 (new tools, built directly to template) - DONE
- [x] `tournament-bracket-architect` - Tournament Bracket Tree Layout Architect (2026-06-14) - Three-panel single elimination bracket generator. Panel 1: participant count slider (2-64), Standard/Randomize seeding mode toggle, scrollable player name inputs with seed numbering, Load Sample Players and Clear All buttons. Panel 2: HTML5 canvas bracket visualization with snake seeding, automatic bye calculation (bracketSize - N), click-to-advance winners per match, connector lines with Bracket Blue (#2563EB) and Champion Gold (#CA8A04) accents, champion display. Panel 3: telemetry (Matches Remaining, Bye Slots, Next Round Stage, Bracket Complexity Score, Total Match Slots), Copy Bracket Code button (plain-text export), Print/PDF Export button. Engine: nextPow2 for bracket sizing, recursive buildSeedOrder for snake placement, propagate() for cascading winners across rounds, 400ms debounce on name input. 8-term glossary (Single Elimination, Seed, Bye, Bracket, Quarterfinals, Semifinals, Finals, Matchup), 5-FAQ accordion matching JSON-LD FAQPage. applicationCategory: EntertainmentApplication. Category: Entertainment and Fun. Dash check: 0.

## Batch 138 (new tools, built directly to template) - DONE
- [x] `leetspeak-hex-obfuscator` - Leetspeak Hex Alphabetical Text Alternate Obfuscator (2026-06-14) - Three-panel real-time text obfuscation dashboard. Panel 1: raw textarea input + segmented mode selector (Classic Leet 1337 / Hex ASCII / Chaotic Variant), Randomize Intensity slider (0-100%), space-to-underscore toggle, auto-copy-on-change toggle, Clear All. Panel 2: live obfuscated output textarea (readonly, Hacker Green #22C55E), active mode badge, Copy Obfuscated Text button, De-Obfuscate sub-panel (leet and hex modes only) with paired input/output textareas. Panel 3: telemetry (Characters Transformed, Obfuscation Score %, Total Characters, Output Length), Re-Randomize Chaos button (chaos mode). Engine: dictionary-based LEET_MAP (26 alpha substitutions), 0x-prefixed ASCII hex with U+ fallback for multibyte codepoints, per-session random CHAOS_POOL substitution map (32-symbol pool). Intensity slider gates substitution probability via Math.random(). De-obf reverses leet (single-char LEET_REVERSE map) and hex (0xNN / U+NNNN token parser). JetBrains Mono + Inter fonts. Hacker Green (#22C55E) and Neon Cyber Pink (#EC4899) accent theme. 8-term glossary, 5-FAQ accordion matching JSON-LD FAQPage. Dash check: 0. applicationCategory: UtilitiesApplication. Category: Text and Formatting.

## Batch 138 (new tools, built directly to template) - DONE
- [x] `nato-phonetic-alphabet-generator` - NATO Phonetic Alphabet Generator (2026-06-14) - Three-panel dark ATC-themed dashboard: Panel 1 textarea input with Aviation Number Pronunciation toggle (Niner, Tree, Fife, FOW-ER, AIT, ZE-RO) and Spell Out Punctuation toggle (STOP, COMMA, STROKE, etc.); Panel 2 Visual Spelling Matrix of char-cards showing original character paired with phonetic word; Panel 3 Compiled Audio Script read-only textarea with Copy Phonetic Script button and word count. Full 26-letter ICAO dictionary (Alfa, Juliett, X-ray correct spellings). Aviation Orange (#F97316) and Signal Green (#22C55E) accent colors. 8-term glossary (NATO Phonetic Alphabet, ICAO, Call Sign, Alfa, Juliett, Niner, Radio Telephony, Phonetic Spelling). 5-item FAQ accordion matching JSON-LD FAQPage. ICAO reference tables for all 26 letters and 10 aviation digit pronunciations. Category: Text & Formatting.

## Batch 138 (new tools, built directly to template) - DONE
- [x] `secure-random-password-fabricator` - Secure Random Password Fabricator (2026-06-14) - Generate strong strings completely locally using window.crypto.getRandomValues() (CSPRNG, never Math.random()). Three-panel dashboard: Configuration Console (length slider 8-64, character set checkboxes for Uppercase/Lowercase/Numeric/Symbols, exclude ambiguous characters toggle for I l 1 O 0); Fabricated String Output (monospace output box with live teal glow, strength badge Weak/Strong/Unbreakable, Copy and Regenerate buttons); Entropy Telemetry (live E = L x log2(R) bit readout, entropy progress bar capped at 128 bits, charset pool size, session log download). Rejection sampling eliminates modulo bias. 8-term glossary, 5-FAQ accordion matching JSON-LD FAQPage schema. Security Teal (#0D9488) and Crypto Violet (#7C3AED) accent colors. applicationCategory: DeveloperApplication. Category: Developer and Webmaster.

## Batch 139 (new tools, built directly to template) - DONE
- [x] `stopwatch-split-log-exporter` - Stopwatch Split Log Exporter (2026-06-14) - Three-panel dark chronometer dashboard. Panel 1: high-resolution stopwatch display (performance.now() engine, requestAnimationFrame 60 FPS rendering, HH:MM:SS.mmm readout) with Start, Stop, Split/Lap, and Reset controls plus an optional split label input. Panel 2: scrollable live split log table (lap number, lap duration, cumulative time, wall clock timestamp, optional note) with fastest-lap gold highlight row animation. Panel 3: telemetry readout (total laps, fastest lap, average lap time) and Export CSV Log button (blob-based, RFC 4180 compliant quoting for notes containing commas). Keyboard shortcuts: Space to start/stop, L to split, R to reset. Colors: Action Blue (#2563EB), Chronometer Steel (#64748B), Stop Red (#DC2626). 8-term glossary, 5-item FAQ accordion matching JSON-LD FAQPage. applicationCategory: LifestyleApplication. Category: Home and Life.

## Batch 140 (new tools, built directly to template) - DONE
- [x] `anagram-puzzle-matrix-unscrambler` - Anagram Puzzle Matrix Unscrambler (2026-06-14) - Three-panel dark cryptographic puzzle dashboard. Panel 1 (Scramble Console): large gold-text letter input (max 15 chars + wildcard ?), animated Scrabble-style tile rack with per-letter point values, minimum word length slider (2-7), wildcard blank tile toggle. Panel 2 (Word Matrix): real-time multi-column grid grouping valid dictionary matches by word length descending, alphabetized within each group; exact anagrams highlighted in Scrabble Gold (#F59E0B), wildcard-assisted matches in Cipher Emerald (#10B981). Panel 3 (Telemetry and Scoring Card): live readouts for Total Valid Words, Exact Anagrams Matched, and Maximum Base Score with best-word name; Copy Word List button. Engine: character frequency map algorithm (not factorial permutation) supporting 3,500+ word dictionary, O(n*w) complexity, instant results at 15 letters. Wildcard budget-decrement logic for blank tile mechanic. Scrabble letter point values embedded. 7-term glossary (Anagram, Sub-word, Permutation, Frequency Map, Wildcard, Combinatorics, Time Complexity). 5-item FAQ accordion matching JSON-LD FAQPage. applicationCategory: EntertainmentApplication. Category: Entertainment and Fun.

## Batch 141 (new tools, built directly to template) - DONE
- [x] `random-choice-item-spinner` - Random Choice Spinner (2026-06-14) - Visual spinning wheel for fair random selection from any custom list. Three-panel dashboard: Panel 1 (List Management) textarea input one-per-line, item count badge, Remove Winner After Spin toggle, Weighted Probability toggle with per-item weight inputs, Spin the Wheel button; Panel 2 (Spinner Visualizer) HTML5 canvas wheel with segments proportional to weights, magenta rim, center hub, pointer arrow, ease-out cubic deceleration animation (6+ full rotations, 4200ms), winner badge with live ARIA announcement, Copy Result and Spin Again buttons; Panel 3 (History and Metrics) Total Spins and Items Left metrics, last-5 winners log, Clear History button. Engine: window.crypto.getRandomValues() CSPRNG, weighted cumulative-range selection algorithm, requestAnimationFrame animation. Colors: Spin Magenta (#D946EF) + Fairness Teal (#14B8A6). 9-term glossary, 5-FAQ accordion matching JSON-LD FAQPage. applicationCategory: EntertainmentApplication. Category: Entertainment and Fun.

## Batch 142 (new tools, built directly to template) - DONE
- [x] `great-circle-distance-tool` - Great Circle Distance Calculator (2026-06-14) - Three-panel geodesic flight path tool. Panel 1: IATA airport code lookup (80+ airports) plus direct decimal-degree lat/lon inputs for Origin and Destination. Panel 2: Haversine formula results showing km, statute miles, and nautical miles, animated compass bearing display with true azimuth in degrees and cardinal label, and central angle readout. Panel 3: HTML5 canvas equirectangular arc visualization with great circle arc (Flight Path Blue glow), rhumb line (dashed gray), equator reference, and A/B point markers with antimeridian crossing detection. oninput real-time recalc, no submit button. 8-term glossary (Great Circle, Geodesic, Haversine Formula, Azimuth, Nautical Mile, IATA Code, Earth Curvature, Central Angle). 5-FAQ accordion matching JSON-LD FAQPage. Flight Path Blue (#3B82F6) and Geodesic Teal (#0EA5E9) accent colors. applicationCategory: UtilitiesApplication. Category: Science and Conversion.

## Batch 143 (new tools, built directly to template) - DONE
- [x] `julian-day-calendar-converter` - Julian Day Number Calendar Converter (2026-06-14) - Three-panel dark-theme astronomical date conversion dashboard. Panel 1 (Converter Console): year/month/day/time inputs (oninput real-time), segmented calendar system toggle (Auto / Proleptic Gregorian / Julian), plus reverse JDN-to-date numeric input with live result. Panel 2 (Astronomical Output): monospaced readouts for integer JDN (Astral Violet hero), fractional JD (6 decimal places), MJD (JD - 2400000.5), RJD (JD - 2400000), and calendar system applied with date note. Panel 3 (Telemetry): live system JD clock updating every second, days-from-J2000.0 readout, days-from-Unix-Epoch readout, Copy JDN button, Download 10-day CSV button, three stat pills (epoch origin, J2000.0 reference, MJD epoch). Algorithm: Meeus-Jones formula for Date-to-JDN; Meeus Ch.7 reverse for JDN-to-Date. Handles year 0 (= 1 BC), negative years (proleptic), 1582 reform gap (Oct 5-14 flagged invalid), leap year rules for both calendar systems, fractional JD from HH:MM:SS UTC. Colors: Astral Violet (#8B5CF6) + Celestial White (#F8FAFC). 8-term glossary (JDN, MJD, RJD, Gregorian Calendar, Proleptic Calendar, Heliocentric, Epoch, Ephemeris). 5-FAQ accordion matching JSON-LD FAQPage schema. applicationCategory: UtilitiesApplication. Category: Science and Conversion. Dash check: 0.

## Batch 141 (new tools, built directly to template) - DONE
- [x] `weighted-decision-matrix` - Weighted Decision Matrix Priority Selector (2026-06-14) - Three-panel dark-theme decision analysis dashboard. Panel 1 (Matrix Setup): two-column setup grid with dynamic criteria list (label + weight 1-10, oninput weight normalization notice) and options list (up to 8 options), add/remove rows with orphaned-score cleanup. Panel 2 (Scoring Matrix): auto-generated table with Decision Blue (#3B82F6) option headers (winner column gets gold outline), dark criterion label cells showing normalized weight percentage, number inputs clamped 0-10 with oninput updateTotals() for zero-re-render score updates, gold-tinted total row. Panel 3 (Leaderboard): live winner banner, trophy/medal ranked list with animated progress bars, Copy Results as Markdown button (full matrix + leaderboard exported). Engine: Total Score = sigma(grade x weight), normalized to 0-100 by dividing by (sumWeights x 10). Weights normalized automatically; notice shown when sum is not 100. Label changes update matrix DOM directly without full re-render to preserve focus. Score state keyed as cid_oid dictionary; orphaned keys deleted on row/column removal. 7-term glossary (Weighted Decision Matrix, Pugh Matrix, Criterion, Criteria Weighting, Normalized Score, Decision Analysis, Prioritization). 5-FAQ accordion matching JSON-LD FAQPage. Colors: Decision Blue (#3B82F6) + Priority Gold (#EAB308). applicationCategory: EducationalApplication. Category: Math and Education. Dash check: 0.

## Batch 137 (new tools, built directly to template) - DONE
- [x] `unicode-zero-width-detector` - Hidden Unicode Zero-Width Space Detector (2026-06-14) - Real-time three-panel scanner for invisible Unicode tracking characters. Panel 1: paste input with oninput detection. Panel 2: Anomaly Overlay Visualizer rendering labeled amber badges ([ZWSP], [ZWJ], etc.) at exact character positions. Panel 3: Telemetry readout (total found, distinct categories, visible chars), per-category breakdown, Strip All button, Copy Clean button. Detects U+200B, U+200C, U+200D, U+200E, U+200F, U+FEFF, U+2060-U+2064, U+180E. Colors: Invisible-Detect Blue (#0EA5E9) and Security Amber (#F59E0B). 7-term glossary, Unicode reference table, 5-FAQ accordion. JSON-LD FAQPage + SoftwareApplication. Category: Developer and Webmaster.

## Batch 139 (new tools, built directly to template) - DONE
- [x] `custom-interval-workout-timer` - Custom Interval Countdown Workout Timer (2026-06-14) - Three-panel dark athletic dashboard: Panel 1 Workout Builder (Prepare Time slider 0-30s, Work Duration slider 5-300s, Rest Duration slider 0-120s, Total Rounds number input, Save/Load Workout via localStorage); Panel 2 Active Timer (large monospace countdown display with dynamic background color: Ready Green #10B981 / Work Red #EF4444 / Rest Blue #3B82F6 / Done Purple #A78BFA, phase badge, round label); Panel 3 Telemetry (progress bar with live percentage, Current Round, Rounds Remaining, Total Workout Time estimate, Work-to-Rest Ratio, Copy Workout Summary button). Engine: requestAnimationFrame + performance.now() for drift-free timing accurate through background-tab throttling and screen dim. Web Audio API beeps: 3 short 880Hz beeps at 3-second warning, 1 long 660Hz transition beep, 3 ascending victory tones at completion. State machine: idle -> prepare -> work -> rest (x rounds, last rest omitted) -> done. Inputs disabled during active run, re-enabled on pause/reset/done. 8-term glossary (HIIT, Tabata, Active Recovery, Set, Round, Anaerobic Threshold, Work-to-Rest Ratio, EPOC). 5-item FAQ accordion matching JSON-LD FAQPage. applicationCategory: HealthApplication. Category: Health and Wellness.


## Batch 142 (new tools, built directly to template) - DONE
- [x] `habit-streak-tracker` - Habit Streak Tracker (2026-06-14) - Three-panel dark-theme dashboard: Panel 1 Habit Configuration (habit name input, start date picker, current streak and longest streak hero numbers, Mark Today Complete toggle button); Panel 2 Progress Calendar (month navigation, 7-column grid Su-Sa headers, green highlight for complete days, blue ring for today, future days inert, click-to-toggle calibration for all past days); Panel 3 Persistence Analytics (monthly completion rate with progress bar, total days sustained, all-time completion rate, Export CSV Log button, Reset All Data button). Engine: localStorage key axiomape_habit_streak_v1, YYYY-MM-DD date strings throughout (no UTC drift), Set-based O(1) lookup, gap-scan consecutive-day streak algorithm, duplicate-prevention on toggle. CSV export covers every calendar day from start date to today with Complete/Missed status. Colors: Streak Success Green (#22C55E) and Habit Slate (#64748B). JSON-LD FAQPage with 5 questions + SoftwareApplication. 8-term glossary, 5-item FAQ accordion. applicationCategory: HealthApplication. Category: Health and Wellness. Dash check: 0.

## Batch 141 (new tools, built directly to template) - DONE
- [x] `secret-santa-match-engine` - Secret Santa Name Match Assignment Engine (2026-06-14) - Three-panel private gift exchange picker. Panel 1: real-time name input (one per line, no submit button), participant count chip, optional exclusion pairs with two-way block (couple/family). Panel 2: Secret Vault grid of locked gift boxes, one per participant, Holiday Red (#DC2626) hover glow. Panel 3: Click-to-Reveal modal showing giver and recipient, animated timer bar and 10-second countdown, auto-relock via setInterval. Engine: Fisher-Yates shuffle inside a retry loop until a valid derangement (zero self-assignments) is found, plus exclusion constraint validation, up to 5000 attempts. Reset clears all state. Reveal count tracker. 8-term glossary (Derangement, Fisher-Yates Shuffle, Algorithmic Fairness, Random Permutation, Subfactorial, Exclusion Constraint, Click-to-Reveal, Client-Side Processing). 5-item FAQ accordion matching JSON-LD FAQPage schema. Colors: Holiday Red (#DC2626) + Gift Ribbon Green (#16A34A) + Gold (#F59E0B) festive accents on dark AxiomApe theme. applicationCategory: EntertainmentApplication. Category: Entertainment and Fun.

## Batch 143 (new tools, built directly to template) - DONE
- [x] `lunar-phase-ephemeris-simulator` - Lunar Phase Orbit Ephemeris Simulator (2026-06-14)
## Batch 144 (new tools, built directly to template) - DONE
- [x] `golden-hour-lighting-forecaster` - Golden Hour Photographic Lighting Forecaster (2026-06-14) - Three-panel dark Night-to-Dawn gradient dashboard for computing outdoor photography lighting windows from any location and date. Panel 1 (Geospatial Configuration): manual lat/lon/elevation inputs with oninput live recalc, plus GPS toggle using browser geolocation API with detect-my-location button and status feedback. Date picker for projecting future lighting conditions. Panel 2 (Solar Day Timeline): gradient horizontal bar spanning 00:00-23:59 local time, color-coded night (#0F0F2D), blue hour (indigo), golden hour (amber gradient), and daylight (sky blue) segments; tick labels for Golden Hour start/end, Sunrise, Sunset; solar noon pill badge. Panel 3 (Forecast Summary): morning/evening blue hour and golden hour blocks with exact start/end times and duration, Copy Shooting Schedule button (plain-text export). Engine: full NOAA Solar Calculator algorithm - Julian Day Number, Julian Century, geometric mean longitude, geometric mean anomaly, Earth eccentricity, equation of center, sun true/apparent longitude, mean obliquity, obliquity correction, solar declination, equation of time; hour angle inversion for any target elevation; atmospheric refraction correction -0.833 deg at horizon; elevation-based horizon dip via acos(R_earth/(R_earth+h)); local timezone via browser Date object UTC offset. Polar edge cases detected (alwaysAbove/alwaysBelow cosHA clamping) with explanatory notice banner. Golden hour = sun -6 to +6 degrees; Blue hour = sun -4 to -6 degrees. No submit button; all fields oninput. 10-term glossary (Golden Hour, Blue Hour, Solar Elevation Angle, Civil Twilight, Azimuth, Atmospheric Refraction, Celestial Sphere, Solar Declination, Equation of Time, Solar Noon). 5-item FAQ accordion matching JSON-LD FAQPage. Colors: Golden Warmth (#F59E0B) + Twilight Indigo (#6366F1). applicationCategory: DesignApplication. Category: Image and Design. Dash check: 0. - Three-panel dark Night Sky Blue (#1E293B) + Lunar Silver (#E2E8F0) dashboard for projecting moon visibility profiles from any local date. Panel 1 (Simulation Inputs): date picker, time picker, and UTC time zone offset selector (oninput/onchange real-time updates, no submit button). Panel 2 (Lunar Phase Visualizer): HTML5 canvas 160x160 moon rendering with accurate terminator curve morphing between crescent, quarter, gibbous, and full phase shapes; waxing illuminates right, waning illuminates left; radial glow and surface texture overlays. Panel 3 (Ephemeris Readout): Phase Name, Illumination Percentage with animated progress bar, Lunar Age in days, Days Since New Moon, Days to Full Moon, Days to New Moon, Next Full Moon date, Next New Moon date, Synodic Cycle Progress percentage, Copy Lunar Data button. 30-day Lunar Phase Calendar grid below dashboard with moon emoji icons per day, gold ring for Full Moon cells, today and selected-date highlights. Engine: Meeus mean synodic month (29.53058867 days), reference epoch JD 2451549.259 (Jan 6 2000 18:14 UTC), Julian Day Number calculation, illumination = (1 - cos(phase angle)) / 2, phase names from 8 equal 45-degree arc segments. 8-term glossary (Ephemeris, Synodic Month, Waxing, Waning, Gibbous, Crescent, Lunar Age, Illumination Percentage). 5-item FAQ accordion matching JSON-LD FAQPage schema. applicationCategory: EducationalApplication. Category: Math and Education. Dash check: 0.


## Batch 144 (new tools, built directly to template) - DONE
- [x] `world-time-zone-meeting-planner` - World Time Zone Visual Meeting Grid Planner (2026-06-14) - Three-panel dark dashboard for distributed team meeting coordination. Panel 1 (Team Location Setup): city search with autocomplete dropdown (90 IANA-keyed cities), configurable default work window selectors, per-zone Start of Day and End of Day selectors (24 options each), remove button per zone. Pre-loaded with New York/London/Tokyo defaults. Panel 2 (24-Hour Heatmap Grid): sticky row-label column, 24 UTC hour columns (min-width 38px, horizontally scrollable for 5+ locations), color-coded cells: gold (#F59E0B) with glow for optimal overlap columns (max compatibility score), indigo (#4F46E5) for in-window non-optimal cells, near-black (#0f172a) for out-of-window cells; score row (tfoot) showing zone count ratio per column. Hover handled via event delegation (no full re-renders on mouseover). Panel 3 (Meeting Telemetry): default view shows ranked best-slots list with UTC time and compatibility score; hover view shows UTC badge, score hero number, per-zone local time rows with in/out status. Copy Optimal Slots button generates formatted multi-line text block for email invites. Engine: Intl.DateTimeFormat with IANA tz identifiers, DST-aware via todayAtUTC() base date. Compatibility Score = zones-in-window / total-zones x 100. Optimal = columns matching max score across all 24 hours. Colors: Collaboration Indigo (#4F46E5), Global Daylight Gold (#F59E0B). 8-term glossary (IANA Time Zone Database, UTC Offset, DST, Working Window, Heatmap, Compatibility Score, GMT, Synchronization). 5-item FAQ accordion matching JSON-LD FAQPage. "See also" notice added to existing time-zone-converter/index.html. applicationCategory: UtilitiesApplication. Category: Science and Conversion. Dash check: 0.

## Batch 145 (new tools, built directly to template) - DONE
- [x] `leap-year-validation-schedule` - Leap Year Century Validation Schedule Index (2026-06-14) - Three-panel dark-theme dashboard for validating leap years and generating chronological leap year schedules. Panel 1 (Chronological Input): target year number input with oninput live recalc, Gregorian vs. Julian segmented toggle with explanatory note card, year range From/To inputs for bulk schedule generation. Panel 2 (Validation Matrix): large YES/NO verdict banner (Validation Emerald #10B981 for YES, accent-red for NO) with year label and calendar system badge; three-step rule breakdown rendered as pass/fail/skip rule-step cards showing exact divisibility arithmetic (year % 4, year % 100, year % 400) with green checkmarks or red crosses; Julian mode collapses to single Step 1 check with amber informational note. Panel 3 (Schedule and Export): metric strip showing range span and count; Previous 5 and Next 5 leap year lists with dot indicators, target-year highlight in Epoch Indigo; scrollable range list rendered as Validation Emerald chip grid; Copy Schedule button (navigator.clipboard, copies full text block with verdict, neighbor lists, and range array). Engine: isLeapGregorian() implements the three-gate century rule (% 400 = 0 -> true, % 100 = 0 -> false, % 4 = 0 -> true, else false); isLeapJulian() is pure % 4 = 0. No submit button; all recalc on oninput/onchange. 7-term glossary (Leap Year, Century Rule, Gregorian Calendar, Julian Calendar, Divisibility, Intercalary Day, Solar Year). 5-item FAQ accordion matching JSON-LD FAQPage (math rule, century exception, Julian-to-Gregorian reform, solar year length, leap day birthdays). Colors: Epoch Indigo (#4F46E5) + Validation Emerald (#10B981). applicationCategory: EducationalApplication. Category: Math and Education. Dash check: 0.

## Batch 146 (new tools, built directly to template) - DONE
- [x] `days-left-year-progress-loader` - Year Progress Tracker (2026-06-14) - Real-time SVG concentric ring annual progress loader. Three-panel dashboard: Time Configuration (Calendar Year / Fiscal Year Oct 1 / Business Days Only mode buttons, Custom Target Date toggle with date picker, seconds and week number display toggles); Vector Visualizer (dual SVG rings radius 122px outer + 100px inner, stroke-dashoffset math against full circumferences 766.55px and 628.32px, gradient #8B5CF6 to #06B6D4 outer ring, violet inner ring, 6-decimal live percentage hero, mode label, year display, linear progress bar); Telemetry Card (Days Elapsed, Days Remaining, ISO Week Number, Hours Left, Seconds Remaining, Leap Year, Total Year Days, Unix Timestamp, Copy Progress Status button). Engine: 50ms setInterval loop, leap year via Date Feb-29 check, ISO 8601 week algorithm, business day counter loop Monday-Friday, fiscal year Oct 1 boundary logic, stroke-dashoffset = circumference x (1 - pct/100). Colors: Progress Cyan (#06B6D4) and Time Remaining Violet (#8B5CF6). applicationCategory: LifestyleApplication. Category: Home and Life. Dash check: 0.

## Batch 147 (new tools, built directly to template) - DONE
- [x] `unix-micro-timestamp-inspector` - Unix Millisecond Micro-Timestamp Inspector (2026-06-14) - Three-panel dark developer dashboard for bulk epoch integer inspection and delta analysis. Panel 1 (Data Stack Injection): monospaced textarea accepting one epoch integer per line (oninput live processing), Force Precision dropdown (Auto-Detect/Seconds/Milliseconds/Microseconds/Nanoseconds), Sort Chronologically toggle, Delta Warning Threshold input with dynamic unit label. Panel 2 (Epoch Inspection Matrix): sticky-header table with columns: Row, Raw Epoch Integer (Epoch Violet), Precision Badge (SEC/MS/US/NS color-coded), UTC ISO 8601 (Timestamp Cyan), Local Time, Delta (dt) from Previous (amber highlight + up-arrow icon when threshold exceeded). Panel 3 (Stack Telemetry): Total Timestamps Parsed (violet hero), Min Delta Detected (cyan), Max Delta Detected (amber), Epoch Range Spanned; Export Parsed Grid CSV button (blob-based RFC 4180), Clear button. Engine: digit-length precision auto-detection (10=s, 13=ms, 16=us, 19=ns); BigInt arithmetic for microsecond and nanosecond delta calculations to prevent IEEE 754 precision loss; toDateMs() converts all precisions to ms for Date() display; BigInt sort for chronological ordering; CSV export via URL.createObjectURL. Pre-populated sample stack on DOMContentLoaded. See-also cross-reference to epoch-converter and unix-epoch-converter. 8-term glossary (Unix Epoch, Millisecond, Microsecond, Nanosecond, ISO 8601, Delta Time, Year 2038 Problem, HFT). 5-item FAQ accordion matching JSON-LD FAQPage. Colors: Epoch Violet (#8B5CF6) + Timestamp Cyan (#06B6D4). applicationCategory: DeveloperApplication. Category: Developer and Webmaster. Dash check: 0.

## Batch 147 (new tools, built directly to template) - DONE
- [x] `gas-usage-metric-converter` - Gas Usage Budget Metric Converter (2026-06-14) - Three-panel dark-theme instrument-cluster dashboard for global fuel economy conversion and road trip budgeting. Panel 1 (Efficiency Input and Trip Parameters): numeric input for fuel efficiency with oninput recalc, unit dropdown (US MPG, UK MPG, L/100km, km/L), optional trip distance input with km/miles toggle, optional fuel price input with per-litre/per-US-gal/per-UK-gal toggle. Panel 2 (Global Conversion Matrix): four-cell synchronised grid showing equivalent values in US MPG, UK MPG, L/100km, and km/L simultaneously; active input cell highlighted with Octane Amber (#F59E0B) border and glow, INPUT badge. Panel 3 (Trip Budget Telemetry): Distance Blue (#3B82F6) cells showing total fuel volume required (litres) and estimated trip cost; Copy Budget Summary button copies full conversion matrix plus trip estimate as plain text for group chats. Engine: internal pivot unit is L/100km; US_CONST = 235.214583 (100 x 3.785411784 / 1.609344), UK_CONST = 282.480936 (100 x 4.54609 / 1.609344); toL100km() normalises any input format; fromL100km() derives all four outputs; price normalised to per-litre before cost calculation regardless of input price format; no submit button, all fields oninput/onchange. 8-term glossary (MPG, L/100km, km/L, Imperial Gallon, US Liquid Gallon, Fuel Economy, Inverse Metric, Thermal Efficiency). 5-FAQ accordion matching JSON-LD FAQPage (UK vs US MPG, L/100km vs km/L, trip cost calculation, inverse proportionality, AC/speed impact). See-also cross-references to mpg-calculator and gas-cost-calculator. Conversion formula reference table. Colors: Octane Amber (#F59E0B) for fuel metrics, Distance Blue (#3B82F6) for route and budget totals. applicationCategory: UtilitiesApplication. Category: Science and Conversion. Dash check: 0.

## Batch 148 (new tools, built directly to template) - DONE
- [x] `structural-beam-deflection-calculator` - Structural Beam Deflection Calculator (2026-06-14) - Three-panel Euler-Bernoulli beam deflection dashboard. Panel 1 Beam Configuration: Support Type segmented control (Simply Supported / Cantilever), Load Type segmented control (Center Point Load / Uniform Distributed Load), Material dropdown (Structural Steel 200 GPa / Aluminum 69 GPa / Timber 11 GPa / Custom E), span and load inputs, cross-section sub-calculator (b x h^3/12 or custom I). Full Metric (m/kN/GPa/cm4) and Imperial (ft/lbf/ksi/in4) unit systems with rigorous normalization. Panel 2 SVG Bending Visualizer: pin/roller supports or fixed wall rendering, quadratic bezier simply-supported or cubic bezier cantilever deflected path in Tolerance Blue, load arrows, delta-max annotation. Panel 3 Telemetry: deflection hero (Blue/amber/Red by tolerance status), L/240 and L/360 PASS/FAIL rows with allowable limits, properties summary, Copy Engineering Report. Formulas: P*L^3/(48*E*I), 5*w*L^4/(384*E*I), P*L^3/(3*E*I), w*L^4/(8*E*I). Unit normalization: metric cm4->m4 (1e-8), GPa->Pa (1e9), kN->N (1e3); imperial ft->in (x12), ksi->psi (1e3), lbf/ft->lbf/in (/12). oninput live recalc. Colors: Structural Slate (#64748B) inputs, Stress Red (#EF4444) warnings, Tolerance Blue (#3B82F6) safe. applicationCategory: EducationalApplication. Category: Math and Education. Dash check: 0.

## Batch 145 (new tools, built directly to template) - DONE
- [x] `passport-validity-buffer-tool` - Passport Validity Buffer Calculator (2026-06-14) - Three-panel dark Customs Navy (#1E3A8A) dashboard for checking international passport entry buffer requirements. Panel 1 (Document and Itinerary): date pickers for Passport Expiration Date, Planned Entry Date, and Planned Exit Date with a destination rule selector (6-Month Rule with entry-date anchor, Schengen 3-Month Rule with exit-date anchor, Valid for Duration of Stay). Panel 2 (Timeline Visualizer): horizontal bar spanning today to passport expiration; color segments for passport base (dark slate), danger zone (red overlay for final 3 or 6 months depending on rule), travel window (navy blue band), and today marker (amber line). Panel 3 (Clearance Telemetry): bold status badge SAFE TO TRAVEL (Safe Green #10B981) or RENEWAL REQUIRED (Denial Red #EF4444), metric rows for Rule Applied, Passport Expires, Trip Duration, Days Valid from Today, Required Expiry Date, Buffer Remaining After Exit, and either Clearance Margin or Days Short of Requirement. Copy Assessment button generates a plain-text report for travel agents or family. All math uses native JS Date object with addMonths helper for leap-year-safe arithmetic. Schengen rule correctly anchors buffer calculation to exit date, not entry date. 6-month rule anchors to entry date. No submit button - all oninput/onchange events. 6-term glossary (6-Month Validity Rule, Schengen Area Requirements, Entry Date, Exit Date, Visa-Free Travel, Passport Buffer Zone). 5-FAQ accordion matching JSON-LD FAQPage. applicationCategory: LifestyleApplication. Category: Home and Life. Dash check: 0.

## Batch 147 (new tools, built directly to template) - DONE
- [x] `wind-load-pressure-estimator` - Wind Load Structural Pressure Estimator (2026-06-14) - Three-panel dark civil-engineering dashboard for calculating aerodynamic wind loads on flat walls. Panel 1 (Environmental and Structural Inputs): Wind velocity input (km/h metric / mph imperial), wall surface area input, unit system segmented toggle (Metric SI / Imperial US), expandable advanced section with air density override (default 1.225 kg/m3 at sea level) and drag coefficient dropdown (1.20 smooth plate to 2.00 worst-case bluff body). Panel 2 (Wind Force Visualizer): HTML5 CSS animated wind arrow scene with wall surface element, dynamic arrow rows scaling in count, shaft length, opacity, and animation speed based on entered velocity, impact flash glow at wall, ground reference line, live speed label. Panel 3 (Structural Load Telemetry): Dynamic Wind Pressure readout with SI unit step-up (Pa / kPa / MPa), Total Mechanical Force readout (N / kN / MN metric; lbf / kip imperial), normalized velocity display (m/s or ft/s), Force Classification tier badge (Low / Moderate / High / Severe / Extreme), Copy Load Data button generating plain-text engineering report. Core formula: P = 0.5 x rho x v2 x Cd; F = P x A. Metric converts km/h to m/s (divide 3.6); Imperial converts mph to ft/s (x 1.46667). Air density imperial default: 0.002377 slugs/ft3. No submit button; all oninput/onchange real-time. 8-term glossary (Wind Load, Dynamic Pressure, Drag Coefficient, Air Density, Newtons, Pounds-force, Structural Shear, Bluff Body). 5-item FAQ accordion matching JSON-LD FAQPage schema. Colors: Wind Shear Cyan (#06B6D4) and Structural Slate (#64748B). applicationCategory: UtilitiesApplication. Category: Science and Conversion. Tool-specific engineering disclaimer included. Dash check: 0.

## Batch 148 (new tools, built directly to template) - DONE
- [x] `rainwater-catchment-volume-estimator` - Rainwater Catchment Volume Estimator (2026-06-14) - Three-panel dark environmental engineering dashboard for computing roof runoff collection limits. Panel 1 (Footprint and Rainfall Inputs): Imperial/Metric unit toggle (ft/in/gal vs m/mm/L), roof catchment footprint area input, expected rainfall depth input (per storm or per month), roofing material dropdown (Corrugated Metal 0.95, Asphalt Shingle 0.90, Concrete Tile 0.85, Built-up Tar and Gravel 0.80) with live runoff coefficient badge. Panel 2 (Volume Visualizer): animated CSS water-fill tank metaphor with blue gradient fill level scaling against a 275-gal (1040 L) IBC tote reference, large hero number displaying net harvestable volume in gallons or liters, fill percentage label. Panel 3 (Telemetry and Practical Sizing): four metric cards showing Gross Volume at 100% efficiency, Net Harvestable Volume after runoff coefficient, Estimated Water Weight (8.34 lbs/gal or 1 kg/L), and Efficiency Loss volume; daily water usage input for days-of-supply calculation; dynamic structural load warning card (Standard / Elevated / Heavy Load / Engineered Foundation tiers); Copy Catchment Data Report button generating plain-text export. Core formula: V = A x R x C x Conversion Factor. Imperial: 0.623 gal per sq-ft per inch. Metric: 1 liter per sq-m per mm. No submit button; all oninput/onchange real-time. 8-term glossary (Catchment Footprint, Runoff Coefficient, First Flush Diverter, Potable vs. Non-Potable Water, Hydrostatic Load, Cistern, IBC Tote, Graywater vs. Rainwater). 5-item FAQ accordion matching JSON-LD FAQPage (footprint vs. pitched area, runoff coefficient, rain barrel weight and placement, first flush diverter, potable vs. non-potable use). Colors: Raindrop Blue (#3B82F6) for volume metrics and Eco Green (#10B981) for efficiency readouts. applicationCategory: LifestyleApplication. Category: Home and Life. Tool-specific disclaimer included. Dash check: 0.

## Batch 148 (new tools, built directly to template) - DONE
- [x] `sound-pressure-distance-attenuation` - Sound Pressure Level Distance Attenuation Calculator (2026-06-14) - Three-panel dark audio engineering dashboard for projecting SPL decay over distance. Panel 1 (Source Calibration): Base SPL number input, Reference Distance input, Unit segmented toggle (Meters/Feet), Acoustic Source Type segmented toggle (Point Source / Line Source) with contextual hint text. Panel 2 (Attenuation Decay Curve): dynamic SVG (480x240 viewBox) rendering a log-scaled distance X-axis and linear dB SPL Y-axis; amber-to-blue gradient curve, filled area under curve, dashed vertical reference lines at source and target distances, amber dot for reference point, blue dot for target point, auto-scaling axis ticks. Panel 3 (Projected SPL Telemetry): Target Distance input, large hero SPL readout (blue), metric rows for Base SPL (amber), Total dB Drop, Distance Ratio, Decay Model; psychoacoustic context card; Copy Attenuation Data button. Engine: Point Source L2 = L1 - 20 x log10(d2/d1); Line Source L2 = L1 - 10 x log10(d2/d1). All fields oninput, no submit button. 8-term glossary (SPL, Decibel, Inverse Square Law, Point Source, Line Source, Free Field, Attenuation, Psychoacoustics). 5-item FAQ accordion matching JSON-LD FAQPage. Colors: Acoustic Amber (#F59E0B) + Decibel Blue (#3B82F6). applicationCategory: MultimediaApplication. Category: Audio and Video. Dash check: 0.


## Batch 149 (new tools, built directly to template) - DONE
- [x] `composting-carbon-nitrogen-balancer` - Compost Carbon-to-Nitrogen Ratio Calculator (2026-06-14) - Three-panel dark garden-theme dashboard for optimizing organic matter ratios for aerobic decomposition. Panel 1 (Compost Recipe Builder): unit toggle (lbs/kg/cups), material dropdown with 8 Greens (Grass Clippings 20:1, Food Scraps 15:1, Coffee Grounds 20:1, Fresh Cow Manure 15:1, Fruit Waste 35:1, Fresh Green Leaves 30:1, Seaweed 19:1, Alfalfa 12:1) and 8 Browns (Dry Leaves 60:1, Cardboard 350:1, Straw 90:1, Wood Chips 400:1, Sawdust 325:1, Newspaper 170:1, Corn Stalks 75:1, Pine Needles 80:1), Add button, scrollable recipe stack with per-item weight inputs (oninput), green/brown color-coded rows with C:N badges, X remove buttons. Panel 2 (Balance Gauge): large hero C:N ratio readout, visual track gauge with optimal zone (25:1-30:1) highlighted, dynamic status banner (Optimal/Too-Low nitrogen warning/Too-High carbon warning), annotated zone reference chips. Panel 3 (Pile Telemetry): Total Pile Weight, Estimated Carbon Mass with progress bar, Estimated Nitrogen Mass with progress bar, Green item count, Brown item count, Copy Recipe to Clipboard button (plain-text export). Core engine: weighted mass formula - carbon_mass = weight x r/(r+1), nitrogen_mass = weight x 1/(r+1), aggregate C:N = sum(carbon_mass)/sum(nitrogen_mass). No submit button; all oninput/onchange. 7-term glossary (C:N Ratio, Greens, Browns, Thermophilic Composting, Aerobic Decomposition, Anaerobic Decomposition, Humus). Material reference table with all 16 ingredients and C:N values. 5-item FAQ accordion matching JSON-LD FAQPage (optimal 30:1 ratio, too many greens, slow decomposition fix, coffee grounds classification, particle size). Sprout Green (#22C55E) for nitrogen-rich materials, Decomposition Brown (#92400E) for carbon-rich materials on dark AxiomApe theme. applicationCategory: LifestyleApplication. Category: Home and Life. Dash check: 0.

## Batch 150 (new tools, built directly to template) - DONE
- [x] `carbon-footprint-commute-tool` - Carbon Footprint Commute Emission Tool (2026-06-14) - Three-panel dark eco-analytics dashboard for modeling daily commute CO2 output across vehicle categories. Panel 1 (Commute Parameters): one-way distance input, work days per year input, vehicle type dropdown (Gasoline ICE/Diesel/Hybrid/EV/Public Transit Bus), fuel efficiency input (MPG for ICE/hybrid, kWh per 100 miles for EV), dynamic EV grid energy mix pill buttons (Coal Heavy 0.90/US Average 0.38/Mixed Renewable 0.20/High Renewable 0.06 kg CO2 per kWh). Panel 2 (Impact Visualizer): dynamic bar chart comparing user commute against 5 fixed benchmarks (national avg gasoline, large SUV 18 MPG, diesel truck 22 MPG, EV at US avg grid, public transit bus) with Eco Green/Exhaust Slate/Warning Amber color tiers and animated glow on user bar. Panel 3 (Telemetry): Annual CO2 hero cell in kg, metric tons, weekly CO2, daily round-trip CO2, mature-trees-to-offset block (21 kg per tree per year), Copy Emission Report button. Engine: EPA factors - gasoline 8.89 kg/gal, diesel 10.18 kg/gal, EV grid factor x kWh per mile, bus 0.064 kg CO2 per passenger-mile. Annual = daily x exact work days entered (not 365). oninput/onchange real-time recalc, no submit button. 6-term glossary (Carbon Footprint, Tailpipe Emissions, Grid Emission Factor, Metric Ton, ICE, Carbon Offset). 5-FAQ accordion matching JSON-LD FAQPage. Colors: Eco Green (#10B981) for EV/transit/hybrid, Exhaust Slate (#64748B) for gasoline avg, Warning Amber (#F59E0B) for high-emission profiles. applicationCategory: UtilitiesApplication. Category: Science and Conversion. Dash check: 0.

## Batch 148 (new tools, built directly to template) - DONE
- [x] `air-exchange-rate-calculator` - Air Exchange Rate Volume Vent Calculator (2026-06-14) - Three-panel dark-theme ventilation dashboard for computing Air Changes per Hour (ACH) from room dimensions and HVAC airflow. Panel 1 (Room and HVAC Inputs): unit system toggle (Imperial ft/CFM vs. Metric m/CMH with L/s sub-toggle), Room Type dropdown (Bedroom 2-4, Living Room 2-4, Kitchen 8-15, Bathroom 6-7, Classroom 4-6, Office 4-6, Hospital Room 6-12, Laboratory 6-12, Gym 4-8, Basement 2-4), three inline dimension inputs (Length, Width, Ceiling Height) with auto-converting unit labels. Panel 2 (Circulation Gauge): dual SVG concentric ring gauge - outer ring (r=88, C=552.92) vs. minimum ACH target in Fresh Air Cyan (#06B6D4) with drop-shadow glow on safe status, inner ring (r=68, C=427.26) vs. maximum target in Ventilation Blue (#3B82F6); ACH hero value (Warning Amber #F59E0B when below target); dynamic status badge ("Safe Circulation" / "Excellent Circulation" / "Below Target - Increase Airflow"). Panel 3 (Ventilation Telemetry): Total Room Volume, Calculated ACH, Time per Complete Air Change (60/ACH in minutes), Required Airflow for min target, Required Airflow for max target, Surplus/Deficit vs. min target; Copy Ventilation Report button (clipboard export with full config and results). Engine: Imperial ACH = (CFM x 60) / vol_ft3; Metric ACH = CMH / vol_m3; unit conversion on toggle (ft<->m x0.3048/x3.28084; CFM<->CMH x1.69901; L/s<->CMH x3.6); oninput/onchange real-time recalc, no submit button. 8-term glossary (ACH, CFM, CMH, L/s, Volumetric Flow Rate, IAQ, HVAC, Mechanical Ventilation). 5-item FAQ accordion matching JSON-LD FAQPage. ACH standards reference table (10 room types). Colors: Fresh Air Cyan (#06B6D4) + Ventilation Blue (#3B82F6) + Warning Amber (#F59E0B). applicationCategory: LifestyleApplication. Category: Home and Life. Dash check: 0.
- [x] **Thermal Insulation Heat Loss Conduction Solver** (`thermal-insulation-heat-loss-solver/`) - Added 2026-06-14. Multi-layer wall/roof heat loss engine: R-value, U-value, Fourier law Q calculation, temperature gradient visualizer. Three-panel layout: Assembly Builder (layer dropdowns + thickness), Environmental Params + gradient visualizer, Telemetry (R-value, U-value, Q). Material k-value dictionary, Metric/Imperial toggle, Fourier law Q = U x A x DeltaT, per-layer temperature boundary labels. applicationCategory: UtilitiesApplication. Category: Science & Conversion. Dash check: 0.

## Batch 152 (new tools, built directly to template) - DONE
- [x] `kinetic-energy-impact-calculator` - Kinetic Energy Impact Dissipation Computer (2026-06-14) - Three-panel dark physics-lab dashboard for computing structural forces from moving bodies. Panel 1 (Projectile and Barrier Parameters): Body Mass input (kg/lbs), Impact Velocity input (m/s, km/h, mph), Deformation/Stopping Distance input (m, cm, in, ft); all unit dropdowns with onchange recalc; oninput real-time, no submit button; see-also cross-reference to braking-distance-solver. Panel 2 (Collision Visualizer): animated scene with yellow mass block (Velocity Yellow #EAB308, pulse CSS keyframe massPulse), dotted crumple-zone strip width mapped to deformation distance (8-100px range, color-coded by G-force severity), rigid barrier wall (barrierPulse keyframe) color-shifting green/amber/red/dark-red based on G thresholds (10/30/100 G). Live G-force readout hero (g-low/g-medium/g-high/g-extreme CSS classes). Panel 3 (Telemetry and Structural Load): Total Kinetic Energy (Joules, MJ, GJ auto-step-up), Average Impact Force (N, kN, MN, GN with lbf sub-note), Deceleration Severity (G with 4-tier severity label); Copy Impact Report button (navigator.clipboard with fallback execCommand). Physics engine: ALL inputs converted to SI before any formula runs (toKg, toMs, toM helpers) - velocity converted to m/s BEFORE squaring to prevent unit-mix errors; KE = 0.5 x m x v^2 (Joules), F = KE / d (Newtons), G = v^2 / (2 x d x 9.81) (dimensionless). Colors: Velocity Yellow (#EAB308) for kinetic energy metrics, Impact Red (#EF4444) for force and deceleration. 7-term glossary (Kinetic Energy, Work-Energy Principle, Deformation Distance, G-Force, Impact Force, Inelastic Collision, Deceleration). 5-item FAQ accordion matching JSON-LD FAQPage (exponential speed-energy relationship, deformation distance and force reduction, G-force calculation, KE vs impact force distinction, crumple zone engineering design). applicationCategory: UtilitiesApplication. Category: Science and Conversion. Dash check: 0.

## Batch 153 (new tools, built directly to template) - DONE
- [x] `reading-speed-comprehension-estimator` - Reading Speed Comprehension Goal Estimator (2026-06-14) - Three-panel dark academic dashboard for estimating reading duration from pasted text or manual word/page count. Panel 1 (Text and Rate Inputs): dual-mode toggle (Paste Text textarea with live word count chip / Manual Entry with word count input + page count input + words-per-page slider 250-300); comprehension level segmented control (Skimming 500 WPM, Casual Reading 238 WPM, Deep Study 125 WPM, Custom WPM input). Panel 2 (Pacing Visualizer): large HH:MM:SS time hero in Focus Indigo (#4F46E5), WPM badge, Session Planner bar auto-segmenting total time into 45-minute focus blocks with 5-minute breaks between each block. Panel 3 (Telemetry): Total Word Count, Estimated Pages (at 275 wpp), Words Per Second, Total Minutes, Comprehension Level, Focus Blocks; Copy Reading Plan button generating clipboard-ready study schedule. Engine: regex whitespace-split word counter (handles dense unformatted text accurately, returns 0 on empty input, no division-by-zero). Time formula: totalMinutes = wordCount / WPM; HH:MM:SS from rounded total seconds. Session planner uses 45-minute BLOCK constant with 5-minute breaks. oninput/onchange real-time recalc, no submit button, 100% client-side. 8-term glossary (WPM, Comprehension Rate, Subvocalization, Fixation, Skimming, Scanning, Active Reading, Focus Block). 5-item FAQ accordion matching JSON-LD FAQPage schema. See-also cross-reference to word-count tool. Colors: Focus Indigo (#4F46E5) for pacing, Comprehension Cyan (#06B6D4) for telemetry. applicationCategory: EducationalApplication. Category: Math and Education. Dash check: 0.

## Batch 151 (new tools, built directly to template) - DONE
- [x] `pomodoro-cycle-customizer` - Pomodoro Cycle Work Session Customizer (2026-06-14) - Three-panel dark productivity dashboard for structuring focus blocks and break intervals into Pomodoro loops. Panel 1 (Cycle Configuration): numeric + slider inputs for Focus Duration (1-120 min), Short Break (1-60 min), Long Break (1-120 min), Cycles Before Long Break (1-12); Save Routine (localStorage) and Load Saved buttons; sound toggle. Panel 2 (Active Visualizer): SVG progress ring (r=114, C=716.28) draining with stroke-dashoffset; large clock face MM:SS; cycle label; Start/Pause/Reset/Skip controls; phase badge color-coded Focus Tomato (#EF4444) / Recovery Green (#22C55E) / Deep Rest Indigo (#4F46E5). Panel 3 (Session Telemetry): animated cycle dot strip with pulse animation on active dot; Total Focused Time Today (real-time accumulation), Cycles Completed, Current Phase, Estimated Session End time, Next Break Type; Copy Routine Setup button. Engine: absolute Unix timestamp clock-delta (Date.now()) immune to browser background-tab throttling; requestAnimationFrame RAF loop; state machine (idle to focus to short-break to focus to long-break at cycle boundary, repeat). Web Audio API chimes: descending pair on focus end, rising pair on break end. localStorage key axiomape_pomodoro_v1 auto-loads on page open. Colors: Focus Tomato (#EF4444), Recovery Green (#22C55E), Deep Rest Indigo (#4F46E5). 6-term glossary (Pomodoro Technique, Timeboxing, Ultradian Rhythm, Context Switching, Flow State, Cognitive Fatigue). 5-item FAQ accordion matching JSON-LD FAQPage. applicationCategory: LifestyleApplication. Category: Home and Life. Dash check: 0.

## Batch 153 (new tools, built directly to template) - DONE
- [x] `leitner-spaced-repetition-forecaster` - Leitner Flashcard Box System Spaced Repetition Forecaster (2026-06-14) - Three-panel dark Retention Indigo (#4F46E5) dashboard for scheduling flashcard reviews with the Leitner spaced repetition system. Panel 1 (Deck Manager and Schedule Forecast): Front and Back textarea inputs with Add Flashcard button (no form submit), 7-day review forecast bar chart (per-day card counts with amber highlight for today, computed from nextDueDate buckets), scrollable card list showing box assignment with box-color pills and individual delete buttons. Panel 2 (Active Study Session): five box tiles showing card counts per box (1-Daily, 2-2Days, 3-4Days, 4-8Days, 5-16Days) with amber due-badge chips; flashcard flip interface displaying card Front with Reveal Answer button, then Back with Got It (Promote) and Missed It (Demote) buttons; session progress counter; no-due and empty-deck state messages. Panel 3 (Retention Analytics): four stat cells (Total Cards, Cards Mastered Box 5, Due Today, Reviewed This Session); five-box distribution chart with color-coded progress bars (Indigo/Green/Amber/Red/Purple per box); interval reference table; Download Deck Data JSON button; Reset All Cards button. Engine: localStorage key axiomape_leitner_v1, card objects with id/front/back/box/lastReviewedDate/nextDueDate; BOX_INTERVALS = [0,1,2,4,8,16] days; promoteCard() increments box (max 5) and sets nextDueDate = now + interval_ms; demoteCard() resets box to 1, nextDueDate = now + 1 day; getDueCards() filters nextDueDate <= Date.now(); session queue is snapshot of due cards at session start; 7-day forecast bucketed by nextDueDate windows; JSON export via Blob URL; escHtml() prevents XSS on card content. Colors: Retention Indigo (#4F46E5), Mastery Green (#10B981), Review Amber (#F59E0B). 6-term glossary (Leitner System, Spaced Repetition, Forgetting Curve, Active Recall, Metacognition, Interleaving). 5-item FAQ accordion matching JSON-LD FAQPage (Leitner and spaced repetition, demotion to Box 1, Ebbinghaus curve, active recall vs passive reading, interval customization). applicationCategory: EducationalApplication. Category: Math and Education. Dash check: 0.

## Batch 154 (new tools, built directly to template) - DONE
- [x] `soil-texture-triangle-classifier` - Soil Texture Triangle Classification Engine (2026-06-14) - Three-panel dark agronomy dashboard for USDA soil texture identification from sand, silt, and clay percentages. Panel 1 (Composition Sliders): three synchronized range sliders for Sand (gold #FBBF24), Silt (gray #9CA3AF), and Clay (red #DC2626) with paired numeric inputs; auto-balance proportional redistribution on slider move (no-lock mode); Lock and Balance controls with padlock toggle per particle; Auto-Balance to 100% button; total badge showing live sum with green/red validation. Panel 2 (Ternary Visualizer): SVG equilateral triangle (500x460 viewBox) with Sand apex at top (250,30), Clay apex at bottom-left (50,420), Silt apex at bottom-right (450,420); ternaryToXY() maps percentages to SVG coordinates via barycentric interpolation (P = a*T + c*L + b*R); 12 USDA texture class zone polygons with distinct color fills and zone label text; 10% grid lines parallel to all three axes; glowing crosshair/dot plot point updated in real time; white/red dot color indicating valid/invalid 100% total. Panel 3 (Agronomy Telemetry): classification hero card showing USDA texture class name; metric grid for Sand/Silt/Clay readouts plus Drainage Rate, Water Holding Capacity, Nutrient Retention, Permeability, Workability, Compaction Risk - all color-coded (good/warn/bad); Copy Soil Report button generating plain-text agronomic report. Classification engine: USDA-NRCS 12-class boundary logic with ordered conditional clauses covering Clay (clay>=40, silt<=40, sand<=45), Silty Clay, Sandy Clay, Silty Clay Loam, Clay Loam, Sandy Clay Loam, Loam, Silt Loam, Silt, Sand (jar/ribbon test thresholds), Loamy Sand, Sandy Loam. Telemetry data sourced from published USDA NRCS agronomic literature. 8-term glossary (Soil Texture, Loam, Ternary Graph, Water Holding Capacity, Particle Size, Permeability, Ribbon Test, Cation Exchange Capacity). 5-item FAQ accordion matching JSON-LD FAQPage (particle size differences, loam as ideal soil, clay and drainage, organic matter and texture, mason jar test). Colors: Sand Gold (#FBBF24), Silt Gray (#9CA3AF), Clay Red (#DC2626). applicationCategory: LifestyleApplication. Category: Home and Life. Dash check: 0.

## Batch 155 (new tools, built directly to template) - DONE
- [x] `academic-grade-weighted-calculator` - Academic Grade Weighted Average Calculator (2026-06-14) - Three-panel dark Academic Indigo (#4F46E5) dashboard for balancing syllabus category weights and isolating current class standing. Panel 1 (Syllabus and Gradebook Builder): dynamic table with add/remove rows per category; per-row inputs for Category Name, Weight (%), Score Received (%), and a "Not Yet Graded" amber toggle that disables the score field and excludes the row from the current standing denominator; total weight progress bar with green (at or under 100%) and red (over 100%) states; inline weight-exceeded warning banner. Panel 2 (Current Standing Visualizer): 270-degree SVG arc gauge (r=80, circumference 376.99px) with stroke-dashoffset fill updated in real time; color-coded arc stroke (Passing Green #22C55E for 80+, Alert Amber #F59E0B for 70-79, red for below 70); hero percentage and letter grade (A/A-/B+/B/B-/C+/C/C-/D+/D/D-/F scale); Graded Weight and Remaining Weight stat cards; Maximum Possible Grade bar (indigo gradient, assumes 100% on all ungraded work). Panel 3 (Final Exam and Target Grade Forecaster): target grade numeric input with oninput real-time update; Required Score hero (green when achievable, red when impossible); impossible-grade explanation note; full calculation breakdown line; Copy Grade Report clipboard button (plain-text report of all rows, current standing, target, and required score). Engine: CurrentGrade = Sum(Score x Weight) / Sum(GradedWeights) - proportional denominator (not divided by 100 prematurely); RequiredScore = (TargetGrade - SumWeightedScores/100) / (SumUngradedWeights/100); NaN-safe via isNaN guards throughout; no submit button, all oninput/onchange. FAQ accordion (5 items, matching JSON-LD FAQPage): current grade without all grades, weighted vs. total points, final exam score needed, early-semester fluctuation, extra credit handling. Glossary (6 terms): Weighted Average, Syllabus Weight, Denominator, Current Standing, Target Grade, Extra Credit. Colors: Academic Indigo (#4F46E5), Passing Green (#22C55E), Alert Amber (#F59E0B). applicationCategory: EducationalApplication. Category: Math and Education. Dash check: 0.

## Batch 156 (new tools, built directly to template) - DONE
- [x] `ambient-focus-dashboard-kiosk` - Ambient Focus Dashboard and Kiosk Simulator 2.0 (rebuilt 2026-06-14) - In-place 2.0 rebuild on the same slug/URL. Two-state tool. State 1 (Editor Studio): 320px control sidebar plus a 16:9 WYSIWYG drag-and-drop canvas. Fully independent widgets: Standalone Clock (digital/analog toggle), Standalone Calendar (day-of-week plus full date only), Weather (free Open-Meteo API, no key, via browser Geolocation, Fahrenheit, weather_code to text, 10-min refresh, graceful permission-denied note), Custom Text Label (prompt entry, double-click to edit), Target Countdown Banner (Years/Months/Days/Hours/Minutes/Seconds from Date delta), News Ticker (pure CSS marquee, default DEFAULT_HEADLINES array so it always animates, custom headlines via prompt), Local Image Upload (FileReader Data URI). Native color-wheel background via input type=color (no preset swatches). Absolute positioning with robust mouse+touch drag (mousedown delta, bottom-right resize-corner-safe, clamped to canvas) and CSS resize:both; widget contents scale with the box using container query units (cqw/cqh). State 2 (Ambient Dashboard): Fullscreen API; State Isolation Guardrail hides global chrome via body.ambient-active > *:not(#canvas) (covers injected axiom-header, axiom-footer, axiom-privacy-badge, axiom-disclaimer, both ad wrappers, and the studio); Invisible Container rule makes every widget border/background/resize-handle transparent so only raw content floats over the chosen color; zero ads in State 2. Invisible exit: capture-phase click/keydown/touchstart listeners armed 350ms after launch plus fullscreenchange sync, exitAmbient() restores State 1. Ads strictly State 1 only (axiom-ad-leaderboard after the studio card, axiom-ad-mobile-anchor after main). Hidden JSON-LD @graph (SoftwareApplication LifestyleApplication + FAQPage, 5 questions matching the on-page accordion). 10-term glossary (Fullscreen API, Ambient Computing, Local Storage, Open-Meteo API, Geolocation, Kiosk Mode, WYSIWYG Canvas, Container Query Units, FileReader API, CSS Marquee). 5-FAQ accordion (weather without account, exit fullscreen, why borders disappear in fullscreen, uploaded images to server, news ticker data source). No em/en dashes anywhere. applicationCategory: LifestyleApplication. Category: Home and Life. Dash check: 0.

## Batch 157 (new tools, built directly to template) - DONE
- [x] `vision-board-dashboard-creator` - Dynamic Vision Board Creator and Dashboard (2026-06-14) - Two-state digital vision board and goal visualization dashboard. State 1 (Editor Studio): dark-theme 300px sticky toolset dock plus a 16:9 freeform WYSIWYG canvas. Toolset: Add Image Node, Add Affirmation, Change Background, Ambient Audio toggle, Download Wallpaper, Clear Board, and a prominent Launch Full Screen Dashboard button. Image nodes support three input methods (local FileReader upload, custom URL paste, and a built-in library of 50 inline-SVG Data-URI tiles in five categories: Wealth, Health, Travel, Career, Peace). Per-node controls: shape via CSS clip-path (Square, Circle, Triangle, Hexagon, Octagon, Star, Organic Blob), CSS filter sliders (Grayscale, Sepia, Saturation, Contrast), layer order (Bring Forward / Send Backward z-index), and optional Countdown Goal Badge (target date showing Years/Months/Days remaining via calendar-accurate ymd() arithmetic). Affirmation text nodes: textarea content, 8 Google-Fonts-named stacks (Montserrat, Playfair Display, Pacifico, Oswald, Lora, Bebas Neue, Caveat, Roboto Mono), text-size slider, text color and background color pickers with transparent toggle. Freeform drag (mouse + touch, corner-resize-safe), CSS resize:both with ResizeObserver persistence. State Persistence Engine: entire boardState (background, per-node x/y/w/h, z, shape, filter values, image src Data URIs, target dates, text, font, colors) serialized to localStorage key axiomape_vision_board_v1 with debounced save; reconstructed exactly on load. Export Renderer: native canvas HTML-to-PNG (no external libraries) drawing background gradient/solid/image, clip-path shapes via canvas paths, ctx.filter, wrapped text, and countdown badges, downloaded as vision-board-wallpaper.png (taint-safe fallback alert for external-URL images). Ambient Focus Audio: Web Audio API browser-generated pink-noise (Paul Kellet filter) or brown-noise loops that start only on entering State 2 and stop on exit. State 2 (Ambient Dashboard): Fullscreen API, nodes scaled edge-to-edge by screen/canvas ratio; State Isolation Guardrail hides axiom-header, axiom-footer, axiom-privacy-badge, axiom-disclaimer, both ad wrappers, and the entire editor so only the canvas, nodes, and audio remain; zero ads in State 2. Invisible exit: capture-phase keydown/click/touchstart listeners installed after a 60ms delay plus fullscreenchange handler. Ad placements strictly State 1 only (axiom-ad-leaderboard after the studio, axiom-ad-mobile-anchor after main). See-also cross-reference to ambient-focus-dashboard-kiosk per SOP minor-overlap rule. 10-term glossary (Vision Board, Reticular Activating System, Visualization, Time-Bound Goals, Law of Attraction, Affirmation, Manifestation, CSS Clip-Path, Image Data URI, Local Storage). 5-item FAQ accordion matching JSON-LD FAQPage (countdown and goal visualization, RAS, image privacy, wallpaper export, mixing text with imagery). applicationCategory: LifestyleApplication. Category: Home and Life. Dash check: 0.

## Batch 158 (new tools, built directly to template) - DONE
- [x] `arbitrage-betting-calculator` - Arbitrage Betting Calculator: Find Sure Bets and Lock In Guaranteed Profit (2026-06-17) - Dark FinTech sure bet / arb calculator. Status banner at top flips between green "Arbitrage Opportunity Found!" (total margin below 100%) and red "Negative EV: The Bookmaker Has The Edge" (margin at or above 100%), with a sub-line stating the live margin percentage. Two hero metric cells (Guaranteed Profit, ROI) that switch from Profit Green (#10B981) to Alert Red (#EF4444) when no arb exists. Inputs: Total Investment (Bankroll) text field with thousands-separator currency formatter, segmented 2-Way Market (Tennis/Moneyline) vs 3-Way Market (Soccer 1X2) toggle that shows/hides the third Draw odds input and third stake card and reflows the grids, and decimal odds number inputs per outcome. No submit button; all oninput/onchange real-time. Engine (100% client-side): implied probability = 1/decimal odds per outcome; Total Margin = sum of implied probabilities; arb exists when margin < 1; stake_i = (bankroll * implied_i) / totalMargin; guaranteed payout = bankroll / totalMargin (equal across all outcomes); net profit = payout - bankroll; ROI = net profit / bankroll * 100. All currency rounded with Math.round((value + Number.EPSILON) * 100) / 100 for exact cents; odds validated (> 1, numeric) and bankroll > 0 before output, else outputs reset to placeholders. Stake breakdown cards show exact dollar stake, the odds used, and per-outcome payout for Outcome 1, 2, and (3-way only) 3. Secondary metric row: Total Margin (Arb %), Guaranteed Payout, Total Staked. Tool-specific disclaimer (educational only, not betting/financial advice, not affiliated with any sportsbook, bet responsibly where legal). 9-term glossary (Arbitrage/Arbing, Sure Bet, Implied Probability, Bookmaker Margin Vig/Juice, Total Margin/Arb Percentage, Decimal Odds, ROI, Hedging, Bankroll). 5-item FAQ accordion matching JSON-LD FAQPage (what arbitrage betting is and how it works, is it legal, why sportsbooks differ on odds, risks including account limiting and line movement, data privacy). JSON-LD @graph: SoftwareApplication (FinanceApplication) + FAQPage. applicationCategory: FinanceApplication. Category: Finance. One header landmark (site-chrome injects #axiom-header; tool's own <header class="tool-header"> has no role="banner"). Both ad placements present (leaderboard after content, mobile anchor after main). Dash check: 0.

## Batch 158 (rebuild) - DONE
- [x] `arbitrage-betting-calculator` - REBUILT 2026-06-17 (in-place, same slug/URL) with beginner-friendly UX revision. Hero section restructured: Guaranteed Payout is now the single largest star metric at the top, with Total Investment and Guaranteed Profit shown beneath it in a two-cell sub-grid (ROI moved to the secondary metric row). Status banner messaging/colors softened: green (#10B981) "Arbitrage Opportunity Found! You are guaranteed a profit." when total margin < 1; muted Warning Yellow (#F59E0B) "No Arbitrage Opportunity: These odds will result in a guaranteed loss." when margin >= 1 (removed prior red / "Negative EV" jargon). Hero panel goes neutral/flat instead of red on no-arb. Defaults set to load in a profitable state: bankroll 1,000, Outcome 1 = 2.10, Outcome 2 = 2.05 (margin ~96.40%, guaranteed payout ~$1,037.34, profit ~$37.34, ROI ~3.73%). Engine unchanged and still 100% client-side: implied prob = 1/odds, total margin = sum, stake_i = bankroll*implied_i/totalMargin, payout = stake*odds, profit = payout - bankroll, all currency via Math.round((v + Number.EPSILON)*100)/100. 2-way/3-way toggle, oninput/onchange real-time (no submit button), 9-term glossary, 5-item FAQ matching JSON-LD FAQPage, both ad placements, single header landmark (no role="banner"). applicationCategory: FinanceApplication. Category: Finance. Dash check: 0.

## Batch 159 (new tools, built directly to template) - DONE
- [x] `free-bet-conversion-calculator` - Free Bet Conversion Calculator: Turn Sportsbook Bonuses Into Guaranteed Cash (2026-06-17) - Dark matched-betting calculator that converts a sportsbook free/bonus bet into guaranteed risk-free cash. Hero section: Guaranteed Cash Out is the single largest star metric in Cash Green (#10B981), with Conversion Rate and Free Bet Value beneath it in a two-cell sub-grid. Inputs grouped into two plain-English panels: "Sportsbook A: The Free Bet" (highlighted Promo Gold #F59E0B) with Free/Bonus Bet Amount ($) text field (thousands-separator currency formatter, default 100) and Free Bet Odds (Decimal) at Sportsbook A (default 4.0); "Sportsbook B: The Cash Hedge" with Hedge Bet Odds (Decimal) at Sportsbook B (default 1.33) and a read-only Selected Free Bet Type mirror. Segmented Bet Type toggle: Stake Not Returned (Standard Free Bet, default) vs Stake Returned, styled gold when active. No submit button; all oninput/onchange real-time. Engine (100% client-side): winnings = SNR ? bonus*(freeOdds-1) : bonus*freeOdds; hedgeStake = winnings/hedgeOdds; profitIfFreeWins = winnings - hedgeStake; profitIfHedgeWins = (hedgeStake*hedgeOdds) - hedgeStake; Guaranteed Cash Out = profitIfHedgeWins (official, penny-rounding safe); conversion % = cashout/bonus*100. All currency via Math.round((v + Number.EPSILON)*100)/100. Inputs validated (bonus > 0, odds > 1 numeric) else outputs reset. Dynamic plain-English action box ("Place your $100 free bet on Outcome A at odds 4.00. Then place $225.56 of your own cash on Outcome B at odds 1.33. No matter who wins the game, you walk away with $74.43 in guaranteed profit, a conversion of 74.43%."). Outcome verification cards show Profit If Free Bet Wins and Profit If Hedge Wins side by side. Secondary metric row: Hedge Stake (Your Cash), Free Bet Winnings, Conversion Rate (70-80% gold standard sub-note). See-also cross-reference to arbitrage-betting-calculator per SOP minor-overlap rule. Tool-specific disclaimer (educational only, not betting/financial advice, not affiliated with any sportsbook, legal-age, bet responsibly where legal). 10-term glossary (Matched Betting, Bonus Bet Conversion, Stake Not Returned SNR, Stake Returned SR, Hedge Bet, Hedge Stake, Decimal Odds, Guaranteed Cash Out, Conversion Percentage, Qualifying Bet). 5-item FAQ accordion matching JSON-LD FAQPage (what is matched betting, SR vs SNR difference, why two sportsbooks, good conversion percentage, data privacy). JSON-LD @graph: SoftwareApplication (FinanceApplication) + FAQPage. applicationCategory: FinanceApplication. Category: Finance. One header landmark (site-chrome injects #axiom-header; tool's own <header class="tool-header"> has no role="banner"). Both ad placements present (leaderboard after content, mobile anchor after main). Dash check: 0.

## Batch 160 (new tools, built directly to template) - DONE
- [x] `point-spread-middle-calculator` - Point Spread Middle Calculator: Find Overlapping Spreads and Maximize Double Payouts (2026-06-17) - Dark middling/hedge calculator for point-spread middles. Dual-card hero at top: large left "Best-Case Scenario (Both Bets Win)" card in Jackpot Gold (#F59E0B) showing net profit when the middle hits, and a muted Slate Gray (#64748B) right "Worst-Case Scenario (One Bet Wins)" card showing the small fixed loss. Directly below, a dynamic Win Window banner in plain English ("To hit the middle and win both bets, Team B must win the game by 4 to 7 points.") that flips to a Slate "these spreads do not overlap to form a middle" warning when the spreads do not overlap. Inputs: Total Investment (Bankroll) text field with thousands-separator currency formatter (default 1,000); Team A panel (gold top-border, "Underdog Side") with Team A Point Spread (default +7.5) and Team A Decimal Odds (default 1.91); Team B panel (blue top-border, "Favorite Side") with Team B Point Spread (default -3.5) and Team B Decimal Odds (default 1.91). No submit button; all oninput/onchange real-time. Engine (100% client-side): ImpliedProbA = 1/OddsA, ImpliedProbB = 1/OddsB, TotalMargin = IPA + IPB, StakeA = TI*IPA/TotalMargin, StakeB = TI*IPB/TotalMargin (equalized so single-side payout identical both ways); Best-Case = (StakeA*OddsA)+(StakeB*OddsB)-TI; Worst-Case = min(StakeA*OddsA, StakeB*OddsB)-TI (negative, the vig). Win window engine: favorite = more-negative spread; window integers = those strictly between favorite cushion and underdog cushion (floor(|favSpread|)+1 .. ceil(dogSpread)-1); invalid/non-overlapping spreads flagged. Defaults compute StakeA/StakeB = $500/$500, Best-Case +$910.00, Worst-Case -$45.00, window 4-7 (size 4), margin 104.71%. All currency via Math.round((v + Number.EPSILON)*100)/100; odds validated (>1 numeric) and bankroll > 0 else outputs reset. Staking breakdown card shows exact wager and single-side payout per team. Secondary metric row: Win Window Size, Total Margin (Vig), Total Staked. See-also cross-reference to arbitrage-betting-calculator per SOP minor-overlap rule (and reciprocal notice added to that tool). Tool-specific disclaimer (educational only, not betting/financial advice, not affiliated with any sportsbook, lines can move between legs, bet responsibly where legal). 10-term glossary (Middle Bet/Middling, Point Spread, Win Window, Vig/Juice, Decimal Odds, Hedge Betting, Arbitrage, Implied Probability, Equalized Stakes, Push). 5-item FAQ accordion matching JSON-LD FAQPage (what is a middle bet, why point spreads change before a game, can I lose both bets, middling vs pure arbitrage, data privacy). JSON-LD @graph: SoftwareApplication (FinanceApplication) + FAQPage. applicationCategory: FinanceApplication. Category: Finance. One header landmark (site-chrome injects #axiom-header; tool's own <header class="tool-header"> has no role="banner"). Both ad placements present (leaderboard after content, mobile anchor after main). Dash check: 0.

## Batch 161 (new tools, built directly to template) - DONE
- [x] `live-bet-hedge-calculator` - Live Bet Hedge Calculator: Lock In Guaranteed Profit Mid-Game (2026-06-17) - Dark in-play hedging calculator that turns an already-placed live bet into a locked-in profit. Status alert banner at the very top flips between green "Lock it in: hedging at these live odds guarantees a profit of $X" (net profit >= 0) and Warning Yellow (#F59E0B) "Wait: Hedging at these live odds will result in a guaranteed loss." (net profit < 0). Hero groups the two time-sensitive metrics side by side: "Live Hedge Stake Needed" accented In-Play Pulse Red (#EF4444) and "Guaranteed Net Profit" in Lock-In Green (#10B981); hero panel goes flat/amber-bordered on a losing setup. Animated red pulse dot in header pill and on the live panel title to simulate live action. Inputs in two plain-English panels: "Original Bet (Already Placed)" with Original Stake ($) text field (thousands-separator currency formatter, default 100) and Original Decimal Odds (default 4.00); "Live Hedge (Opposite Outcome)" panel accented red with Current Live Odds for the Opposite Outcome (default 2.00). No submit button; all oninput/onchange real-time for ultra-responsive live odds. Engine (100% client-side): originalPayout = stake * origOdds; hedgeStake = originalPayout / liveOdds; totalInvested = stake + hedgeStake; netProfit = originalPayout - totalInvested; ROI = netProfit/totalInvested*100. All currency via Math.round((v + Number.EPSILON)*100)/100 for exact cents; odds validated (>1 numeric) and stake > 0 else outputs reset. Defaults compute hedge stake $200.00, total invested $300.00, guaranteed net profit +$100.00, ROI +33.33% (matches the spec worked example). Dynamic plain-English action box ("Quick! Bet $200.00 on the live opposite odds right now. Your total investment will be $300.00, and you will walk away with a guaranteed profit of $100.00 no matter how the game ends."), flipping to a wait/loss message in amber when negative. Outcome verification cards show profit If Your Original Bet Wins and If The Live Hedge Wins (equal by construction). Secondary metric row: Original Payout, Total Invested, Return On Investment. See-also cross-references to free-bet-conversion-calculator and arbitrage-betting-calculator per SOP minor-overlap rule (reciprocal notices added to both tools). Tool-specific disclaimer (educational only, not betting/financial advice, not affiliated with any sportsbook, court-siding/live-arb educational and often prohibited, bet responsibly where legal). 10-term glossary (Live Betting In-Play, Hedging, Court-Siding, Cash Out, Decimal Odds, Arbitrage, Expected Value EV, Original Payout, Hedge Stake, Lock-In Guaranteed Profit). 5-item FAQ accordion matching JSON-LD FAQPage (what is live bet hedging, why use a hedge calculator vs the Cash Out button incl. 10-15% higher profit, what is court-siding, why live odds change so fast, data privacy). JSON-LD @graph: SoftwareApplication (FinanceApplication) + FAQPage. applicationCategory: FinanceApplication. Category: Finance. One header landmark (site-chrome injects #axiom-header; tool's own <header class="tool-header"> has no role="banner"). Both ad placements present (leaderboard after content, mobile anchor after main). Dash check: 0.

## Batch 162 (new tools, built directly to template) - DONE
- [x] `crypto-dex-arbitrage-calculator` - Crypto DEX Arbitrage Calculator: Find True Net Profit After Gas, Fees, and Slippage (2026-06-17) - Dark Web3/DeFi cross-exchange arbitrage calculator that strips gas, trading fees, and slippage out of the gross price gap to reveal real take-home profit. Net Profit (After All Fees) is the single largest star hero metric (Profit Green #10B981, flips to Rekt Red #EF4444 on a loss) with Total Investment and Net ROI beneath it in a two-cell sub-grid. Status banner flips between green "Profitable Arbitrage: The price spread covers all network and trading costs." (net profit > 0) and red "Unprofitable Trade: Slippage and gas fees will eat your entire profit margin." (net profit <= 0). Distinct purple-bordered "Reality Check: Total Hidden Costs" card itemizes Gross Profit, DEX Trading Fee Deduction, Slippage Deduction, and Network Gas Fees so beginners see the gross gap is rarely what they keep. Inputs in two panels: Trade Panel (cyan #06B6D4 accent) with Total Investment (USD, default 1000), Buy Price on DEX A (USD, default 100.00), Sell Price on DEX B (USD, default 102.50); Hidden Costs Panel (purple #8B5CF6 accent) with Total Network Gas Fees (USD, default 15.00), Total Exchange Trading Fees (%, default 0.60 = 0.3% per DEX), Estimated Slippage (%, default 0.50). No submit button; all oninput/onchange real-time. Engine (100% client-side): tokensBought = investment/buyPrice; grossValue = tokensBought*sellPrice; grossProfit = grossValue - investment; feeDeduction = grossValue*(tradingPct/100); slippageDeduction = grossValue*(slipPct/100); totalCosts = feeDeduction + slippageDeduction + gasFees; netProfit = grossProfit - totalCosts; netRoi = netProfit/investment*100. All currency via Math.round((value + Number.EPSILON)*100)/100 for exact cents; inputs validated (investment > 0, buyPrice > 0) else outputs reset, cost fields default to 0 if blank. Default state loads unprofitable (gross profit $25.00, total hidden costs ~$26.28, net ~ -$1.28, net ROI ~ -0.13%) deliberately to teach the lesson. Secondary metric row: Tokens Bought, Gross Value on DEX B, Gross Price Spread. Tool-specific disclaimer (educational only, not financial/investment/trading advice, not affiliated with any exchange, DeFi risks: failed transactions, front-running, volatile prices). 10-term glossary (Arbitrage, DEX, Slippage, Gas Fees, Liquidity Pool, Price Impact, Spread, Net Profit, Net ROI, Front-Running). 5-item FAQ accordion matching JSON-LD FAQPage (what is crypto arbitrage, why prices differ between Uniswap and SushiSwap, what is slippage and why it destroys profits, are gas fees charged on failed trades, data privacy). JSON-LD @graph: SoftwareApplication (FinanceApplication) + FAQPage. applicationCategory: FinanceApplication. Category: Finance. One header landmark (site-chrome injects #axiom-header; tool's own <header class="tool-header"> has no role="banner"). Both ad placements present (leaderboard after content, mobile anchor after main). Dash check: 0.

## Batch 163 (new tools, built directly to template) - DONE
- [x] `crypto-funding-rate-calculator` - Crypto Funding Rate Calculator: Delta Neutral Strategy APY and Passive Income (2026-06-17) - Dark theme delta neutral / cash and carry calculator that sizes a market neutral funding harvest and projects passive yield. Twin-star hero at the top displays Projected APY and Annual Passive Income side by side in Passive Income Green (#10B981); the hero flips to a flat red state plus a danger warning line when the funding rate is negative (income reverses into a recurring cost). Inputs (no submit button, all oninput/onchange real-time): Total Capital to Invest (USD) text field with thousands-separator currency formatter (default 1,000); Current Funding Rate (%) number input (default 0.01, step 0.001, suffix %); Funding Interval dropdown (Every 8 Hours Standard = default, Every 4 Hours, Every 1 Hour). "How to Trade It" dual-card layout in steady Slate Gray (#64748B) to emphasize stability/low risk: Step 1 Buy Spot (Hold in Wallet) showing the exact dollar spot allocation, Step 2 Open 1x Short (Perpetual Futures) showing the exact dollar short size. Receipt-style Income Tape with dashed separators: Per Payout, Per Day, Per Month, Per Year (green, flips red on negative rate). Secondary metric row: Short Position Size, Daily Payouts, Fee Per Interval. Engine (100% client-side): spotAllocation = capital/2, shortPositionSize = capital/2 (50/50 split for 1x leverage safety); feePerInterval = shortPositionSize * (rate/100); dailyPayouts via PAYOUTS map {8:3, 4:6, 1:24}; dailyIncome = feePerInterval * dailyPayouts; annualIncome = dailyIncome * 365; monthlyIncome = annualIncome/12; apy = annualIncome/capital * 100. All currency via Math.round((value + Number.EPSILON)*100)/100 for exact cents; inputs validated (capital > 0, rate numeric and non-blank) else outputs reset. Default state computes spot/short $500/$500, fee per interval $0.05, daily $0.15, monthly ~$4.56, annual ~$54.75, APY ~5.48%. Tool-specific disclaimer (educational only, not investment/trading/financial advice, not affiliated with any exchange, funding rates can turn negative, crypto risk including loss of capital and counterparty/exchange failure). 10-term glossary (Funding Rate, Delta Neutral, Perpetual Futures, Spot Market, APY, Cash and Carry Arbitrage, 1x Leverage, Funding Interval, Short Position, Liquidation). 5-item FAQ accordion matching JSON-LD FAQPage (what is a crypto funding rate and why it exists, what does delta neutral mean, why split money between spot and futures, can I lose money doing this, data privacy). JSON-LD @graph: SoftwareApplication (FinanceApplication) + FAQPage. applicationCategory: FinanceApplication. Category: Finance. One header landmark (site-chrome injects #axiom-header; tool's own <header class="tool-header"> has no role="banner"). Both ad placements present (leaderboard after content, mobile anchor after main). Dash check: 0.

## Batch 164 (new tools, built directly to template) - DONE
- [x] `stock-merger-arbitrage-calculator` - Stock Merger Arbitrage Calculator: Project Deal Spread Profit and Annualized Return (2026-06-17) - Dark theme risk-arbitrage / deal-spread calculator built on Wall Street Blue (#3B82F6) input panels and Yield Green (#10B981) return metrics. Twin-star hero displays Annualized Return (APY) alongside Total Net Profit so beginners can instantly judge a deal against a savings account; hero and the plain-English "Deal Reality" banner go flat when no positive spread exists. Deal Reality banner generates the spec instruction ("By buying 105.26 shares at $47.50 today, you lock in a $2.50 spread per share. If the buyout closes in 120 days, you will walk away with $263.16 in pure profit, which is equivalent to a 16.01% annual return."). Inputs (no submit button, all oninput/onchange real-time): Total Investment Capital ($) text field with thousands-separator currency formatter (default 5,000); Current Market Price per Share ($) (default 47.50); Official Acquisition Offer Price per Share ($) (default 50.00); Expected Days Until Deal Closes numeric (default 120) plus quick-select buttons 3 Months (90) / 6 Months (180) / 1 Year (365) that auto-fill and highlight; Whole Shares Only toggle (default off = exact fractional shares for precise math, on = Math.floor whole shares). Engine (100% client-side): sharesBought = capital/marketPrice (or floored); rawSpread = offer - market; grossPayout = shares*offer; netProfit = grossPayout - capital; absoluteReturn = netProfit/capital*100; annualizedReturn = absoluteReturn*(365/days). All currency via Math.round((value + Number.EPSILON)*100)/100 for exact cents; inputs validated (capital > 0, market > 0, offer > 0, days > 0) else outputs reset. Default state computes 105.2632 shares, $2.50 spread, gross $5,263.16, net +$263.16, absolute +5.26%, APY +16.01%. Breakdown card: Shares Bought, Raw Deal Spread per Share, Gross Payout on Close, Absolute Return (yield-green edge). Slate Gray (#64748B) Risk Warning card (FTC/buyer-walk-away crash below purchase price) plus separate tool disclaimer (educational only, ignores commissions/taxes/dividends/deal-close probability). 8-term glossary (Merger Arbitrage, Deal Spread, Annualized Return APY, Target Company, Acquiring Company, Antitrust Risk, Stock Acquisition Spread, Gross Payout on Close). 4-item FAQ accordion matching JSON-LD FAQPage (what is stock merger arbitrage, why the target trades below the offer, what happens if the deal falls through, why investors care about annualized return vs raw profit). JSON-LD @graph: SoftwareApplication (FinanceApplication) + FAQPage. applicationCategory: FinanceApplication. Category: Finance. One header landmark (site-chrome injects #axiom-header; tool's own <header class="tool-header"> has no role="banner"). Both ad placements present (leaderboard after content, mobile anchor after main). See-also cross-reference to roi-calculator and arbitrage-betting-calculator. Dash check: 0.

## Batch 165 (new tools, built directly to template) - DONE
- [x] `amazon-fba-retail-arbitrage-calculator` - Amazon FBA and Retail Arbitrage Profit Calculator: Estimate Fees, ROI, and True Net Profit (2026-06-17) - Dark e-commerce theme arbitrage profit calculator on Prime Orange (#F97316) active inputs/accents, Profit Green (#10B981) success, Alert Red (#EF4444) loss, Warning Amber (#F59E0B) low-margin. Hero shows Net Profit ($) and Return on Investment (ROI %) side by side as the two primary metrics. Two input panels: Sourcing Costs (Cost of Item to You $, default 15.00; Inbound Shipping to Amazon / Prep Costs $, default 1.50) and Sales and Platform Fees (Target Selling Price $, default 45.00; Amazon Referral Fee %, default 15.00; FBA Fulfillment Fee / Outbound Shipping $, default 6.50). No submit button; all oninput/onchange real-time. Engine (100% client-side): Total COGS = item + inbound; Platform Percentage Fee = sellPrice*(referral/100); Total Marketplace Fees = platformFee + fbaFee; Total Break-Even Cost = COGS + marketplace fees; Net Profit = sellPrice - breakEvenCost; ROI = netProfit/COGS*100; Profit Margin = netProfit/sellPrice*100. All currency via Math.round((value + Number.EPSILON)*100)/100 for exact cents; validated (sellPrice > 0, itemCost >= 0) else outputs reset. Defaults compute COGS $16.50, Amazon fees $13.25, net profit +$15.25, ROI 92.42%, margin 33.89% -> Great Flip green banner. Receipt-style Reality Check breakdown: Gross Revenue (selling price) at top, minus Total Amazon Fees (referral + FBA, red), minus Your Sourcing Costs (item + inbound, amber), arriving at Net Profit Per Unit. Dynamic status banner with three states: green "Great Flip: This item meets standard Amazon FBA profitability goals." (ROI > 30%), amber "Low Margin Flip: You will make money, but an unexpected return or fee change could wipe out your profit." (0 <= ROI <= 30%), red "Bad Flip: Fees and costs exceed the selling price." (net profit < 0). Secondary metric row: Profit Margin, Total Cost of Goods, Break-Even Selling Price. Tool-specific disclaimer (educational only, not financial/business advice, not affiliated with Amazon.com Inc., fees vary by category/size/season). 10-term glossary (Retail Arbitrage RA, Online Arbitrage OA, Fulfillment by Amazon FBA, FBM Fulfilled by Merchant, Referral Fee, FBA Fulfillment Fee, Cost of Goods COGS, ROI vs Profit Margin, Buy Box, Break-Even Price). 5-item FAQ accordion matching JSON-LD FAQPage (RA vs OA difference, how much FBA fees actually take, good ROI to aim for incl. 30-50% rule, ROI vs profit margin difference, data privacy). JSON-LD @graph: SoftwareApplication (FinanceApplication) + FAQPage. applicationCategory: FinanceApplication. Category: Finance. One header landmark (site-chrome injects #axiom-header; tool's own <header class="tool-header"> has no role="banner"). Both ad placements present (leaderboard after content, mobile anchor after main). Minor overlap with margin-markup-calculator (distinct Amazon-FBA-specific use case, SOP minor-overlap = build both). Dash check: 0.

## Batch 167 (new tools, built directly to template) - DONE
- [x] `etsy-fee-calculator` - Etsy Fee and Profit Calculator: Estimate Listing Fees, Transaction Costs, and True Net Profit (2026-06-17) - Dark e-commerce theme Etsy seller fee calculator on Etsy Artisan Orange (#F1641E) active inputs/accents, Profit Green (#10B981) success, Alert Red (#EF4444) loss, Warning Amber (#F59E0B) low-margin/seller-costs. Hero shows Net Profit ($) and Profit Margin (%) side by side as the two primary metrics. Two input panels: Sale Details (orange accent) with Item Sale Price ($, default 25.00) and Shipping Charged to Customer ($, default 5.00); Your Costs and Ads (amber accent) with Item Cost to Make/Buy ($, default 8.00), Actual Shipping Cost ($, default 4.50), and Etsy Offsite Ads Fee dropdown (None 0% default / Standard 15% / High Volume Seller 12%). No submit button; all oninput/onchange real-time. Engine (100% client-side): orderValue = salePrice + shipCharged; listingFee = 0.20 flat; transactionFee = orderValue*0.065; processingFee = orderValue*0.03 + 0.25; offsiteFee = orderValue*(offsitePct/100); totalEtsyFees = listing + transaction + processing + offsite; totalSellerCosts = itemCost + shipCost; netProfit = orderValue - totalEtsyFees - totalSellerCosts; margin = netProfit/orderValue*100. All currency via Math.round((value + Number.EPSILON)*100)/100 for exact cents; validated (salePrice > 0) else outputs reset, other fields default to 0 if blank. Defaults compute order value $30.00, Etsy fees $3.30 (0.20 + 1.95 + 1.15 + 0), seller costs $12.50, net profit +$14.20, margin 47.33% -> Healthy Margin green banner. Visual Receipt breakdown: Total Customer Pays at top, then line-by-line deductions (Etsy Listing Fee, Etsy Transaction Fee 6.5%, Etsy Payment Processing 3% + $0.25, Offsite Ads, Your Material/Shipping Costs) arriving at Net Profit. Dynamic status banner three states: green "Healthy Margin: Your pricing absorbs Etsy's fees comfortably." (margin > 30%), amber "Low Margin: You are making money, but a slight increase in shipping costs could erase your profit." (0 <= margin <= 30%), red "Unprofitable: Your costs and Etsy's fees exceed the customer's payment." (margin < 0). Secondary metric row: Total Order Value, Total Etsy Fees, Total Seller Costs. Tool-specific disclaimer (educational only, not financial/business advice, not affiliated with Etsy Inc., US default rates, fees vary by country/currency/account). 10-term glossary (Etsy Listing Fee, Transaction Fee, Payment Processing Fee, Offsite Ads, Total Order Value, COGS, Net Profit, Profit Margin, Etsy Payments, Break-Even Sale). 5-item FAQ accordion matching JSON-LD FAQPage (how much Etsy really takes per sale, transaction fee charged on shipping too [yes], what offsite ads are and opt-out rules, good Etsy profit margin, data privacy). JSON-LD @graph: SoftwareApplication (FinanceApplication) + FAQPage. applicationCategory: FinanceApplication. Category: Finance. One header landmark (site-chrome injects #axiom-header; tool's own <header class="tool-header"> has no role="banner"). Both ad placements present (leaderboard after content, mobile anchor after main). See-also cross-reference to margin-markup-calculator (SOP minor-overlap = build both). Dash check: 0.

## Batch 166 (new tools, built directly to template) - DONE
- [x] `lottery-expected-value-calculator` - Lottery Odds and Expected Value (EV) Calculator: Is a Ticket Worth It (2026-06-17) - Dark theme lottery EV calculator on Lottery Gold (#F59E0B) inputs/gross values, Profit Green (#10B981) positive EV, Alert Red (#EF4444) negative EV. Hero presents True Expected Value (EV) per Ticket as the single star metric (red when negative, green when positive) with Net Take-Home Cash (gold) and Your Odds of Winning beside it in a two-cell sub-grid, highlighting how far the real prize sits below the billboard number. Dynamic status banner flips between red "Negative Expected Value: Mathematically, you are losing money every time you buy a ticket." and green "Positive Expected Value: The jackpot is so large that buying a ticket is mathematically profitable!". Inputs (no submit button, all oninput/onchange real-time): Game Selector dropdown (Powerball 1 in 292.2 Million default, Mega Millions 1 in 302.5 Million, Custom Odds) - selecting Mega Millions auto-sets ticket cost to 5.00, Powerball to 2.00; Custom reveals a "1 in" odds field; Advertised Jackpot ($) thousands-separator currency field (default 1,000,000,000); Ticket Cost ($) field (default 2.00, auto-updates on game switch). Engine (100% client-side): grossCash = jackpot * 0.50; federalTax = grossCash * 0.37; netTakeHome = grossCash * (1 - 0.37); probability = 1/oddsDenominator; prizeValue = netTakeHome * probability; EV = prizeValue - ticketCost. All currency via Math.round((value + Number.EPSILON)*100)/100 for exact cents; inputs validated (jackpot > 0, odds > 0, cost >= 0) else outputs reset. Default Powerball $1B state computes gross $500,000,000, federal tax -$185,000,000, net take-home $315,000,000, prize value ~$1.08, EV ~ -$0.92 (negative, red). Reality Check funnel visually steps Advertised Jackpot -> minus 50% lump sum (Gross Cash Value) -> minus 37% federal tax -> Final Net Cash. Secondary metric row: Win Probability, Prize Value of a Ticket, Cost to Play. Tool-specific disclaimer (educational only, not financial/tax/gambling advice, simplified 50% lump sum and 37% federal model, ignores state tax and split jackpots, not affiliated with any lottery, play responsibly). 10-term glossary (Expected Value EV, Lump Sum Cash Option, Annuity, Independent Event, Gambler's Fallacy, Odds vs Probability, Advertised Jackpot, Federal Withholding, Net Take-Home Cash, Negative Expected Value Game). 5-item FAQ accordion matching JSON-LD FAQPage (what EV means in the lottery, why lump sum is smaller than advertised jackpot, how $5 Mega Millions price affects EV vs Powerball, are certain numbers due [debunks Gambler's Fallacy], data privacy). JSON-LD @graph: SoftwareApplication (FinanceApplication) + FAQPage. applicationCategory: FinanceApplication. Category: Finance. One header landmark (site-chrome injects #axiom-header; tool's own <header class="tool-header"> has no role="banner"). Both ad placements present (leaderboard after content, mobile anchor after main). Dash check: 0.

## Batch 168 (new tools, built directly to template) - DONE
- [x] `ebay-fee-calculator` - eBay Fee & Profit Calculator: Estimate Final Value Fees and Your Net Profit (2026-06-17) - Dark e-commerce theme eBay seller fee calculator on Commerce Blue (#3B82F6) active inputs/accents, Profit Green (#10B981) success, Alert Red (#EF4444) loss, Warning Yellow (#f0b429) low-margin. Hero shows Net Profit ($) and Return on Investment (ROI %) side by side as the two primary metrics. Two input panels: Sale Details (Buyer Pays) with Item Sale Price ($, default 50.00), Shipping Charged to Buyer ($, default 8.00), Estimated Buyer Sales Tax (%, default 8.00); Your Costs & Ads (Seller Pays) with Item Cost to Make/Buy ($, default 15.00), Actual Shipping Cost ($, default 7.50), Promoted Listings Ad Rate (%, default 0.00), and an eBay Store Tier toggle (No Store / Starter 13.25% default vs Basic Store or Higher 12%). No submit button; all oninput/onchange real-time plus initial calculate() on load. Engine (100% client-side): Subtotal = salePrice + shipCharged; Tax Collected by eBay = Subtotal * (taxRate/100); Total Amount of Sale = Subtotal + Tax Collected; Final Value Fee = Total Amount of Sale * (storeRate/100) + 0.30 fixed per-order fee; Promoted Listing Fee = Total Amount of Sale * (adRate/100); Total eBay Fees = FVF + Promoted Fee; Total Seller Costs = itemCost + shipCost; Net Profit = Subtotal - Total eBay Fees - Total Seller Costs (Subtotal used because the seller never keeps the collected tax); ROI = netProfit/sellerCosts*100; Profit Margin = netProfit/salePrice*100. All currency via Math.round((value + Number.EPSILON)*100)/100 for exact cents; divide-by-zero guarded (ROI/margin show N/A when costs/price are 0). Defaults compute Subtotal $58.00, Tax $4.64, Total Sale $62.64, FVF $8.60, Promoted $0.00, Total Fees $8.60, Seller Costs $22.50, Net Profit +$26.90, ROI 119.6%, Margin 53.8% -> Healthy Flip green banner. Visual Receipt breakdown: Total Revenue (Item + Shipping) at top, then red deductions (eBay Final Value Fee inc. 30 cents, Promoted Listings Fee, Your Item & Shipping Costs) arriving at Net Profit. Dynamic status banner three states: green "Healthy Flip: Your margins easily cover eBay's platform fees." (ROI > 30%), yellow "Low Margin: You are profitable, but high shipping or ad costs are eating your margin." (0 <= ROI <= 30%), red "Unprofitable: Your costs and eBay fees exceed your revenue." (ROI < 0). Secondary metric chips: Profit Margin, Total eBay Fees, Sales Tax eBay Collects. Tool-specific disclaimer (educational only, not financial/business advice, not affiliated with eBay Inc., standard category rates, fees vary by category/region/store/status). 10-term glossary (Final Value Fee FVF, Promoted Listings, Insertion Fee, Top Rated Seller, COGS, ROI, Net Profit, Profit Margin, Marketplace Facilitator Tax, eBay Store Subscription). 6-item FAQ accordion matching JSON-LD FAQPage (does eBay charge fees on shipping [yes], why FVF on sales tax, are promoted listings worth it, how much a store lowers fees, what the 30 cent per order fee is, net profit vs ROI vs margin). JSON-LD @graph: SoftwareApplication (FinanceApplication) + FAQPage. applicationCategory: FinanceApplication. Category: Finance. One header landmark (site-chrome injects #axiom-header; tool's own <header class="page-header"> has no role="banner"). Both ad placements present (leaderboard after content, mobile anchor after main). See-also cross-reference to amazon-fba-retail-arbitrage-calculator (SOP minor-overlap = build both, distinct marketplace). Dash check: 0.

## Batch 168 (new tools, built directly to template) - DONE
- [x] `paypal-fee-calculator` - PayPal Fee Calculator: Goods and Services Seller Fees and Invoice Costs (2026-06-17) - Dark theme PayPal seller fee calculator on PayPal Blue (#0079C1 active inputs/accents, #003087 deep gradient) with Profit Green (#10B981) net payout and Amber (#F59E0B) effective-rate highlights. Dual calculation mode toggle: "Calculate fees on a payment" (default) vs "Invoice a net amount (pass fees to buyer)" - the hero metric swaps between "Your Net Payout ($)" and "Amount to Invoice ($)" accordingly. Inputs (no submit button, all oninput/onchange real-time): Calculation Mode toggle; Transaction Amount ($) text field with thousands-separator currency formatter (default 100.00, relabels to "Desired Net Amount to Receive ($)" in invoice mode); Transaction Type dropdown (Standard Invoicing / Goods and Services 2.99% + 49 cents default, PayPal Checkout / Website 3.49% + 49 cents, Charity / Non-Profit 1.99% + 49 cents); International Transaction (+1.5%) checkbox (default unchecked, adds cross-border fee to variable rate). Engine (100% client-side): variablePct from dropdown +1.5 if international, rate = pct/100, FIXED_FEE = 0.49. Mode 1: totalFee = amount*rate + 0.49; netPayout = amount - totalFee; effRate = totalFee/amount*100. Mode 2 gross-up: requiredCharge = (net + 0.49)/(1 - rate); totalFee = requiredCharge - net; netPayout = net; effRate = totalFee/requiredCharge*100. All currency via Math.round((value + Number.EPSILON)*100)/100 for exact cents; inputs validated (blank/NaN -> 0) so outputs never break. Default state (100.00, G&S, domestic) computes total fee $3.48, net payout $96.52, effective rate 3.48%. Slate-gray dynamic status banner: "Your effective PayPal fee is X.XX% of the total transaction." Visual Receipt card: Total Customer Payment at top (PayPal blue), minus PayPal Percentage Fee (dynamic rate label), minus PayPal Fixed Fee (49 cents), arriving at Net Payout to Your Account (green). Three output cards: Total PayPal Fee (red), Net Payout / Guaranteed Net (green, relabels by mode), Effective Fee Rate (amber). 10-term glossary (Goods and Services G&S, Friends and Family F&F, Invoice, Chargeback, Cross-Border Fee, Micropayments, Variable Fee, Fixed Fee, Net Payout, Gross-Up). Educational guide (fee structure, how to use both modes, fees-mode math, invoice gross-up math with formula boxes, refunds and F&F warning). 5-item FAQ accordion matching JSON-LD FAQPage (what is the fee for PayPal Goods and Services, does PayPal charge for Friends and Family [no but strips protection], how to calculate exact invoice amount [gross-up], does PayPal refund fees on a refund [no, keeps both], what is the cross-border/international fee). JSON-LD @graph: SoftwareApplication (FinanceApplication) + FAQPage. applicationCategory: FinanceApplication. Category: Finance. Tool-specific disclaimer (educational only, not affiliated with PayPal Holdings Inc., US standard rates, fees vary by country/account/plan). One header landmark (site-chrome injects #axiom-header; tool's own <header class="tool-header"> has no role="banner"). Both ad placements present (leaderboard after content, mobile anchor after main). Minor conceptual overlap with etsy-fee-calculator and amazon-fba-retail-arbitrage-calculator (different platform - PayPal is a payment processor, not a marketplace; SOP minor-overlap = build both at own URL). Dash check: 0.

## Batch 168 (new tools, built directly to template) - DONE
- [x] `stripe-fee-calculator` - Stripe Fee Calculator: Estimate Processing Costs and Pass Fees to Customers (2026-06-17) - Dark theme Stripe payment processing fee calculator on Stripe Blurple (#635BFF) active inputs/borders/accents and Profit Green (#10B981) net payout amounts. Two-mode segmented toggle (default "Calculate fees on a charge" = Mode 1; "Invoice a specific net amount (Pass fees to client)" = Mode 2) that dynamically swaps the hero metric and the amount field label. Hero: Mode 1 shows "Your Net Payout" in green; Mode 2 shows "Amount You Need to Charge" in blurple. Inputs (no submit button, all oninput/onchange real-time): Transaction Amount ($) text field with thousands-separator currency formatter (default 100.00); International Card (+1%) checkbox (default unchecked); Currency Conversion Required (+1%) checkbox (default unchecked). Engine (100% client-side): Variable Percent = 2.9% + (intl?1:0) + (conv?1:0), hard-capped at 4.9%; fixed fee 0.30. Mode 1: Total Fee = amount*(pct/100)+0.30, Net Payout = amount - Total Fee, Effective Rate = Total Fee/amount*100. Mode 2 gross-up: Required Charge = (amount+0.30)/(1-pct/100), Total Fee = Required Charge - amount, Net Payout = amount, Effective Rate = Total Fee/Required Charge*100. All currency via Math.round((value + Number.EPSILON)*100)/100 for exact cents. Slate-gray dynamic status banner ("Your effective processing fee is X.XX% of the total transaction."). Visual Receipt card: Total Customer Charge at top, then red deduction rows (- Stripe Percentage Fee (X.X%) and - Stripe Fixed Fee (30 cents)), arriving at green Net Payout to Your Bank. Default Mode 1 $100 @2.9% computes pct fee $2.90, fixed $0.30, net $96.80, effective 3.20%; Mode 2 net $100 @2.9% computes required charge $103.30, total fee $3.30, effective 3.19%; both add-ons checked caps at 4.9%. Tool-specific disclaimer (educational/estimates only, not affiliated with Stripe Inc., standard US pricing, surcharging rules vary by jurisdiction, not financial/legal advice). 9-term glossary (Merchant Account, Payment Gateway, Fixed Fee vs. Percentage Fee, Net Payout, Gross-Up, Chargeback, Cross-Border Fee, Currency Conversion Fee, Effective Fee Rate). 5-item FAQ accordion matching JSON-LD FAQPage (Stripe standard credit card fees, how to pass the fee to a customer, refunds do not return fees, what an international/cross-border fee is, why the 30 cent fixed fee matters on small charges). JSON-LD @graph: SoftwareApplication (FinanceApplication) + FAQPage. applicationCategory: FinanceApplication. Category: Finance. One header landmark (site-chrome injects #axiom-header; tool's own <header class="tool-header"> has no role="banner"). Both ad placements present (leaderboard after content, mobile anchor after main). See-also family: paypal-fee-calculator, etsy-fee-calculator, ebay-fee-calculator (other payment/marketplace fee calculators). Dash check: 0.

## Batch 169 (new tools, built directly to template) - DONE
- [x] `shopify-fee-calculator` - Shopify Fee & Plan Comparison Calculator: Find Your Most Profitable Plan (2026-06-17) - AxiomApe card layout on a Shopify Green theme (#95BF47 accents, #7AB55C active inputs/borders, #4c7a1f link/term color) over a dark slate hero/header. Two-input, no-submit-button live experience (oninput + onchange, plus initial calculate() on load): Average Monthly Revenue ($) text field with thousands-separator currency formatter (default 15,000) and Average Order Value (AOV) ($) field (default 50). 100% client-side Shopify Arbitrage Engine: Estimated Monthly Orders = Math.round(Revenue / AOV); Basic Total = 39 + Revenue*0.029 + Orders*0.30; Shopify Total = 105 + Revenue*0.026 + Orders*0.30; Advanced Total = 399 + Revenue*0.024 + Orders*0.30 (all assume Shopify Payments). All currency via Math.round((value + Number.EPSILON)*100)/100 for exact cents. Winning plan chosen by lowest total cost (results.sort), highlighted with a glowing green border + "Best Value" badge. Hero displays "Recommended Plan:" with the dynamic winning plan name (Shopify Green) and its Estimated Total Monthly Cost. Estimated Monthly Orders strip below hero. Side-by-side three-card comparison (Basic / Shopify / Advanced), each card showing Subscription, Credit Card Fees, and Grand Total. Slate-gray dynamic savings banner: "By choosing the [Winning Plan] plan, you save $[Amount] per month compared to the next best option ([runner-up]) based on your transaction volume." (flips to break-even message when savings <= 0, and to a prompt when inputs are blank). Default state (15,000 / 50) computes 300 orders, Basic $564.00 (winner), Shopify $585.00, Advanced $849.00, savings $21.00/mo vs Shopify. Educational section covers the fee math, the 30 cent per-order fee cancelling across plans, and the two revenue crossover points (~$22,000 Basic->Shopify, ~$147,000 Shopify->Advanced). 8-term glossary (Shopify Payments, Transaction Fee, Credit Card Rate, Average Order Value AOV, Subscription Tier, Estimated Monthly Orders, Processing Rate, Break-Even Point). 5-item FAQ accordion matching JSON-LD FAQPage (transaction fees vs credit card fees, when Advanced is mathematically worth it, third-party gateway/PayPal surcharge, how AOV affects monthly fees, which plans are compared). JSON-LD @graph: SoftwareApplication (FinanceApplication) + FAQPage. applicationCategory: FinanceApplication. Category: Finance. One header landmark (site-chrome injects #axiom-header; tool's own <header class="page-header"> has no role="banner"). Both ad placements present (leaderboard after content/results, mobile anchor after main). Tool-specific disclaimer (educational only, not affiliated with Shopify Inc., assumes Shopify Payments, pricing varies by country/currency/promos/apps). Pre-flight check: no existing Shopify or e-commerce platform-plan calculator (margin-markup, stripe, paypal, etsy, ebay, amazon-fba all distinct); no conflict. Dash check: 0.

## Batch 168 (new tools, built directly to template) - DONE
- [x] `business-loan-affordability-calculator` - Business Loan Affordability Calculator: Estimate Payments and Check Bank Approval Odds (2026-06-17) - Enterprise Navy (#1E3A8A) gradient input panels for financial trust, Profit Green (#10B981) passing / Alert Red (#EF4444) failing / Warning Yellow (#F59E0B) marginal on the DSCR and approval metrics. Two distinct input panels: Business Financials (Average Monthly Gross Revenue $, default 20000; Average Monthly Business Expenses $, default 15000) and Loan Details (Desired Loan Amount $, default 50000; Annual Interest Rate %, default 8.5; Loan Term Years, default 5, with 3/5/10-year quick-select buttons that auto-fill and highlight). No submit button; all oninput/onchange real-time. Engine (100% client-side): Monthly NOI = grossRevenue - expenses; standard amortization PMT = P*(r*(1+r)^n)/((1+r)^n-1) with r = annualRate/100/12 and n = years*12; DSCR = monthlyNOI/monthlyPayment (2 dp); Total Interest = payment*months - loanAmount; Total Cost = loanAmount + totalInterest. All currency via Math.round((value + Number.EPSILON)*100)/100 for exact dollar/cent output. Default state computes monthly payment ~$1,025.83, DSCR ~4.87 (excellent), total interest ~$11,549.80, total cost ~$61,549.80. Hero section displays Estimated Monthly Payment alongside Bank Approval Odds (DSCR) as the two primary metrics (DSCR value + pill color-coded by state). Dynamic status banner with three states: green "Excellent Approval Odds: Your business generates more than enough income to cover this payment (DSCR > 1.25)." (DSCR > 1.25), yellow #F59E0B "Risky: Your income covers the payment, but banks usually require a higher safety buffer (DSCR < 1.25)." (1.0 <= DSCR <= 1.25), red "High Denial Risk: Your business expenses and this new loan payment exceed your monthly revenue." (DSCR < 1.0). Affordability Reality Check: dual horizontal bars comparing Monthly Net Operating Income vs New Monthly Loan Payment on a shared scale, plus a Monthly Breathing Room box (green positive / red negative shortfall) showing leftover cash each month. Secondary metric row: Total Interest Paid, Total Cost of Loan, Monthly Net Operating Income. 6-term glossary (DSCR, Net Operating Income NOI, Amortization, Principal, SBA Loan, Collateral). 4-item FAQ accordion matching JSON-LD FAQPage (what is a good DSCR for a business loan [1.25 standard], SBA vs traditional bank loan difference, how banks decide how much your business can borrow, does it include personal guarantees or collateral). JSON-LD @graph: SoftwareApplication (FinanceApplication) + FAQPage. applicationCategory: FinanceApplication. Category: Finance. See-also cross-reference to loan-calculator per SOP minor-overlap rule (distinct commercial/cash-flow use case vs general personal/auto/mortgage loan tool). Tool-specific disclaimer (educational only, not financial advice or a loan offer, not affiliated with the U.S. Small Business Administration, thresholds/fees/rates vary by lender). One header landmark (site-chrome injects #axiom-header; tool's own <header class="page-header"> has no role="banner"). Both ad placements present (leaderboard after content, mobile anchor after main). Dash check: 0.

## Batch 170 (new tools, built directly to template) - DONE
- [x] `dropshipping-profit-calculator` - Dropshipping Profit Margin Calculator: Find Your True Net Profit After Fees and Ad Spend (2026-06-17) - Dark AxiomApe theme on E-commerce Purple (#8B5CF6) active inputs/accents, Profit Green (#10B981) profitable margin, Alert Red (#EF4444) negative return, Warning Amber (#F59E0B) low margin. Hero shows Net Profit ($) and Profit Margin (%) side by side as the two primary metrics. Three input panels: Customer Revenue (purple accent) with Target Selling Price ($, default 29.99) and Shipping Charged to Customer ($, default 0.00 = free shipping); Supplier Costs / COGS (amber accent) with Item Cost from Supplier ($, default 8.50) and Supplier Shipping Cost ($, default 3.00); Fees and Marketing (slate accent) with Platform / Payment Gateway Fee (%, default 2.9 = Shopify Payments/Stripe), Fixed Transaction Fee ($, default 0.30), and Estimated Ad Spend per Sale / CPA ($, default 10.00). No submit button; all oninput/onchange real-time. Engine (100% client-side): Total Revenue = sellingPrice + shippingCharged; Total COGS = itemCost + supplierShipping; Payment Processing Fee = (Total Revenue * platformPct/100) + fixedFee; Total Costs = COGS + processingFee + adSpend; Net Profit = Total Revenue - Total Costs; Profit Margin = netProfit/totalRevenue*100; Break-Even Ad Spend (Max CPA) = Total Revenue - COGS - processingFee. All currency via Math.round((value + Number.EPSILON)*100)/100 for exact cents; validated (sellingPrice > 0) else outputs reset, other fields default to 0 if blank. Defaults compute Total Revenue $29.99, COGS $11.50, processing fee $1.17, ad spend $10.00, total costs $22.67, net profit +$7.32, margin 24.41% -> Profitable Product green banner, break-even max CPA $17.32. Distinct highlighted Break-Even Ad Spend card (purple glow) surfaces the Max Ad Spend to Break Even number for Facebook/TikTok ad dashboards. Visual Receipt breakdown: Gross Revenue at top, then line-by-line deductions (Supplier Costs COGS amber, Payment Processing Fees red, Ad Spend CPA red) arriving at Net Profit. Dynamic status banner three states: green "Profitable Product: Your margins absorb ad costs and supplier fees efficiently." (margin > 20%), amber "Low Margin: You are profitable, but a slight increase in ad costs will cause you to lose money." (0 <= margin <= 20%), red "Unprofitable: Your costs exceed your revenue. Raise your price or lower your ad costs." (margin < 0). Secondary metric row: Total Revenue, Total Cost of Goods (COGS), Total Costs. 10-term glossary (Dropshipping, COGS, CPA Cost Per Acquisition, ROAS, Break-Even Point, Payment Gateway Fee, Total Revenue, Net Profit, Profit Margin, Landed Cost). 5-item FAQ accordion matching JSON-LD FAQPage (good profit margin for dropshipping incl. 20-30% rule, how to factor in Facebook/TikTok ad costs via CPA and break-even ceiling, why a store loses money despite high sales volume, should you offer free shipping and hide cost in price, data privacy). JSON-LD @graph: SoftwareApplication (FinanceApplication) + FAQPage. applicationCategory: FinanceApplication. Category: Finance. One header landmark (site-chrome injects #axiom-header; tool's own <header class="tool-header"> has no role="banner"). Both ad placements present (leaderboard after content, mobile anchor after main). Pre-flight check: no existing dropshipping-specific calculator; minor overlap with margin-markup-calculator, etsy-fee-calculator, amazon-fba-retail-arbitrage-calculator (distinct dropshipping arbitrage use case with supplier shipping + CPA + break-even ad spend, SOP minor-overlap = build both); see-also cross-references added to those three tools. Dash check: 0.

## Batch 172 (new tools, built directly to template) - DONE
- [x] `ecommerce-conversion-rate-calculator` - E-commerce Conversion Rate and CRO Calculator: Find Your Store Conversion Rate and Simulate Extra Revenue (2026-06-17) - Dark AxiomApe theme on Conversion Blue (#3B82F6) active inputs/current-reality metrics and Growth Green (#10B981) revenue simulation metrics. Beginner-friendly CRO tool (no overlap found in pre-flight; closest neighbors were margin-markup and break-even calculators, different function). Two input panels (no submit button, all oninput/onchange real-time, recalc() on load): "Your Current Metrics" (Total Website Visitors/Sessions default 10000, Total Sales/Orders default 150, Average Order Value (AOV) $ default 50.00) and "The CRO Simulator" (Target Conversion Rate % default 2.50 with plus/minus step buttons nudging by 0.1% via nudgeCR() plus a synced 0-10% range slider via syncFromSlider()). Engine (100% client-side): Current CR % = (orders/visitors)*100; Current Total Revenue = orders*AOV; Projected Sales = Math.round(visitors*(targetCR/100)); Projected Total Revenue = projectedSales*AOV; Extra Revenue Generated = projectedRevenue - currentRevenue; Extra Orders = projectedSales - orders. All currency via Math.round((value + Number.EPSILON)*100)/100 for exact cents; validates visitors > 0 else resetOutputs(), other fields clamp to 0. Default state computes Current CR 1.50%, Current Revenue $7,500.00, Projected Sales 250, Projected Revenue $12,500.00, Extra Revenue +$5,000.00, +100 orders. Hero "Your Current Reality" shows Current Conversion Rate + Current Total Revenue side by side in Conversion Blue. Distinct glowing-green-bordered (animated simGlow keyframes) "What If?" Simulator card with Extra Revenue Generated as the massive star metric, Projected Sales + Projected Total Revenue sub-grid, and a dynamic plain-English explainer ("Lifting your conversion rate from 1.50% to 2.50% turns 150 orders into 250 orders, adding $5,000.00 in extra revenue from the same 10,000 visitors."); card flips to amber loss state when target < current. Dynamic status banner (3 benchmark states keyed on current CR): red Below Average (<1%, "Most e-commerce stores convert between 1.5% and 2.5%."), blue Average (1-3%, "Your store converts within the standard e-commerce benchmark."), green Excellent (>3%, "Your store converts significantly higher than the industry average."). Secondary metric row: Current Conversion Rate, Target Conversion Rate, Extra Orders Gained. See-also cross-reference to margin-markup-calculator. 9-term glossary (Conversion Rate CR, CRO, Average Order Value AOV, Sessions vs Pageviews, Bounce Rate, Cart Abandonment Rate, Revenue Impact, Conversion Funnel, Total Revenue). Educational guide (how to use, conversion rate formula step by step, why small gains create massive revenue, levers: page speed/high-quality images/checkout friction, reading the status banner). 5-item FAQ accordion matching JSON-LD FAQPage (good conversion rate for an e-commerce store, how the conversion rate is calculated, session vs pageview difference, how to improve conversion rate, data privacy). JSON-LD @graph: SoftwareApplication (FinanceApplication) + FAQPage. applicationCategory: FinanceApplication. Category: Finance. One header landmark (site-chrome injects #axiom-header; tool's own <header class="tool-header"> has no role="banner"). Both ad placements present (leaderboard after content, mobile anchor after main). Tool-specific disclaimer (educational only, not affiliated with Shopify/Google, benchmarks vary by niche, projection assumes AOV held constant). Dash check: 0.

## Batch 171 (new tools, built directly to template) - DONE
- [x] `wholesale-to-retail-markup-converter` - Wholesale to Retail Markup Calculator: Convert Cost to Retail Price (2026-06-17) - Dark AxiomApe theme on Retail Blue (#2563EB) active inputs/borders/accents and Profit Green (#10B981) retail price and gross profit metrics. Beginner-friendly directional wholesale-to-retail pricing tool (distinct from the bidirectional margin-markup-calculator). Inputs (no submit button, all oninput/onchange real-time, initial onStrategyChange() on load): Wholesale Cost per Item ($) number field (default 50.00); Pricing Strategy dropdown (Calculate by Markup % [default], Calculate by Target Profit Margin %, Keystone Pricing (Double the Cost)); Percentage Rate (%) number field (default 50) that relabels per strategy (Markup Percentage Rate / Target Profit Margin Rate) and is disabled + dimmed when Keystone is selected. Engine (100% client-side): Markup -> Retail = Cost*(1+P/100), Margin% = profit/retail*100, Markup% = P; Target Margin -> if P>=100 show inline error "Margin must be under 100%", add warn class to banner, and pause (return) leaving prior values; else Retail = Cost/(1-P/100), Markup% = profit/cost*100, Margin% = profit/retail*100; Keystone -> Retail = Cost*2, Markup% = 100, Margin% = 50. Gross Profit = Retail - Cost throughout. All currency via Math.round((value + Number.EPSILON)*100)/100 for exact cents; percentages via round1(); cost/pct sanitized (NaN/negative -> 0). Default state (50.00, Markup 50%) computes Retail $75.00, Gross Profit $25.00, Markup 50.0%, Margin 33.3%. Dual hero metrics: Recommended Retail Price ($) and Gross Profit per Item ($), both Profit Green bordered. Reality Check dual-card (the critical UI): Left "Your Markup" (Retail Blue) subtext "This is how much you added on top of the cost." vs Right "Your Profit Margin" (Profit Green) subtext "This is how much of the final price is actually profit." - visually solves the markup-vs-margin beginner error. Dynamic plain-English status banner ("To achieve a 50% markup on a $50.00 wholesale item, you must sell it for $75.00, yielding a $25.00 profit (which represents a 50.0% markup and a 33.3% profit margin).") with a red warn state for invalid >=100% margin. Breakdown mini-table: wholesale cost, recommended retail price, gross profit. 9-term glossary (Wholesale Cost, Retail Price, Markup, Gross Profit, Gross Profit Margin, Keystone Pricing, MSRP, Margin vs Markup, Break-Even Price). Educational guide (three formulas, markup != margin, when to use each strategy, gross vs take-home profit, why margin cannot reach 100%). 5-item FAQ accordion matching JSON-LD FAQPage (exact difference between markup and profit margin, why margin is always lower than markup, what keystone pricing is, how to calculate retail price from a target margin, good markup percentage for retail). JSON-LD @graph: SoftwareApplication (FinanceApplication) + FAQPage. applicationCategory: FinanceApplication. Category: Finance. One header landmark (site-chrome injects #axiom-header; tool's own <header class="tool-header"> has no role="banner"). Both ad placements present (leaderboard after content, mobile anchor after main). Pre-flight check: minor overlap with margin-markup-calculator (bidirectional any-two-values reverse calculator vs directional cost-to-price guided tool); SOP minor-overlap = build both at own URLs with see-also cross-references (added on both pages); confirmed with Renee before building. Tool-specific disclaimer (educational/estimates only, gross profit from cost and price only, excludes operating expenses/taxes/fees/returns/shrinkage, confirm against true break-even). Dash check: 0.

## Batch 172 (new tools, built directly to template) - DONE
- [x] `roas-calculator` - ROAS Calculator: Measure Ad Campaign Profitability and Break-Even ROAS (2026-06-17) - Dark AxiomApe theme on Facebook Ad Blue (#1877F2) Campaign Metrics inputs and Marketing Purple (#8B5CF6) Product Reality inputs (blended blue->purple icon/hero gradient), Profit Green (#10B981) for return metrics, Warning Yellow (#F59E0B) break-even state, Alert Red (#EF4444) unprofitable state. Two distinct input panels, no submit button, all oninput/onchange real-time plus initial recalc() on load: Campaign Metrics panel (blue accent) with Total Ad Spend ($, default 500.00) and Total Revenue Generated from Ads ($, default 2500.00); Product Reality panel (purple accent) with Average Product Profit Margin (%, default 40.00, subtext "Excluding ad costs, what is your margin?"). Engine (100% client-side): Current ROAS multiplier = revenue/adSpend (X.XXx), Current ROAS percentage = revenue/adSpend*100 (XXX%), Break-Even ROAS = 1/(margin/100) (2.50x at 40%), Gross Profit (before ads) = revenue*(margin/100), Net Profit (after ads) = grossProfit - adSpend. All currency/percent via round2 = Math.round((value + Number.EPSILON)*100)/100 for exact dollars and cents; division-by-zero guarded (ad spend 0 or margin 0 show "-" and prompt states). Defaults compute Current ROAS 5.00x / 500%, Break-Even ROAS 2.50x, Gross Profit $1,000.00, Net Profit +$500.00 -> Profitable green banner with 2.50x above break-even headroom. Hero metrics: Current ROAS (multiplier + percentage) beside Net Profit from Ads ($, green / red when negative). Break-Even Target Breakdown card: side-by-side Your Current ROAS vs Break-Even ROAS with a breathing-room meter (break-even fixed at the 50% mark, green/yellow/red fill) and plain-English caption of how far above/below break-even the campaign is. Dynamic status banner three states per spec: green "Profitable Campaign: Your ads are generating enough revenue to cover product costs and marketing spend." (ROAS > break-even), yellow "Breaking Even: You are acquiring customers for free, but not making any net profit." (ROAS == break-even), red "Unprofitable Campaign: Your ROAS is below your break-even target. You are losing money on these ads." (ROAS < break-even). Secondary metric row: ROAS Percentage, Gross Profit (Before Ads), Net Profit (After Ads, green/red). 8-term glossary (ROAS, ROI, Break-Even ROAS, Profit Margin, CAC, CPA, Gross Profit, Net Profit). Educational guide (how to use the tool, why break-even ROAS matters more than benchmarks) + 5-item FAQ accordion matching JSON-LD FAQPage (difference between ROAS and ROI, good ROAS for ecommerce [3x-4x benchmark], how to calculate break-even ROAS, why losing money even though ROAS above 1.0x, how net profit is calculated). JSON-LD @graph: SoftwareApplication (FinanceApplication) + FAQPage. applicationCategory: FinanceApplication. Category: Finance. Tool-specific disclaimer (educational only, not financial advice, not affiliated with Meta/Facebook/Google, excludes returns/refunds/shipping/overhead/taxes/attribution). One header landmark (site-chrome injects #axiom-header; tool's own <header class="page-header"> has no role="banner"; single <main id="main">). Both ad placements present (leaderboard after results card, mobile anchor after main). Pre-flight check: no existing ROAS/return-on-ad-spend calculator; minor conceptual overlap only with roi-calculator and cac-ltv-calculator (distinct paid-ads break-even use case, SOP minor-overlap = build at own URL). Dash check: 0.

## Batch 170 (new tools, built directly to template) - DONE
- [x] `affiliate-commission-calculator` - Affiliate Marketing Commission Estimator: Project Monthly Earnings and EPC (2026-06-17) - Dark theme affiliate earnings calculator on Creator Purple (#8B5CF6) active inputs/focus rings and Passive Income Green (#10B981) return metrics, with Gold (#F59E0B) for the EPC golden metric. Twin-star hero: Estimated Monthly Commission ($) in green beside Earnings Per Click (EPC) in gold. Two input panels (no submit button, all oninput/onchange real-time, initial setPayout('pct') on load): Traffic panel with Monthly Clicks on Affiliate Link (default 5000) and Estimated Conversion Rate % (default 2.50); Commission Structure panel with a segmented Payout Type toggle "Percentage of Sale (%)" (default) vs "Flat Rate CPA ($)" that swaps the visible fields - Percentage shows Average Order Value AOV $ (default 100.00) and Commission Rate % (default 5.00), Flat Rate shows Flat Commission Per Sale/Lead $ (default 50.00). Engine (100% client-side): conversionsExact = clicks*(cvr/100), displayed rounded to whole number but kept exact for math; Percentage: totalRevenue = conversions*AOV, totalCommission = totalRevenue*(rate/100); Flat: totalCommission = conversions*flat; EPC = totalCommission/clicks (divide-by-zero guarded); annual = commission*12. All currency via money(v)=Math.round((v+Number.EPSILON)*100)/100 for exact cents. Default state computes 125 conversions, $12,500 revenue, $625.00 monthly commission, $0.13 EPC (13 cents), $7,500 annual. Visual Traffic Funnel breakdown narrowing Total Clicks (5,000) -> Total Conversions/Sales-Leads (125, purple) -> Final Commission ($625.00, green). Dynamic plain-English EPC status banner ("Your estimated EPC is $0.13. This means every time someone clicks your affiliate link, you earn an average of 13 cents, regardless of whether that specific click buys anything."), with a prompt state when clicks are 0. Secondary metric row: Total Conversions (purple), Total Revenue Generated (hidden in flat mode), Annual Commission (green). 10-term glossary (Affiliate Marketing, EPC Earnings Per Click, CPA Cost Per Action, Conversion Rate CVR, AOV Average Order Value, Cookie Duration, Commission Rate, Payout Threshold, Recurring Commission, Affiliate Network). Educational guide (how to use, engine with formula box, why EPC matters, percentage vs flat-rate). 5-item FAQ accordion matching JSON-LD FAQPage (what is EPC and why important, normal affiliate conversion rate with 1-3% benchmark by traffic warmth, high-percentage vs flat-rate CPA programs, how cookie duration affects commissions, data privacy). JSON-LD @graph: SoftwareApplication (SocialNetworkingApplication) + FAQPage. applicationCategory: SocialNetworkingApplication. Category: Social Media & Content. One header landmark (site-chrome injects #axiom-header; tool's own <header class="page-header"> has no role="banner"). Both ad placements present (leaderboard after content/results, mobile anchor after main). Tool-specific disclaimer (estimates only, not affiliated with any affiliate network/merchant/platform, not financial/business advice). Pre-flight check: no existing affiliate/EPC/commission calculator (dropshipping-profit-calculator mentions CPA but is a distinct e-commerce margin use case); no conflict. Dash check: 0.

## Batch 173 (new tools, built directly to template) - DONE
- [x] `inventory-reorder-point-calculator` - Reorder Point and Safety Stock Calculator: Safety Stock and When to Reorder Inventory (2026-06-17) - Dark AxiomApe theme on Logistics Blue (#3B82F6) inputs, Warning Yellow (#F59E0B) safety stock buffer, Action Red (#EF4444) reorder point "Time to Buy" trigger. Two input panels (no submit button, all oninput/onchange real-time, recalculate() on load): Sales Velocity (Average Daily Sales units default 20, Maximum Daily Sales units default 35) and Supplier Lead Time (Average Lead Time days default 14, Maximum Lead Time days default 21). Supply Chain Engine (100% client-side, integer-safe with Math.ceil since you cannot order a fraction of a unit): Lead Time Demand = Avg Daily Sales * Avg Lead Time; Safety Stock = Math.max(0, (Max Daily Sales * Max Lead Time) - (Avg Daily Sales * Avg Lead Time)) so it can never drop below 0; Reorder Point = Lead Time Demand + Safety Stock; safety buffer days = round(Safety Stock / Avg Daily Sales). Defaults compute Lead Time Demand 280 units, Safety Stock 455 units, Reorder Point 735 units, ~23-day buffer. Hero grid: Reorder Point (Units) as the massive Action Red star metric with a "Time to Buy" pill, Safety Stock Buffer (Units) in Warning Yellow beside it. Dynamic Logistics Blue status banner ("Your current lead time demand is X units. Your safety stock of Y units represents roughly a Z-day emergency buffer at your average sales pace."). Inventory Action Plan receipt (3 numbered dashed-divider steps, red/blue/yellow): drop to ROP and order, sell ~Lead Time Demand while waiting Avg Lead Time days, hold Safety Stock in reserve to prevent a stockout. 8-term glossary (Reorder Point ROP, Safety Stock, Lead Time Demand, Lead Time, Stockout, SKU Stock Keeping Unit, Supply Chain Variance, Cycle Stock). Educational guide (how to use, the three formula boxes, why max values matter, reading the buffer in days). 4-item FAQ accordion matching JSON-LD FAQPage (what is the ROP formula, why need safety stock if supplier usually on time, how to calculate Maximum Daily Sales, what happens if ROP too high or too low). JSON-LD @graph: SoftwareApplication (FinanceApplication) + FAQPage. applicationCategory: FinanceApplication. Category: Finance. One header landmark (site-chrome injects #axiom-header; tool's own <header class="tool-header"> has no role="banner"; single <main id="main">). Both ad placements present (leaderboard after content, mobile anchor after main). Pre-flight check: minor overlap with inventory-turnover-ratio (turnover/DSI efficiency measure vs reorder-timing/safety-stock tool, distinct use cases); SOP minor-overlap = build both at own URLs with reciprocal see-also cross-references (added on both pages). Dash check: 0.

## Batch 172 (new tools, built directly to template) - DONE
- [x] `economic-order-quantity-eoq-calculator` - Economic Order Quantity (EOQ) Calculator: Find Your Optimal Order Size (2026-06-17) - Dark AxiomApe theme using Logistics Slate (#475569) for the input panels and Optimization Blue (#3B82F6) for the hero metrics, on the standard #0F1623 dark layout. Two slate input panels: Annual Demand (Annual Demand Units, default 10,000) and Cost Metrics (Cost per Order / Setup Cost $, default 150.00; Cost per Unit $, default 25.00; Annual Holding Cost Percentage %, default 20.00). No submit button; all oninput/onchange real-time plus initial recalculate() on load. Supply chain engine (100% client-side): Annual Holding Cost per Unit H = unitCost * (holdingPct/100); EOQ = Math.ceil(Math.sqrt((2 * Annual Demand * Cost per Order) / H)) rounded up since you cannot order a fraction of a unit; Orders per Year = Demand / EOQ; Total Annual Ordering Cost = (Demand / EOQ) * Cost per Order; Total Annual Holding Cost = (EOQ / 2) * H; Total Annual Inventory Cost = ordering + holding; Days Between Orders = round(365 / ordersPerYear). All currency via Math.round((value + Number.EPSILON)*100)/100 for exact cents; inputs validated (demand > 0, orderCost > 0, H > 0) else outputs reset with a prompt. Default state (10,000 / 150.00 / 25.00 / 20.00) computes H $5.00, EOQ 775 units, 12.9 orders/yr, ordering cost $1,935.48, holding cost $1,937.50, total inventory cost $3,872.98, ~28 day order cycle. Hero section: massive Optimal Order Quantity (EOQ) in units as the primary star metric beside Expected Orders Per Year. Cost Balance two-column visual receipt (Total Annual Ordering Cost | Total Annual Holding Cost) with a green "Balanced: ordering and holding costs are nearly equal at the EOQ" pill highlighting the psychological proof that the two costs converge at the optimum, then a spanned Total Annual Inventory Cost row below. Dynamic plain-English status banner: "To minimize your supply chain costs, you should place [orders] orders per year of exactly [EOQ] units. This optimally balances your freight costs against your warehouse storage fees." Secondary metric strip: Annual Holding Cost per Unit, Annual Demand, Days Between Orders. 8-term glossary (EOQ, Setup Cost / Ordering Cost, Holding Cost / Carrying Cost, Annual Demand, Annual Holding Cost per Unit H, Total Annual Inventory Cost, Orders per Year, Order Cycle). Educational guide (EOQ formula with formula boxes and Harris 1913 origin, how to use, why ordering and holding costs are equal at the EOQ, what holding cost percentage covers - warehousing/insurance/spoilage/obsolescence/opportunity cost, model limitations - constant demand, fixed costs, no bulk discounts). 5-item FAQ accordion matching JSON-LD FAQPage (what is the EOQ formula, why ordering and holding costs are equal at the EOQ point, what the holding cost percentage usually includes, what the limitations of the EOQ model are, is it free and private). JSON-LD @graph: SoftwareApplication (FinanceApplication) + FAQPage. applicationCategory: FinanceApplication. Category: Finance. One header landmark (site-chrome injects #axiom-header; tool's own <header class="tool-header"> has no role="banner"). Both ad placements present (leaderboard after content, mobile anchor after main). Pre-flight check: no existing EOQ tool; minor overlap with inventory-reorder-point-calculator (when to order) and inventory-turnover-ratio (how fast stock sells) - distinct "how much to order" use case, SOP minor-overlap = build all three with see-also cross-references (added reciprocal see-also links on EOQ, reorder-point, and turnover pages). Tool-specific disclaimer (educational/planning only, assumes steady demand with no bulk discounts, consult a professional). Dash check: 0.

## Batch 173 (new tools, built directly to template) - DONE
- [x] `subscription-box-churn-calculator` - Subscription Box Churn and LTV Calculator: Measure Customer Lifetime Value and True Recurring Profit (2026-06-17) - Dark AxiomApe theme on Subscription Blue (#3B82F6) active inputs/accents and Lifetime Green (#10B981) for the LTV star metric and gross-margin success values; health states use Green (#10B981 excellent), Amber (#F59E0B vulnerable), Red (#EF4444 unsustainable). Hero displays Customer Lifetime Value (LTV) as the primary star metric beside the LTV:CAC Ratio (formatted X.X:1). Two input panels (no submit button, all oninput/onchange real-time, recalc() on load): Box Economics Panel (Monthly Subscription Price $ default 40.00; Cost of Goods and Shipping Per Box COGS $ default 25.00; Customer Acquisition Cost CAC $ default 30.00) and Churn Reality Panel (Average Monthly Churn Rate % default 10.0, plus an inline blue Average Customer Lifetime readout). Subscription engine (100% client-side): Gross Margin Per Month = Price - COGS; Estimated Customer Lifetime (Months) = 1 / (Churn% / 100) rounded to 1 decimal; Lifetime Revenue = Lifetime * Price; LTV (Net Profit) = (Gross Margin * Lifetime) - CAC; LTV:CAC Ratio = LTV / CAC. Rounded lifetime is used throughout so the visual receipt is internally consistent and adds up exactly. All currency via Math.round((value + Number.EPSILON)*100)/100 for exact cents; validated (price > 0, churn in (0,100]) else outputs reset; CAC=0 divide-by-zero guarded (shows Infinite ratio + green when LTV>0). Default state computes Gross Margin $15.00, Lifetime 10.0 months, Lifetime Revenue $400.00, Lifetime COGS $250.00, LTV $120.00, ratio 4.0:1 -> Excellent Health green banner. "The Lifetime Journey" receipt-style breakdown: Average Customer Stays For X Months (blue highlight), Total Lifetime Revenue, minus Lifetime COGS (amber), minus Upfront CAC one-time (red), arriving at Net Profit / Customer Lifetime Value (green). Dynamic health status banner keyed on LTV:CAC ratio with three states using the exact spec copy: green "Excellent Health: An LTV:CAC ratio of 3:1 or higher means your subscription box is highly profitable and ready to scale." (ratio >= 3.0), amber "Vulnerable: You are profitable, but your margins are tight. Focus on reducing churn or lowering acquisition costs." (1.0 <= ratio < 3.0), red "Unsustainable: You are losing money on every customer you acquire. Your CAC is higher than their lifetime value." (ratio < 1.0). Secondary metric row: Gross Margin Per Month, Estimated Customer Lifetime, Total Lifetime Revenue. 10-term glossary (Churn Rate, LTV, CAC, COGS, MRR, LTV:CAC Ratio, Gross Margin Per Month, Customer Lifetime, Lifetime Revenue, CAC Payback). Educational guide (how to use, the subscription engine step by step with a formula box, a worked example, why the LTV:CAC ratio decides health, how churn nonlinearly controls value, reading the banner and receipt). 5-item FAQ accordion matching JSON-LD FAQPage (good churn rate for a subscription box, why the LTV to CAC ratio is so important, how to calculate CAC, how to reduce churn and increase LTV, data privacy). JSON-LD @graph: SoftwareApplication (FinanceApplication) + FAQPage. applicationCategory: FinanceApplication. Category: Finance. One header landmark (site-chrome injects #axiom-header; tool's own <header class="tool-header"> has no role="banner"; single <main id="main">). Both ad placements present (leaderboard after content, mobile anchor after main). Pre-flight check: minor overlap with cac-ltv-calculator (generic SaaS/retail unit economics) and saas-churn-mrr-forecaster (MRR compounding) - distinct subscription-box use case (physical COGS + shipping per box, simple churn-to-lifetime LTV model); Renee approved build-new + cross-link; reciprocal see-also links added on both existing tools and on this page. Dash check: 0.
