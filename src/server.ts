const express = require("express");
const createConnection = require("typeorm");
//const { UserController } = require("../controller/UserController");
import {
  getRepository,
  Repository,
  DeleteResult,
  AdvancedConsoleLogger,
} from "typeorm";
import { User } from "./entity/User";
import DatabaseConnectionManager from "./database";

const setupServer = () => {
  // const controller = UserController();
  const app = express();
  app.use(express.json());

  app.get("/hello", (req, res) => {
    res.send("world");
    res.status(200).end();
  });

  app.get("/user", (req, res) => {
    DatabaseConnectionManager.connect().then(async (connection) => {
      const target = await connection.manager.find(User);

      res.send(target);
      res.status(200).end();
    });
  });

  app.post("/user/create", (req, res) => {
    DatabaseConnectionManager.connect().then(async (connection) => {
      console.log(req.body);
      const getRepo = await getRepository(User);
      const target = await getRepo.save(req.body);

      res.send(target);
      res.status(201).end();
    });
  });

  return app;
};

module.exports = { setupServer };
