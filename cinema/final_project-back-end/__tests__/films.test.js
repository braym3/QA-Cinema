const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { default: mongoose } = require("mongoose");

chai.use(chaiHttp);
// If there isn't a filepath on the require then it is a node module
const { connectToDb, disconnect } = require("../db");
const { filmModel } = require("../models");

const server = require("../server");

describe("Film API tests", function () {
  //   let server;
  this.timeout(3_000);

  before(async () => {
    await mongoose.connection.close();
    await mongoose.connect(
      "mongodb+srv://mwhitham:duSWUr6Fmn7vPVvu@backend-finalproject.b1pfm04.mongodb.net/test"
    );
  });

  beforeEach(async () => {
    await filmModel.deleteMany({});
    testFilm = await filmModel.create({
      title: "Avengers",
      description: "abcde",
      runtime: 122,
      classification: "PG",
      classificationURL: "PG.jpg",
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
        classification: "PG",
        classificationURL: "PG.jpg",
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
          classification: "PG",
          classificationURL: "PG.jpg",
          filmPoster: "hsdsisucbi",
          releaseDate: 2013,
          director: "russo et russo",
          cast: "duhiadhi",
        });
        chai.expect(res.status).to.equal(201);
        done();
      });
  });

  it("should return all films", (done) => {
    chai
      .request(server)
      .get("/films/getAll")
      .send()
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.body).to.deep.include(testFilm);
        chai.expect(res.status).to.equal(200);
        done();
      });
  });

  it("should get film by id", (done) => {
    filmModel.findOne().then((testFilm) => {
      chai
        .request(server)
        .get(`/films/getFilm/${testFilm._id}`)
        .send()
        .end((err, res) => {
          expect(err).to.be.null;
          chai.expect(res.status).to.equal(200);
          expect(res.body.title).to.equal(testFilm.title);
          expect(res.body).has.property("_id");
          done();
        });
    });
  });

  after(async () => {
    await disconnect();
  });
});
