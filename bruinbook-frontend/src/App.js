import './App.css';
import Home from './components/Home'
import Login from './components/Login'
import SignUp from './components/Signup'
import {BrowserRouter, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/signup' component={SignUp} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;