import "./App.css";
import Listings from "./Components/Listings/Listings";
import Home from "./Components/Home/Home";
import Discussion from "./Components/Discussion/Discussion";
import Info from "./Components/Info/InfoSidebar";
import { Routes, Route } from "react-router";
import { Navigate } from "react-router-dom";
import Navi from "./Components/Nav/Navi";
import About from "./Components/About/About";
import InfoSidebar from "./Components/Info/InfoSidebar";
import PurchaseTickets from "./Components/Listings/SIngleListingDetail/PurchaseTickets";
import Footer from "./Components/Footer/Footer";
import Contact from "./Components/Contact/Contact.jsx";
import PaymentSuccess from "./Components/Listings/PaymentSuccess";
import PaymentFailure from "./Components/Listings/PaymentFailure";

const App = () => {
  return (
    <>
      <Navi />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='listings' element={<Listings />} />
          <Route path='discussion' element={<Discussion />} />
          <Route path='info' element={<Info />} />
          <Route path='about' element={<About />} />
          <Route path='contact' element={<Contact />} />
          <Route path='/findus*' element={<InfoSidebar />} />
          <Route path='purchasetickets/:filmID' element={<PurchaseTickets />} />
          <Route path='/purchasetickets/success' element={<PaymentSuccess />} />
          <Route path='/purchasetickets/failure' element={<PaymentFailure />} />
          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};
export default App;
