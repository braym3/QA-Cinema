import AddTickets from "./AddTickets";
import BuyTickets from "./BuyTickets";
import SelectTime from "./SelectTime";
import SingleFilm from "./SingleFilm";
import { useState, useEffect } from "react";
import { getFilmByID } from "../../../Services/filmsCalls";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";

const PurchaseTickets = () => {
  const [time, selectTime] = useState();
  const [tickets, setTickets] = useState(false);
  const [ticketTotal, setTicketTotal] = useState(0);
  const [ticketCount, setTicketCount] = useState({});
  const [filmData, setFilmData] = useState();
  const { filmID } = useParams();
  const [singleFilmData, setSingleFilmData] = useState();

  useEffect(() => {
    getFilmByID(filmID).then((film) => {
      setSingleFilmData(film);
    });
  }, [filmID]);

  console.log(filmID);
  console.log(singleFilmData, "data");

  if (singleFilmData === undefined) {
    return (
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    );
  } else {
    return (
      <>
        <h1 style={{ textAlign: "center", marginTop: "10px" }}>{singleFilmData.title}</h1>
        <div>
          <SingleFilm singleFilmData={singleFilmData} />
        </div>
        <h2 style={{ textAlign: "center", marginTop: "10px" }}>Select Time</h2>
        <div>
          <SelectTime selectTime={selectTime} />
        </div>
        <h2 style={{ textAlign: "center", marginTop: "10px" }}>Purchase Tickets</h2>
        <div id='payments'>
          <AddTickets setTickets={setTickets} setTicketCount={setTicketCount} />
          <BuyTickets
            time={time}
            singleFilmData={singleFilmData}
            tickets={tickets}
            ticketTotal={ticketTotal}
            ticketCount={ticketCount}
          />
        </div>
      </>
    );
  }
};

export default PurchaseTickets;
