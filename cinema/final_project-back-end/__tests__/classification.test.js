const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { default: mongoose } = require("mongoose");

chai.use(chaiHttp);
const { connectToDb, disconnect } = require("../db");
const { classificationModel } = require("../models");

const server = require("../server");

describe("Classification API tests", function () {
  this.timeout(3_000);

  before(async () => {
    await mongoose.connection.close();
    await mongoose.connect(
      "mongodb+srv://mwhitham:duSWUr6Fmn7vPVvu@backend-finalproject.b1pfm04.mongodb.net/test"
    );
  });

  beforeEach(async () => {
    await classificationModel.deleteMany({});
    testClassification = await classificationModel.create({
      name: "R",
      description: "R Rating",
      rules: "R Rating Rules here",
      image: "https://r-icon.jpg",
      fullName: "R Rating Full Name",
      link: "https:r-rating-info.com",
    });
    testClassification = JSON.parse(JSON.stringify(testClassification));
  });

  before(async () => {
    try {
      await connectToDb();
    } catch (err) {
      console.error(err);
    }
  });

  it("should create a classification", (done) => {
    chai
      .request(server)
      .post("/classifications/create")
      .send({
        name: "R",
        description: "R Rating",
        rules: "R Rating Rules here",
        image: "https://r-icon.jpg",
        fullName: "R Rating Full Name",
        link: "https:r-rating-info.com",
      })
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.body).to.include({
            name: "R",
            description: "R Rating",
            rules: "R Rating Rules here",
            image: "https://r-icon.jpg",
            fullName: "R Rating Full Name",
            link: "https:r-rating-info.com",
        });
        chai.expect(res.status).to.equal(201);
        done();
      });
  });

  it("should return all classifications", (done) => {
    chai
      .request(server)
      .get("/classifications/getAll")
      .send()
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.body).to.deep.include(testClassification);
        chai.expect(res.status).to.equal(200);
        done();
      });
  });

  it("should get classification by id", (done) => {
    classificationModel.findOne().then((testClassification) => {
      chai
        .request(server)
        .get(`/classifications/getClassification/${testClassification._id}`)
        .send()
        .end((err, res) => {
          expect(err).to.be.null;
          chai.expect(res.status).to.equal(200);
          expect(res.body.name).to.equal(testClassification.name);
          expect(res.body).has.property("_id");
          done();
        });
    });
  });

  after(async () => {
    await disconnect();
  });
});
