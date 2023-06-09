const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { default: mongoose } = require("mongoose");

chai.use(chaiHttp);
const { connectToDb, disconnect } = require("../db");
const { filmModel } = require("../models");

const server = require("../server");

describe("Film API tests", function () {
  this.timeout(3_000);

  before(async () => {
    await mongoose.connection.close();
    await mongoose.connect("mongodb+srv://mwhitham:duSWUr6Fmn7vPVvu@backend-finalproject.b1pfm04.mongodb.net/test");
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
      userRating: { aggregate: 9, quantity: 3 },
    });
    testFilm = JSON.parse(JSON.stringify(testFilm));
  });

  before(async () => {
    try {
      await connectToDb();
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
        userRating: { aggregate: 9, quantity: 3 },
      })
      .end((err, res) => {
        chai.expect(err).to.be.null;
        expect(res.body.title).to.equal(testFilm.title);
        expect(res.body.description).to.equal(testFilm.description);
        expect(res.body.runtime).to.equal(testFilm.runtime);
        expect(res.body.classification).to.equal(testFilm.classification);
        expect(res.body.classificationURL).to.equal(testFilm.classificationURL);
        expect(res.body.filmPoster).to.equal(testFilm.filmPoster);
        expect(res.body.releaseDate).to.equal(testFilm.releaseDate);
        expect(res.body.director).to.equal(testFilm.director);
        expect(res.body.cast).to.equal(testFilm.cast);
        expect(res.body.userRating.aggregate).to.equal(testFilm.userRating.aggregate);
        expect(res.body.userRating.quantity).to.equal(testFilm.userRating.quantity);
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

  it("should update rating by id", (done) => {
    const { _id } = testFilm;
    const rating = 5;
    chai
      .request(server)
      .patch(`/films/addRating/${_id}`)
      .send({ rating: rating })
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.status).to.equal(200);
        expect(res.body.title).to.equal(testFilm.title);
        expect(res.body.description).to.equal(testFilm.description);
        expect(res.body.runtime).to.equal(testFilm.runtime);
        expect(res.body.classification).to.equal(testFilm.classification);
        expect(res.body.classificationURL).to.equal(testFilm.classificationURL);
        expect(res.body.filmPoster).to.equal(testFilm.filmPoster);
        expect(res.body.releaseDate).to.equal(testFilm.releaseDate);
        expect(res.body.director).to.equal(testFilm.director);
        expect(res.body.cast).to.equal(testFilm.cast);
        expect(res.body.userRating.aggregate).to.equal(testFilm.userRating.aggregate + rating);
        expect(res.body.userRating.quantity).to.equal(testFilm.userRating.quantity + 1);
        done();
      });
  });

  after(async () => {
    await disconnect();
  });
});
