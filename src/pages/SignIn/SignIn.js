import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export const SignIn = () => {
  const [state, setState] = useState({ email: "", password: "" });
  const { signIn, user } = useContext(AuthContext);
  const navigate = useNavigate();
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    signIn(state.email, state.password);
  };
  if (user) {
    navigate("/");
  }

  return (
    <div className="container">
      <h3 className="text-center mt-5">
        {" "}
        Welcome to the gallery of my glass house fantasy
      </h3>
      <p className="text-center mt-5">
        You need a unique password to access it
      </p>
      <p className="text-center mt-2">Enjoy the view</p>
      <form className="formBody" autoComplete="off" onSubmit={handleSubmit}>
        <div className="formContainer">
          <div className="">
            <label className="fw-bolder">Email</label>
            <br />
            <input
              type="email"
              name="email"
              onChange={handleChange}
              value={state.email}
              className="form-input mb-5 w-100 border shadow-none"
              autoComplete="off"
            />
            <div className="passwordDiv">
              <label className="fw-bolder">Password</label> <br />
              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={state.password}
                className="form-input mb-5 w-100 border shadow-none"
                autoComplete="off"
              />
            </div>
          </div>
          <div className="row">
            <div className="col text-right">
              <button
                type="submit"
                name="btn-letsgo"
                className="btn btn-primary"
              >
                SignIn
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
