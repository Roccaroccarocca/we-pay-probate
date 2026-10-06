# We Pay Probate

A separate, mobile-first Astro website. The existing WordPress site is not changed. Static HTML, locally rendered artwork, and small tracking scripts keep the pages lightweight. No CMS, form backend, or call-recording provider is connected yet.

## Develop

Use Node 22.12+ or Node 24. This cloud checkout already has Node 24.

```sh
cd /workspace/we-pay-probate
npm ci --cache /workspace/.npm-cache
npm run dev
```

The server runs on port 4321. `npm run build` produces `dist/`; `npm run preview` serves that build. Hosting can use any static hosting service with build command `npm run build` and output directory `dist`.

## Editing and SEO

- `src/pages/index.astro`: homepage copy, sections, and FAQs.
- `src/styles/global.css`: design and responsive layout.
- `src/site.ts`: phone, service area, production URL, indexing, analytics.
- `src/components/Layout.astro`: metadata, canonical URL, Organization JSON-LD, navigation, phone tracking.
- `src/pages/robots.txt.ts` and `src/pages/sitemap.xml.ts`: crawler controls and sitemap.
- `src/pages/privacy.astro`: current tracking disclosure. Review with the owner before launch.

Review builds intentionally have `noindex, follow`. Crawling remains allowed so crawlers can see the noindex directive. This does not affect the current WordPress site. Keep any staging host non-indexable, including after production goes live. At production build time set `PUBLIC_INDEXABLE=true`; confirm the host does not add an `X-Robots-Tag: noindex` header. Canonicals point to `https://wepayprobate.com`. If using a different production domain, update `productionUrl` and Astro's `site` setting.

## Calls and analytics

All primary calls use `tel:+19543206336`. Clicks queue a `click_to_call` event in `window.dataLayer` with `call_location` and `page_path`, and dispatch the `probate:call-click` browser event. With a valid `PUBLIC_GA_MEASUREMENT_ID=G-...` at build time, the site loads GA4 and sends the event using gtag. Without an ID, no analytics provider receives these events. Mark `click_to_call` as a key event in GA4 after confirming it arrives in DebugView/Realtime. Avoid simultaneously configuring GTM to send the same event.

Click tracking measures an attempted call action, not a connected call. Source-attributed connected calls require a separately configured call-tracking service with dynamic number insertion. It is not implemented. No recording is enabled. Review analytics consent needs and the privacy notice before enabling analytics; the current build does not include a consent manager.

## Before launch

1. Have the owner confirm the business identity, phone, offered services, purchase rights, and precise terms for covering probate costs. No invented testimonials, credentials, or success rates are used.
2. Review the published privacy notice and legal/service descriptions. The fee arrangement copy reflects supplied source material but is not a substitute for the actual agreement.
3. Inventory existing WordPress URLs and preserve valuable pages or map each changed URL to an appropriate 301 redirect. No old-site URL inventory was available in this environment.
4. Deploy a separate review build. Check on actual phones and confirm dialing reaches the owner.
5. Connect production hosting/domain only after approval. Set indexing at build time, check robots/meta/HTTP headers, submit `/sitemap.xml` in Search Console, and request indexing.
6. Add verified owner/team information and authentic testimonials when supplied. Local landing pages should contain useful county-specific content rather than copied doorway pages.

No changes to DNS or WordPress, deployment, external analytics setup, or live phone calls are performed by this repository.
