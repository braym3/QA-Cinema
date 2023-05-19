import { Form } from "react-bootstrap";
import Stripe from "./Stripe";
import { useState } from "react";
import { createBooking } from "../../../Services/bookingService";

const BuyTickets = ({ time, date, singleFilmData, ticketTotal, ticketCount, tickets }) => {
  const [email, setEmail] = useState("");
  const [bookerName, setBookerName] = useState("");

  const booking = {
    bookerName: bookerName,
    email: email,
    numOfTickets: tickets,
    time: time,
    date: date,
    price: ticketTotal,
    title: singleFilmData.title,
    filmPoster: singleFilmData.filmPoster,
    status: "pending",
  };

  const handleSubmit = () => {
    createBooking(booking)
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };

  return (
    <div id='buytickets'>
      <h3 style={{ color: "white", textAlign: "center" }}>Basket</h3>
      <p style={{ color: "white" }}>
        Purchase Tickets for: <u>{singleFilmData.title}</u> @ <u>{time}</u> on <u>{date}</u>
      </p>
      <p>Adult: {ticketCount.adult > 0 ? ticketCount.adult : 0}</p>
      <p>Child: {ticketCount.child > 0 ? ticketCount.child : 0}</p>
      <p>Concession: {ticketCount.concession > 0 ? ticketCount.concession : 0}</p>
      <Form>
        <Form.Group className='mb-3' controlId='formBasicEmail'>
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type='email'
            placeholder='Enter email'
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <Form.Text className='text-muted'>We'll never share your email with anyone else.</Form.Text>
        </Form.Group>
        <Form.Group className='mb-3' controlId='bookerName'>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type='text'
            placeholder='Name'
            onChange={(e) => {
              setBookerName(e.target.value);
            }}
          />
        </Form.Group>
      </Form>
      {!time || email.length === 0 || bookerName.length === 0 || !ticketCount || !ticketTotal || !date ? (
        <p>Please ensure you have completed all neccesary fields.</p>
      ) : (
        <Stripe ticketCount={ticketCount} ticketTotal={ticketTotal} handleSubmit={handleSubmit} />
      )}
    </div>
  );
};

export default BuyTickets;
