import { Button } from "react-bootstrap";
// import { Link } from "react-router-dom";
import Stripe from "./Stripe";

const BuyTickets = ({ time, singleFilmData, tickets, ticketTotal, ticketCount }) => {
  return (
    <div id='buytickets'>
      <h3 style={{ color: "white", textAlign: "center" }}>Basket</h3>
      <p style={{ color: "white" }}>
        Purchase Tickets for {singleFilmData.title} @ {time}{" "}
      </p>
      <p>Adult: {ticketCount.adult > 0 ? ticketCount.adult : 0}</p>
      <p>Concession: {ticketCount.concession > 0 ? ticketCount.concession : 0}</p>
      <p>Child: {ticketCount.child > 0 ? ticketCount.child : 0}</p>
      {!time || !tickets ? (
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
