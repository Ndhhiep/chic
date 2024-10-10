import "./header.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

import { useState, useEffect } from "react";
const Header = () => {
  const [userCount, setUserCount] = useState(0);
  const [openNavMobile, setOpenNavMobile] = useState(false);
  
  const [showProductList, setShowProductList] = useState(false);
  const [showLedList, setShowLedList] = useState(false);

  useEffect(() => {
    const count = window.localStorage.getItem("userCount") || 0;
    const newCount = userCount ? parseInt(count) + 1 : 1;
    localStorage.setItem("userCount", newCount);
    setUserCount(newCount);
  }, []);

  useEffect(() => {
    if (openNavMobile) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [openNavMobile]);

  const toggleNavbarMobile = () => {
    setOpenNavMobile(!openNavMobile);
  };

  const closeNavbarMobile = () => {
    setOpenNavMobile(!openNavMobile);
  };

  const toggleProductList = () => {
    setShowProductList(!showProductList);
  };

  const toggleLedList = () => {
    setShowLedList(!showLedList);
  };

  const url = process.env.PUBLIC_URL;

  return (
    <>
      <div className="header">
        <div className="logo-box">
          <Link to={"/"} className="nav-link">
            <img src={`${url}/logo.png`} alt="" />
          </Link>
        </div>
        <div className="navbar">
          <Link to={"/"} className="nav-link">
            <button className="nav-btn">Home</button>
          </Link>

          <Link to={"/products"} className="nav-link">
            <div className="dropdown">
              <div className="drop-btn">
                <button className="nav-btn">Products</button>
                <FontAwesomeIcon icon={faCaretDown} className="drop-icon" />
              </div>
              <div className="dropdown-content">
                <Link className="a" to={"/products/ceiling"}>
                  Ceiling Lights
                </Link>
                <Link className="a" to={"/products/wall"}>
                  Wall Lights
                </Link>
                <Link className="a" to={"/products/lamp"}>
                  Lamps
                </Link>
                <Link className="a" to={"/products/outdoor"}>
                  Outdoor Lights
                </Link>
                <Link className="a" to={"/products/fan"}>
                  Fans
                </Link>
                <Link className="a" to={"/products/accent"}>
                  Home Accents
                </Link>
                <div className="dropdown-submenu">
                  <Link className="a" to={"/products/led"}>
                    LED
                    <FontAwesomeIcon
                      icon={faCaretDown}
                      className="drop-sub-icon"
                    />
                  </Link>
                  <div className="dropdown-submenu-content">
                    <Link className="a" to={"/products/led/smart"}>
                      Smart Leds
                    </Link>
                    <Link className="a" to={"/products/led/spot"}>
                      Spot Leds
                    </Link>
                    <Link className="a" to={"/products/led/decor"}>
                      Decoration Leds
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Link>

          <Link to="/about" className="nav-link">
            <button className="nav-btn">AboutUs</button>
          </Link>

          <Link to="/sitemap" className="nav-link">
            <button className="nav-btn">SiteMap</button>
          </Link>

          <Link to="/gallery" className="nav-link">
            <button className="nav-btn">Gallery</button>
          </Link>

          <Link to="/contact" className="nav-link">
            <button className="nav-btn">Contact</button>
          </Link>

          <Link to="/faq" className="nav-link">
            <button className="nav-btn">FAQ</button>
          </Link>

          <div className="user-box">
            <FontAwesomeIcon icon={faUser} className="user-icon" />
            <p>{userCount}</p>
          </div>
        </div>
      </div>

      <div className="header-mobile">
        <div className="nav-icon-mobile" onClick={toggleNavbarMobile}>
          <span className="material-icons">menu</span>
        </div>

        <Link to='/'>
        <div className="logo-box-mobile">
          <img src="/logo.png" alt="" />
        </div>
        </Link>
        

        <div className="user-box-mobile">
          <FontAwesomeIcon icon={faUser} className="user-icon" />
          <p className="user-num">{userCount}</p>
        </div>
      </div>
      
  
        {openNavMobile && (
          <div className={`navbar-mobile ${!openNavMobile ? "slide-out" : ""}`}>
            <div className="navbar-mobile-head">
              <div className="nav-icon-mobile" onClick={toggleNavbarMobile}>
                <span className="material-icons">menu</span>
              </div>

              <Link to={'/'}>
              <div className="logo-box-mobile">
                <img src="/logo.png" alt="" />
              </div>
              </Link>
              

              <div className="close-icon" onClick={closeNavbarMobile}>
                <span class="material-icons">close</span>
              </div>
            </div>
            <hr className="hr-mobile" />
            <Link to={"/"} className="nav-link-mobile">
              <button className="nav-btn-mobile">Home</button>
            </Link>

            <div id="product-link" onClick={toggleProductList}>
              <button className="nav-btn-mobile">
                <Link to={"/products"} className="link">
                  Products
                </Link>
              </button>
              <FontAwesomeIcon icon={faCaretDown} />
            </div>

            {showProductList && (
              <div className="product-list slide-down">
                <Link to={"/products/ceiling"} className="link">
                  <button className="nav-btn-mobile">Ceiling Lights</button>
                </Link>

                <Link to={"/products/wall"} className="link">
                  <button className="nav-btn-mobile">Wall Lights</button>
                </Link>

                <Link to={"/products/lamp"} className="link">
                  <button className="nav-btn-mobile">Lamps</button>
                </Link>

                <Link to={"/products/outdoor"} className="link">
                  <button className="nav-btn-mobile">Outdoor Lights</button>
                </Link>

                <Link to={"/products/fan"} className="link">
                  <button className="nav-btn-mobile">Fans</button>
                </Link>

                <Link to={"/products/accent"} className="link">
                  <button className="nav-btn-mobile">Home Accents</button>
                </Link>

                <div id="led-link" onClick={toggleLedList}>
                  <button className="nav-btn-mobile">
                    <Link to={"/products/led"} className="link">
                      LED
                    </Link>
                  </button>
                  <FontAwesomeIcon icon={faCaretDown} />
                </div>

                {showLedList && (
                  <div className="led-list slide-down">
                    <Link to={"/products/led/smart"} className="link">
                      <button className="nav-btn-mobile">Smart Leds</button>
                    </Link>
                    <Link to={"/products/led/spot"} className="link">
                      <button className="nav-btn-mobile">Spot Leds</button>
                    </Link>
                    <Link to={"/products/led/decor"} className="link">
                      <button className="nav-btn-mobile">Decoration Leds</button>
                    </Link>
                  </div>
                )}
              </div>
            )}

            <Link to="/about" className="nav-link-mobile">
              <button className="nav-btn-mobile">AboutUs</button>
            </Link>

            <Link to="/sitemap" className="nav-link-mobile">
              <button className="nav-btn-mobile">SiteMap</button>
            </Link>

            <Link to="/gallery" className="nav-link-mobile">
              <button className="nav-btn-mobile">Gallery</button>
            </Link>

            <Link to="/contact" className="nav-link-mobile">
              <button className="nav-btn-mobile">Contact</button>
            </Link>

            <Link to="/faq" className="nav-link-mobile">
              <button className="nav-btn-mobile">FAQ</button>
            </Link>
          </div>
        )}
    </>
  );
};

export default Header;
