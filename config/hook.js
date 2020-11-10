module.exports = {
  settings: {
    // ...
    algolia: {
      enabled: true,
      applicationId: "MB6BLO4MPD",
      apiKey: "7c59b5210b2a81ad8c7162c2d19105af",
      debug: true, // default: false
      prefix: "blog", // default: Strapi environment (strapi.config.environment)
    },
  },
  github: {
    enabled: true,
    token: "bf78d4fc3c1767019870476d6d7cc8961383d80f",
  },
};
