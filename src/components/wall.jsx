import Header from "./header";
import Footer from "./footer";
import Feedback from "./feedback";
import Download from "./download";
import wallData from "../data/wall.json";
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";
import "./product.css";

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
const Wall = () => {
  const [data, setData] = useState([]);
  const [activeBrand, setActiveBrand] = useState("all");
  const [selectedBrand, setSelectedBrand] = useState(null);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    setData(wallData);

  }, []);

  const handleBrandClick = (brandName) => {
    setActiveBrand(brandName);
    setSelectedBrand(brandName === "all" ? null : brandName);
  };

  const getFilteredData = (products) => {
    return selectedBrand
      ? products.filter((item) => item.brand === selectedBrand)
      : products;
  };

  const handleCardClick = (product) => {
    setSelectedProduct(product);
  };

  const closeModal = () => {
    setSelectedProduct(null);
  };

  const downloadPDF = () => {
    setTimeout(() => {
      const input = document.getElementById('modal-content');
      if (input) {
        html2canvas(input).then((canvas) => {
          const imgData = canvas.toDataURL('image/png');
          const pdf = new jsPDF();
          pdf.addImage(imgData, 'PNG', 0, 0);
          pdf.save(`${selectedProduct.name}.pdf`);
        }).catch((error) => {
          console.error('Error generating PDF:', error);
        });
      } else {
        console.error('Element not found: modal-content');
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
        <div className="filter-bar">
          <div className="filter-title">
            <p className="bf">Brand Filter:</p>
            
          </div>

          <div className="btn-list">
            <button
              className={`filter-btn ${activeBrand === "all" ? "click" : ""}`}
              onClick={() => handleBrandClick("all")}
            >
              All
            </button>
            <button
              className={`filter-btn ${
                activeBrand === "Philips" ? "click" : ""
              }`}
              onClick={() => handleBrandClick("Philips")}
            >
              Philips
            </button>
            <button
              className={`filter-btn ${
                activeBrand === "Osgram" ? "click" : ""
              }`}
              onClick={() => handleBrandClick("Osgram")}
            >
              Osgram
            </button>
            <button
              className={`filter-btn ${
                activeBrand === "Cree" ? "click" : ""
              }`}
              onClick={() => handleBrandClick("Cree")}
            >
              Cree
            </button>
          </div>
        </div>
        
          <div className="products-content">
            <div className="title-box">
              <input type="text" className="title" value='Wall Lights' readOnly />
            </div>
            <div className="products-box">
              {(Array.isArray(data)
                ? getFilteredData(data)
                : []
              ).map((item, index) => (
                <div className="products-card" key={index} onClick={()=>handleCardClick(item)}>
                  <img src={`${url}/${item.src}`} alt={item.name} />
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
              ))}
            </div>
          </div>
      </div>

      {selectedProduct && (
          <div className="modal">
            <div className="modal-content" id="modal-content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <img
                src={`${url}/${selectedProduct.src}`}
                alt={selectedProduct.name}
                className="modal-image"
              />
              <div className="modal-infor">
              <h2>{selectedProduct.name}</h2>
              <p className="modal-text">Brand: <p>{selectedProduct.brand}</p></p>
              </div>
              
              <p className="modal-text">Detail: <p>{selectedProduct.info}</p></p>
              <p className="modal-text">Material: <p>{selectedProduct.material}</p></p>
              <p className="modal-text">Type: <p>{selectedProduct.form}</p></p>
              <div className="modal-bot">
                <p className="modal-price"> ${selectedProduct.price}</p>
                <FontAwesomeIcon icon={faDownload} className="download-icon" onClick={downloadPDF}/>
              </div>
              
            </div>
          </div>
        )}

      <Footer />
    </>
  );
};

export default Wall;
