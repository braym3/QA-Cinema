const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { default: mongoose } = require("mongoose");

chai.use(chaiHttp);
const { connectToDb, disconnect } = require("../db");
const { emailFormModel } = require("../models");

const server = require("../server");

describe("Email API tests", function () {
  this.timeout(3_000);

  before(async () => {
    await mongoose.connection.close();
    await mongoose.connect(
      "mongodb+srv://mwhitham:duSWUr6Fmn7vPVvu@backend-finalproject.b1pfm04.mongodb.net/test"
    );
  });

  beforeEach(async () => {
    await emailFormModel.deleteMany({});
    testEmailForm = await emailFormModel.create({
      email: "udhfiaeuhd",
      subject: "udhqiaehdueidh",
      message: "uehiheucoc",
    });
    testEmailForm = JSON.parse(JSON.stringify(testEmailForm));
  });

  before(async () => {
    try {
      await connectToDb();
    } catch (err) {
      console.error(err);
    }
  });

  it("should create an email form inquiry", (done) => {
    chai
      .request(server)
      .post("/emailform/create")
      .send({
        email: "udhfiaeuhd",
        subject: "udhqiaehdueidh",
        message: "uehiheucoc",
      })
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.body).to.include({
          email: "udhfiaeuhd",
          subject: "udhqiaehdueidh",
          message: "uehiheucoc",
        });
        chai.expect(res.status).to.equal(201);
        done();
      });
  });

  after(async () => {
    await disconnect();
  });
});
