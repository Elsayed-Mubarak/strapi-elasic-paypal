    /*
            const result = await paypal.payment.create(create_payment_json, async function(error, payment) {
                try {
                    if (error) {
                        throw error;
                    } else {
                        for (let i = 0; i < payment.links.length; i++) {
                            if (payment.links[i].rel === "approval_url") {
                                let direct = payment.links[i].href;
                                console.log(".......direct 1.........", direct);
                                return direct;
                                //  ctx.redirect(result);
                            }
                        }
                    }
                } catch (e) {
                    console.log("..........pay: error :", { e });
                }
            });

        */
















    module.exports = ({ env }) => ({
        connection: {
            // https://www.elastic.co/guide/en/elasticsearch/client/javascript-api/current/auth-reference.html
            node: env("ELASTICSEARCH_HOST", "http://127.0.0.1:9200"),
        },
        setting: {
            version: 1,
            validStatus: [200, 201],
            validMethod: ["PUT", "POST", "DELETE"],
            fillByResponse: false,
            importLimit: 3000,
            prefix: null,
            postfix: null,
            removeExistIndexForMigration: false,
        },
        models: [{
                model: ".gitkeep",
                pk: "id",
                plugin: null,
                enable: false,
                index: ".gitkeep",
                relations: [],
                conditions: {},
                fillByResponse: false,
                migration: false,
                urls: [],
            },
            {
                model: "articel",
                pk: "id",
                plugin: null,
                enable: true,
                index: "articel",
                relations: [],
                conditions: {},
                fillByResponse: false,
                migration: false,
                urls: [
                    /\/content-manager\/explorer\/application::articel\.articel\/\d*/
                ],
            },
            {
                model: "category",
                pk: "id",
                plugin: null,
                enable: false,
                index: "category",
                relations: [],
                conditions: {},
                fillByResponse: false,
                migration: false,
                urls: [],
            },
        ],
    });