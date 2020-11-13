const chai = require("chai");
const chaiHttp = require("chai-http");
chai.use(chaiHttp);
const { setupServer } = require("../server");
const { expect } = require("chai");

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
});
