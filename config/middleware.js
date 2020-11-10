module.exports = {
    load: {
        before: ['timer', 'responseTime', 'logger', 'cors', 'responses', 'gzip', 'elastic'],
        order: [
            "Define the middlewares' load order by putting their name in this array is the right order",
        ],
        after: ['parser', 'router'],
    },
    settings: {
        cors: {
            enabled: true
         },
        timer: {
            enabled: true,
        },
        elastic: {
            enabled: true,
        },
    },
};