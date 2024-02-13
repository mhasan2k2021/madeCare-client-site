import { Outlet } from "react-router-dom";
import Navbar from "../../Shared/Navbar/Navbar";
import TopNav from "../../Shared/TopNav/TopNav";
import Footer from "../../Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <TopNav></TopNav>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
