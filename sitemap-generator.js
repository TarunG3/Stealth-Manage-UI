const SitemapGenerator = require('sitemap-generator');
const fs = require('fs');

const site = 'https://www.stealthmanage.com';
const localSite = 'http://localhost:4000';

// create generator
const generator = SitemapGenerator(localSite, {
  stripQuerystring: false,
});

// register event listeners
generator.on('done', () => {
  // sitemaps created

  // Replace with live website
  const siteMapString = fs.readFileSync('./sitemap.xml', 'utf-8');
  fs.writeFileSync(
    './sitemap.xml',
    siteMapString.replaceAll(
      'http://localhost:4000',
      'https://www.stealthmanage.com'
    )
  );
});

const crawler = generator.getCrawler();

crawler.on('fetchconditionerror', queueItem => {
  console.log('Error => ', queueItem);
});

// start the crawler
generator.start();
