'use strict';

/**
 * An asynchronous bootstrap function that runs before
 * your application gets started.
 *
 * This gives you an opportunity to set up your data model,
 * run jobs, or perform some special logic.
 *
 * See more details here: https://strapi.io/documentation/v3.x/concepts/configurations.html#bootstrap
 */

module.exports = async (ctx) => {
    try {
        const x = await strapi.query('articel', 'strapi-plugin-elasticsearch').find();
        console.log("elasticsearch work now ", ctx.body);
        console.log("x work now ", x);
const data = strapi.services.github.users.getAuthenticated();
console.log("//////////////////////////",data);

    } catch (e) {
        console.log(e);
    }
};

