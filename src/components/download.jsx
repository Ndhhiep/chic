import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import './download.css'
const Download = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    return ( 
        <>
            <div className="download-box"
                 onClick={scrollToTop} 
            >
                <FontAwesomeIcon icon={faArrowUp} className="top-icon"/>
            </div>
        </>
     );
}
 
export default Download;