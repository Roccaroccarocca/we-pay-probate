import { site } from '../site';
export const GET = () => new Response(`User-agent: *\nAllow: /\n${site.indexable ? `Sitemap: ${site.productionUrl}/sitemap.xml\n` : '# Review build: pages use noindex until launch.\n'}`, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
