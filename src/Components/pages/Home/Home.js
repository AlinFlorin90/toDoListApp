import React from "react";
import {
  Container1,
  Container2,
  Container3,
  /*ButonCheck,*/
  Border,
  ButonAdd,
  Input,
  Title,
  Paragraf,
  /*Checkbox,*/
  TaskLine,
} from "./Home.style";

const Home = () => {
  return (
    <Container1>
      <Container2>
        <Title>Tasks</Title>
        <TaskLine>
            <Paragraf></Paragraf>
        </TaskLine>
      </Container2>
      <Container3>
        <Input placeholder="New Task"></Input>
        <Border></Border>
        <ButonAdd>ADD</ButonAdd>
      </Container3>
    </Container1>
  );
};

export default Home;
