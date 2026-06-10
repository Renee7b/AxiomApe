/**
 * site-chrome.js — Uniform AxiomApe header + footer on every tool page
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

    /* Generic <footer> — only hide if it contains AxiomApe branding;
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
    '<a class="ah-back" href="/">&#8592; All Tools</a>';
  document.body.insertBefore(header, document.body.firstChild);

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
