
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment } from '@fortawesome/free-solid-svg-icons'
import './feedback.css'
const Feedback = () => {
    const [showFeedback, setShowFeedback] = useState(false);

    const toggleFeedback = () => {
        setShowFeedback(!showFeedback);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        setShowFeedback(false);
    };
    return ( 
        <>
            <div className="fb-box" onClick={toggleFeedback}>
                <FontAwesomeIcon icon={faComment} className='cmt-icon'/>
            </div>
            {showFeedback && (
                <div className="feedback-form">
                    <form onSubmit={handleSubmit}>
                    <textarea placeholder="Enter your feedback here..."></textarea>
                    <button>Submit</button>
                    </form>
                </div>
            )}
        </>
     );
}
 
export default Feedback;