import "./TopNav.css";
import {
  FaEnvelope,
  FaFacebookF,
  FaGooglePlusG,
  FaLocationDot,
  FaPhone,
  FaXTwitter,
  FaYoutube,
} from "react-icons/fa6";

const TopNav = () => {
  return (
    <div className="top_navbar_container">
      <div className="address_container">
        <div className="contact">
          <FaPhone></FaPhone>
          <p>+1234567890</p>
        </div>
        <div className="contact">
          <FaEnvelope></FaEnvelope>
          <p>youremail@gmail.com</p>
        </div>
        <div className="contact">
          <FaLocationDot></FaLocationDot>
          <p>3255 big school Street, NY 3546, USA </p>
        </div>
      </div>
      <div className="social_icons">
        <FaFacebookF></FaFacebookF>
        <FaXTwitter></FaXTwitter>
        <FaYoutube></FaYoutube>
        <FaGooglePlusG></FaGooglePlusG>
      </div>
    </div>
  );
};

export default TopNav;
