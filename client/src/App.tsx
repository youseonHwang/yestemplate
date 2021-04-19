import * as React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LoginPageContainer from './containers/pages/loginPage/LoginPageContainer';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route exact path="/" component={LoginPageContainer} />
        </Switch>
      </Router>
    </div>
    );
};

export default App;
