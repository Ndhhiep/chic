import Header from "./header";
import Footer from "./footer";
import Download from "./download";
import Feedback from "./feedback";

import './sitemap.css'

const Sitemap = () => {
    return ( 
        <>
            <Header/>
            <Download/>
            <Feedback/>
            <div className="sitemap">
                <h1>Site Map</h1>
                <div className="sitemap-intro">
                Our sitemap is your guide to navigating our website. It provides a clear and organized overview of all our pages, making it easy to find the information you need. Whether you're a returning visitor or discovering our site for the first time, our sitemap will help you explore everything we have to offer.
                </div>
                <hr className="center-hr"/>
                <div className="sitemap-content">
                    <img src="/sitemap/sitemap.png" alt="" />
                </div>
            </div>
            <Footer/>
        </>
     );
}
 
export default Sitemap;