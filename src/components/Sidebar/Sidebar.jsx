import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { fas } from "fontawesome.macro";
import axios from "axios";
import jwt from "jwt-decode";

import style from "./Sidebar.module.css";
import { Link } from "react-router-dom";

function Sidebar() {
  const [details, setDetails] = useState({});
 
  const getUserDetails = async () => {
    const token = localStorage.getItem("userToken");
    const user = jwt(token); // decode your token here
    console.log(user);
    const id = user.id;

    const url = `http://localhost:3000/api/customer-dashboard`;
    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setDetails(response.data.user);
      console.log(response.data.user);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getUserDetails();
  }, []);

  return (
    <div className={style.sidebar}>
      <div className={style.sidebarHeader}>
        <FontAwesomeIcon icon={fas("circle-user")} />
        <p>{details.fullName}</p>
        <span style={{ fontSize: "1.0rem" }}>
          <i>BVN: {details.bvn}</i>
        </span>
      </div>

      <div className={style.sideTag}>
        <ul>
          <li>
            <Link to="/login">Home</Link>
          </li>
          <li>
            <Link to="/add-new-account">Add New Account</Link>
          </li>
          <li>
            <Link to="/customer-dashboard">Customer's Dashbard</Link>
          </li>
          <li>
            <Link to="/account-details">Account Details</Link>
          </li>
          <li>
            <Link to="/transfer">Transfer</Link>
          </li>
          <li>
            <Link to="/statement-of-account">Statement of Account</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Sidebar;
