import { useEffect, useState } from "react";
import { getBooking, updateBooking } from "../../Services/bookingService";
import { Spinner } from "react-bootstrap";

const PaymentSuccess = () => {
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
      console.log(id, "in use effect");
      updateBooking(id, { status: "success" })
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
        <h1 style={{ textAlign: "center" }}>Payment Success</h1>
        <div id='successpage'>
          <div id='success'>
            <h2 style={{ textAlign: "center" }}>Congrats {bookingData.bookerName}!</h2>
            <p>
              You're going to see {bookingData.title} @ {bookingData.time} on {bookingData.date}
            </p>
            <p>Total: £{bookingData.price}</p>
            <p>Number of Tickets: {bookingData.numOfTickets}</p>
            <p>If you need any assistance, please reach out to us via the contact page.</p>
            <p>Here is your Booking ID:{bookingData._id}</p>
          </div>
          <div id='postsuccess'>
            <img src={bookingData.filmPoster} alt='film poster' />
          </div>
        </div>
      </>
    );
  }
};

export default PaymentSuccess;
