import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import { useEffect, useState } from "react";
import { getBooking, updateBooking } from "../../Services/bookingService";
import { Spinner } from "react-bootstrap";

const PaymentFailure = () => {
  const [bookingData, setBookingData] = useState();
  const [id, setId] = useState();

  useEffect(() => {
    getBooking()
      .then((res) => {
        setBookingData(res[res.length - 1]);
        setId(res[res.length - 1]._id);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (id) {
      updateBooking(id, { status: "failure" })
        .then((res) => {
          console.log(res);
        })
        .catch((err) => console.error(err));
    }
  });

  if (bookingData === undefined) {
    return (
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    );
  } else {
    return (
      <>
        <div style={{ textAlign: "center", margin: "20px" }}>
          <h1 style={{ color: "red" }}>Payment Failure</h1>
          <p>If you would like to see {bookingData.title}. Please return to the Listings page and try again.</p>
          <Link to='/listings'>
            <Button id='redirectbutton'>Go Back to Film Listing</Button>
          </Link>
        </div>
        <br />
        <br />
        <div style={{ textAlign: "center", margin: "20px" }}>
          <img
            id='compsaysno'
            src='https://i.pinimg.com/originals/80/60/af/8060afc95d8c7ffba0665b676ae65d44.gif'
            alt='computer says no gif'
          />
        </div>
        <br />
      </>
    );
  }
};

export default PaymentFailure;
