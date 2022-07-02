import AboutUs from "../aboutus/AboutUs";
import LOGO from "../../assets/DsLogo.png";
import "./home.scss";
import Coupons from "../coupons/Coupons";
import Contactus from "../contactus/Contactus";

const Home = () => {
  return (
    <section id="home" className="home-container">
      <div className="container">
        <div className="main-logo">
          <img src={LOGO} alt="" />
          <a href="#aboutus" className="box">
            テイクアウトOK
          </a>
        </div>
      </div>
      <AboutUs />
      <Coupons />
      <Contactus />
    </section>
  );
};

export default Home;
