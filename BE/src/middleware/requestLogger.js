const requestLogger = (req, res, next) => {
  console.info(`${new Date()}: ${req.method} - ${req.path}`);
  next();
};

module.exports = requestLogger;
