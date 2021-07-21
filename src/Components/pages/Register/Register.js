import { React, useEffect, useState } from "react";
import axios from "axios";
import {
  Container,
  RegisterForm,
  Title,
  Submit,
  Question,
  ButonLogin,
  Eticheta,
  InputRegForm,
} from "./Register.style";

const Register = () => {

  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submit = () => {
      if ((fName != null) && 
          (lName != null) && 
          (email != null) && 
          (password != null)){
      axios
        .post("https://todo-application-2.herokuapp.com/registerPerson",{
          email: email,
          password: password,
          firstName: fName,
          lastName: lName,
        })
      .then((res) => {
        if (res.data){
          window.localStorage.setItem("userId", email);
          window.location.href = "/Login";
        }
        else {
          console.log("Creating Person Failed");
        }
      });
      }
    };

  return (
    <Container>
      <Title>Welcome! Register now!</Title>
      <RegisterForm>
        <Eticheta>First Name</Eticheta>
        <InputRegForm
          placeholder="Your first name"
          required
          type="text"
          value={fName}
          onChange={(e) => setFName(e.target.value)}
        ></InputRegForm>
        <Eticheta>Last Name</Eticheta>
        <InputRegForm
          placeholder="Your last name"
          required
          type="text"
          value={lName}
          onChange={(e) => setLName(e.target.value)}
        ></InputRegForm>
        <Eticheta>E-mail</Eticheta>
        <InputRegForm
          placeholder="Your e-mail"
          required
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        ></InputRegForm>
        <Eticheta>Password</Eticheta>
        <InputRegForm
          placeholder="Your password"
          required
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        ></InputRegForm>
      </RegisterForm>
      <Submit
      onClick = {() => submit()}>  
        Register
      </Submit>
      <Question>
        Do you have already an account? Click
        <ButonLogin
          onClick = {()=> window.location.href = "/Login"}
        >here</ButonLogin>
        to login !
      </Question>
    </Container>
  );
};

export default Register;
