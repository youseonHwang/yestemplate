import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SingUpComponent from './components/pages/loginPage/signUp/SignUp';
import LoginComponent from './components/pages/loginPage/logIn/Login';

const App: React.FC = () => {
  return (
      <Router>
        <Switch>
            <Route path="/login" component={LoginComponent} />
            <Route path="/signup" component={SingUpComponent} />
        </Switch>
      </Router>
    );
};

export default App;
