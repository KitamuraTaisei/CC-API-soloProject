const express = require("express");
const createConnection = require("typeorm");
import {
  getRepository,
  Repository,
  DeleteResult,
  AdvancedConsoleLogger,
} from "typeorm";
import { Diary } from "./entity/diary";
import DatabaseConnectionManager from "./database";

const setupServer = () => {
  // const controller = UserController();
  const app = express();
  app.use(express.json());

  app.get("/hello", (req, res) => {
    res.send("world");
    res.status(200).end();
  });

  app.get("/diary", (req, res) => {
    DatabaseConnectionManager.connect().then(async (connection) => {
      const target = await connection.manager.find(Diary);

      res.send(target);
      res.status(200).end();
    });
  });

  app.post("/diary", async (req, res) => {
    const getRepo = await getRepository(Diary);
    const target = await getRepo.save(req.body);
    res.status(201).send(target);
    //テストは合格したけど、 DatabaseConnectionManagerでの実装はできなかった。getRepositoryで実装できてるからいいか。。。
  });

  app.delete("/diary/:id", async (req, res) => {
    const userId = { id: req.params.id };
    const getRepo = await getRepository(Diary);
    await getRepo.delete(userId);
    res.status(200).end();
  });

  app.put("/diary/:id", async (req, res) => {
    const getRepo = await getRepository(Diary);
    const userId = {
      id: req.params.id,
    };
    await getRepo.update(userId, req.body);
    res.send(req.body);
  });

  return app;
};

module.exports = { setupServer };
