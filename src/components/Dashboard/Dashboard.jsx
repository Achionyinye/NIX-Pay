import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import Sidebar from "../Sidebar/Sidebar";
import style from "./Dashboard.module.css";
import axios from "axios";
import jwt from "jwt-decode";

function Dashboard() {
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
      const responseData = response.data;
      setDetails(responseData.user);
    } catch (error) {
      console.log("this error", error);
    }
  };
  useEffect(() => {
    getUserDetails();
  }, []);

  console.log(details);
  return (
    <>
      <Header />
      <div className={style.container}>
        <Sidebar />
        <h2 className={style.dashboardTitle}>Customer's Dashboard</h2>
        <div className={style.customerDashboardTable}>
          <table className="table text-nowrap">
            <tbody key={details._id}>
              <tr>
                <td>Name:</td>
                <td className="font-medium text-dark-medium">
                  {details.fullName}
                </td>
              </tr>
              <tr>
                <td>Gender:</td>
                <td className="font-medium text-dark-medium">
                  {details.gender}
                </td>
              </tr>
              <tr>
                <td>User Name:</td>
                <td className="font-medium text-dark-medium">
                  {details.userName}
                </td>
              </tr>
              <tr>
                <td>Email:</td>
                <td className="font-medium text-dark-medium">
                  {details.email}
                </td>
              </tr>
              <tr>
                <td>Date Of Birth:</td>
                <td className="font-medium text-dark-medium">
                  {details.dateOfBirth}
                </td>
              </tr>
              <tr>
                <td>Bank Verification Number:</td>
                <td className="font-medium text-dark-medium">{details.bvn}</td>
              </tr>
              <tr>
                <td>Religion:</td>
                <td className="font-medium text-dark-medium">
                  {details.religion}
                </td>
              </tr>
              <tr>
                <td>Occupation:</td>
                <td className="font-medium text-dark-medium">
                  {details.occupation}
                </td>
              </tr>
              <tr>
                <td>Address:</td>
                <td className="font-medium text-dark-medium">
                  {details.address}
                </td>
              </tr>
              <tr>
                <td>Phone Number:</td>
                <td className="font-medium text-dark-medium">
                  {details.phoneNumber}
                </td>
              </tr>
              <tr>
                <td>Roll:</td>
                <td className="font-medium text-dark-medium">
                  {details.currentTime}
                </td>
              </tr>
              {details.accountDetails?.map((detail) => (
                <tr>
                  <td>Account Number:</td>
                  <td className="font-medium text-dark-medium">
                    {detail.accountNumber}
                  </td>
                </tr>
              ))}
              {details.accountDetails?.map((detail) => (
                <tr>
                  <td>Account Balance:</td>
                  <td className="font-medium text-dark-medium">
                    {detail.balance}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
export default Dashboard;
