import Header from "./Header";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Deal.css";
import Footer from "./Footer";

export default function Deal() {
  const settings = {
    arrows: true,
    dots: true,
    infinite: true,
    speed: 200,
    slidesToShow: 5,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 2000,
    centerPadding: "0px",
    centerMode: true,
  };
  return (
    <>
      <Header />
      <div style={{ width: "100%", paddingTop: "8%" }} className="Container">
        <Slider {...settings}>
          <div className="Wrap">
            <img
              className="Img"
              src="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            />
            <p>하윙</p>
          </div>
          <div className="Wrap">
            <img
              className="Img"
              src="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            />
          </div>
          <div className="Wrap">
            <img
              className="Img"
              src="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
            />
          </div>
          <div className="Wrap">
            <img
              className="Img"
              src="https://images-eu.ssl-images-amazon.com/images/I/41RLXO5JUhL._AC_SX368_.jpg"
            />
          </div>
          <div className="Wrap">
            <img
              className="Img"
              src="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
            />
          </div>
          <div className="Wrap">
            <img
              className="Img"
              src="https://media.very.co.uk/i/very/P6LTG_SQ1_0000000071_CHARCOAL_SLf?$300x400_retinamobilex2$"
            />
          </div>
          <div className="Wrap">
            <img
              className="Img"
              src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            />
          </div>
          <div className="Wrap">
            <img
              className="Img"
              src="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._AC_SY400_.jpg"
            />
          </div>
        </Slider>
      </div>
      <Footer />
    </>
  );
}
