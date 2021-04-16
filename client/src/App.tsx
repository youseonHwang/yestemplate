import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginComponent from './components/pages/loginPage/logIn/Login';

const App: React.FC = () => {
  return (
      <Router>
        <Switch>
            <Route path="/" component={LoginComponent} />
        </Switch>
      </Router>
    );
};

export default App;
