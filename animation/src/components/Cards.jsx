import React from "react";
import { NavLink } from "react-router-dom";

function Cards(props) {
  return (
    <>
      <div className="col-md-4 col-10 dmx-auto">
        <div
          className="card"
          // style={{width: "18rem"}}
        >
          <img src={props.img} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <NavLink href="#" className="btn btn-primary">
              Go somewhere
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
