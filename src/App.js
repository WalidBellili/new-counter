// import "./App.css";
// import React, { useState } from "react";

// function App() {
//   const [count, setCount] = useState(1);

//   const handleButtonPlusClick = () => {
//     setCount(count + 1);
//   };
//   const handleButtonMinusClick = () => {
//     setCount(count - 1);
//   };
//   return (
//     <div>
//       <button onClick={handleButtonMinusClick}>-</button>
//       <span>{count}</span>
//       <button onClick={handleButtonPlusClick}>+</button>
//     </div>
//   );
// }

// export default App;

import React, { useState } from "react";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [emailIsValid, setemailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [isSubmitted, setisSubmitted] = useState(false);
  //

  const handleEmailChange = (e) => {
    setEmail(value);
    const value = e.target.value;
    const regEx = new RegExp(/^[\w\.]+@([\w-]+\.)+[\w-]{2,4}$/);
    const isValid = regEx.test(value);
    setemailIsValid(isValid);
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    const isValid = value.length > 5;
    setPassword(value);
    console.log(password);
    setPasswordIsValid(isValid);
    console.log(isValid);
  };

  const handleRememberMeChange = (e) => {
    setRememberMe(e.target.checked);
    // console.log(rememberMe);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const allIsValid = passwordIsValid && emailIsValid;
    setisSubmitted(allIsValid);
    console.log(isSubmitted);
  };
  return (
    <div>
      {!isSubmitted ? (
        <>
          <h1 className="text-center mt-5">Login</h1>
          <div className="container d-flex justify-content-center mt-5">
            <form className="col-10" onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className={`form-control`}
                  id="email"
                  onChange={handleEmailChange}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className={`form-control `}
                  id="password"
                  onChange={handlePasswordChange}
                />
              </div>
              <div className="mb-3 form-check">
                <input
                  type="checkbox"
                  className="form-check-input"
                  id="remember-me"
                  onChange={handleRememberMeChange}
                />
                <label className="form-check-label" htmlFor="remember-me">
                  Remember me
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                Submit
              </button>
            </form>
          </div>
        </>
      ) : (
        <p>{email}</p>
      )}
    </div>
  );
};

export default App;
