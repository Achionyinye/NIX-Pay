import React, { useEffect, useState } from "react";
import axios from "axios";
import Header from "../header/Header";
import Sidebar from "../Sidebar/Sidebar";
import style from "./Accdetails.module.css";
import jwt from "jwt-decode";

function Accdetails() {
  const [accDetails, setAccDetails] = useState([]);
  const [userFullName, setuserFullName] = useState("");

  const getAccDetails = async () => {
    const token = localStorage.getItem("userToken");
    console.log(token);
    const user = jwt(token); // decode your token here
    console.log(user);
  
    const url = `https://fast-peak-09283.herokuapp.com/api/customer-dashboard`;
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        });
      console.log("================", response.data.user);
    setuserFullName(response.data.user.fullName);
    // setUserAccNumber(response.data.user.accountDetails.accountNumber);
    // setUserBalance(response.data.user.accountDetails.balance);
       setAccDetails(response.data.user.accountDetails);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAccDetails();
  }, []);
  console.log(accDetails);

  return (
    <>
      <Header />
      <br />
      <br />
      <br />
      <br />
      <Sidebar />

      {userFullName && <h2 className={style.name}>{userFullName}'s Account(s)</h2>}
      <div className={style.mainContainer}>
        {accDetails.map((detail, idx) => (
          <div className={style.card} key={detail._id}>
            <h2 className={style.number}>
              {idx < 9 ? `0${idx + 1}.` : idx + 1}
            </h2>
            <h3 className={style.accountTitle}>Account Number</h3>
            <div>
              <div className={style.accDetail}>
                <p className={style.accountNumber}>{detail.accountNumber}</p>
                <p className={style.balance}>₦{detail.balance}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
export default Accdetails;
