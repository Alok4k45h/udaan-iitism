import React from "react";
import ExpandCollapseModal from "../ExpandCollapseModal/ExpandCollapseModal";
import { Link } from "react-router-dom";

import "./PlacementCardModal.css";

function PlacementCardModal(props) {
  const { key, name, Title, imgLink, QueryList } = props;
  console.log(name);
  console.log(name);
  console.log(name);
  console.log(QueryList);

  return (
    <div className="col-12 col-md-6 col-lg-3">
      <div className="shadow placement-item-card p-3 mb-3">
        <img src={imgLink} className="placement-item-image w-100" alt="" />
        <h1 className="placement-card-title font-bold">{name}</h1>
        <h1 className="placement-card-title">{Title}</h1>

        <Link to="./placementdetailed" className="placement-item-link">
          View
          <svg
            width="16px"
            height="16px"
            viewBox="0 0 16 16"
            className="bi bi-arrow-right-short"
            fill="#d0b200"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
            />
          </svg>
        </Link>

        <button
          type="button"
          className="btn btn-outline-primary"
          data-toggle="modal"
          data-target="#exampleModal3"
        >
          Read
        </button>

        <div
          className="modal fade "
          id="exampleModal3"
          tabindex="-1"
          aria-labelledby="exampleModalLabel3"
          aria-hidden="true"
        >
          <div className="modal-dialog modal-fullscreen mt-5">
            <div className="modal-content">
              <div className="modal-header">
                <h5
                  className="modal-title thanking-customers-section-modal-title"
                  id="exampleModalLabel3"
                >
                  Placement Detailed Page
                </h5>
                <button
                  type="button"
                  className="close"
                  data-dismiss="modal"
                  aria-label="Close"
                >
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <div className="about-me-section pt-5 pb-5">
                  <div className="container">
                    <div className="row">
                      <div className="col-12 mb-3">
                        <h1 className="about-me-section-heading">
                          Placement Detailed View
                        </h1>
                      </div>
                      <div className="col-12 col-md-4">
                        <div className="img-container text-center">
                          <img
                            src={imgLink}
                            alt=""
                            className="about-me-section-image mb-3"
                          />
                          <h3 className="about-me-section-sub-heading">
                            {name}
                          </h3>
                          <p className="about-me-section-description">
                            {Title}
                          </p>
                        </div>
                      </div>
                      <div className="col-12 col-md-8">
                        <div className="expand-container">
                          <ExpandCollapseModal />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlacementCardModal;
