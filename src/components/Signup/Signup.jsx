import React, { useState } from "react";
import Typewriter from "typewriter-effect";
import axios from "axios";
import { Formik, Field, Form } from "formik";
import signUpFields from "../Fields/SignUpFields";
import style from "../Signup/Signup.module.css";
import { Link, useNavigate } from "react-router-dom";
 import * as Yup from "yup";
import { AlertDialogLabel } from "@reach/alert-dialog";


 const SignupSchema = Yup.object().shape({
   fullName: Yup.string()
     .min(2, "Too Short!")
     .max(50, "Too Long!")
     .required("Required"),
   userName: Yup.string()
     .min(2, "Too Short!")
     .max(50, "Too Long!")
     .required("Required"),
   email: Yup.string().email("Invalid email").required("Required"),
 });


function Signup() {
  const [data, setData] = useState({
    fullName: "",
    gender: "",
    userName: "",
    dateOfBirth: "",
    bvn: "",
    email: "",
    religion: "",
    occupation: "",
    address: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });
  //const navigate = useNavigate();
  return (
    <>
      <div className={style.typewriter}>
        <Typewriter
          onInit={(typewriter) => {
            typewriter
              .typeString(
                "Managing your finances has never been so simple, take control with all in one investment, retirement, checking and more ..."
              )
              .pauseFor(2000)
              .deleteAll()
              .typeString(
                "Welcome to Access Bank, where your finance dream comes to life!"
              )
              .start();
          }}
        />
      </div>

      <Formik
        initialValues={{
          fullName: "",
          gender: "",
          userName: "",
          dateOfBirth: "",
          bvn: "",
          email: "",
          religion: "",
          occupation: "",
          address: "",
          phoneNumber: "",
          password: "",
          confirmPassword: "",
        }}
        validationSchema={SignupSchema}
        onSubmit={async (values) => {
         let result = await axios({
            method: "post",
            url: "http://localhost:3000/api/user",
            data: {
              ...values,
            },
          });
        if(result?.status===201){
          alert(result?.data?.message);
        }
          console.log("==============", result);
          console.log(data);
        }}

      >
        {({ errors, touched }) => (
        <Form className={style.signUpForm}>
          <h2 className={style.register}>Register</h2>
          <h6 className={style.create}>Create your account</h6>
          {Object.values(signUpFields).map((field, index) => (
            <div className={style.signUpFormArea}>
              <p>{field?.label}</p>
              <Field
                className={style.signUpInput}
                name={field?.name}
                type={field?.type}
                key={index}
              />
              {errors[field.name] && touched[field.name] ? (
                <div>{errors[field.name]}</div>
              ) : null}
              <br />
            </div>
          ))}
          <button type="submit" className={style.submit}>
            Sign Up
          </button>
          <Link to="/login">
            <button type="submit" className={style.login}>
              Login
            </button>
          </Link>
        </Form>
      )}
      </Formik>
      </>
  );
}

export default Signup;
