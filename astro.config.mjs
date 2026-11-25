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
    // Xhale lives on its own site now. Every Xhale path lands there.
    '/xhale-retreat': 'https://xhaleretreat.com',
    '/retreats': 'https://xhaleretreat.com',
    '/retreat': 'https://xhaleretreat.com',
    '/xhale': 'https://xhaleretreat.com',
    '/blog': '/research-insights',
    '/research': '/research-insights',
    '/home': '/',
  },
});
