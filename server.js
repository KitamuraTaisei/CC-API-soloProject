const express = require("express");
const createConnection = require("typeorm");

const setupServer = () => {
  // import DatabaseConnectionManager from "../src";

  const app = express();
  app.use(express.json());

  app.get("/hello", (req, res) => {
    res.send("world");
    res.status(200).end();
  });

  app.get("/test", (req, res) => {
    DatabaseConnectionManager.connect()
      .then(async (connection) => {
        const target = await connection.manager.find(User);
      })
      .catch((error) => console.log(error));

    res.send(target);
    res.status(200).end();
  });

  return app;
};

module.exports = { setupServer };
