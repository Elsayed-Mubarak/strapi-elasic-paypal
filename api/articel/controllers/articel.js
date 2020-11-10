'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */




module.exports.create = async (ctx) => {
    const Strapi = require('strapi-sdk-javascript');
    const strapi = new Strapi('http://localhost:1338');

    
    const posts = await strapi.getEntries('post')
    console.log(".........", posts);
    console.log(`Posts count: ${posts.length}`)
}