import React, { Component } from "react";
import "./Aside.css";

export default class Aside extends Component {
  renderAsiseClass = () => {
    if (this.props.myState) {
      return "m-0 p-5 rounded-2";
    } else {
      return "d-none";
    }
  };

  render() {
    return (
      <aside
        style={{ width: "20rem", height: "100vh", backgroundColor: "#fcfcfc" }}
        className={this.renderAsiseClass()}
      >
        <h5 className="pb-2 fs-4 text-primary border-bottom w-100 border-primary">MENU</h5>
        <div className="accordion-item ms-4 mt-4">
          <h2 className="accordion-header" id="flush-headingOne">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseOne"
              aria-expanded="false"
              aria-controls="flush-collapseOne"
            >
              <i class="bi bi-pie-chart-fill me-2"></i>
              <span className="fs-6">Dashboards</span>
            </button>
          </h2>
          <div
            id="flush-collapseOne"
            className="mt-4 accordion-collapse collapse"
            aria-labelledby="flush-headingOne"
            data-bs-parent="#accordionFlushExample"
          >
            <button
              type="button"
              className="btn btn-primary mb-2 fw-bold w-100"
            >
              Analytics
            </button>
            <br />
            <button type="button" className="btn mb-2 fw-bold w-100">
              Commerce
            </button>
            <br />
            <button type="button" className="btn mb-2 fw-bold w-100">
              Sales
            </button>
            <br />
            <button type="button" className="btn mb-2 fw-bold w-100">
              Minimal
            </button>
            <br />
            <button type="button" className="btn mb-2 fw-bold w-100">
              CRM
            </button>
            <br />
          </div>
        </div>
        <div className="accordion-item ms-4 mt-4">
          <h2 className="accordion-header" id="flush-headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#flush-collapseTwo"
              aria-expanded="false"
              aria-controls="flush-collapseTwo"
            >
              <i class="bi bi-file-break me-2"></i>
              <span className="fs-6">Pages</span>
            </button>
          </h2>
          <div
            id="flush-collapseTwo"
            className="mt-4 accordion-collapse collapse"
            aria-labelledby="flush-headingTwo"
            data-bs-parent="#accordionFlushExample"
          >
            <button type="button" className="btn mb-2 fw-bold w-100">
              Login
            </button>
            <br />
            <button type="button" className="btn mb-2 fw-bold w-100">
              Register
            </button>
            <br />
            <button type="button" className="btn mb-2 fw-bold w-100">
              Forgot Password
            </button>
            <br />
          </div>
        </div>
      </aside>
    );
  }
}
