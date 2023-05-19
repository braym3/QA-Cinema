import Button from "react-bootstrap/Button";
import { useState } from "react";

const AddTickets = ({ setTicketCount, setTickets, setTicketTotal }) => {
  const [adultCount, setAdultCount] = useState(0);
  const [childCount, setChildCount] = useState(0);
  const [concessionCount, setConcessionCount] = useState(0);

  return (
    <div id='addticks'>
      <h3 style={{ color: "white", textAlign: "center" }}>Add Tickets</h3>
      <div id='add' style={{ gridRow: 2 }}>
        <h3>Adult - (£7)</h3>
        <p>
          <Button
            variant='danger'
            onClick={() => {
              if (adultCount > 0) setAdultCount(adultCount - 1);
            }}
          >
            -
          </Button>{" "}
          {adultCount}{" "}
          <Button
            variant='success'
            onClick={() => {
              setAdultCount(adultCount + 1);
            }}
          >
            +
          </Button>
        </p>
      </div>
      <div id='add' style={{ gridRow: 3 }}>
        <h3>Child - (£5)</h3>
        <p>
          <Button
            variant='danger'
            onClick={() => {
              if (childCount > 0) setChildCount(childCount - 1);
            }}
          >
            -
          </Button>{" "}
          {childCount}{" "}
          <Button variant='success' onClick={() => setChildCount(childCount + 1)}>
            +
          </Button>
        </p>
      </div>
      <div id='add' style={{ gridRow: 4 }}>
        <h3>Concession - (£5)</h3>
        <p>
          <Button
            variant='danger'
            onClick={() => {
              if (concessionCount > 0) setConcessionCount(concessionCount - 1);
            }}
          >
            -
          </Button>{" "}
          {concessionCount}{" "}
          <Button variant='success' onClick={() => setConcessionCount(concessionCount + 1)}>
            +
          </Button>
        </p>
      </div>
      <div style={{ gridRow: 5 }}>
        <p>
          {" "}
          <Button
            variant={adultCount > 0 || childCount > 0 || concessionCount > 0 ? "success" : "primary"}
            onClick={() => {
              setTicketCount({
                adult: adultCount,
                concession: concessionCount,
                child: childCount,
              });
              setTickets(adultCount + childCount + concessionCount);
              setTicketTotal(adultCount * 7 + childCount * 5 + concessionCount * 5);
            }}
          >
            Add To Basket
          </Button>
          <Button
            style={{ margin: "10px" }}
            variant='danger'
            onClick={() => {
              setTicketCount(0);
              setChildCount(0);
              setAdultCount(0);
              setConcessionCount(0);
            }}
          >
            Reset
          </Button>
        </p>
      </div>
    </div>
  );
};

export default AddTickets;
