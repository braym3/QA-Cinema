const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);
// If there isn't a filepath on the require then it is a node module
const { connectToDb, disconnect } = require("../db");
const { filmModel } = require("../models");

const server = require("../server");

describe("API tests", function () {
  //   let server;
  this.timeout(3_000);

  beforeEach(async () => {
    await filmModel.deleteMany({});
    testFilm = await filmModel.create({
      title: "Avengers",
      description: "abcde",
      runtime: 122,
      rating: "PG",
      filmPoster: "hsdsisucbi",
      releaseDate: 2013,
      director: "russo et russo",
      cast: "duhiadhi",
    });
    testFilm = JSON.parse(JSON.stringify(testFilm));
  });

  before(async () => {
    try {
      await connectToDb();
      //   server = require('../server');
    } catch (err) {
      console.error(err);
    }
  });

  it("should create a film", (done) => {
    chai
      .request(server)
      .post("/films/create")
      .send({
        title: "Avengers",
        description: "abcde",
        runtime: 122,
        rating: "PG",
        filmPoster: "hsdsisucbi",
        releaseDate: 2013,
        director: "russo et russo",
        cast: "duhiadhi",
      })
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.body).to.include({
            title: "Avengers",
            description: "abcde",
            runtime: 122,
            rating: "PG",
            filmPoster: "hsdsisucbi",
            releaseDate: 2013,
            director: "russo et russo",
            cast: "duhiadhi",
          });
        chai.expect(res.status).to.equal(201);
        done();
      });
  });

  it('should return all films', (done) => {
    chai
      .request(server)
      .get('/films/getAll')
      .send()
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.body).to.deep.include(testFilm);
        chai.expect(res.status).to.equal(200);
        done();
      });
  });

  after(async () => {
    await disconnect();
  });
});