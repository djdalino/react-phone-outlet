import React, { Component } from "react";

class Banner extends Component {
  render() {
    return (
      <React.Fragment>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                src="https://img.xda-cdn.com/QUPkc2VSAtMwjI9zt_CPMkOq-jg=/https%3A%2F%2Fmedia.flixfacts.com%2Finpage%2Fgoogle%2FPixel2%2Fimg%2FHero-Banner.jpg"
                className="d-block w-100 img-fluid"
                alt="..."
                style={{ maxHeight: "55rem", minHeight: "20rem" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://news-cdn.softpedia.com/images/news2/Apple-Launches-the-New-iPhone-5-2.png"
                className="d-block w-100 img-fluid"
                alt="..."
                style={{ maxHeight: "55rem", minHeight: "20rem" }}
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://www.abenson.com/media/wysiwyg/pages/Galaxy_A50_Pre-OrderLanding_Page_Final-a.jpg"
                className="d-block w-100 img-fluid"
                alt="..."
                style={{ maxHeight: "55rem", minHeight: "20rem" }}
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
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
            href="#carouselExampleControls"
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
