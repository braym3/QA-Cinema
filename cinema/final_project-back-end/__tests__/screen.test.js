const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { default: mongoose } = require("mongoose");

chai.use(chaiHttp);
const { connectToDb, disconnect } = require("../db");
const { screenModel } = require("../models");

const server = require("../server");

describe("Screens API tests", function () {
  this.timeout(3_000);

  before(async () => {
    await mongoose.connection.close();
    await mongoose.connect(
      "mongodb+srv://mwhitham:duSWUr6Fmn7vPVvu@backend-finalproject.b1pfm04.mongodb.net/test"
    );
  });

  beforeEach(async () => {
    await screenModel.deleteMany({});
    testScreen = await screenModel.create({
      name: "Screen 1",
      mainImage: "main.jpg",
      mainImageAlt: "Main image alt",
      subImages: [
        {
            image: "sub1.jpg",
            alt: "Sub 1 alt"
        },
        {
            image: "sub2.jpg",
            alt: "Sub 2 alt"
        }
    ],
      capacity: 200,
      description: "Screen description",
      mainImageDescription: "Main img description",
      price: 9.00,
    });
    testScreen = JSON.parse(JSON.stringify(testScreen));
  });

  before(async () => {
    try {
      await connectToDb();
    } catch (err) {
      console.error(err);
    }
  });

  it("should create a screen", (done) => {
    chai
      .request(server)
      .post("/screens/create")
      .send({
        name: "Screen 1",
        mainImage: "main.jpg",
        mainImageAlt: "Main image alt",
        subImages: [
          {
              image: "sub1.jpg",
              alt: "Sub 1 alt"
          },
          {
              image: "sub2.jpg",
              alt: "Sub 2 alt"
          }
      ],
        capacity: 200,
        description: "Screen description",
        mainImageDescription: "Main img description",
        price: 9.00,
      })
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.body).to.include({
            name: "Screen 1",
            mainImage: "main.jpg",
            mainImageAlt: "Main image alt",
            capacity: 200,
            description: "Screen description",
            mainImageDescription: "Main img description",
            price: 9.00,
          });
        chai.expect(res.body.subImages[0]).has.property("_id");
        chai.expect(res.body.subImages[0].image).to.equal(testScreen.subImages[0].image);
        chai.expect(res.body.subImages[0].alt).to.equal(testScreen.subImages[0].alt);
        chai.expect(res.body.subImages[1]).has.property("_id");
        chai.expect(res.body.subImages[1].image).to.equal(testScreen.subImages[1].image);
        chai.expect(res.body.subImages[1].alt).to.equal(testScreen.subImages[1].alt);
        chai.expect(res.status).to.equal(201);
        done();
      });
  });

  it("should return all screens", (done) => {
    chai
      .request(server)
      .get("/screens/getAll")
      .send()
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.body).to.deep.include(testScreen);
        chai.expect(res.status).to.equal(200);
        done();
      });
  });

  it("should get screen by id", (done) => {
    screenModel.findOne().then((testScreen) => {
      chai
        .request(server)
        .get(`/screens/getScreen/${testScreen._id}`)
        .send()
        .end((err, res) => {
          expect(err).to.be.null;
          chai.expect(res.status).to.equal(200);
          expect(res.body.name).to.equal(testScreen.name);
          expect(res.body).has.property("_id");
          done();
        });
    });
  });

  after(async () => {
    await disconnect();
  });
});
