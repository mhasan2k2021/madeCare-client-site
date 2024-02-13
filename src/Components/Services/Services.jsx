import Slider from "../Slider/Slider";
import "./Services.css";

const Services = () => {
  return (
    <div className="services_container_section">
      <div className="services_heading_container">
        <h4>Our Services</h4>
        <h2>Our Medical Service</h2>
      </div>
      <div className="service_slider_container">
        <Slider></Slider>
      </div>
    </div>
  );
};

export default Services;
