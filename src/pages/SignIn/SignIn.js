import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

export const SignIn = () => {
  const [state, setState] = useState({ email: "", password: "" });
  const { signIn, user } = useContext(AuthContext);
  const navigate = useNavigate();

  const [userLogIn, setUserLogIn] = useState(null);

  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    signIn(state.email, state.password);
    setUserLogIn(user);
  };
  if (user) {
    navigate("/");
  }

  return (
    <form className="formBody" autoComplete="off" onSubmit={handleSubmit}>
      <div className="formContainer">
        <div className="">
          <label className=" fs-5 fw-bolder">
            Email <span>*</span>
          </label>
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
            <label className=" fs-5 fw-bolder">
              Password <span>*</span>
            </label>{" "}
            <br />
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
            <button type="submit" name="btn-letsgo" className="btn btn-primary">
              Submit
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};
