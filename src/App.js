import React from "react";
import "./App.css";
import {
  Route,
  BrowserRouter as Router,
  Switch,
  withRouter,
} from "react-router-dom";
import MultiForm from "../src/Component/MultiForm";
import UserList from "../src/Component/UserList";
import UpdateMultiForm from "../src/Component/UpdateMultiForm";

function App() {
  return (
    <>
      <Router>
        <Route exact path="/" component={MultiForm} />
        <Route exact path="/UserList" component={UserList} />
        <Route exact path="/updateuser/:userId" component={UpdateMultiForm} />
      </Router>
    </>
  );
}

export default App;
