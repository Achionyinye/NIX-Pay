import React, { useState, useEffect } from "react";
import axios from "axios";
import { useLocation, Link } from "react-router-dom";
import { TailSpin } from "react-loader-spinner";
import style from "../VerifiedPage/EmailVerifiedPage.module.css";
import img from "../../Images/check-mark.jpg";
import history from "../history";

function EmailVerifiedPage() {
  const [verified, setVerified] = useState(false);
  const location = useLocation();

  const { search } = location;
  console.log(search);
  const verifyUser = async () => {
    try{
      const verify = await axios.get(
        `https://fast-peak-09283.herokuapp.com/api/auth/verify-email/${search}`
      );
      console.log(verify);
      setVerified(true);
    }catch(error){
      console.log(error);
    }
  };
  useEffect(() => {
    verifyUser();
  }, []);
  return (
    <div className={style.container}>
      {!verified ? (
        <div className={style.tailspin}>
          <TailSpin color="#00BFFF" height={200} width={200} />
        </div>
      ) : (
        <>
          <img src={img} alt="img" width={1450} height={810} />
          <h1 className={style.text1}>Email Verified</h1>
          <p className={style.text2}>
            Taking hold of opportunities is one of life's great pleasures. We
            see something we've been waiting and preparing for - and here it is!
            Yay.
            <br />
            Welcome to the world of opportunities, where your fianace dreams
            come to life.
          </p>
          <p className={style.text3}>
            Your email was verified successfully, you can log in now.
          </p>
          <Link
            to="/"
            className={style.loginBtn}
            variant="btn btn-success"
            type="button"
          >
            Login
          </Link>
          
        </>
      )}
    </div>
  );
}

export default EmailVerifiedPage;
