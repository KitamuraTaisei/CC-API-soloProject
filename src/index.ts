import "reflect-metadata";
import { createConnection } from "typeorm";
import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response } from "express";
import { Routes } from "./routes";
import { Diary } from "./entity/diary";

createConnection()
  .then(async (connection) => {
    // create express app
    const app = express.default();
    app.use(bodyParser.json());

    // register express routes from defined application routes
    Routes.forEach((route) => {
      (app as any)[route.method](
        route.route,
        (req: Request, res: Response, next: Function) => {
          const result = new (route.controller as any)()[route.action](
            req,
            res,
            next
          );
          if (result instanceof Promise) {
            result.then((result) =>
              result !== null && result !== undefined
                ? res.send(result)
                : undefined
            );
          } else if (result !== null && result !== undefined) {
            res.json(result);
          }
        }
      );
    });

    // setup express app here
    // ...

    // start express server
    app.listen(3000);

    // insert new users for test
    await connection.manager.save(
      connection.manager.create(Diary, {
        date: "2020/01/01",
        location: "yokohama",
        with: "taisei",
        score: 5,
        comment: "good",
      })
    );
    await connection.manager.save(
      connection.manager.create(Diary, {
        date: "2020/01/02",
        location: "tokyo",
        with: "taisei",
        score: 4,
        comment: "fine",
      })
    );

    console.log(
      "Express server has started on port 3000. Open http://localhost:3000/diary to see results"
    );
  })
  .catch((error) => console.log(error));
