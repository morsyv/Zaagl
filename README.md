# زاجل — Zaagl Website

Bilingual (AR/EN) marketing site for **Zaagl**, the AI chat-agent platform (RAG + document
integration). Built with **Next.js 15 (App Router) + TypeScript + Tailwind CSS v3**.

Content, brand colour and logo are taken from the live site at https://zaagl.com.

## Running it

```bash
npm install     # run this once on macOS — see note below
npm run dev     # http://localhost:3000  → redirects to /ar
npm run build   # production build
```

> **First run on macOS:** `node_modules` was installed from a Linux environment, so the
> platform-specific Next.js binary is wrong. Run `npm install` once natively and it fixes itself.

## Structure

```
src/
  app/
    layout.tsx              pass-through root (html/body live one level down)
    globals.css             design tokens, both themes, font imports
    [locale]/
      layout.tsx            <html lang dir data-theme>, metadata, hreflang
      page.tsx              composes the sections
  i18n/
    config.ts               locales, dir(), cookie names
    ar.ts / en.ts           ALL copy lives here — edit text only in these two files
    dictionaries.ts
  components/
    Icons.tsx               core icon set + the Zaagl logo mark
    Icons2.tsx              product & social icons
    ui/                     Reveal, Button, ThemeToggle, LocaleToggle
    sections/               Header, Hero, AgentConsole, Capabilities, FeatureRows,
                            FeatureVisuals, Integrations, Pricing, Testimonials,
                            Faq, CtaBanner, Footer
  middleware.ts             locale detection + redirect, remembers choice in a cookie
docs/                       original design spec (layout system this build follows)
```

### Page order

Header → Hero → Core capabilities → three Z-pattern feature rows (knowledge base,
one-script setup, dashboard) → sources & integrations hub → Pricing → Testimonials →
FAQ → CTA → Footer.

## Brand

- **Accent:** `#F21A88` (magenta), gradient partner `#F472B6`, on a deep navy-black canvas.
  Light theme uses a darker `#DB0F76` so contrast holds on white.
- **Logo:** vectorised from `zaagl.com/logo.png` into an inline SVG (`Zaagl` in `Icons.tsx`).
  It inherits `currentColor`, so it works on any background and at any size.
- Every colour is a CSS variable in `globals.css`. Change the brand there and the whole
  site follows, both themes.

## Language

- Routes are `/ar` (default, RTL) and `/en` (LTR). Both are statically prerendered and
  carry `hreflang` alternates, so Google indexes each language separately.
- The nav toggle swaps the route and writes a `zaagl_locale` cookie, so returning
  visitors land in their language.
- `dir` and `lang` are set server-side — there is no RTL flash on load.

## Theme

**Dark is the default.** The toggle writes a `zaagl_theme` cookie which the server reads
on the next request, so there is no flash of the wrong theme.

## Motion

Springs rather than fixed-duration easing, critically damped by default (bounce only where
a gesture carried momentum), feedback on press rather than release, and compositor-only
properties (`transform` / `opacity`). `prefers-reduced-motion`,
`prefers-reduced-transparency` and `prefers-contrast` are all honoured.

## Content notes

All copy — hero, capabilities, pricing, testimonials, FAQ, footer — is taken verbatim from
zaagl.com. The English is a translation of that Arabic and is worth a native review before
launch. Outbound CTAs point at `zaagl.com/signup` and `zaagl.com/request-demo`; change
those in `src/i18n/*.ts` and the section components if the routes move.
