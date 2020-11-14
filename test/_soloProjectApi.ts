import "mocha";
import chai from "chai";
import chaiHttp from "chai-http";
import { Application } from "express";
import { getRepository, Repository, Not, IsNull } from "typeorm";
import { v4 as uuid4 } from "uuid";
import { Routes } from "../src/routes";
import { User } from "../src/entity/User";
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

  it("should be able to fetch users", (done) => {
    // Setup

    // Exercise
    request.get("/user").end(function (err, res) {
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

  it("should be able to create user", async () => {
    // Setup
    const addUser = {
      firstName: "Taisei",
      lastName: "Kitamura",
      age: 24,
    };

    // Exercise and Assertion
    //controller.save() ;
    //request = chai.request(server);
    const res = await request.post("/user").send(addUser);
    //.end(function (req, res) {
    // Assert
    //console.log(req.body);
    expect(res).to.have.status(201);

    // expect(pokeData.pokemon[151]).to.be.deep.equal(addPokemon);

    // Ensure password-related fields are inaccessible by users
    //expect(passwordHash).to.be.undefined;
    //});
  });

  it("should be able to delete user", async () => {
    // Setup
    request = chai.request(server);
    const testUser = {
      firstName: "test",
      lastName: "delete",
      age: 100,
    };
    const setUp = await request.post("/user").send(testUser);
    expect(setUp).to.have.status(201);
    const postId = setUp.body.id;

    // Exercise
    request = chai.request(server);
    //serverは上げなおさないと上手くいかない。
    const res = await request.delete("/user/" + postId);
    //URIは「＋」で明示的に示して上げないと上手くいかない
    // Assert

    //console.log(req.body);
    expect(res).to.have.status(200);

    // expect(pokeData.pokemon[151]).to.be.deep.equal(addPokemon);

    // Ensure password-related fields are inaccessible by users
    //expect(passwordHash).to.be.undefined;
    //});
  });

  it("should be able to put user", async () => {
    // Setup
    request = chai.request(server);
    const testUser = {
      firstName: "test",
      lastName: "put",
      age: 100,
    };
    const setUp = await request.post("/user").send(testUser);
    expect(setUp).to.have.status(201);
    const putId = setUp.body.id;

    const putUser = {
      firstName: "result",
      lastName: "put",
      age: 200,
    };

    // Exercise
    request = chai.request(server);
    const res = await request.put("/user/" + putId).send(putUser);
    //URIは「＋」で明示的に示して上げないと上手くいかない
    // Assert

    //console.log(req.body);
    expect(res).to.have.status(200);

    // expect(pokeData.pokemon[151]).to.be.deep.equal(addPokemon);

    // Ensure password-related fields are inaccessible by users
    //expect(passwordHash).to.be.undefined;
    //});
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
