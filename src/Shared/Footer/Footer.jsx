import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const getEmail = { email };
    fetch("http://localhost:5000/subscribe", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(getEmail),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
      });
  };
  return (
    <div className="footer_container">
      <div className="subscribe">
        <h4>Subscribe for the Exclusive Updates!</h4>
        <form onSubmit={handleSubscribe} className="subscribe_input">
          <input type="email" name="email" placeholder="Email" />
          <button>Subscribe</button>
        </form>
      </div>
      <div className="footer_logo_container">
        <img
          className="footer_logo"
          src="https://res.cloudinary.com/dcmgay3nl/image/upload/v1704747089/madeCare/fav-icon/logo/madicare-logo_pw96ab.png"
          alt=""
        />
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link>Blogs</Link>
          </li>
          <li>
            <Link>Contact</Link>
          </li>
          <li>
            <Link>About Us</Link>
          </li>
          <li>
            <Link to={"/appointment"}>Appointment</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
