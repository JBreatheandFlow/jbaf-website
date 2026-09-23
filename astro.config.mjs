import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://jessbreatheandflow.com',
  base: '/',
  trailingSlash: 'ignore',
  redirects: {
    // Legacy Wix routes, kept so old links and search results still land somewhere useful.
    '/contact-us': '/contact',
    '/about-us': '/about',
    '/services': '/experiences',
    '/service-page': '/experiences',
    '/classes': '/experiences',
    '/yoga': '/experiences',
    '/healing': '/experiences',
    '/book-online': '/experiences',
    '/bookings-checkout': '/experiences',
    '/events': '/experiences',
    '/moon-circles': '/full-moon-circles',
    '/full-moon-circle': '/full-moon-circles',
    '/healing-circles': '/full-moon-circles',
    '/corporate': '/organizations',
    '/corporate-wellness': '/organizations',
    '/for-organizations': '/organizations',
    '/retreats': '/xhale-retreat',
    '/retreat': '/xhale-retreat',
    '/xhale': '/xhale-retreat',
    '/blog': '/research-insights',
    '/research': '/research-insights',
    '/home': '/',
  },
});
