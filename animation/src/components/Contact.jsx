import React, { useState } from "react";

function Contact() {

  const [data, setData]=useState({
    name:"",
    email:"",
    message:"",
    phone:""
  });

  const updateFun = (e) =>{

    setData({
      ...data,
      [e.target.name]: e.target.value
    })
  }

  return (
    <>
    {/* <h1>{JSON.stringify(data)}</h1> */}
      <div className="my-5">
        <h1 className="text-center ">Contact Us</h1>
      </div>
      <div className="container contact-div">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Enter your name
                </label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  onChange={updateFun}
                  id="exampleFormControlInput1"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput2" className="form-label">
                  Enter your phone number
                </label>
                <input
                  name="phone"
                  type="number"
                  className="form-control"
                  onChange={updateFun}
                  id="exampleFormControlInput2"
                  placeholder="Enterphone number"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput3" className="form-label">
                  Enter your email
                </label>
                <input
                  name="email"
                  type="email"
                  className="form-control"
                  onChange={updateFun}
                  id="exampleFormControlInput3"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea4" className="form-label">
                  Example textarea
                </label>
                <textarea
                  name="message"
                  placeholder="Your message___"
                  className="form-control"
                  onChange={updateFun}
                  id="exampleFormControlTextarea4"
                  rows="3"
                  style={{resize: "none"}}
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-primary my-2 mb-5" 
                type="submit">
                  Submit form
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
