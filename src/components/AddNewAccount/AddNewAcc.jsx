import React, { useState } from "react";
import Header from "../header/Header";
import style from "./AddNewAcc.module.css";
import Sidebar from "../Sidebar/Sidebar";
import axios from "axios";
import jwt from "jwt-decode";

function AddNewAcc() {
  const [details, setdetails] = useState({ bvn: "", password: "" });

  const handleChange = (e) => {
    setdetails({ ...details, [e.target.name]: e.target.value });
  };
  const submitDetails = async (e) => {
    e.preventDefault();

    try {
      const token = localStorage.getItem("userToken");
      const user = jwt(token); // decode your token here
      console.log(user);
      const id = user.id;
      const response = await axios.post(
        `http://localhost:3000/api/add-extra-account/${id}`,
        details
      );
      console.log("============", response);
    } catch (error) {
      console.log(error);
      alert("Invalid credentials");
    }
  };

  return (
    <>
      <Header />
      <br />
      <br />
      <Sidebar />

      {/* <h1 className={style.success}>Success</h1> */}
      <form className={style.formCreate} onSubmit={submitDetails}>
        <br />
        <h1 className={style.CreateHeader}>CREATE A NEW ACCOUNT</h1>
        <hr />
        <p className={style.detail}>Enter your detail</p>
        <br />
        <label className={style.label}>Bank Verification Number:</label>
        <input
          type="text"
          name="bvn"
          value={details.bvn}
          placeholder="Enter your BVN..."
          onChange={handleChange}
        />
        <label className={style.label}>Password:</label>
        <input
          type="text"
          name="password"
          value={details.password}
          placeholder="Enter your Password..."
          onChange={handleChange}
        />
        <button type="submit" className={style.submit}>
          Submit
        </button>
      </form>
    </>
  );
}
export default AddNewAcc;
