import './App.css';
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/Signup'
import UserSearchBar from './components/UserSearchBar'
import React, { useState } from 'react'
import axios from 'axios'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  const [attemptToLogin, setAttemptToLogin] = useState(true)
    if(global._id === ""){
        axios.get("http://localhost:3000/auth/logged_in", { withCredentials: true }).then(response =>
        {   if(response.data["logged_in"] === true){
            global._id = response.data["user"]["_id"]
            setAttemptToLogin(false)
        }}
    )
    }
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={SignUp} />
        <Route exact path='/UserSearchBar' component={UserSearchBar} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;