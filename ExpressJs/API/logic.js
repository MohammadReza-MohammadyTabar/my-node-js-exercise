const detail = (req, res, next) => {
  const url = req.url;
  const method = req.method;
  console.log(url, method);
  // next will continue the process of the request
  next();
};
module.exports = detail;
