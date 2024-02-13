import { Link } from "react-router-dom";
import "./AboutUs.css";
import { FcApproval } from "react-icons/fc";

const AboutUs = () => {
  return (
    <div className="about_us_container">
      <div className="about_us_grid">
        <div className="about_us_left">
          <img
            src="https://res.cloudinary.com/dcmgay3nl/image/upload/v1704912756/madeCare/doctor-image/oparation_excpdk.jpg"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dcmgay3nl/image/upload/v1704913076/madeCare/doctor-image/rogi_qdlmdv.jpg"
            alt=""
          />
          <img
            src="https://res.cloudinary.com/dcmgay3nl/image/upload/v1704913891/madeCare/doctor-image/8861946_aarpcb.png"
            alt=""
          />
        </div>
        <div className="about_us_right">
          <h3>About Us</h3>
          <h2>The Great Place Of Medical Hospital Center.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
            ipsum susp endisse ultrices gravida tempor incididu ut labore et
            dolore magna aliqua. Quis ipsum susp endisse ultrices gravida.
          </p>
          <ul>
            <li>
              <FcApproval></FcApproval>
              <p>Ambulance Services</p>
            </li>
            <li>
              <FcApproval></FcApproval>
              <p>Pharmacy On Clinic</p>
            </li>
            <li>
              <FcApproval></FcApproval>
              <p>24/7 Medical Emergency</p>
            </li>
            <li>
              <FcApproval></FcApproval>
              <p>Oxizen On Wheel</p>
            </li>
            <li>
              <FcApproval></FcApproval>
              <p>On Duty Doctors</p>
            </li>
          </ul>
          <Link>Discover More</Link>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
