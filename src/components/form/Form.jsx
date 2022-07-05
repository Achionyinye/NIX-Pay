import React, { useState, useEffect } from "react";
import style from "./Form.module.css";
import axios from "axios";
import jwt from "jwt-decode";

function FormDetail() {
  const [details, setDetails] = useState({});
  const [formData, setFormData] = useState({
    beneficiaryBank: "",
    to: "",
    beneficiaryName: "",
    email: "",
    from: "",
    amount: "",
    transferDescription: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const getUserDetails = async () => {
    const token = localStorage.getItem("userToken");
    const user = jwt(token); // decode your token here
    const id = user.id;

    const url = `http://localhost:3000/api/customer-dashboard`;

    try {
      const response = await axios.get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const responsedetails = response.data;
      setDetails(responsedetails.user);

    } catch (error) {
      console.log("this error", error);
    }
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const submitDetails = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("userToken");
      const user = jwt(token); // decode your token here
      const id = user.id;

      const response = await axios.post(
        `http://localhost:3000/api/transfer`,
        {
          beneficiaryBank: formData.beneficiaryBank,
          to: formData.to,
          beneficiaryName: formData.beneficiaryName,
          email: formData.email,
          from: formData.from,
          amount: formData.amount,
          transferDescription: formData.transferDescription,
        },{
        headers: {
          Authorization: `Bearer ${token}`,

         }
    });
      setFormData({
        beneficiaryBank: "",
        to: "",
        beneficiaryName: "",
        email: "",
        from: "",
        amount: "",
        transferDescription: "",
      });
      alert("Transfer Successful");
    } catch (error) {
      console.log(error);
      // alert(error.message);
    }
  };
 
  return (
    <form className={style.form} onSubmit={submitDetails}>
      <div className={style.formContainer}>
        <label className={style.formLabel}>Beneficiary Bank</label>
        <input
          type="text"
          name="beneficiaryBank"
          value={formData.beneficiaryBank}
          placeholder="Beneficiary Bank..."
          onChange={handleChange}
        />
        <label className={style.formLabel}>Beneficiary Account Number</label>
        <input
          type="text"
          name="to"
          value={formData.to}
          placeholder="Beneficiary Account..."
          onChange={handleChange}
        />
        <label className={style.formLabel}>Beneficiary Name</label>
        <input
          type="text"
          name="beneficiaryName"
          value={formData.beneficiaryName}
          placeholder="Beneficiary Name..."
          onChange={handleChange}
        />
        <label className={style.formLabel}>Email</label>
        <input
          type="text"
          name="email"
          value={formData.email}
          placeholder="Email..."
          onChange={handleChange}
        />
        <label className={style.formLabel}>Sender's Account Number</label>
        <select
          name="from"
          className={style.formSelect}
          value={formData.from}
          onChange={handleChange}
        >
          <option className={style.formOption}> Select Account Number</option>
          {details.accountDetails?.map((detail, idx) => {
            return (
              <option id={idx} value={detail.accountNumber}>
                {detail.accountNumber}
              </option>
            );
          })}
        </select>

        <label className={style.formLabel}>Amount</label>
        <input
          type="text"
          name="amount"
          value={formData.amount}
          placeholder="Amount..."
          onChange={handleChange}
        />
        <label className={style.formLabel}>Transfer Description</label>
        <input
          type="text"
          name="transferDescription"
          value={formData.transferDescription}
          placeholder="Transfer Description..."
          onChange={handleChange}
        />
        <button type="submit" className={style.submit} onSubmit={submitDetails}>
          Submit
        </button>
      </div>
    </form>
  );
}

export default FormDetail;
