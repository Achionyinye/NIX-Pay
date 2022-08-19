import { useEffect, useState } from "react";
import axios from "axios";
import Header from "../header/Header";
import Sidebar from "../Sidebar/Sidebar";
import style from "./StatementOfAccount.module.css";

const StatementOfAccount = () => {
  const [details, setDetails] = useState([]);
  const [accountData, setAccountData] = useState([]);
  const [accountNumber, setAccountNumber] = useState("");

  const getUserAccountDetails = async () => {
    const token = localStorage.getItem("userToken");

    const url = `https://fast-peak-09283.herokuapp.com/api/customer-dashboard`;

    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const responsedetails = response.data;
      setAccountData(responsedetails.user);
    } catch (error) {
      console.log("this error", error);
    }
  };

  useEffect(() => {
    getUserAccountDetails();
  }, []);


  useEffect(() => {
    const getBankStatement = async () => {
      const token = localStorage.getItem("userToken");
  
      const url = `https://fast-peak-09283.herokuapp.com/api/bank-statement/${accountNumber}`;
      try {
        const response = await axios.get(url, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
  
        const responseData = response.data;
        console.log(responseData, "responseData");
        setDetails(responseData.transactions);
        // console.log(responseData);
      } catch (error) {
        console.log("this error", error);
      }
    };
    getBankStatement();
  }, [accountNumber]);
  console.log(details, "details");
  return (
    <>
      <Header />
      <div className={style.container}></div>
      <Sidebar />
      <div className={style.select}>
        <label className={style.selectAccount}>Select Account Number</label>
        <select
          className={style.accountOption}
          onChange={(e) => setAccountNumber(e.target.value)}
        >
          <option className={style.accountOption}>
            Select Account Number
          </option>
          {accountData.accountDetails?.map((detail, idx) => {
            console.log(detail.accountNumber, "detail");
            console.log(detail.beneficiaryBank);
            console.log(detail.from);
            return (
              <option id={idx} value={detail.accountNumber}>
                {detail.accountNumber}
              </option>
            );
          })}
        </select>
      </div>
      <h2 className={style.statementTitle}>Transaction History</h2>
      <div className={style.statementContainer}>
        <table className={style.tableContent}>
          <thead>
            <tr>
              <th>Trans. Date</th>
              <th>Reference Number</th>
              <th>Beneficiary Bank</th>
              <th>Beneficiary Name</th>
              <th>Debits</th>
              <th>Credits</th>
              <th>Transfer Description</th>
            </tr>
          </thead>
          <tbody>
            {details.map((detail, index) => (
              <tr className={style.statementDetail} key={index}>
                <td>{detail.updatedAt}</td>
                <td>{detail.reference}</td>
                <td>{detail.beneficiaryBank}</td>
                <td>{detail.beneficiaryName}</td>
                <td>{detail.from}</td>
                <td>{detail.accountNumber}</td>
                {/* <td>
                  {detail.to === detail.accountNumber &&
                    detail.amount}
                </td> */}
                <td>{detail.transferDescription}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default StatementOfAccount;
