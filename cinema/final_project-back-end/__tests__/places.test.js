const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { default: mongoose } = require("mongoose");

chai.use(chaiHttp);
const { connectToDb, disconnect } = require("../db");
const { placeModel } = require("../models");

const server = require("../server");

describe("Place API tests", function () {
  this.timeout(3_000);

  before(async () => {
    await mongoose.connection.close();
    await mongoose.connect(
      "mongodb+srv://mwhitham:duSWUr6Fmn7vPVvu@backend-finalproject.b1pfm04.mongodb.net/test"
    );
  });

  beforeEach(async () => {
    await placeModel.deleteMany({});
    testPlace = await placeModel.create({
      type: "Bar",
      name: "The Marble Arch",
      address: "73 Rochdale Rd, Manchester M4 4HY",
      image: "https://lh3.googleusercontent.com/p/AF1QipMbKyZfv6cmiyvaldd3G5r54kimSEmioyTiakcO=s1360-w1360-h1020",
      description: "Traditional drinking establishment with its own and guest beers, plus food including cheeseboards.",
      offers: "10% off",
      phone: "0161 832 5914",
      website: "bar.com",
    });
    testPlace = JSON.parse(JSON.stringify(testPlace));
  });

  before(async () => {
    try {
      await connectToDb();
    } catch (err) {
      console.error(err);
    }
  });

  it("should create a place", (done) => {
    chai
      .request(server)
      .post("/places/create")
      .send({
        type: "Bar",
        name: "The Marble Arch",
        address: "73 Rochdale Rd, Manchester M4 4HY",
        image: "https://lh3.googleusercontent.com/p/AF1QipMbKyZfv6cmiyvaldd3G5r54kimSEmioyTiakcO=s1360-w1360-h1020",
        description: "Traditional drinking establishment with its own and guest beers, plus food including cheeseboards.",
        offers: "10% off",
        phone: "0161 832 5914",
        website: "bar.com",
      })
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.body).to.include({
            type: "Bar",
            name: "The Marble Arch",
            address: "73 Rochdale Rd, Manchester M4 4HY",
            image: "https://lh3.googleusercontent.com/p/AF1QipMbKyZfv6cmiyvaldd3G5r54kimSEmioyTiakcO=s1360-w1360-h1020",
            description: "Traditional drinking establishment with its own and guest beers, plus food including cheeseboards.",
            offers: "10% off",
            phone: "0161 832 5914",
            website: "bar.com",
        });
        chai.expect(res.status).to.equal(201);
        done();
      });
  });

  it("should return all places", (done) => {
    chai
      .request(server)
      .get("/places/getAll")
      .send()
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.body).to.deep.include(testPlace);
        chai.expect(res.status).to.equal(200);
        done();
      });
  });

  it("should get place by id", (done) => {
    placeModel.findOne().then((testPlace) => {
      chai
        .request(server)
        .get(`/places/getPlace/${testPlace._id}`)
        .send()
        .end((err, res) => {
          expect(err).to.be.null;
          chai.expect(res.status).to.equal(200);
          expect(res.body.name).to.equal(testPlace.name);
          expect(res.body).has.property("_id");
          done();
        });
    });
  });

  after(async () => {
    await disconnect();
  });
});
