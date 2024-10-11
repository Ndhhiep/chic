import "./footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { useEffect } from "react";
const Footer = () => {
  useEffect(() => {
    const localTimeElement = document.getElementById("local-time");


    function updateTime() {
      const now = new Date();
      const timeString = now.toLocaleTimeString();
      const dateString = now.toLocaleDateString();
      localTimeElement.textContent = `Date: ${dateString}, Time: ${timeString}`;
    }

 
    updateTime();


    const intervalId = setInterval(updateTime, 1000);

  
    return () => clearInterval(intervalId);
  }, []);

  const url = process.env.PUBLIC_URL;

  return (
    <>
      <div className="footer">
        <div className="footer-box">
          <div className="footer-title">
            <img src={`${url}/logo.png`} alt="" />
          </div>
          <div className="footer-content">
            <div className="footer-content-box">
              <FontAwesomeIcon icon={faLocationDot} />
              <p>FPT Aptech</p>
            </div>

            <div className="footer-content-box">
              <FontAwesomeIcon icon={faPhone} />
              <p>FPT Aptech</p>
            </div>

            <div className="footer-content-box">
              <FontAwesomeIcon icon={faEnvelope} />
              <p>FPT Aptech</p>
            </div>
          </div>
        </div>

        <div className="footer-box">
          <div className="footer-title">
            <strong>Follow Us</strong>
          </div>
          <div className="footer-content">
            <div className="footer-content-box">
              <FontAwesomeIcon icon={faFacebook} />
              <p>FPT Aptech</p>
            </div>

            <div className="footer-content-box">
              <FontAwesomeIcon icon={faInstagram} />
              <p>FPT Aptech</p>
            </div>

            <div className="footer-content-box">
              <FontAwesomeIcon icon={faYoutube} />
              <p>FPT Aptech</p>
            </div>
          </div>
        </div>

        <div className="footer-box">
          <div className="footer-title">
            <strong>Local Time</strong>
          </div>
          <div className="footer-content">
            <div className="footer-content-box">
              <p id="local-time"></p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
