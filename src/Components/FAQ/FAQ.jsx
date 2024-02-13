import FaqQuestion from "../FaqQuestion/FaqQuestion";
import "./FAQ.css";

const Faq = () => {
  return (
    <div className="faq_section_container">
      <div className="faq_heading_container">
        <h4>FAQ</h4>
        <h3>Frequently Asked Questions</h3>
      </div>
      <div className="faq_grid">
        <div className="faq_question_container">
          <FaqQuestion></FaqQuestion>
        </div>
        <div className="faq_img_container">
          <div className="bold_filed"></div>
          <div className="border_filed"></div>
          <img
            src="https://res.cloudinary.com/dcmgay3nl/image/upload/v1705381447/madeCare/faq-img/doctorPatient_eihkfh.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Faq;
