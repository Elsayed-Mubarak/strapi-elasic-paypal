"use strict";

/**
 * Read the documentation (https://strapi.io/documentation/v3.x/concepts/controllers.html#core-controllers)
 * to customize this controller
 */

const paypal = require("paypal-rest-sdk");
//const create_payment_json = require('./payment_json');
const paypal_config_sandBox = require('./paypal_config')

const doPayment = async(create_payment_json) => {
    paypal.configure(paypal_config_sandBox);
    const result = await paypal.payment.create(create_payment_json, (error, payment) => {
        try {
            if (error) {
                throw error;
            } else {
                for (let i = 0; i < payment.links.length; i++) {
                    if (payment.links[i].rel === "approval_url") {
                        let directURL = payment.links[i].href;
                        console.log(".......direct URL.........", directURL);
                        return directURL;
                        //  ctx.redirect(result);
                    }
                }
            }
        } catch (e) {
            console.error(e)
        }
    })
}

module.exports.pay = async(ctx) => {
    const create_payment_json = {
        intent: "sale",
        payer: {
            payment_method: "paypal",
        },
        redirect_urls: {
            return_url: "http://localhost:1338/success",
            cancel_url: "http://localhost:1338/cancel",
        },
        transactions: [{
            item_list: {
                items: [{
                    name: "Red Sox Hat",
                    sku: "001",
                    price: "25.00",
                    currency: "USD",
                    quantity: 1,
                }, ],
            },
            amount: {
                currency: "USD",
                total: "25.00",
            },
            description: "Hat for the best team ever",
        }, ],
    };
    const result = await doPayment(create_payment_json);
    console.log({ result });
    ctx.redirect(result);
};

module.exports.sucess = (ctx) => {
    const payerId = ctx.query.PayerID;
    const paymentId = ctx.query.paymentId;

    const execute_payment_json = {
        payer_id: payerId,
        transactions: [{
            amount: {
                currency: "USD",
                total: "25.00",
            },
        }, ],
    };

    paypal.payment.execute(paymentId, execute_payment_json, function(error, payment) {
        if (error) {
            console.log(error.response);
            throw error;
        } else {
            console.log(JSON.stringify(payment));
            ctx.send("Success");
        }
    });
};

module.exports.cancel = () => {
    ctx.send("Payment Cancelled");
};