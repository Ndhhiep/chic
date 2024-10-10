
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTruck,faGift,faShield } from '@fortawesome/free-solid-svg-icons';
import './offers.css'
const Offers = () => {
    return ( 
        <>
            <div className="offer">
                <div className="offer-box">
                    <div className="offer-icon-box">
                        <FontAwesomeIcon icon={faTruck} className='offers-icon'/>
                    </div>
                    <div className="offer-title">
                        <strong>FREE DELIVERY</strong>
                    </div>
                    <div className="offer-content">
                        <p>We will delivery for free with bills more than $100</p>
                    </div>
                </div>

                <div className="offer-box">
                    <div className="offer-icon-box">
                        <FontAwesomeIcon icon={faGift} className='offers-icon'/>
                    </div>
                    <div className="offer-title">
                        <strong>WEEKEND SALES</strong>
                    </div>
                    <div className="offer-content">
                        <p>Up to 30% sale off on weekend</p>
                    </div>
                </div>

                <div className="offer-box">
                    <div className="offer-icon-box">
                        <FontAwesomeIcon icon={faShield} className='offers-icon'/>
                    </div>
                    <div className="offer-title">
                        <strong>WARRANTY SERVICES</strong>
                    </div>
                    <div className="offer-content">
                        <p>Free products return support for the first 30 days form purchase</p>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Offers;