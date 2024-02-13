import AboutUs from "../AboutUs/AboutUs";
import Faq from "../FAQ/FAQ";
import Services from "../Services/Services";
import Welcome from "../Welcome/Welcome";
import "./Home.css";
const Home = () => {
  return (
    <div className="home_page_container_section">
      <Welcome></Welcome>
      <AboutUs></AboutUs>
      <Services></Services>
      <Faq></Faq>
    </div>
  );
};

export default Home;
