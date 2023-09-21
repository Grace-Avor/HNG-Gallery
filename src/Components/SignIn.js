import "./SignIn.css";
const SignIn = () => {
  return (
    <form className="formBody" autoComplete="off" noValidate>
      <div className="formContainer">
        <div className="">
          <label className="text-white fs-5 fw-bolder">
            Email <span>*</span>
          </label>
          <br />
          <input
            type="email"
            name="email"
            id="id_email"
            className="form-input mb-5 w-100 border shadow-none"
            autoComplete="off"
          />
          <div className="passwordDiv">
            <label className="text-white fs-5 fw-bolder">
              Password <span>*</span>
            </label>{" "}
            <br />
            <input
              type="password"
              name="password"
              id="id_password"
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

export default SignIn;
