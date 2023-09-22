import React, { useState, useEffect } from "react";
import "./Card.css";
const Card = () => {
  const [data, setData] = useState([
    { url: "../assets/splash2.jpg", title: " Bayelsa House", id: "1" },
    { url: "../assets/img1.jpeg", title: "Delta House", id: "2" },
    { url: "../assets/img2.jpeg", title: "Cross-River House", id: "3" },
    { url: "../assets/img3.jpeg", title: "Uyo House", id: "4" },
    { url: "../assets/img.4.jpeg", title: "Lagos House", id: "5" },
    { url: "../assets/img5.jpeg", title: "Abuja House", id: "6" },
    { url: "../assets/img6.jpeg", title: "Anambra House", id: "7" },
    { url: "../assets/img7.jpeg", title: "Jos House", id: "8" },
    { url: "../assets/img8.jpeg", title: "Lagos House", id: "9" },
    { url: "../assets/img.9.jpeg", title: "Benin House", id: "10" },
    { url: "../assets/img10.jpeg", title: "Benue House", id: "11" },
    { url: "../assets/img.11.jpeg", title: "Lokoja House", id: "13" },
    { url: "../assets/img.12.jpeg", title: "Mina House", id: "14" },
    { url: "../assets/img13.jpeg", title: "Bayelsa House", id: "15" },
    { url: "../assets/img14.jpeg", title: "Lagos House", id: "16" },
    { url: "../assets/img8.jpeg", title: "Lagos House", id: "17" },
  ]);

  return (
    <div className="MainContainer">
      <div className="displayImage">
        <h1 className="firstImage bg-dark text-white text-center pt-5">
          {" "}
          Beautiful Glass Houses <br />
          for Your Vacation{" "}
        </h1>
      </div>
      <div className="SignIn text-center outline-none">
        <input
          type="text"
          placeholder="Enter Location"
          className="Sign-In mt-5"
          id="Search"
          onChange={(event) => {
            setData(event.target.value);
          }}
        />
      </div>
      <div className="flexContainer">
        <div className="Container">
          {data.map((pics) => (
            <div className="First-row" key={pics.id}>
              <div className="images">
                <img src={pics.url} alt="" />
                <p className="text-center fw-bold firstP">{pics.title}</p>
              </div>
            </div>
          ))}
        </div>
        <button
          type="submit"
          name="btn-letsgo"
          className="btn btn-danger mt-5 sign-btn "
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Card;
