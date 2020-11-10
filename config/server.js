module.exports = ({ env }) => ({
    host: env('HOST', '0.0.0.0'),
    port: env.int('PORT', 1338),
    admin: {
        auth: {
            secret: env('ADMIN_JWT_SECRET', 'e2b6620942245d7a646c26d029a10c70'),
        },
    },
});