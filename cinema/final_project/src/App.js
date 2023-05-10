import "./App.css";
import Listings from "./Components/Listings/Listings";
import Home from "./Components/Home/Home";
import Discussion from "./Components/Discussion/Discussion";
import Info from "./Components/Info/FindUs";
import { Routes, Route } from "react-router";
import {  Navigate } from "react-router-dom";
import Navi from "./Components/Nav/Navi";
import About from "./Components/Info/About";
import FindUs from "./Components/Info/FindUs";
import PurchaseTickets from "./Components/Listings/PurchaseTickets";

const App = () => {
  return (
    <>
<<<<<<< HEAD
    <Navi/>
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='listings' element={<Listings />} />
        <Route path='discussion' element={<Discussion />} />
        <Route path='info' element={<Info />} />
        <Route path="about" element={<About/>}/>
        <Route path="/findus*" element={<FindUs/>}/>
        <Route path='purchasetickets' element={<PurchaseTickets/>}/>
        <Route path="*" element={<Navigate to="/"/>} /> 
      </Routes>
=======
      <Navi />
      <div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='listings' element={<Listings />} />
          <Route path='discussion' element={<Discussion />} />
          <Route path='info' element={<Info />} />
          <Route path='about' element={<About />} />
          <Route path='findus' element={<FindUs />} />
          <Route path='purchasetickets/:filmID' element={<PurchaseTickets />} />
        </Routes>
>>>>>>> 399b5973ee14a71f0695c493ff19e9ebdf883387
      </div>
    </>
  );
};
export default App;
