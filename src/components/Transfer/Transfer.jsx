import React from "react";
import Header from "../header/Header";
import style from "./Transfer.module.css";
import Sidebar from "../Sidebar/Sidebar";
import Form from "../form/Form";
import Display from "../display/Display";

function Transfer() {
  return (
    <>
      <div className={style.transfer}>
        <Header />
      </div>
      <div className={style.container}>
        <Sidebar />
        <Form />
        <Display />
      </div>
    </>
  );
}

export default Transfer;
