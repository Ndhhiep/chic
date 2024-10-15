import Header from "./header";
import Footer from "./footer";
import Feedback from "./feedback";
import Download from "./download";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import "./about.css";
const About = () => {
  const url = process.env.PUBLIC_URL;
  return (
    <>
      <Header />
      <Feedback />
      <Download />
      <div className="about">
        <div className="about-title">
          <h1>Introduction</h1>
        </div>
        <div className="about-content">
          <div className="about-img">
            <div className="about-img-row">
              <div className="about-img-box">
                <img src={`${url}/about_img/about01.png`} alt="" />
              </div>
              <div className="about-img-box">
                <img src={`${url}/about_img/about02.png`} alt="" />
              </div>
            </div>
            <div className="about-img-row">
              <div className="about-img-box">
                <img src={`${url}/about_img/about03.png`} alt="" />
              </div>
              <div className="about-img-box">
                <img src={`${url}/about_img/about04.png`} alt="" />
              </div>
            </div>
          </div>
          <div className="about-text">
            <p>
              Since 1971, we've been illuminating homes with timeless elegance.
              Our journey began with a passion for crafting exquisite lighting
              fixtures that would enhance any space. Over the decades, we've
              evolved to become a leading destination for those seeking bespoke
              lighting solutions. From classic chandeliers to contemporary
              designs, our commitment to quality craftsmanship and innovative
              design remains unwavering. Each piece we create is a testament to
              our dedication to transforming ordinary spaces into extraordinary
              environments.
            </p>
          </div>
        </div>
      </div>

      <div className="about-title">
        <h1>Our Team</h1>
      </div>

      <div className='member-card'>
          <div className="products-card">
            <div className="img-m-box">
                <img src={`${url}/member_img/mem.jpg`} />
            </div>
            <strong className="mem-n">Nguyen Do Hoang Hiep</strong>
          </div>
          <div className="products-card">
            <div className="img-m-box">
            <img src={`${url}/member_img/mem.jpg`} />
            </div>
            <strong className="mem-n">Nguyen Khai Nguyen</strong>
          </div>
          <div className="products-card">
            <div className="img-m-box">
            <img src={`${url}/member_img/mem.jpg`} />
            </div>
            <strong className="mem-n">Nguyen Thanh Nam</strong>
          </div>
      </div>

      <div className="about-title">
        <h1>Our Partner</h1>
      </div>

      <div className="about-partner">
        <div className="about-partner-box">
          <div className="partner-box-img">
            <img src={`${url}/partner_img/partner01.png`} alt="" />
          </div>
          <strong>FPT education</strong>
          <p>Thank you to our partners for supporting us in this project</p>
        </div>

        <div className="about-partner-box">
          <div className="partner-box-img">
            <img src={`${url}/partner_img/partner02.png`} alt="" />
          </div>
          <strong>Aptech</strong>
          <p>Thank you to our partners for supporting us in this project</p>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default About;
<></>;
