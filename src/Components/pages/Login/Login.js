import React from "react";
import { Container,Title, LoginForm, Eticheta, InputLogForm, Submit } from "./Login.style";

const Login = () => {
    return (
        <Container>
            <Title>Login here:</Title>
            <LoginForm>
                <Eticheta>E-mail</Eticheta>
                <InputLogForm placeholder="Your E-mail"></InputLogForm>
                <Eticheta>Password</Eticheta>
                <InputLogForm placeholder="Your Password"></InputLogForm>
            </LoginForm>
            <Submit>Login</Submit>
        </Container>
    );
};

export default Login;