import React, { Component } from "react";
import Me from "../../images/Me in beautiful Shape.jpg";
import PD_logo from "../../images/Light.png";

export default class Navbar extends Component {
  renderBtnAside = () => {
    if (this.props.aside) {
      return (
        <i
          className="align-self-center fs-3 bi bi-x text-light"
          onClick={() => {
            this.props.handleAside();
          }}
          style={{ cursor: "pointer" }}
        ></i>
      );
    } else {
      return (
        <i
          className="align-self-center fs-3 bi bi-list text-light"
          onClick={() => {
            this.props.handleAside();
          }}
          style={{ cursor: "pointer" }}
        ></i>
      );
    }
  };

  render() {
    return (
      <nav className="px-4 navbar bg-dark text-light container-fluid justify-content-around shadow sticky-top">
        <div
          className="me-auto d-flex align-content-center"
          label="left"
          style={{ maxWidth: "16rem" }}
        >
          <div className="navbar-brand">
            <img src={PD_logo} alt="Presence Digital" width="60" />
          </div>
          {this.renderBtnAside()}
          <div class="ms-3 btn-group">
            <button
              class="btn btn-secondary dropdown-toggle"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Menu
            </button>
            <ul class="dropdown-menu rounded">
              <div className="px-3 py-4 d-flex gap-5">
                <div className="px-4 d-flex flex-wrap gap-1 border-end border-secondary">
                  <h6 className="text-secondary text-sm">Overview</h6>
                  <div className="d-flex gap-2">
                    <i class="bi bi-envelope"></i>
                    <span>Send Mess</span>
                  </div>
                  <div className="d-flex gap-2">
                    <i class="bi bi-building"></i>
                    <span>Companies</span>
                  </div>
                  <div className="d-flex gap-2">
                    <i class="bi bi-collection"></i>
                    <span>Collections</span>
                  </div>
                </div>
                <div className="px-4 d-flex flex-wrap gap-1 border-end border-secondary">
                  <h6 className="text-secondary text-sm">Favourites</h6>
                  <div className="d-flex gap-2">
                    <i class="bi bi-envelope"></i>
                    <span>Report</span>
                  </div>
                  <div className="d-flex gap-2">
                    <i class="bi bi-building"></i>
                    <span>Start</span>
                  </div>
                  <div className="d-flex gap-2">
                    <i class="bi bi-people-fill"></i>
                    <span>Users</span>
                  </div>
                </div>
                <div className="px-4 d-flex flex-wrap gap-1">
                  <h6 className="text-secondary text-sm">Overview</h6>
                  <div className="d-flex gap-2">
                    <i class="bi bi-envelope"></i>
                    <span>Send Mess</span>
                  </div>
                  <div className="d-flex gap-2">
                    <i class="bi bi-building"></i>
                    <span>Companies</span>
                  </div>
                  <div className="d-flex gap-2">
                    <i class="bi bi-collection"></i>
                    <span>Collections</span>
                  </div>
                </div>
              </div>
            </ul>
          </div>
        </div>
        <div className="ms-auto d-flex gap-2">
          <img src={Me} alt="Zakaria" width="50" className="rounded-5" />
          <div className="ms-2 d-flex flex-wrap">
            <span className="w-100 fs-6">Zakaria Imzilen</span>
            <span className="text-secondary fs-6">
              CEO of Présence Digital SARL
            </span>
          </div>
        </div>
      </nav>
    );
  }
}
