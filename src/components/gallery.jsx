import Header from "./header";
import Footer from "./footer";
import Feedback from "./feedback";
import Download from "./download";
import './gallery.css'
import galleryData from '../data/gallery.json'
const Gallery = () => {
    return ( 
        <>
            <Header/>
            <Download/>
            <Feedback/>
            <div className="gallery">
                <div className="gallery-intro">
                    <h1>Gallery</h1>
                    <p>Immerse yourself in a world of light and design at Chic Lighting & Design. Our gallery offers a unique and inspiring experience, showcasing the latest trends and innovations in lighting</p>
                </div>
                <hr className="center-hr"/>
                <div className="gallery-content" >
                {
                    galleryData.map((item) => (
                        <div className="gallery-img-box">
                            <img src={item.src} className="gallery-img"/>
                        </div>  
                    ))
                }
                </div>
            </div>
         
            <Footer/>
        </>
     );
}
 
export default Gallery;