import './App.css';
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/Signup'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home}></Route>
        <Route exact path='/login' component={Login}></Route>
        <Route exact path='/signup' component={SignUp}></Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;