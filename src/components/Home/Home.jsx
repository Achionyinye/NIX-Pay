import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "fontawesome.macro";

import style from "./Home.module.css";

function Home() {
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");

  const handlePasswordChange = (event) => {
    // console.log(event.target.value);
    setPasswordInput(event.target.value);
  };

  

  const togglePassword = () => {
    if (passwordType === "password") {
      setPasswordType("text");
      return;
    }
    setPasswordType("password");
  };

  const [data, setData] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  
  const submitDetails = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "https://fast-peak-09283.herokuapp.com/api/login",
        data
      );
      console.log("============", response.data);
      localStorage.setItem("userToken", response.data.user.token);
      navigate("/customer-dashboard");
    } catch (error) {
      console.log(error);
      alert("Invalid credentials");
    }
  };

  return (
    <div className={style.mainContainer}>
      <div className={style.container}>
        <FontAwesomeIcon icon={fas("circle-user")} />
        <form className={style.loginForm} onSubmit={submitDetails}>
          <br />
          <h5>MEMBER LOGIN</h5>
          <label>Email</label>
          <div className={style.email}>
            <input
              type="email"
              name="email"
              value={data.email}
              placeholder="Email..."
              onChange={handleChange}
            />
            <FontAwesomeIcon icon={fas("envelope")} />
          </div>
          <label>Password</label>
          <div className={style.password}>
            <input
              type={passwordType}
              onChange={handleChange}
              value={data.password}
              name="password"
              placeholder="Password..."
            />
            <FontAwesomeIcon
              icon={fas("key")}
              className={style.passwordIcon}
              onClick={togglePassword}
            />
          </div>
          <button type="submit" className={style.submit}>
            Login
          </button>
        </form>
      </div>
      <div className={style.exit}>
        <Link to="/logout">
          <button className={style.signUpBtn}>SIGN UP</button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
