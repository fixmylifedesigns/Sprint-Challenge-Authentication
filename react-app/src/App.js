import React from 'react';
import './App.css';
import { Route, NavLink, withRouter } from "react-router-dom";
import Login from "./components/Login";
import Users from "./components/Users";
import Signup from "./components/Signup"

function App(props) {
  function logout() {
    localStorage.removeItem("token");
    props.history.push('/login')
  }
  return (
    <div className="App">
      <header>
        <button>
          <NavLink to="/login"> login</NavLink>
        </button>
        <button>
          <NavLink to="/signup"> Sign up</NavLink>
        </button>
        <button>
          <NavLink to="/users"> users</NavLink>
        </button>

        <button type="button" onClick={logout}>
          logout
        </button>
      </header>
      <main>
        <Route path="/signup" component={Signup} />
        <Route path="/login" component={Login} />
        <Route path="/users" component={Users} />
      </main>
    </div>
  );
}

export default withRouter(App);
