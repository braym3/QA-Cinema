// import { useState } from "react";
import StripePayments from "./StripePayments";
import AddTickets from "./AddTickets";
import SelectTime from "./SelectTime";
import SingleFilm from "./SingleFilm";

const PurchaseTickets = () => {
  // const [adultTickets, setAdultTickets] = useState(0)
  // const [childTickets, setChildTickets] = useState(0)
  // const [concessionTickets, setConcessionTickets] = useState(0)

  return (
    <>
    <h1 style={{textAlign: "center", marginTop: "10px"}}>Purchase Tickets</h1>
    <SingleFilm/>
      <SelectTime />
      <div id="screenalign">
        <AddTickets />
        <StripePayments />
      </div>
    </>
  );
};

export default PurchaseTickets;
