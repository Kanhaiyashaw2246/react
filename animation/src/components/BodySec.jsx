import React from "react";
import { NavLink } from "react-router-dom";
import '../styles/bodySec.css'
// import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


function BodySec(props) {
  return (
    <>
      <section id="header">
        <div className="container-fluid nav_bg ">
          <div className="row ">
            <div className="col-10 mx-auto ">
              <div className="row d-flex align-items-center ">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 ">
                  <h1>
                    {props.head}
                    <strong className="brand-name"> {props.brand}</strong>
                  </h1>
                  <h2 className="my-3">{props.head2}</h2>
                  <div className="mt-5">
                    <NavLink to="/service" className="btn btn-outline-primary">
                      {props.button}
                    </NavLink>
                  </div>
                </div>

                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  <img src={props.src} alt="img" className="img-fluid animated" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BodySec;
