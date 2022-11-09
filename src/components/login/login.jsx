import React, { createRef, useState } from "react";
import { Link } from "react-router-dom";
import Notification from "../../pages/notifications";
import { useLogin } from "../../services/auth";

import "./style.scss";

function Login() {
  const [showNotification, setShowNofification] = useState(false);
  const [error, setError] = useState("");
  const userRef = createRef(null);
  const passwordRef = createRef(null);

  const loginMutation = useLogin();

  const handleLogin = () => {
    if (!userRef.current.value) {
      setShowNofification(true);
      setError("Please enter a username");
      return;
    }
    if (!passwordRef.current.value) {
      setShowNofification(true);
      setError("Please enter a password");
      return;
    }
    const reqData = {
      username: userRef.current.value,
      password: passwordRef.current.value,
    };
    loginMutation.mutate(reqData);
  };
  return (
    <>
      <div className="login">
        <div className="loginWrapper">
          <h1 className="title">Login</h1>
          <div className="form-group">
            <label>Username</label>
            <input type="text" placeholder="Username ..." ref={userRef} />
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
            <button className="btn" onClick={handleLogin}>
              Login
            </button>
          </div>
          <div className="item">
            <Link to={"/register"}>Create an account</Link>
          </div>
        </div>
      </div>
      {showNotification && (
        <Notification
          msg={error}
          type="error"
          showNofification={setShowNofification}
        />
      )}
    </>
  );
}

export default Login;
