# We Pay Probate

A mobile-first Astro site for inherited-property assistance and direct, as-is purchases in Miami-Dade, Broward, and Palm Beach Counties. The primary action is a free initial phone consultation at **954-320-6336**.

The revised design uses blue, white, and green from the supplied existing-site reference. Its shorter flow prioritizes the offer, clear purchase conditions, an introduction to Leo, and phone actions. Locally hosted DM Sans and lightweight SVG artwork keep it fast. The house is an illustration, not a photograph of a business property. Leo and the small-company description were supplied by the user; credentials, testimonials, and outcome claims are not invented.

## Develop and build

Use Node 24, or Node 22.12+.

```sh
cd /workspace/we-pay-probate
npm ci --cache /workspace/.npm-cache
npm run dev
```

Astro 7 runs the development server in the background on port 4321. Use these commands to inspect or stop it:

```sh
ASTRO_TELEMETRY_DISABLED=1 npm exec -- astro dev status
ASTRO_TELEMETRY_DISABLED=1 npm exec -- astro dev logs
ASTRO_TELEMETRY_DISABLED=1 npm exec -- astro dev stop
```

Validate the static site:

```sh
PUBLIC_INDEXABLE=false PUBLIC_GA_MEASUREMENT_ID='' npm run build
npm run preview -- --port 4322
ASTRO_TELEMETRY_DISABLED=1 npm exec -- astro preview stop
```

The output is in `dist/`. No backend, database, form service, or secret is needed. There is no repository test or type-check script. Browser checks should cover the homepage, privacy page, 404 page, FAQ keyboard interaction, mobile call bar, all phone-link events, metadata, crawler files, assets, and responsive layout.

## Revise the content

- `src/pages/index.astro`: homepage structure and offer copy.
- `src/content/home.ts`: eight FAQs and the optional verified-testimonial model.
- `src/site.ts`: phone, service area, canonical domain, indexing, and analytics configuration.
- `src/styles/global.css`: design tokens, local fonts, and responsive styles.
- `src/components/CallButton.astro`: shared phone action.
- `src/components/HeroArt.astro`: original house illustration, used until the exact supplied photo is available.
- `src/components/OwnerIntro.astro`: Leo’s small-company introduction.
- `src/components/VideoIntro.astro`: native video or a YouTube segment loaded only after a play-button click.
- `OWNER-MEDIA.md`: media setup and the proposed short-video outline.
- `src/components/Layout.astro`: header/footer, SEO metadata, schema, and click tracking.
- `src/pages/privacy.astro`: tracking disclosure; review against actual business practices before launch.
- `public/og-image.png`: 1200 × 630 social-sharing artwork. Regenerate when branding changes.
- `BUSINESS-FACTS-NEEDED.md`: owner facts and agreement details still needed.

The user supplied Leo’s name, the small-company description, and a portrait reference. Leo’s introduction is published. Photo paths and video sources remain null until the actual files or source URLs are available; the player and photo elements are omitted rather than presenting broken media. The separate testimonial component is not published. Add only verified details and authentic testimonials used with permission. The supplied screenshot was used as a visual reference; its 48-hour closing, unconditional fee coverage, experience, commission, and hours claims are not reused.

## Search controls

Review builds default to `noindex, follow`. Set `PUBLIC_INDEXABLE=true` only for an approved production build. Keep every staging build non-indexable. Crawling stays allowed so crawlers can read the noindex directive. Noindex is not access control.

The sitemap is empty for review builds. Production includes the homepage and privacy page, and robots.txt advertises the sitemap. The 404 page always stays noindex. Per-page titles, descriptions, canonical URLs, Open Graph, Twitter metadata, and Organization schema are in the shared layout; schema uses only the supplied name, phone, and service area.

Canonicals and sharing-image URLs use `https://wepayprobate.com`. The production-domain image will be reachable there only after deployment; staging previews may not fetch it from the live WordPress site. If the eventual production domain differs, update `productionUrl` in `src/site.ts` and `site` in `astro.config.mjs`.

`astro.config.mjs` includes a redirects configuration point. First inventory the real WordPress URLs, then map changed URLs to useful destinations and configure permanent HTTP redirects on the eventual host. No URLs or redirects have been guessed. At launch also inspect host-level `X-Robots-Tag` headers; an old staging noindex header overrides an indexable build.

## Phone events and optional GA4

Every phone link uses `tel:+19543206336` and a distinct `data-call-location`. A click queues one `click_to_call` object in `window.dataLayer` and dispatches `probate:call-click`. The event contains `call_location` and `page_path`.

A valid `PUBLIC_GA_MEASUREMENT_ID=G-...` enables GA4 at build/start time. No ID is supplied or enabled by default. With GA4 enabled, the handler also sends one gtag event with the same fields. Avoid configuring GTM to send the queued event a second time. Confirm the event in GA4 before marking it as a key event.

A click is an attempted call action; it does not prove connection or attribute a connected call. Dynamic number insertion and a separate connected-call provider are not implemented. No call recording is enabled. Review privacy and consent needs before enabling analytics; the site does not include a consent manager.

## Scope

This implementation is built and reviewed locally. A separate Netlify staging deployment is now requested. `netlify.toml` configures Node 24, the Astro build, and `dist/` as the output. Both `netlify.toml` and `public/_headers` keep the staging site noindex. Remove those host-level restrictions only for an approved production launch.

Deployment requires Netlify account access. Supply `NETLIFY_AUTH_TOKEN` securely through cloud environment settings, with proxy access to `api.netlify.com`. Never put a token in repository files or chat. Create a separate staging site rather than deploying to the existing live site; verify the returned Netlify URL before sharing it. Do not change DNS or WordPress, enable analytics, or place phone calls.

The older tracked `we-pay-probate-netlify.zip` is an earlier artifact and does not contain this redesign. The refreshed `we-pay-probate-netlify-drop.zip` contains the current `dist/` output with the files at its root. See `NETLIFY-DROP.md` for browser upload instructions; no token is needed for Netlify Drop.
