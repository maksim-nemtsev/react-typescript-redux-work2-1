const jsonServer = require("json-server");
const server = jsonServer.create();
const router = jsonServer.router("init-db.json");
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

//api/v1

const prefix = "api/v1/";

// Add custom routes before JSON Server router
server.get(`${prefix}userInfo`, (req, res) => {
  res.jsonp(req.query);
});
// Add custom routes before JSON Server router
server.get(`${prefix}initdata`, (req, res) => {
  res.jsonp(req.query);
});
// Add custom routes before JSON Server router
server.get(`${prefix}feeddata`, (req, res) => {
  res.jsonp(req.query);
});
// Add custom routes before JSON Server router
server.get(`${prefix}workspace`, (req, res) => {
  res.jsonp(req.query);
});
// Add custom routes before JSON Server router
server.get(`${prefix}countryinfo`, (req, res) => {
  res.jsonp(req.query);
});

let isAuthorized = (req) => true;
// let isAuthorized = (req) => false;

server.use((req, res, next) => {
  if (isAuthorized(req)) {
    // add your authorization logic here
    next(); // continue to JSON Server router
  } else {
    res.sendStatus(401);
  }
});

// Use default router
server.use(router);
server.listen(3003, () => {
  console.log("JSON Server is running");
});
