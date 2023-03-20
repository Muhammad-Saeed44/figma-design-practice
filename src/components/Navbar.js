import React from "react";
import logo from "./logo.png"
export default function Navbar() {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg navbar-light border border-primary border-5"
        style={{
          backgroundColor: "#0f0933",
          color: "white",
        }}
      >
        <div
          className="container-fluid py-2"
          style={{
            backgroundColor: "#0f0933",
            color: "white",
          }}
        >
          <a className="navbar-brand text-light" href="#">
            <button
              className=" btn-lg"
              style={{
                backgroundColor: "#0f0933",
                color: "white",
                border: "0",
              }}
            >
             <img src={logo}></img>
            </button>
          </a>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            id="navbarNav"
            style={{ marginLeft: "30%" }}
          >
            <ul className="navbar-nav">
              <li className="nav-item ">
                <a
                  className="nav-link active text-light"
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-light " href="#">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div style={{ marginRight: "8%" }}>
            <button
              className="rounded-pill btn-lg"
              style={{ backgroundColor: "#7214FF", color: "white" }}
            >
              Get a Demo
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
}
