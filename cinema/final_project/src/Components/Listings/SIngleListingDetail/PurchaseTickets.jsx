import AddTickets from "./AddTickets";
import BuyTickets from "./BuyTickets";
import SelectTime from "./SelectTime";
import SingleFilm from "./SingleFilm";
import { useState, useEffect } from "react";
import { getFilmByID } from "../../../Services/filmsService";
import Spinner from "react-bootstrap/Spinner";
import { useParams } from "react-router-dom";

const PurchaseTickets = () => {
  const [time, selectTime] = useState();
  const [date, setDate] = useState();
  const [tickets, setTickets] = useState(0);
  const [ticketTotal, setTicketTotal] = useState(0);
  const [ticketCount, setTicketCount] = useState({});
  const { filmID } = useParams();
  const [singleFilmData, setSingleFilmData] = useState();

  useEffect(() => {
    getFilmByID(filmID).then((film) => {
      setSingleFilmData(film);
    });
  }, [filmID]);

  if (singleFilmData === undefined) {
    return (
      <Spinner animation='border' role='status'>
        <span className='visually-hidden'>Loading...</span>
      </Spinner>
    );
  } else {
    return (
      <>
        <img
          src={singleFilmData.classificationURL}
          alt={`${singleFilmData.classification} rating icon`}
          style={{ float: "left", height: "40px", marginLeft: "20px", marginTop: "10px" }}
        />
        <h1 style={{ textAlign: "center", marginTop: "10px", marginLeft: "-20px" }}>{singleFilmData.title}</h1>
        <div>
          <SingleFilm singleFilmData={singleFilmData} />
        </div>
        <h2 style={{ textAlign: "center", marginTop: "10px" }}>Time &amp; Date</h2>
        <div>
          <SelectTime selectTime={selectTime} setDate={setDate} date={date} />
        </div>
        <h2 style={{ textAlign: "center", marginTop: "10px" }}>Purchase Tickets</h2>
        <div id='payments'>
          <AddTickets
            setTicketCount={setTicketCount}
            ticketCount={ticketCount}
            setTickets={setTickets}
            setTicketTotal={setTicketTotal}
          />
          <BuyTickets
            time={time}
            date={date}
            singleFilmData={singleFilmData}
            ticketTotal={ticketTotal}
            ticketCount={ticketCount}
            tickets={tickets}
          />
        </div>
      </>
    );
  }
};

export default PurchaseTickets;
