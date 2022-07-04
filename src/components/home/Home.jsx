import LOGO from "../../assets/DsLogo.png";
import "./home.scss";
import Coupons from "../coupons/Coupons";
import Contactus from "../contactus/Contactus";
import AboutUs from "../aboutus/AboutUs";
import HomePage from "../pages/homePage/HomePage";

const Home = () => {
  return (
    <section id="home" className="home-container">
      <HomePage />
      <AboutUs />
      <Coupons />
      <Contactus />
    </section>
  );
};

export default Home;
