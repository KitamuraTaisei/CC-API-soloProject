import "mocha";
import chai from "chai";
import chaiHttp from "chai-http";
import { Application } from "express";
import { getRepository, Repository, Not, IsNull } from "typeorm";
import { v4 as uuid4 } from "uuid";
//import DatabaseConnectionManager from "../database";
//import User from "./src/entity/User";

chai.use(chaiHttp);
const expect = chai.expect;
const { setupServer } = require("../src/server");
const server = setupServer();
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

  it("receiveUser", (done) => {
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
      console.log(res.body.User);
      console.log(res.body);
      //expect(res.body.User).to.be.equals( { id: 1, firstName: 'Timber', lastName: 'Saw', age: 25 }) ;
      expect(res).to.have.status(200);
    });
  });
});
