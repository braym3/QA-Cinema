const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { default: mongoose } = require("mongoose");
chai.use(chaiHttp);
const { connectToDb, disconnect } = require("../db");
const { discussionModel } = require("../models");

const server = require("../server");

describe("Discussion API tests", function () {
  this.timeout(15_000);

  before(async () => {
    await mongoose.connection.close();
    await mongoose.connect("mongodb+srv://mwhitham:duSWUr6Fmn7vPVvu@backend-finalproject.b1pfm04.mongodb.net/test");
  });

  beforeEach(async () => {
    await discussionModel.deleteMany({});
    testDiscussion = await discussionModel.create({
      subject: "This is a test",
      film: "Testfilm",
      discussion: [
        {
          email: "test@test.com",
          comment: "This is a test subject",
          rating: 4,
        },
      ],
    });
    testDiscussion = JSON.parse(JSON.stringify(testDiscussion));
    testAddComment = await discussionModel.create({
      subject: "This is a test",
      film: "Testfilm",
      discussion: [
        {
          email: "test@test.com",
          comment: "This is a test subject",
          rating: 4,
        },
        {
          email: "new@comment",
          comment: "Comment to be added",
          rating: 3,
        },
      ],
    });
    testAddComment = JSON.parse(JSON.stringify(testAddComment));
  });

  before(async () => {
    try {
      await connectToDb();
    } catch (err) {
      console.error(err);
    }
  });

  it("should create a discussion", (done) => {
    chai
      .request(server)
      .post("/discussions/createDiscussion")
      .send({
        subject: "This is a test",
        film: "Testfilm",
        discussion: [
          {
            email: "test@test.com",
            comment: "This is a test subject",
            rating: 4,
          },
        ],
      })
      .end((err, res) => {
        chai.expect(err).to.be.null;
        console.log(res.body);
        console.log("console.log(res.body.discussion[0]._id);");
        console.log(res.body.discussion[0]._id);
        chai.expect(res.status).to.equal(201);
        expect(res.body.discussion[0]).has.property("_id");
        expect(res.body.subject).to.equal(testDiscussion.subject);
        expect(res.body.film).to.equal(testDiscussion.film);
        expect(res.body.discussion[0].email).to.equal(testDiscussion.discussion[0].email);
        expect(res.body.discussion[0].comment).to.equal(testDiscussion.discussion[0].comment);
        expect(res.body.discussion[0].rating).to.equal(testDiscussion.discussion[0].rating);
        done();
      });
  });

  it("should return all discussions", (done) => {
    chai
      .request(server)
      .get("/discussions/getAll")
      .send()
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.body).to.deep.include(testDiscussion);
        chai.expect(res.status).to.equal(200);
        done();
      });
  });

  it("should add a new comment to a discussion", (done) => {
    const { _id } = testDiscussion;
    chai
      .request(server)
      .patch(`/discussions/addComment/${_id}`)
      .send({ email: "new@comment", comment: "Comment to be added", rating: 3 })
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.status).to.equal(200);
        expect(res.body.subject).to.equal(testAddComment.subject);
        expect(res.body.film).to.equal(testAddComment.film);
        expect(res.body.discussion[0]).has.property("_id");
        expect(res.body.discussion[0].email).to.equal(testAddComment.discussion[0].email);
        expect(res.body.discussion[0].comment).to.equal(testAddComment.discussion[0].comment);
        expect(res.body.discussion[0].rating).to.equal(testAddComment.discussion[0].rating);
        expect(res.body.discussion[1]).has.property("_id");
        expect(res.body.discussion[1].email).to.equal(testAddComment.discussion[1].email);
        expect(res.body.discussion[1].comment).to.equal(testAddComment.discussion[1].comment);
        expect(res.body.discussion[1].rating).to.equal(testAddComment.discussion[1].rating);
        done();
      });
  });

  after(async () => {
    await disconnect();
  });
});
