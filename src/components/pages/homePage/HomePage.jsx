import "./homepage.scss";
import LOGO from "../../../assets/DsLogo.png";

const HomePage = () => {
  return (
    <section id="homePage">
      <div className="container">
        <div className="main-logo">
          <img src={LOGO} alt="" />
          <a href="#aboutus" className="box">
            テイクアウトOK
          </a>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
