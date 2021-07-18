import React from "react";
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
  return (
    <Container>
      <Title>Welcome! Register now!</Title>
      <RegisterForm>
        <Eticheta>First Name</Eticheta>
        <InputRegForm placeholder="Your first name"></InputRegForm>
        <Eticheta>Last Name</Eticheta>
        <InputRegForm placeholder="Your last name"></InputRegForm>
        <Eticheta>E-mail</Eticheta>
        <InputRegForm placeholder="Your e-mail"></InputRegForm>
        <Eticheta>Password</Eticheta>
        <InputRegForm placeholder="Your password"></InputRegForm>
      </RegisterForm>
      <Submit>Register</Submit>
      <Question>
        Do you have already an account? Click
        <ButonLogin>here</ButonLogin>
        to login !
      </Question>
    </Container>
  );
};

export default Register;
