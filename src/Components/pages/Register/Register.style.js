import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 90vh;
    background-color: lightskyblue;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const RegisterForm = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 70vw;
    height: 50vh;
    background-color: whitesmoke;
`

export const Eticheta = styled.label`
    color: black;
    font-size: large;
    margin-top: 20px;
    margin-bottom: 20px;
`
export const InputRegForm = styled.input`
    width: 16vw;
    height: 4vh;
    border: none;
`

export const Title = styled.p`
    color: black;
    font-size: xx-large;
`

export const Submit = styled.button`
    width: 90px;
    height: 25px;
    background-color: whitesmoke;
    border-radius: 50px;
    border-color: blue;
    margin-top: 30px;
    cursor: pointer;
`
export const Question = styled.div`
    width: 50vw;
    height: 15vh;
    margin-top: 35px;
    color: black;
    font-size: xx-large;
    text-align: center;
`

export const ButonLogin = styled.button`
    color: green;
    font-size: xx-large;
    background-color: lightskyblue;
    border: none;
    cursor: pointer;
`