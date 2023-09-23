import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
export const Header = () => {
  const { signOut } = useContext(AuthContext);
  const navigate = useNavigate();

  return (
    <header className="displayImage">
      <div className="signin--wrapper d-flex">
        <button
          className="signout-btn bg-primary"
          onClick={() => {
            signOut();
            navigate("/login");
          }}
        >
          Sign Out
        </button>
      </div>
      <h1 className="firstImage text-white text-center pt-5">
        {" "}
        Beautiful Glass Houses <br />
        for Your Vacation{" "}
      </h1>
    </header>
  );
};
