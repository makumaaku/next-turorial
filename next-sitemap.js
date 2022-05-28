module.exports = {
  siteUrl: 'https://www.m-firstapp.com/',
  generateRobotsTxt: true, // (optional)
  sitemapSize: 7000,
  exclude: ['/server-sitemap-index.xml'], // <= exclude here
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://www.m-firstapp.com/server-sitemap-index.xml', // <==== Add here
    ],
  },
}