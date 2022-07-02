import "./special.scss";
import special from "../../../database/special";

// Import Swiper React components
import {Swiper, SwiperSlide} from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {Pagination, Autoplay} from "swiper";

const Special = () => {
  return (
    <section id="special">
      <div className="special-container">
        <h1>Our Special</h1>

        <Swiper
          className="container"
          // install Swiper modules
          modules={[Pagination, Autoplay]}
          spaceBetween={40}
          slidesPerView={1}
          loop={true}
          pagination={{clickable: true}}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
        >
          {special.map(({id, title, img, desc}) => {
            return (
              <SwiperSlide key={id} className="items">
                <img src={img} className="photo" alt="tandoor" />

                <div className="food-lable">
                  <h5 className="food-name">{title}</h5>
                  <p className="description">{desc}</p>
                </div>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </section>
  );
};

export default Special;
