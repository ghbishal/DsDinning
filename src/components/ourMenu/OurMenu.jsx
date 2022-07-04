import HomePage from "../pages/homePage/HomePage";
import SaladAppetizer from "../pages/saladAppetizer/SaladAppetizer";
import Special from "../pages/special/Special";
import "./ourMenu.scss";

const OurMenu = () => {
  return (
    <section id="menu" className="home-container">
      <HomePage />
      <Special />
      <SaladAppetizer />
    </section>
  );
};

export default OurMenu;
