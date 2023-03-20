import React from "react";
import { LoremIpsum } from "react-lorem-ipsum";
import hero from "./hero.png";
import cod from "./cod.PNG";
import msg from "./msg.PNG";
import ajeeb from "./ajeeb.PNG";
import client1 from './client1.PNG';
import client2 from './client2.PNG';
import client3 from './client3.PNG';
export default function Home() {
  
  
  return (
    <>
      {(document.body.style.backgroundColor = "#0f0933")}

      <div
        id="home"
        className="container my-3"
        style={{ margin: "100px", color: "white" }}
      >
        <center>
          {" "}
          <h1>A CRM dashboard for engineering teams</h1>
        </center>
        <center>
          <LoremIpsum p={1} />
        </center>
        <center className="py-3">
          {" "}
          <button
            className="rounded-pill btn-lg"
            style={{ backgroundColor: "#7214FF", color: "white" }}
          >
            Get a Demo
          </button>
          <button
            className="rounded-pill btn-lg btn btn-transparent"
            style={{ backgroundColor: "ffffff00", color: "white" }}
          >
            View Pricing
          </button>
        </center>
        <center>
          <img src={hero} style={{ height: "400px" }}></img>
        </center>
      </div>

      <div id="about" className="container  " style={{ marginTop: "5%" }}>
        <div className="row" style={{ backgroundColor: "#0f0933" }}>
          <div className="col">
            <h5
              className="card-title"
              style={{
                color: "white",
                width: "454px",
                height: "112px",
                fontSize: "48px",
                fontweight: "700",
                fontfamily: "Satoshi",
                fontstyle: "normal",
              }}
            >
              Transparent, audited, &open source
            </h5>
            <hr></hr>
            <p className="card-text my-5" style={{ color: "white" }}>
              Torem ipsum dolor sit amet consectetur. Nulla quisque scelerisque
              eget quis. Eu amet amet eu interdum.
            </p>
            <button
              className="rounded-pill btn-lg"
              style={{ backgroundColor: "#F6F6F7", color: "black" }}
            >
              Browse all features
            </button>
          </div>
          <div className="col">
            <img src={cod} style={{ width: "80%" }}></img>
          </div>
        </div>

        <div className="row my-5">
          <div className="col">
            <div className="card">
              <div
                className="card-body"
                style={{ backgroundColor: "#060B27", border: "grey" }}
              >
                <h5 className="card-title" style={{ color: "white" }}>
                  Product Mail
                </h5>
                <p className="card-text" style={{ color: "white" }}>
                  Gonsectetur eque nec nunc facilisis tellus tincidunt.
                  Malesuada maecenas ac bibendum consectetur..
                </p>
                <center>
                  <img src={msg}></img>
                </center>
              </div>
            </div>
          </div>
          <div className="col">
            <div className="card">
              <div
                className="card-body"
                style={{ backgroundColor: "#060B27", border: "grey" }}
              >
                <h5 className="card-title" style={{ color: "white" }}>
                  Product UI
                </h5>
                <p className="card-text" style={{ color: "white" }}>
                  Honsectetur eque nec nunc facilisis tellus tincidunt.
                  Malesuada maecenas ac bibendum consectetur.
                </p>
                <center>
                  <img src={ajeeb}></img>
                </center>
              </div>
            </div>
          </div>
        </div>
        <center>
          {" "}
          <h1 style={{ color: "white" }}>What our clients say</h1>
        </center>
        <center>
          <p style={{ color: "white" }}>
            Rmet facilisi arcu odio urna aenean erat. Pellentesque in vitae
            lobortis orci tincidunt facilisis. Pulvinar lacus ultricies turpis
            urna sapien.Rmet facilisi arcu odio urna aenean erat. Pellentesque
            in vitae lobortis orci tincidunt facilisis. Pulvinar lacus ultricies
            turpis urna sapien.Rmet facilisi arcu odio urna aenean erat.
            Pellentesque in vitae lobortis orci tincidunt facilisis. Pulvinar
            lacus ultricies turpis urna sapien.
          </p>
        </center>
        <div
        style={{width:"60%"}}
          id="carouselExampleControls"
          className="carousel slide container"
          data-bs-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src={client1} class="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={client2} class="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
              <img src={client3} className="d-block w-100" alt="..." />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
}
