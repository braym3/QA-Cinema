import StripePayments from "./StripePayments";
import AddTickets from "./AddTickets";
import SelectTime from "./SelectTime";
import SingleFilm from "./SingleFilm";
import { useState } from "react";

const PurchaseTickets = () => {
  const [filmTime, setFilmTime] = useState();
  const [filmData, setFilmData] = useState();

  return (
    <>
      <h1 style={{ textAlign: "center", marginTop: "10px" }}>
        Purchase Tickets
      </h1>
      <SingleFilm setFilmData={setFilmData} filmData={filmData} />
      <SelectTime setFilmTime={setFilmTime} />
      <div id='screenalign'>
        <AddTickets filmData={filmData} filmTime={filmTime} />
        <StripePayments />
      </div>
    </>
  );
};

export default PurchaseTickets;
