import {React, useState} from "react";
import { Container,Title, LoginForm, Eticheta, InputLogForm, Submit } from "./Login.style";
import axios from "axios";

const Login = () => {

  const [regEmail, setRegEmail] = useState("");
  const [regPassword, setRegPassword] = useState("");
  const userSaved = window.localStorage.getItem("userId");   
  
  const logIn = () => { 
     
    if(regEmail === userSaved){
    axios
    .post("https://todo-application-2.herokuapp.com/loginPerson",{
      email: regEmail,
      password: regPassword
    }) 
    .then((res) => {
        if(res.data){
            window.location.href = "/";
        }
        else {
            console.log("User or password incorrect!")
        }    
                    });
                };
            }            
    return (
        <Container>
            <Title>Login here:</Title>
            <LoginForm>
                <Eticheta>E-mail</Eticheta>
                <InputLogForm 
                    placeholder="Your E-mail"
                    required
                    type="text"
                    value = {regEmail}
                    onChange = {(e) => setRegEmail(e.target.value)}
                >
                </InputLogForm>
                <Eticheta>Password</Eticheta>
                <InputLogForm 
                    placeholder="Your Password"
                    required
                    type="text"
                    value = {regPassword}
                    onChange = {(e) => setRegPassword(e.target.value)}
                >
                </InputLogForm>
            </LoginForm>
            <Submit
                onClick = {() => logIn()}
            >
                Login</Submit>
        </Container>
    );
};

export default Login;