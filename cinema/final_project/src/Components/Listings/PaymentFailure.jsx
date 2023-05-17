import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const PaymentFailure = () => {
  return (
    <div style={{ textAlign: "center", margin: "10px" }}>
      <h1 style={{ color: "red" }}>Payment Failure</h1>
      <p>Please return to the Listings page an try again</p>
      <Link to='/listings'>
        <Button id='redirectbutton'>Go Back to Film Listing</Button>
      </Link>
    </div>
  );
};

export default PaymentFailure;
