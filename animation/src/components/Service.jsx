import React from "react";
import Cards from "./Cards";

const img =
  "https://img.freepik.com/free-photo/blue-black-muscle-car-with-license-plate-that-says-trans-front_1340-23399.jpg?w=900&t=st=1685272726~exp=1685273326~hmac=1f2ac515d9217b45b2124abdd98e8154f722787e2c084bfe722c5f59c8cb240f";

function Service() {
  return (
    <>
      <div className="my-5">
        <h1 className="text-center">Our Services</h1>
      </div>
      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              <Cards img={img} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Service;
