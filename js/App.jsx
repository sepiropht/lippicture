import React from "react";
import { Route, Link } from "react-router-dom";

const App = ({ user }) => (
  <div className="App">
    <div className="App-header">
      <h2><Link to="/">Welcome to Pinterest-clone</Link></h2>
      <h3
        style={user ? { display: "none" } : {}}
        onClick={() => {
          window.location = "http://sepiropht.freeboxos.fr:4000/login";
        }}
      >
        Login
      </h3>
      <h3
        style={!user ? { display: "none" } : {}}
        onClick={() => {
          window.location = "http://sepiropht.freeboxos.fr:4000/logout";
        }}
      >
        Logout
      </h3>
    </div>

  </div>
);

export default App;
