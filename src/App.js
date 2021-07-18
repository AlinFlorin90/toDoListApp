import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import axios from "axios";
import { useEffect } from "react";
import Header from "./Components/common/Header/Header";
import Home from "./Components/pages/Home/Home";
import Register from "./Components/pages/Register/Register";
import Login from "./Components/pages/Login/Login";
import Footer from "./Components/common/Footer/Footer";
import "./App.css";


function App() {
  
  return (
    <div className = "App-Div">
    <Header></Header>
    <Router>
      <Switch>
        <Route exact path="/Register">
          <Register></Register>
        </Route>
        <Route exact path="/Login">
          <Login></Login>
        </Route>
        <Route exact path="/">
          <Home></Home>
        </Route>
      </Switch>
    </Router>
    <Footer></Footer>
    </div>
  )
};

export default App;
