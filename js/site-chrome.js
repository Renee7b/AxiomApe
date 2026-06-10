/**
 * site-chrome.js - Uniform AxiomApe header + footer on every tool page
 * Drop this file at /js/site-chrome.js and add ONE script tag to each tool.
 */
(function () {
  'use strict';

  /* ── CSS ──────────────────────────────────────────────────── */
  const CSS = `
    /* Hide every pre-existing nav / site header / footer variant */
    .site-header, header.site-header,
    .site-nav, nav.site-nav,
    .site-topbar, .top-bar, .top-nav,
    .page-footer, footer.site-footer,
    footer.page-footer { display: none !important; }

    /* Generic <footer> - only hide if it contains AxiomApe branding;
       done in JS below so we don't accidentally nuke tool-content footers */

    /* ── Standard header ── */
    #axiom-header {
      background: #161a24;
      border-bottom: 1px solid rgba(255,255,255,0.09);
      padding: 0 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 50px;
      position: sticky;
      top: 0;
      z-index: 99999;
      font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
      box-shadow: 0 2px 12px rgba(0,0,0,0.35);
    }
    #axiom-header .ah-logo {
      display: flex;
      align-items: center;
      gap: 8px;
      text-decoration: none;
      font-weight: 800;
      font-size: 1rem;
      color: #e8eaf0;
      letter-spacing: -0.2px;
    }
    #axiom-header .ah-logo-icon {
      width: 26px; height: 26px;
      background: linear-gradient(135deg, #6c63ff, #00d2a8);
      border-radius: 7px;
      display: flex; align-items: center; justify-content: center;
      font-size: 13px;
      flex-shrink: 0;
    }
    #axiom-header .ah-back {
      font-size: 0.8rem;
      color: #7a8094;
      text-decoration: none;
      transition: color 0.18s;
      display: flex;
      align-items: center;
      gap: 4px;
    }
    #axiom-header .ah-back:hover { color: #e8eaf0; }
    #axiom-header .ah-center {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      font-size: 0.78rem;
      font-weight: 600;
      color: #7a8094;
      text-decoration: none;
      letter-spacing: 0.2px;
      transition: color 0.18s;
      white-space: nowrap;
    }
    #axiom-header .ah-center:hover { color: #e8eaf0; }

    /* ── Local data privacy guarantee badge ── */
    #axiom-privacy-badge {
      display: flex;
      align-items: center;
      gap: 10px;
      max-width: 1100px;
      margin: 14px auto 0;
      padding: 10px 16px;
      background: #f0fdf4;
      border: 1px solid #bbf7d0;
      border-radius: 8px;
      color: #166534;
      font-size: 0.82rem;
      font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
      line-height: 1.4;
    }
    #axiom-privacy-badge .apb-icon { font-size: 1.1rem; flex-shrink: 0; }
    #axiom-privacy-badge strong { color: #14532d; }

    /* ── Mandatory AdSense / estimate disclaimer ── */
    #axiom-disclaimer {
      max-width: 1100px;
      margin: 32px auto 0;
      padding: 14px 18px;
      background: #f8fafc;
      border: 1px solid #e2e8f0;
      border-radius: 8px;
      color: #64748b;
      font-size: 0.76rem;
      font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
      line-height: 1.6;
    }
    #axiom-disclaimer strong { color: #334155; }

    /* ── Ad placeholder: in-content leaderboard (728x90), desktop/tablet only ── */
    .axiom-ad-leaderboard {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      max-width: 728px;
      height: 90px;
      margin: 32px auto;
      background: rgba(255,255,255,0.03);
      border: 1px dashed rgba(255,255,255,0.15);
      border-radius: 8px;
      color: #7a8094;
      font-size: 0.8rem;
      font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
    }
    @media (max-width: 768px) {
      .axiom-ad-leaderboard { display: none; }
    }

    /* ── Ad placeholder: mobile sticky anchor (320x50 / 320x100), mobile only ── */
    .axiom-ad-mobile-anchor { display: none; }
    @media (max-width: 768px) {
      .axiom-ad-mobile-anchor {
        display: flex;
        align-items: center;
        justify-content: center;
        position: fixed;
        left: 0;
        right: 0;
        bottom: 0;
        width: 100%;
        height: 50px;
        max-height: 100px;
        background: #161a24;
        border-top: 1px solid rgba(255,255,255,0.09);
        color: #7a8094;
        font-size: 0.75rem;
        font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
        z-index: 99998;
      }
      body { padding-bottom: 64px; }
    }

    /* ── Header responsiveness so the centered link never overlaps ── */
    @media (max-width: 480px) {
      #axiom-header { padding: 0 10px; }
      #axiom-header .ah-logo { font-size: 0.85rem; }
      #axiom-header .ah-logo-icon { width: 22px; height: 22px; font-size: 11px; }
      #axiom-header .ah-back .ah-back-text { display: none; }
      #axiom-header .ah-center { font-size: 0.68rem; }
    }

    /* ── Standard footer ── */
    #axiom-footer {
      background: #161a24;
      border-top: 1px solid rgba(255,255,255,0.07);
      padding: 18px 24px;
      text-align: center;
      font-size: 0.78rem;
      color: #7a8094;
      font-family: 'Segoe UI', system-ui, -apple-system, sans-serif;
      margin-top: 40px;
    }
    #axiom-footer .af-nav {
      display: flex;
      justify-content: center;
      gap: 22px;
      margin-bottom: 7px;
      flex-wrap: wrap;
    }
    #axiom-footer .af-nav a {
      color: #7a8094;
      text-decoration: none;
      transition: color 0.18s;
    }
    #axiom-footer .af-nav a:hover { color: #e8eaf0; }
    #axiom-footer p { margin: 0; }
  `;

  /* ── Inject styles ───────────────────────────────────────── */
  const style = document.createElement('style');
  style.id = 'axiom-chrome-css';
  style.textContent = CSS;
  document.head.appendChild(style);

  /* ── Remove generic <footer> elements containing AxiomApe branding ── */
  document.querySelectorAll('footer').forEach(function (f) {
    const txt = f.textContent.toLowerCase();
    if (txt.includes('axiomape') || txt.includes('axiom ape') || txt.includes('about') && txt.includes('privacy')) {
      f.style.display = 'none';
    }
  });

  /* ── Build standard header ───────────────────────────────── */
  const header = document.createElement('header');
  header.id = 'axiom-header';
  header.setAttribute('role', 'banner');
  header.innerHTML =
    '<a class="ah-logo" href="/">' +
      '<span class="ah-logo-icon">🦍</span>' +
      'AxiomApe' +
    '</a>' +
    '<a class="ah-center" href="https://axiomape.com">axiomape.com</a>' +
    '<a class="ah-back" href="/">&#8592; <span class="ah-back-text">All Tools</span></a>';
  document.body.insertBefore(header, document.body.firstChild);

  /* ── Build local data privacy guarantee badge ───────────────
     Inserted right after the header so it is visible within
     every tool's interface, near the top of the page. ── */
  const privacyBadge = document.createElement('div');
  privacyBadge.id = 'axiom-privacy-badge';
  privacyBadge.innerHTML =
    '<span class="apb-icon">🛡️</span>' +
    '<span><strong>Privacy Guaranteed:</strong> All your data stays locally on your computer. ' +
    'Nothing is ever saved, tracked, or sent to our servers.</span>';
  header.insertAdjacentElement('afterend', privacyBadge);

  /* ── Build mandatory AdSense / estimate disclaimer ──────────
     Placed directly above the standard footer on every page. ── */
  const disclaimer = document.createElement('div');
  disclaimer.id = 'axiom-disclaimer';
  disclaimer.innerHTML =
    '<p><strong>Disclaimer:</strong> AxiomApe and its tools are independent and are not affiliated with, ' +
    'endorsed by, or sponsored by Google LLC. "AdSense" is a registered trademark of Google LLC, used here ' +
    'for descriptive purposes only. All calculations, estimates, and projections provided by this site are ' +
    'based on industry averages and general assumptions: actual results may vary, and no specific earnings ' +
    'or outcomes are guaranteed.</p>';

  /* ── Build standard footer ───────────────────────────────── */
  const footer = document.createElement('footer');
  footer.id = 'axiom-footer';
  footer.innerHTML =
    '<nav class="af-nav">' +
      '<a href="/about.html">About</a>' +
      '<a href="/privacy.html">Privacy</a>' +
      '<a href="/contact.html">Contact</a>' +
    '</nav>' +
    '<p>&copy; ' + new Date().getFullYear() + ' AxiomApe &middot; Free online tools for everyone</p>';
  document.body.appendChild(disclaimer);
  document.body.appendChild(footer);

  /* ── Scroll restoration fix ──────────────────────────────── */
  // Prevent browser from restoring scroll position
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  // Disable smooth-scroll temporarily so scrollTo(0,0) is instant, not animated
  var htmlEl = document.documentElement;
  var prevBehavior = htmlEl.style.scrollBehavior;
  htmlEl.style.scrollBehavior = 'auto';
  window.scrollTo(0, 0);
  // Restore original scroll-behavior after a tick
  setTimeout(function () { htmlEl.style.scrollBehavior = prevBehavior; }, 0);
  // Second safety scroll after all content/images load
  window.addEventListener('load', function () {
    htmlEl.style.scrollBehavior = 'auto';
    window.scrollTo(0, 0);
    setTimeout(function () { htmlEl.style.scrollBehavior = prevBehavior; }, 0);
  });
})();
