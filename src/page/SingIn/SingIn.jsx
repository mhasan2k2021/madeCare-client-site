import { Link, useLocation, useNavigate } from "react-router-dom";
import "./SingIn.css";
import { useContext } from "react";
import { AuthProvider } from "../../Context/AuthContexts";
import axios from "axios";

const SingIn = () => {
  const { logInUser } = useContext(AuthProvider);
  const navigate = useNavigate();
  const location = useLocation();
  console.log(location);
  const userLogInHandle = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    logInUser(email, password)
      .then((result) => {
        const loggedInUser = result.user;
        console.log(loggedInUser);
        const user = { email };

        // get access json web token(JWT)
        axios
          .post("https://made-care-server.vercel.app/jwt", user, {
            withCredentials: true,
          })
          .then((res) => {
            console.log(res.data);
            if (res?.data.success) {
              navigate(location?.state?.from?.pathname || "/");
              form.reset();
            }
          });
      })
      .catch((error) => console.error(error.massage));
  };
  return (
    <div className="sign_in_from_container">
      <div className="sign_up_form">
        <h4>Sign In</h4>
        <form onSubmit={userLogInHandle}>
          <div>
            <label>Email</label>
            <input type="email" name="email" placeholder="Email" required />
          </div>
          <div>
            <label>Password</label>
            <input
              type="password"
              placeholder="Password"
              name="password"
              required
            />
          </div>

          <button>Sing In</button>
          <p>
            Do not have account? <Link to={"/sign-up"}>Sign Up</Link>
          </p>
        </form>
        <div className="or_container">
          <hr />
          <span>or</span>
          <hr />
        </div>
        <div className="sing_up_social_icons">
          <div className="sing_up_img_container">
            <img
              src="https://res.cloudinary.com/dcmgay3nl/image/upload/v1706014093/madeCare/social-icons/facebook_4_hwkr8y.png"
              alt=""
            />
          </div>
          <div className="sing_up_img_container">
            <img
              src="https://res.cloudinary.com/dcmgay3nl/image/upload/v1706014093/madeCare/social-icons/google_3_w42vtf.png"
              alt=""
            />
          </div>
          <div className="sing_up_img_container">
            <img
              src="https://res.cloudinary.com/dcmgay3nl/image/upload/v1706014093/madeCare/social-icons/twitter_zt9gz3.png"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingIn;
