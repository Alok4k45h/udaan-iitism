import React from "react";
import "./EventSection.css";
function EventSection() {
  return (
    <div className="event-section pt-5 pb-5">
      <div className="container">
        <div className="row">
          <div className="col-12 mb-5 ">
            <h1 className="event-section-heading">Events</h1>
          </div>
        </div>
        <div className="row mb-5 shadow p-3 mb-5 bg-white rounded">
          <div className="col-12 col-md-5 ">
            <div className="text-center">
              <img
                src="https://images.tv9hindi.com/wp-content/uploads/2021/03/upsc-exam.jpg"
                className="event-section-img"
                alt=""
              />
            </div>
          </div>

          <div className="col-12 col-md-7">
            <h1 className="event-section-heading">
              Lorem ipsum dolor sit amet consectetur
            </h1>
            <p className="event-section-description">
              Lorem ipsum dolor sit amet consectetur adipiscing elit nulla,
              praesent ultricies ac aenean nibh parturient lacinia suspendisse
              diam, laoreet dui tempor suscipit rutrum velit vitae.
            </p>
            <button className="custom-outline-buttons">read more</button>
          </div>
        </div>
        <div className="row mb-5 shadow p-3 mb-5 bg-white rounded">
          <div className="col-12 col-md-5 order-1 order-md-2">
            <div className="text-center">
              <img
                src="https://images.tv9hindi.com/wp-content/uploads/2021/03/upsc-exam.jpg"
                className="event-section-img"
                alt=""
              />
            </div>
          </div>

          <div className="col-12 col-md-7 order-2 order-md-1">
            <h1 className="event-section-heading">
              Lorem ipsum dolor sit amet consectetur
            </h1>
            <p className="event-section-description">
              Lorem ipsum dolor sit amet consectetur adipiscing elit nulla,
              praesent ultricies ac aenean nibh parturient lacinia suspendisse
              diam, laoreet dui tempor suscipit rutrum velit vitae.
            </p>
            <button className="custom-outline-buttons">Read more</button>
          </div>
        </div>
        <div className="row mb-5 shadow p-3 mb-5 bg-white rounded">
          <div className="col-12 col-md-5">
            <div className="text-center">
              <img
                src="https://images.tv9hindi.com/wp-content/uploads/2021/03/upsc-exam.jpg"
                className="event-section-img"
                alt=""
              />
            </div>
          </div>

          <div className="col-12 col-md-7">
            <h1 className="event-section-heading">
              Lorem ipsum dolor sit amet consectetur
            </h1>
            <p className="event-section-description">
              Lorem ipsum dolor sit amet consectetur adipiscing elit nulla,
              praesent ultricies ac aenean nibh parturient lacinia suspendisse
              diam, laoreet dui tempor suscipit rutrum velit vitae.
            </p>
            <button className="custom-outline-buttons">Read more</button>
          </div>
        </div>
        <div className="row">
          <div className="col-12 d-flex flex-row justify-content-end">
            <button className="custom-buttons">View All</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EventSection;
