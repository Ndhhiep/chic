import React from "react";
import Header from "./header";
import { Carousel } from "react-bootstrap";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import homeData from "../data/home.json";
import siteData from "../data/site.json";
import "bootstrap/dist/css/bootstrap.min.css";
import "./home.css";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import Feedback from "./feedback";
import Download from "./download";
import Offers from "./offers";
import Footer from "./footer";
import { Link } from "react-router-dom";
const Home = () => {
  const [data, setData] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    setData(homeData);
  }, []);

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  const downloadPDF = () => {
    setTimeout(() => {
      const input = document.getElementById("modal-content");
      if (input) {
        html2canvas(input)
          .then((canvas) => {
            const imgData = canvas.toDataURL("image/png");
            const pdf = new jsPDF();
            pdf.addImage(imgData, "PNG", 0, 0);
            pdf.save(`${selectedProduct.name}.pdf`);
          })
          .catch((error) => {
            console.error("Error generating PDF:", error);
          });
      } else {
        console.error("Element not found: modal-content");
      }
    }, 0);
  };

  const url = process.env.PUBLIC_URL;
  return (
    <>
      <Header />
      <Feedback />
      <Download />
      <div className="home">
        <Carousel pause={false}>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100 c-img"
              src={`${url}/carousel/carousel01.png`}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100 c-img"
              src={`${url}/carousel/carousel02.png`}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={3000}>
            <img
              className="d-block w-100 c-img"
              src={`${url}/carousel/carousel03.png`}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>

        {Object.keys(data).map((category, index) => (
          <div className="products-content">
            <div className="title-box">
              <input type="text" className="title" value={category} readOnly />
            </div>
            <div className="products-box">
              {(Array.isArray(data[category]) ? data[category] : []).map(
                (item, index) => (
                  <div
                    className="products-card"
                    key={index}
                    onClick={() => handleCardClick(item)}
                  >
                    <img src={item.src} alt={item.name} />
                    <div className="infor">
                      <p>{item.name}</p>
                      <p align="right">{item.brand}</p>
                    </div>
                    <div className="products-detail">
                      <p>*{item.info}</p>
                    </div>
                    <div className="price-box">
                      <p className="price">${item.price}</p>
                    </div>
                  </div>
                )
              )}
            </div>

            {siteData[category] && siteData[category].url && (
              <Link to={siteData[category].url}>
                <div className="btn-box">
                  <button className="more-btn">Show more</button>
                </div>
              </Link>
            )}
          </div>
        ))}
        {selectedProduct && (
          <div className="modal">
            <div className="modal-content" id="modal-content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <img
                src={selectedProduct.src}
                alt={selectedProduct.name}
                className="modal-image"
              />
              <div className="modal-infor">
                <h2>{selectedProduct.name}</h2>
                <p className="modal-text">Brand: {selectedProduct.brand}</p>
              </div>

              <p className="modal-text">Detail: {selectedProduct.info}</p>
              <div className="modal-bot">
                <p className="modal-price"> ${selectedProduct.price}</p>
                <FontAwesomeIcon
                  icon={faDownload}
                  className="download-icon"
                  onClick={downloadPDF}
                />
              </div>
            </div>
          </div>
        )}
        <Offers />
        <Footer />
      </div>
    </>
  );
};

export default Home;
