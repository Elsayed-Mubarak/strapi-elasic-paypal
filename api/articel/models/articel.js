'use strict';

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/models.html#lifecycle-hooks)
 * to customize this model
 */


module.exports = {

    lifecycles: {

        async afterUpdate(result, params, data) {

            //     console.log(".............elastic update..............");
            let query = {
                "query": {
                    "bool": {
                        "must": [
                            { "match": { "title": "harry poter" } },

                        ]
                    }
                }
            }

            let qs = {
                "query": {
                    "query_string": {
                        "query": "harry"
                    }
                }
            }

            //     const elasticResult = await strapi.plugins['strapi-plugin-elastic'].services.index.find();
            const elasticResult = await strapi.elastic.search({
                index: 'articel',
                body: qs
            })
            console.log("....elastic....", elasticResult.body.hits.hits);
            const Strapi = requre('strapi-sdk-javascript');

            const strapi = new Strapi('http://localhost:1338');


            const articel = await strapi.getEntries('articel')
            console.log(".........", articel);
            console.log(`Posts count: ${articel.length}`)

        }
    },
};
