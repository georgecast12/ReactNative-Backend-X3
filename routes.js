module.exports = function(app) {
  const api = require("./routes/api");

  app.use("/", api);
};
