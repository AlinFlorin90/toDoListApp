import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Container1,
  Container2,
  Container3,
  ButonDelete,
  Border,
  ButonAdd,
  Input,
  Title,
  Paragraf,
  Checkbox,
  TaskLine,
} from "./Home.style";

const Home = () => {

  const [myTask, setNewTask] = useState("");
  const [name, setName] = useState("");
  const [isDone, setIsDone] = useState("");
  const [userId, setUseId] = useState("");

  const functionAdd = () => {
    
    isDone = false;

    if(myTask != null){
      const newP = document.createElement("p");
      document.querySelector("#task").innerText = myTask;
      newP.appendChild();
    }

    axios
    .post("https://todo-application-2.herokuapp.com/action",{
      name,
      isDone,
      userId,
    }) 
    .then((result) => {
      console.log(result);
    })
  }

  useEffect(() =>{
    if (localStorage.getItem ("userId") === null){
      window.location.href = "/Register";
    }
  },[]);


  return (
    <Container1>
      <Container2>
        <Title>Tasks</Title>
        <TaskLine>
            <Paragraf id="task"></Paragraf>
        </TaskLine>
      </Container2>
      <Container3>
        <Input 
          placeholder="New Task"
          required
          type="text"
          value={myTask}
          onChange = {(e) => setNewTask(e.target.value)}
        ></Input>
        <Border></Border>
        <ButonAdd
          onClick = {() => functionAdd()}
        >ADD</ButonAdd>
      </Container3>
    </Container1>
  );
};

export default Home;
