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

    //const userList = [
    /*  const result = [
        { id: 1, firstName: 'Timber', lastName: 'Saw', age: 25 },
        { id: 2, firstName: 'Timber', lastName: 'Saw', age: 27 },
        { id: 4, firstName: 'Timber', lastName: 'Saw', age: 27 },
        { id: 5, firstName: 'Phantom', lastName: 'Assassin', age: 24 },
        { id: 6, firstName: 'Timber', lastName: 'Saw', age: 27 },
        { id: 7, firstName: 'Phantom', lastName: 'Assassin', age: 24 },
        { id: 8, firstName: 'Timber', lastName: 'Saw', age: 27 },
        { id: 9, firstName: 'Phantom', lastName: 'Assassin', age: 24 },
        { id: 10, firstName: 'Timber', lastName: 'Saw', age: 27 },
        { id: 11, firstName: 'Phantom', lastName: 'Assassin', age: 24 },
        { id: 12, firstName: 'Timber', lastName: 'Saw', age: 27 },
        { id: 13, firstName: 'Phantom', lastName: 'Assassin', age: 24 }
      ];
      */

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
});
