import React from "react";
import {
  FaCopyright,
  FaFacebook,
  FaInstagram,
  FaLinkedinIn,
  FaMailBulk,
  FaMapMarked,
  FaPhone,
} from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <div>
      <div className="footer-section pt-5 pb-5">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="text-center text-md-left">
                <img src="./udaanLogo.jpg" className="logo" alt="" />
                <div className="d-flex flex-row justify-content-center mt-3 mb-3">
                  <div className="footer-section-icon-container">
                    <FaFacebook className="icon" />
                  </div>
                  <div className="footer-section-icon-container">
                    <FaInstagram className="icon" />
                  </div>
                  <div className="footer-section-icon-container">
                    <FaMailBulk className="icon" />
                  </div>
                  <div className="footer-section-icon-container">
                    <FaLinkedinIn className="icon" />
                  </div>
                </div>
                <p className="footer-section-text">
                  Career cell of IIT(ISM) Dhanbad
                </p>
              </div>
            </div>

            <div className="col-6 col-md-4 mt-3">
              <h1 className="footer-section-heading pb-2">Contact Us</h1>
              <ul className="footer-section-list">
                <li className="mb-3">
                  <FaMailBulk className="icon mr-2" />
                  <span className="footer-section-text">mail@gmail.com</span>
                </li>
                <li className="mb-3">
                  <FaPhone className="icon mr-2" />
                  <span className="footer-section-text">+91-1234506789</span>
                </li>
                <li className="mb-3">
                  <FaMapMarked className="icon mr-2" />
                  <span className="footer-section-text">
                    SAC Room-3XX, IIT (ISM) Dhanbad, Jharkhand-826004
                  </span>
                </li>
              </ul>
            </div>

            <div className="col-6 col-md-4 mt-3">
              <h1 className="footer-section-heading pb-2"> Important Links</h1>
              <ul className="footer-section-list">
                <li className="footer-section-text">
                  IIT (ISM) Official Website
                </li>
              </ul>
            </div>
          </div>

          <div className="text-center">
            <hr />
            <FaCopyright className="icon mr-2" />
            <span className="footer-section-copyright">
              2022 | Udaan-Career cell of IIT(ISM) Dhanbad
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
