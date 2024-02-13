import { Link } from "react-router-dom";
import "./Welcome.css";
const Welcome = () => {
  return (
    <div className="welcome_section_container">
      <div className="welcome-grid">
        <div className="welcome_left">
          <h4>Welcome to MadeCare</h4>
          <h1>We Are Committed To Your Health</h1>
          <p>
            It is a established fact that a reader will be distracted by the
            content of a page when looking at this layout.
          </p>
          <Link>Meet A doctor</Link>
          <div className="review_count">
            <div className="review">
              <p>355k+</p>
              <p>Recovered Patients</p>
            </div>
            <div className="review">
              <p>98%</p>
              <p>Good Review</p>
            </div>
            <div className="review">
              <p>120+</p>
              <p>Popular Doctors</p>
            </div>
          </div>
        </div>
        <div className="welcome_right">
          <img
            src="https://res.cloudinary.com/dcmgay3nl/image/upload/v1704906422/madeCare/doctor-image/wepik-export-20240104165714zdtO_p1u93s.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Welcome;
