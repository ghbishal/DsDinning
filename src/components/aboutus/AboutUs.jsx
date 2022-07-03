import "./aboutUs.scss";
import imgright from "../../assets/imgright.png";
import tandoor from "../../assets/tandoor.jpg";
import Special from "../pages/special/Special";

const AboutUs = () => {
  return (
    <section id="aboutus">
      <div className="bg-pattern01">
        <div className="aboutus ">
          <div className="row-1">
            <div className="about__txt">
              <h1>ABOUT</h1>
              <p>
                ようこそ DSDINING
                <br />
                DSダイニングは本格ネパール・インド料理のお店です。
              </p>
            </div>
            <div className="about__img">
              <img src={imgright} alt="" />
            </div>
          </div>
          <div className="row-2">
            <div className="about__img">
              <img src={tandoor} alt="set1" />
            </div>
            <div className="about__txt">
              <p>
                お一人様でも、家族連れの方も、友達とご一緒でも、落ち着いた店内でシェフの料理を味わうことができます。
                <br />
                様々なカレーの種類があり、どれもがシェフのおすすめです！
                <br />
                皆さまのお越しを心よりお待ちしております！
              </p>
            </div>
          </div>
        </div>
      </div>
      <Special />
    </section>
  );
};

export default AboutUs;
