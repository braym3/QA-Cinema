const { expect } = require("chai");
const chai = require("chai");
const chaiHttp = require("chai-http");
const { default: mongoose } = require("mongoose");

chai.use(chaiHttp);
// If there isn't a filepath on the require then it is a node module
const { connectToDb, disconnect } = require("../db");
const { bookingModel } = require("../models");

const server = require("../server");

describe("Booking Info API tests", function () {
  //   let server;
  this.timeout(3_000);

  before(async () => {
    await mongoose.connection.close();
    await mongoose.connect("mongodb+srv://mwhitham:duSWUr6Fmn7vPVvu@backend-finalproject.b1pfm04.mongodb.net/test");
  });

  beforeEach(async () => {
    await bookingModel.deleteMany({});
    testBooking = await bookingModel.create({
      bookerName: "michael",
      email: "abc@abc.com",
      numOfTickets: 2,
      time: "16:00pm",
      date: "20/05/23",
      price: 14,
      title: "Hot Fuzz",
      status: "pending",
      filmPoster: "abc",
    });
    testBooking = JSON.parse(JSON.stringify(testBooking));
  });

  it("should create a booking", (done) => {
    chai
      .request(server)
      .post("/bookings/createBooking")
      .send({
        bookerName: "michael",
        email: "abc@abc.com",
        numOfTickets: 2,
        time: "16:00pm",
        date: "20/05/23",
        price: 14,
        title: "Hot Fuzz",
        status: "pending",
        filmPoster: "abc",
      })
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.body).to.include({
          bookerName: "michael",
          email: "abc@abc.com",
          numOfTickets: 2,
          time: "16:00pm",
          date: "20/05/23",
          price: 14,
          title: "Hot Fuzz",
          status: "pending",
          filmPoster: "abc",
        });
        chai.expect(res.status).to.equal(201);
        done();
      });
  });

  it("should return all bookings", (done) => {
    chai
      .request(server)
      .get("/bookings/getBooking")
      .send()
      .end((err, res) => {
        expect(err).to.be.null;
        expect(res.body).to.deep.include(testBooking);
        chai.expect(res.status).to.equal(200);
        done();
      });
  });

  it("should update status of booking", (done) => {
    const { _id } = testBooking;
    chai
      .request(server)
      .patch(`/bookings/updateBooking/${_id}`)
      .send({
        bookerName: "michael",
        email: "abc@abc.com",
        numOfTickets: 2,
        time: "16:00pm",
        date: "20/05/23",
        price: 14,
        title: "Hot Fuzz",
        status: "accepted",
        filmPoster: "abc",
      })
      .end((err, res) => {
        chai.expect(err).to.be.null;
        chai.expect(res.status).to.equal(200);
        expect(res.body).has.property("_id");
        expect(res.body.status).to.equal("accepted");
        expect(res.body).to.include({
          bookerName: "michael",
          email: "abc@abc.com",
          numOfTickets: 2,
          time: "16:00pm",
          date: "20/05/23",
          price: 14,
          title: "Hot Fuzz",
          status: "accepted",
          filmPoster: "abc",
        });
        done();
      });
  });

  after(async () => {
    await disconnect();
  });
});
