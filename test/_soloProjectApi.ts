import "mocha";
import chai from "chai";
import chaiHttp from "chai-http";
import { Application } from "express";
import { getRepository, Repository, Not, IsNull } from "typeorm";
import { v4 as uuid4 } from "uuid";
//import DatabaseConnectionManager from "../database";
//import User from "./src/entity/User";

//const { UserController } = require("../controller/UserController");
chai.use(chaiHttp);
const expect = chai.expect;
const { setupServer } = require("../src/server");
const server = setupServer();
//const controller = UserController();

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
    //    User { id: 1, firstName: 'Timber', lastName: 'Saw', age: 25 } ];

    // Exercise
    request.get("/user").end(function (err, res) {
      if (err) {
        return done(err);
      }
      done();
      // Assert

      //expect(res.body.User).to.be.equals( { id: 1, firstName: 'Timber', lastName: 'Saw', age: 25 }) ;
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
    request
      .post("/user/create")
      .send(addUser)
      .end(function (req, res) {
        // Assert
        console.log(req.body);
        expect(res).to.have.status(201);

        // expect(pokeData.pokemon[151]).to.be.deep.equal(addPokemon);

        // Ensure password-related fields are inaccessible by users
        //expect(passwordHash).to.be.undefined;
      });
  });
});
