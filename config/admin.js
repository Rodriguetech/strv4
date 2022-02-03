module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'a65626d75fe8903cc2ad35716fddd5ea'),
  },
});
