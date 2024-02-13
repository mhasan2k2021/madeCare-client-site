import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// this is own style sheet
import "./Slider.css";

// import required modules
import { Autoplay } from "swiper/modules";
import { useEffect, useState } from "react";

const Slider = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://made-care-server.vercel.app/services")
      .then((res) => res.json())
      .then((data) => {
        setServices(data);
      });
  }, []);

  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={10}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      breakpoints={{
        640: {
          slidesPerView: 1,
          spaceBetween: 0,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 20,
        },
      }}
      modules={[Autoplay]}
      className="mySwiper"
    >
      {services.map((service) => (
        <SwiperSlide className="slider_card" key={service.category_id}>
          <div className="card">
            <div className="card_img_container">
              <img src={service.img} alt="" />
            </div>
            <div className="card_details">
              <h3>{service.heading}</h3>
              <p>{service.details}</p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
