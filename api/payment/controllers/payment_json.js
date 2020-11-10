module.exports = {
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