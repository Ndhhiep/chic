import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import "./feedback.css";
const Feedback = () => {
  const [showFeedback, setShowFeedback] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [feedbackError, setFeedbackError] = useState("");
  const toggleFeedback = () => {
    setShowFeedback(!showFeedback);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const email = e.target.email.value;
    const feedback = e.target.feedback.value;
    const emailPattern = /\S+@\S+\.\S+/;
    let isValid = true;

    setEmailError("");
    setFeedbackError("");

    if (!email) {
      setEmailError("Please fill in your email.");
      isValid = false;
    } else if (!emailPattern.test(email)) {
      setEmailError("Please enter a valid email address.");
      isValid = false;
    }

   
    if (!feedback) {
      setFeedbackError("Please fill in your feedback.");
      isValid = false;
    }

    if (isValid) {
      setShowFeedback(false);
      alert("Thank you to give feeback!");
    }
  };

  return (
    <>
      <div className="fb-box" onClick={toggleFeedback}>
        <FontAwesomeIcon icon={faComment} className="cmt-icon" />
      </div>
      {showFeedback && (
        <div className="feedback-form">
          <form onSubmit={handleSubmit}>
            <div className="textarea-field">
              <textarea
                name="feedback"
                id="feedback"
                placeholder="Enter your feedback here..."
              ></textarea>
              {feedbackError && (
                <span className="error-message">{feedbackError}</span>
              )}
            </div>
            <div className="email-field">
              <div className="field-top">
                <p>Email:</p>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Leave your email for us to contact"
                />
              </div>
              <div className="fill-bot">
                {emailError && (
                  <span className="error-message" id="email-error">{emailError}</span>
                )}
              </div>
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      )}
    </>
  );
};

export default Feedback;
