import React, { Component } from "react";
import zakImz from "../../images/Me in beautiful Shape.jpg";

export default class Content extends Component {
  render() {
    return (
      <div
        style={{ backgroundColor: "#f8f8f8", height: "100vh" }}
        className="w-100 px-3 py-4"
      >
        <div className="card shadow">
          <div className="card-header shadow-2 py-4 px-4">
            <h4 className="text-primary m-0">Portfolio Performance</h4>
          </div>
          <div className="card-body d-flex flex-wrap gap-4 justify-content-around">
            <div className="d-flex gap-4" style={{ Width: "15rem" }}>
              <i className="bi bi-laptop p-3 fs-1 text-bg-primary rounded-5"></i>
              <div className="d-flex flex-wrap">
                <h6 className="text-secondary w-100 m-0">Cash Deposit</h6>
                <h4 className="fw-bold fs-2 w-100 m-0">1.4 M</h4>
                <span className="w-100">
                  <span className="text-danger">-5.4%</span>
                  less earnings
                </span>
              </div>
            </div>
            <div className="d-flex gap-4" style={{ Width: "15rem" }}>
              <i className="bi bi-currency-dollar p-3 fs-1 text-bg-warning rounded-5"></i>
              <div className="d-flex flex-wrap">
                <h6 className="text-secondary w-100 m-0">Earnings</h6>
                <h4 className="fw-bold fs-2 w-100 m-0">10.4 k</h4>
                <span className="w-100">
                  <span className="text-success">+1.4%</span>
                  more earnings
                </span>
              </div>
            </div>
            <div className="d-flex gap-4" style={{ Width: "15rem" }}>
              <i className="bi bi-wallet p-3 fs-1 text-bg-success rounded-5"></i>
              <div className="d-flex flex-wrap">
                <h6 className="text-secondary w-100 m-0">Capital</h6>
                <h4 className="fw-bold fs-2 w-100 m-0">6.4 M</h4>
                <span className="w-100">
                  <span className="text-success">+0.4%</span>
                  high valuation
                </span>
              </div>
            </div>
          </div>
          <div className="card-footer p-3 text-center">
            <button className="px-4 py-2 btn btn-primary rounded-4 m-auto">
              View Full Report
            </button>
          </div>
        </div>

        <div className="my-5 py-3 container shadow">
          <h4 className="mb-3 mx-4 h4 fs-5 fw-light text-secondary">
            Easy Dynamic Tables
          </h4>
          <div className="container border">
            <div className="table-responsive m-3">
              <table className="table table-light">
                <thead>
                  <tr>
                    <th scope="col">First Name</th>
                    <th scope="col">Last Name</th>
                    <th scope="col">Age</th>
                    <th scope="col">Status</th>
                    <th scope="col">Visits</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="">
                    <td>Hicham</td>
                    <td>Benkirane</td>
                    <td>38</td>
                    <td>Serial Entrepreneur</td>
                    <td>15</td>
                  </tr>
                  <tr className="">
                    <td>Zakaria</td>
                    <td>Imzilen</td>
                    <td>19</td>
                    <td>Entrepreneur</td>
                    <td>6</td>
                  </tr>
                  <tr className="">
                    <td>Grant</td>
                    <td>Cardone</td>
                    <td>56</td>
                    <td>Serial Entrepreneur</td>
                    <td>40</td>
                  </tr>
                  <tr className="">
                    <td>Robert</td>
                    <td>Kiyosaki</td>
                    <td>57</td>
                    <td>Entrepreneur</td>
                    <td>35</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="container w-100 d-flex gap-5">
          <div className="card col">
            <div className="d-flex justify-content-between align-items-center p-3">
              <div className="d-flex align-content-center gap-2">
                <i className="bi bi-clipboard-data"></i>
                <h6 className="fw-light">Tasks list</h6>
              </div>
              <i className="bi bi-layout-three-columns"></i>
            </div>
            <div className="card-body px-4 d-flex gap-3 flex-wrap">
              <div className="container w-100 row d-flex gap-3 justify-content-start align-content-center border-start position-relative border-info">
                <input
                  type="checkbox"
                  name="x"
                  id="x"
                  className="col"
                  style={{ maxWidth: "15px" }}
                />
                <div
                  className="d-flex flex-wrap col"
                  style={{ minWidth: "60%" }}
                >
                  <span className="fw-regular row w-100">Week Revision</span>
                  <p className="fs-italic text-secondary row">Every week</p>
                  <span className="badge position-absolute bg-secondary col end-0 top-0">
                    New
                  </span>
                </div>
              </div>
              <div className="container w-100 row d-flex gap-3 justify-content-start align-content-center border-start position-relative border-info">
                <input
                  type="checkbox"
                  name="x"
                  id="x"
                  className="col"
                  style={{ maxWidth: "15px" }}
                />
                <div
                  className="d-flex flex-wrap col"
                  style={{ minWidth: "60%" }}
                >
                  <span className="fw-regular row w-100">Read 10 pages</span>
                  <p className="fs-italic text-secondary row">Every day</p>
                  <span className="badge position-absolute bg-primary col end-0 top-0">
                    New
                  </span>
                </div>
              </div>
              <div className="container w-100 row d-flex gap-3 justify-content-start align-content-center border-start position-relative border-info">
                <input
                  type="checkbox"
                  name="x"
                  id="x"
                  className="col"
                  style={{ maxWidth: "15px" }}
                />
                <div
                  className="d-flex flex-wrap col"
                  style={{ minWidth: "60%" }}
                >
                  <span className="fw-regular row w-100">Marketing plan</span>
                  <p className="fs-italic text-secondary row">Once a year</p>
                  <span className="badge position-absolute bg-warning col end-0 top-0">
                    Wow
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="card col">
            <div className="d-flex justify-content-between align-items-center p-3">
              <div className="d-flex align-content-center gap-2">
                <i class="bi bi-chat-dots-fill"></i>
                <h6 className="fw-light">Chat box</h6>
              </div>
              <i className="bi bi-layout-three-columns"></i>
            </div>
            <div className="card-body">
              <div className="d-flex align-content-start gap-3 my-2">
                <img src={zakImz} alt="Zakaria" className="col rounded-1" style={{maxWidth: "50px", maxHeight: "50px", objectFit: "cover"}} />
                <div className="d-flex col flex-wrap">
                  <span className="container row rounded-4 bg-info bg-opacity-50 px-4 py-2 row" style={{fontSize: "13px"}}>
                    Lorem ipsum dolor sit, amet consectetur.
                  </span>
                  <span className="mt-2 ps-3 text-secondary row" style={{fontSize: "10px"}}>Sent via Iphone, 10/29</span>
                </div>
              </div>
              <div className="d-flex align-content-start gap-1 my-2">
                <div className="d-flex col flex-wrap">
                  <span className="container row rounded-4 bg-info bg-opacity-50 px-4 py-2 row" style={{fontSize: "13px"}}>
                    Lorem ipsum dolor sit, amet consectetur.
                  </span>
                  <span className="mt-2 ps-3 text-secondary row" style={{fontSize: "10px"}}>Sent via Iphone, 10/29</span>
                </div>
                <img src={zakImz} alt="Zakaria" className="col rounded-1" style={{maxWidth: "50px", maxHeight: "50px", objectFit: "cover"}} />
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />
      </div>
    );
  }
}
