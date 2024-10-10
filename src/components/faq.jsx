import Download from "./download";
import Feedback from "./feedback";
import Footer from "./footer";
import Header from "./header";
import './faq.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQ, faA } from "@fortawesome/free-solid-svg-icons";

import faqData from '../data/faq.json'
const Faq = () => {
    return ( 
        <>
            <Header/>
            <Feedback/>
            <Download/>   
            <div className="faq">
                <div className="faq-intro">
                    <h1>FAQ ! Do you have some questions ?</h1>
                    <p className="faq-intro-text">Welcome to <strong>Chic Lighting & Design </strong> ! We happy to assist you. Here are some frequently asked questions from customers. If you cant find the answer to your problem, please contact us.</p>
                </div>

                <hr className="centered-hr"/>

                <div className="faq-content">
                    {Object.keys(faqData).map((category, index) => (
                        <div key={index} className="faq-content-object">
                            <h1>{category}</h1>
                            {faqData[category].map((item, idx) => (
                                <div key={idx} className="faq-content-qa">
                                    <div className="faq-content-qa-q">
                                        <FontAwesomeIcon icon={faQ} className="faq-qIcon" />
                                        <strong>{item.q}</strong>
                                    </div>
                                    <div className="faq-content-qa-a">
                                        <FontAwesomeIcon icon={faA} className="faq-aIcon" />
                                        <p>{item.a}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}
                    
                </div>

            </div>
            <Footer/>
        </>
     );
}
 
export default Faq;