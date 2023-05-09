import "./App.css";
import Listings from "./Components/Listings/Listings";
import Home from "./Components/Home/Home";
import Discussion from "./Components/Discussion/Discussion";
import Info from "./Components/Info/FindUs";
import { Routes, Route } from "react-router";
import Navi from "./Components/Nav/Navi";
import About from "./Components/Info/About";
import FindUs from "./Components/Info/FindUs";

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
        <Route path="findus" element={<FindUs/>}/>
      </Routes>
      </div>
    </>
  );
};
export default App;