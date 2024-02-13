import { Link, useNavigate } from "react-router-dom";
import "./SingUp.css";
import { useContext } from "react";
import { AuthProvider } from "../../Context/AuthContexts";

const SingUp = () => {
  const navigate = useNavigate();
  const { createUser, updateUserInfo } = useContext(AuthProvider);
  const handleSingUp = (event) => {
    event.preventDefault();
    const form = event.target;
    const displayName = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const photoURL = form.photoURL.value;
    console.log(displayName, email, password, photoURL);
    const addUserInfo = { displayName: displayName, photoURL: photoURL };
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        updateUserInfo(addUserInfo)
          .then(() => {})
          .catch((error) => console.error(error));
        navigate("/");

        form.reset();
      })
      .catch((error) => console.error(error.massage));
  };
  return (
    <div className="sign_up_from_container">
      <div className="sign_up_form">
        <h4>Sign Up</h4>
        <form onSubmit={handleSingUp}>
          <div>
            <label>Name</label>
            <input type="text" name="name" placeholder="Name" required />
          </div>
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
          <div>
            <label>Photo URL</label>
            <input
              type="text"
              name="photoURL"
              placeholder="Photo URL"
              required
            />
          </div>
          <button>Sing Up</button>
          <p>
            Already have account? <Link to={"/sign-in"}>Sign In</Link>
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

export default SingUp;
