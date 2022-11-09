import React, { createRef, useState } from "react";
import { Link } from "react-router-dom";
import Notification from "../../pages/notifications";
import { useSignUp } from "../../services/auth";

import "./style.scss";

function Register() {
  const [showNotification, setShowNofification] = useState(false);
  const [error, setError] = useState("");

  const usernameRef = createRef(null);
  const emailRef = createRef(null);
  const passwordRef = createRef(null);

  const signUpMutation = useSignUp();

  const handleRegister = () => {
    if (!emailRef.current.value) {
      setShowNofification(true);
      setError("Please enter your email address");
      return;
    }

    if (!usernameRef.current.value) {
      setShowNofification(true);
      setError("Please enter your username");
      return;
    }

    if (!passwordRef.current.value) {
      setShowNofification(true);
      setError("Please enter your password");
      return;
    }

    const user = {
      email: emailRef.current.value,
      password: passwordRef.current.value,
      username: usernameRef.current.value,
    };

    signUpMutation.mutate(user);
  };
  return (
    <>
      <div className="register">
        <div className="registerWrapper">
          <h1 className="title">Register</h1>
          <div className="form-group">
            <label>Username</label>
            <input type="text" placeholder="Username ..." ref={usernameRef} />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input type="email" placeholder="Email ..." ref={emailRef} />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              placeholder="Password ..."
              ref={passwordRef}
            />
          </div>
          <div className="form-group">
            <button className="btn" onClick={handleRegister}>
              Register
            </button>
          </div>
          <div className="item">
            <Link to={"/login"}>Already have an account !</Link>
          </div>
        </div>
      </div>
      {showNotification && (
        <Notification
          msg={error}
          type="error"
          showNofification={setShowNofification}
          bottom={"bottom"}
        />
      )}
    </>
  );
}

export default Register;
