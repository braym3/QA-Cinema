const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { default: mongoose } = require("mongoose");

chai.use(chaiHttp);
const { connectToDb, disconnect } = require("../db");
const { newReleaseModel } = require("../models");

const server = require("../server");

describe("New release API tests", function () {
  this.timeout(3_000);

  before(async () => {
    await mongoose.connection.close();
    await mongoose.connect(
      "mongodb+srv://mwhitham:duSWUr6Fmn7vPVvu@backend-finalproject.b1pfm04.mongodb.net/test"
    );
  });

  beforeEach(async () => {
    await newReleaseModel.deleteMany({});
    testNewRelease = await newReleaseModel.create({
      src: "https:test-website.com",
      altText: "Movie poster",
      title: "Test Movie",
      caption: "This movie has this person and this happens to this character.",
    });
    testNewRelease = JSON.parse(JSON.stringify(testNewRelease));
  });

  before(async () => {
    try {
      await connectToDb();
    } catch (err) {
      console.error(err);
    }
  });

  it("should create a new release", (done) => {
    chai
      .request(server)
      .post("/newreleases/create")
      .send({
        src: "https:test-website.com",
        altText: "Movie poster",
        title: "Test Movie",
        caption: "This movie has this person and this happens to this character.",
      })
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.body).to.include({
            src: "https:test-website.com",
            altText: "Movie poster",
            title: "Test Movie",
            caption: "This movie has this person and this happens to this character.",
        });
        chai.expect(res.status).to.equal(201);
        done();
      });
  });

  it("should return all new releases", (done) => {
    chai
      .request(server)
      .get("/newreleases/getAll")
      .send()
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.body).to.deep.include(testNewRelease);
        chai.expect(res.status).to.equal(200);
        done();
      });
  });

  it("should get new release by id", (done) => {
    newReleaseModel.findOne().then((testNewRelease) => {
      chai
        .request(server)
        .get(`/newreleases/getNewRelease/${testNewRelease._id}`)
        .send()
        .end((err, res) => {
          expect(err).to.be.null;
          chai.expect(res.status).to.equal(200);
          expect(res.body.name).to.equal(testNewRelease.name);
          expect(res.body).has.property("_id");
          done();
        });
    });
  });

  after(async () => {
    await disconnect();
  });
});
