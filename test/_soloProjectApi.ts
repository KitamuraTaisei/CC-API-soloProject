import "mocha";
import chai from "chai";
import chaiHttp from "chai-http";
import { Application } from "express";
import { getRepository, Repository, Not, IsNull } from "typeorm";
import { v4 as uuid4 } from "uuid";
import { Routes } from "../src/routes";
import { Diary } from "../src/entity/diary";
//import DatabaseConnectionManager from "../database";
//import User from "./src/entity/User";

//import { UserController } from "../src/controller/UserController";
chai.use(chaiHttp);
const expect = chai.expect;
const { setupServer } = require("../src/server");
const server = setupServer();
//const controller = new UserController();

describe("soloProject API Server", () => {
  let request;
  beforeEach(() => {
    request = chai.request(server);
  });

  it("receive hello message!", (done) => {
    // Setup
    // Exercise
    request.get("/hello").end(function (err, res) {
      if (err) {
        return done(err);
      }
      done();
      // Assert

      // expect(res.body).to.deep.equal("world");
      expect(res).to.have.status(200);
    });
  });

  it("should be able to fetch diary", (done) => {
    // Setup

    // Exercise
    request.get("/diary").end(function (err, res) {
      if (err) {
        return done(err);
      }
      done();
      // Assert
      //console.log(res.body);
      //console.log(User);
      //expect(res.body).to.be.equals( result) ;
      expect(res).to.have.status(200);
    });
  });

  it("should be able to create diary", async () => {
    // Setup
    const addDiary = {
      date: "2020/12/24",
      location: "america",
      with: "taisei",
      score: 8,
      comment: "Awesome",
    };

    // Exercise and Assertion
    const res = await request.post("/diary").send(addDiary);

    expect(res).to.have.status(201);
  });

  it("should be able to delete diary", async () => {
    // Setup
    request = chai.request(server);
    const testDiary = {
      date: "2020/30/30",
      location: "somewhere",
      with: "someone",
      score: 0,
      comment: "none",
    };
    const setUp = await request.post("/diary").send(testDiary);
    expect(setUp).to.have.status(201);
    const postId = setUp.body.id;

    // Exercise
    request = chai.request(server);
    //serverは上げなおさないと上手くいかない。
    const res = await request.delete("/diary/" + postId);
    //URIは「＋」で明示的に示して上げないと上手くいかない
    // Assert

    //console.log(req.body);
    expect(res).to.have.status(200);

    // expect(pokeData.pokemon[151]).to.be.deep.equal(addPokemon);

    // Ensure password-related fields are inaccessible by users
    //expect(passwordHash).to.be.undefined;
    //});
  });

  it("should be able to put diary", async () => {
    // Setup
    request = chai.request(server);
    const testDiary = {
      date: "2020/30/30",
      location: "somewhere",
      with: "someone",
      score: 0,
      comment: "none",
    };
    const setUp = await request.post("/diary").send(testDiary);
    expect(setUp).to.have.status(201);
    const putId = setUp.body.id;

    const putDiary = {
      date: "2020/03/03",
      location: "shizuoka",
      with: "taisei",
      score: 5,
      comment: "revised",
    };

    // Exercise
    request = chai.request(server);
    const res = await request.put("/diary/" + putId).send(putDiary);
    //URIは「＋」で明示的に示して上げないと上手くいかない
    // Assert

    //console.log(req.body);
    expect(res).to.have.status(200);
  });
  it("make sure that all tests have finished!", (done) => {
    // Setup
    // Exercise
    request.get("/hello").end(function (err, res) {
      if (err) {
        return done(err);
      }
      done();
      // Assert

      // expect(res.body).to.deep.equal("world");
      expect(res).to.have.status(200);
    });
  });
});
