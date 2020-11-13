const express = require("express");
const createConnection = require("typeorm");
import {
  getRepository,
  Repository,
  DeleteResult,
  AdvancedConsoleLogger,
} from "typeorm";
import { User } from "./entity/User";
import DatabaseConnectionManager from "./database";

const setupServer = () => {
  const app = express();
  app.use(express.json());

  app.get("/hello", (req, res) => {
    res.send("world");
    res.status(200).end();
  });

  app.get("/user", (req, res) => {
    DatabaseConnectionManager.connect().then(async (connection) => {
      console.log("今からリクエスト");
      const target = await connection.manager.find(User);

      res.send(target);
      console.log(target);
      res.status(200).end();
    });
  });

  return app;
};

module.exports = { setupServer };
