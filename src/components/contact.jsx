import Header from "./header";
import Footer from "./footer";
import Feedback from "./feedback";
import Download from "./download";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEarthAmericas,
  faPhone,
  faEnvelope as faSolidEnvelope,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";
import { faMap, faEnvelope as faRegularEnvelope, faClock } from "@fortawesome/free-regular-svg-icons";
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import "./contact.css";
const Contact = () => {
  return (
    <>
      <Header />
      <Feedback />
      <Download />
      <div className="contact">
        <h1>Contact Channels</h1>
        <p className="contact-intro">
          Follow us on social media channels and contact us if you need help !
        </p>
        <div className="contact-channels">
          <div className="contact-channels-box">
            <div className="channels-title">
              <FontAwesomeIcon
                icon={faEarthAmericas}
                className="channels-title-icon"
              />
              <p className="channels-title-text">Social media channels</p>
            </div>
            <div className="channels-content">
              <div className="channels-content-row">
                <div className="icon-box">
                  <FontAwesomeIcon icon={faFacebook} />
                </div>

                <p>Chic Lighting & Design</p>
              </div>

              <div className="channels-content-row">
                <div className="icon-box">
                  <FontAwesomeIcon icon={faInstagram} />
                </div>
                <p>Chic Lighting & Design</p>
              </div>

              <div className="channels-content-row">
                <div className="icon-box">
                  <FontAwesomeIcon icon={faYoutube} />
                </div>
                <p>Chic Lighting & Design</p>
              </div>
            </div>
          </div>

          <div className="contact-channels-box">
            <div className="channels-title">
              <FontAwesomeIcon
                icon={faAddressBook}
                className="channels-title-icon"
              />
              <p className="channels-title-text">Traditional Contacts</p>
            </div>
            <div className="channels-content">
              <div className="channels-content-row">
                <div className="icon-box">
                  <FontAwesomeIcon icon={faPhone} />
                </div>

                <p>Chic Lighting & Design</p>
              </div>

              <div className="channels-content-row">
                <div className="icon-box">
                  <FontAwesomeIcon icon={faSolidEnvelope} />
                </div>

                <p>Chic Lighting & Design</p>
              </div>
            </div>
          </div>
        </div>

        <h1>Visit Us</h1>
        <div className="visit-content">
          <div className="visit-content-map">
            <iframe
              width="100%"
              height="400"
              style={{ border: 0 }}
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.459056515688!2d106.6636383!3d10.786472!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752feb31e24595%3A0xb3d6bce53f82a7c9!2sFPT%20Aptech!5e0!3m2!1sen!2s!4v1697041234567!5m2!1sen!2s"
              allowFullScreen
            ></iframe>
          </div>
          <div className="visit-content-box">
            <div className="visit-title">
              <FontAwesomeIcon icon={faMap} className="visit-icon" />
              <h1>How to Find Us</h1>
            </div>
            <div className="visit-text">
                <p >Chic Lighting & Design</p>
            </div>
           

            <div className="visit-title">
              <FontAwesomeIcon icon={faClock} className="visit-icon" />
              <h1>When to Visit</h1>
            </div>
            <div className="visit-text">
                <p >Monday to Friday: 8am-5pm</p>
                <p >Saturday: 9am-5pm</p>
                <p >Sunday: Closed</p>
            </div>  

            <div className="visit-title">
              <FontAwesomeIcon icon={faRegularEnvelope} className="visit-icon" />
              <h1>How to get in touch</h1>
            </div>
            <div className="visit-text">
                <p>We make sure to respond to every enquiry within 48 hours</p>
                <p>Please mail us on <strong>Chic Lighting & Design</strong></p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Contact;
