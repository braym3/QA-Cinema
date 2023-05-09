import "./App.css";
import Listings from "./Components/Listings/Listings";
import Home from "./Components/Home/Home";
import Discussion from "./Components/Discussion/Discussion";
import Info from "./Components/Info/Info";
import { Routes, Route } from "react-router";
import Navi from "./Components/Nav/Navi";

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
      </Routes>
      </div>
    </>
  );
};
export default App;