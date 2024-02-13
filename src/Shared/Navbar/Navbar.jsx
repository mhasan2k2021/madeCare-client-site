import "./Navbar.css";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaMagnifyingGlass, FaXmark } from "react-icons/fa6";
import { useEffect, useState } from "react";
import { AuthProvider } from "../../Context/AuthContexts";

const Navbar = () => {
  const { user, userLogOut } = useContext(AuthProvider);

  const handleLogOut = () => {
    const makeConfirm = confirm("Are you sure to sing out?");
    if (makeConfirm === true) {
      userLogOut()
        .then(() => {
          alert("successfully sing out");
          toggleMenuClose();
        })
        .catch((error) => console.error(error.massage));
    } else {
      return;
    }
  };

  const [open, setOpen] = useState(false);
  const toggleMenuClose = () => {
    setOpen(false);
  };
  const toggleMenuOpen = () => {
    setOpen(true);
  };

  const [fixed, setFixed] = useState(false);
  const scrollFixed = () => {
    if (window.scrollY > 100) {
      setFixed(true);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollFixed);
  }, []);

  return (
    <div className={`navbar_container_section ${fixed ? "sticky" : ""}`}>
      <Link to={"/"}>
        <img
          className="logo"
          src="https://res.cloudinary.com/dcmgay3nl/image/upload/v1704747089/madeCare/fav-icon/logo/madicare-logo_pw96ab.png"
          alt="MadeCare"
        />
      </Link>
      <div className="menuOpen ">
        {open ? (
          <FaXmark onClick={toggleMenuClose}></FaXmark>
        ) : (
          <FaBars onClick={toggleMenuOpen}></FaBars>
        )}
      </div>
      <div className={`menu_container ${open ? "menu_open" : ""}`}>
        <Link onClick={toggleMenuClose} to={"/"}>
          Home
        </Link>
        <Link onClick={toggleMenuClose}>Blog</Link>
        <Link onClick={toggleMenuClose}>Contact</Link>
        {user && (
          <Link onClick={toggleMenuClose} to={"/my-appointment"}>
            My-Appointment
          </Link>
        )}
        <div className="appointment">
          <FaMagnifyingGlass className="sm-none"></FaMagnifyingGlass>
          {user ? (
            <div onClick={toggleMenuClose} className="appointment">
              <Link className="sign-btn" onClick={handleLogOut}>
                Sign Out
              </Link>
              <Link to={"/appointment"}>Appointment</Link>
            </div>
          ) : (
            <>
              <Link
                onClick={toggleMenuClose}
                className="sign-btn"
                to={"/sign-in"}
              >
                Sign In
              </Link>
              <Link
                onClick={toggleMenuClose}
                className="sign-btn"
                to={"/sign-up"}
              >
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
