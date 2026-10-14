import { defineConfig } from "astro/config";
export default defineConfig({
  site: "https://wepayprobate.com",
  devToolbar: { enabled: false },
  // Add redirects only after the existing WordPress URLs are inventoried.
  // Confirm that the eventual host implements permanent HTTP redirects.
  redirects: {},
});
