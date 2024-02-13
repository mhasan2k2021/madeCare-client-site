import { useEffect, useState } from "react";
import "./FaqQuestion.css";
import { FaMinus, FaPlus } from "react-icons/fa6";

const FaqQuestion = () => {
  const [open, setOpen] = useState(null);
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    fetch("https://made-care-server.vercel.app/faq")
      .then((res) => res.json())
      .then((data) => {
        setQuestions(data);
      });
  }, []);

  const handleFaq = (id) => {
    if (open == id) {
      return setOpen(null);
    } else {
      setOpen(id);
    }
  };

  return (
    <div>
      {questions.map((question) => (
        <div key={question._id}>
          <div
            className={`question_container ${
              open == question._id ? "open" : ""
            }`}
          >
            <div className="question" onClick={() => handleFaq(question._id)}>
              <div className="plus_minus">
                {open == question._id ? <FaMinus></FaMinus> : <FaPlus></FaPlus>}
              </div>
              <h6 className="faq_question">{question.faq}</h6>
            </div>
            <p className={`faq_answer ${open == question._id ? "ans" : ""}`}>
              {question.answer}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FaqQuestion;
