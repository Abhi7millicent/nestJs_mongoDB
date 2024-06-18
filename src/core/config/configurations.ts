export default () => ({
  port: parseInt(process.env.PORT, 10),
  mongoUri: process.env.DB_URI,
});
