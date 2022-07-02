import {
  BrowserRouter as Router,
  Switch,
  Routes,
  Route,
  Redirect,
  Navigate,
  useParams,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import AboutUs from "./components/aboutus/AboutUs";
import OurMenu from "./components/ourMenu/OurMenu";
import Coupons from "./components/coupons/Coupons";
import Contactus from "./components/contactus/Contactus";

function App() {
  return (
    // <div className="App">
    //   <Navbar />
    //   <Home />
    // </div>

    <div className="App">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
          </Route>
          <Route path="/menu" element={<OurMenu />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
