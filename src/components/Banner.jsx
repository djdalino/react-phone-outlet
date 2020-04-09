import React, { Component } from "react";

class Banner extends Component {
  render() {
    return (
      <React.Fragment>
        <div
          id="carouselExampleInterval"
          className="carousel slide mt-10"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active" data-interval="5000">
              <img
                src="https://i.pinimg.com/originals/c2/33/40/c233409e4e3b58fb9aee87b5d20b50fa.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item" data-interval="5000">
              <img
                src="https://i.pinimg.com/originals/6b/c0/d8/6bc0d813bf117a46e0060a39e5e88895.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item" data-interval="5000">
              <img
                src="https://www.itl.cat/pngfile/big/242-2425822_iphone-banner-pic-hd.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
            <div className="carousel-item" data-interval="5000">
              <img
                src="https://unlock4less.com/images/gallery/background/CenterBanner1.jpg"
                className="d-block w-100"
                alt="..."
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleInterval"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleInterval"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>
      </React.Fragment>
    );
  }
}

export default Banner;
