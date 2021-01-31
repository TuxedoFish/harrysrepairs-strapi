module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 2000),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '3ef6b4e8ffe437986a81b45496dcd8f5'),
    },
  },
});
