import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 90vh;
    background-color: lightskyblue;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Title = styled.p`
    color: black;
    font-size: xx-large;
`

export const LoginForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 40vw;
    height: 30vh;
    background-color: whitesmoke;
    margin-top: 50px;
`

export const Eticheta = styled.label`
    color: black;
    font-size: large;
    margin-top: 20px;
    margin-bottom: 20px;
`

export const InputLogForm = styled.input`
    width: 16vw;
    height: 4vh;
    border: none;
`

export const Submit = styled.button`
    width: 90px;
    height: 25px;
    background-color: whitesmoke;
    border-radius: 50px;
    border-color: blue;
    margin-top: 30px;
`