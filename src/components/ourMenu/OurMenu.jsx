import HomePage from "../pages/homePage/HomePage";
import Curry from "../pages/curry/Curry";
import SaladAppetizer from "../pages/saladAppetizer/SaladAppetizer";
import Special from "../pages/special/Special";
import "./ourMenu.scss";
import Lunch from "../pages/lunch/Lunch";
import Contactus from "../contactus/Contactus";
import Nanrice from "../pages/nanrice/Nanrice";
import Dinner from "../pages/dinner/Dinner";
import Drink from "../pages/drink/Drink";

const OurMenu = () => {
  return (
    <section id="menu" className="home-container">
      <HomePage />
      <Special />
      <Lunch />
      <SaladAppetizer />
      <Nanrice />
      <Curry />
      <Dinner />
      <Drink />
      <Contactus />
    </section>
  );
};

export default OurMenu;
