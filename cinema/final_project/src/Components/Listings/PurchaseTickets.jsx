import StripePayments from "./StripePayments";
// import AddTickets from "./AddTickets";
import SelectTime from "./SelectTime";
import SingleFilm from "./SingleFilm";
// import { useState } from "react";

const PurchaseTickets = () => {
  // const [time, selectTime] = useState();
  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "10px" }}>
        Purchase Tickets
      </h1>
      <SingleFilm />
      <SelectTime />
      <div id='screenalign'>
        {/* <AddTickets time={time} /> */}
        <StripePayments />
      </div>
    </>
  );
};

export default PurchaseTickets;
