import "./App.css";
import Listings from "./Components/Listings/Listings";
import Home from "./Components/Home/Home";
import Discussion from "./Components/Discussion/Discussion";
import Info from "./Components/Info/FindUs";
import { Routes, Route } from "react-router";
import Navi from "./Components/Nav/Navi";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import FindUs from "./Components/Info/FindUs";
import PurchaseTickets from "./Components/Listings/PurchaseTickets";

const App = () => {
  return (
    <>
    <Navi/>
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='listings' element={<Listings />} />
        <Route path='discussion' element={<Discussion />} />
        <Route path='info' element={<Info />} />
        <Route path="about" element={<About/>}/>
        <Route path="contact" element={<Contact/>}/>
        <Route path="findus" element={<FindUs/>}/>
        <Route path='purchasetickets' element={<PurchaseTickets/>}/>
      </Routes>
      </div>
    </>
  );
};
export default App;