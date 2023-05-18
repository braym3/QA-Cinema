import { Button, Form } from "react-bootstrap";
import Stripe from "./Stripe";
import { useState } from "react";
import { createBooking } from "../../../Services/bookingService";

const BuyTickets = ({ time, singleFilmData, ticketTotal, ticketCount, tickets }) => {
  const [email, setEmail] = useState();
  const [bookerName, setBookerName] = useState();

  const booking = {
    bookerName: bookerName,
    email: email,
    numOfTickets: tickets,
    time: time,
    date: "20/05/23",
    price: ticketTotal,
    title: singleFilmData.title,
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
        Purchase Tickets for {singleFilmData.title} @ {time}{" "}
      </p>
      <p>Adult: {ticketCount.adult > 0 ? ticketCount.adult : 0}</p>
      <p>Concession: {ticketCount.concession > 0 ? ticketCount.concession : 0}</p>
      <p>Child: {ticketCount.child > 0 ? ticketCount.child : 0}</p>
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
        <Button
          onClick={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          Complete
        </Button>
      </Form>

      {!time || ticketCount > 0 ? (
        <>
          <p>Please select a time</p>
          <Button variant='danger' disabled>
            Checkout
          </Button>
        </>
      ) : (
        <Stripe ticketCount={ticketCount} ticketTotal={ticketTotal} />
      )}
    </div>
  );
};

export default BuyTickets;
